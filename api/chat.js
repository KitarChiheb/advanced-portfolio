export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { messages, model } = req.body;
  if (!messages || !model) return res.status(400).json({ error: 'Missing messages or model' });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000); // 12s timeout — fail fast

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://portfolioai-wheat.vercel.app',
        'X-Title': 'Chiheb Kitar Portfolio'
      },
      body: JSON.stringify({ model, messages, temperature: 0.7, max_tokens: 1024 }),
      signal: controller.signal
    });

    clearTimeout(timeout);
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    res.status(200).json(data);
  } catch (error) {
    clearTimeout(timeout);
    const isTimeout = error.name === 'AbortError';
    res.status(isTimeout ? 503 : 500).json({
      error: isTimeout ? 'Model timeout' : 'Proxy error',
      details: error.message
    });
  }
}
