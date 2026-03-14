# Chiheb Kitar Portfolio

An innovative AI-powered portfolio featuring a Career Intelligence Assistant chatbot.

## Features

- 🌓 **Light/Dark Theme Toggle** - Light mode by default
- 🤖 **AI Career Assistant** - Intelligent chatbot with OpenRouter integration
- 📧 **Functional Contact Form** - Email notifications via Formspree
- 📱 **Fully Responsive** - Works on all devices
- ✨ **Modern Animations** - Glassmorphism, particles, tilt effects

## Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add: `OPENROUTER_API_KEY` = `your-openrouter-key`

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)

## Configuration

### OpenRouter API Key

**For Security**: Never expose API keys in client-side code.

1. **Vercel**: Set `OPENROUTER_API_KEY` in environment variables
2. **Local Development**: Create `.env.local`:
   ```
   OPENROUTER_API_KEY=your-key-here
   ```

### Formspree Contact Form

1. **Create Formspree Account**: https://formspree.io
2. **Create New Form** with your email
3. **Update Form Action**: Replace `mkndzqvl` with your form ID

## Troubleshooting

### Chatbot Not Working

1. **Check API Key**: Ensure `OPENROUTER_API_KEY` is set
2. **CORS Issues**: OpenRouter allows web requests
3. **Rate Limits**: Free models have usage limits

### Theme Toggle Not Working

1. **Check JavaScript**: Ensure theme toggle script loads
2. **CSS Variables**: Verify light/dark mode variables are defined
3. **Local Storage**: Check browser console for errors

### CI/CD Pipeline Issues

1. **Link Validation**: Excluded LinkedIn and Formspree URLs
2. **API Key Detection**: Script checks for exposed keys
3. **HTML Validation**: Basic syntax checking

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENROUTER_API_KEY` | OpenRouter API key for chatbot | Yes |

## Free Model Fallback Chain

The chatbot automatically tries these OpenRouter free models:

1. `nvidia/nemotron-3-super-120b-a12b:free`
2. `meta-llama/llama-3.3-70b-instruct:free`
3. `arcee-ai/trinity-large-preview:free`
4. `mistralai/mistral-small-3.1-24b:free`
5. `qwen/qwen-3-next-80b-a3b-instruct:free`

## Technologies

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Variables, Glassmorphism, Animations
- **AI**: OpenRouter API, Multiple Model Fallback
- **Forms**: Formspree
- **Deployment**: Vercel, GitHub Pages
- **CI/CD**: GitHub Actions

## License

MIT License - feel free to use this portfolio template for your own projects!
