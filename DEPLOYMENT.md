# Deployment Guide

This guide explains how to deploy the Sri Sanjeevini Dental React application to various hosting platforms.

## Prerequisites

Make sure you have completed the build process:
```bash
npm run build
```

This creates a `dist` folder with production-ready files.

## Deployment Options

### 1. GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add base URL to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/sanjeeviniclinic/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

### 2. Netlify

#### Option A: Drag and Drop
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder

#### Option B: CLI
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### 3. Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

Vercel will automatically detect Vite configuration.

### 4. Traditional Web Hosting

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web server via FTP/SFTP

3. Configure your web server to serve `index.html` for all routes

#### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Environment Variables

If you need to configure environment-specific variables:

1. Create `.env` files:
   - `.env.development` for development
   - `.env.production` for production

2. Add variables with `VITE_` prefix:
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=info@srisanjeevinidental.in
```

3. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Custom Domain

After deploying to any platform, you can configure a custom domain:

1. **GitHub Pages**: Settings → Pages → Custom domain
2. **Netlify**: Domain settings → Add custom domain
3. **Vercel**: Project Settings → Domains → Add

## SSL Certificate

All recommended platforms provide free SSL certificates automatically:
- GitHub Pages: Free via Let's Encrypt
- Netlify: Free SSL included
- Vercel: Free SSL included

## Monitoring

Consider setting up:
- Google Analytics for traffic monitoring
- Error tracking (e.g., Sentry)
- Performance monitoring (e.g., Web Vitals)

## Troubleshooting

### Blank page after deployment
- Check browser console for errors
- Verify `base` URL in `vite.config.js` matches deployment path
- Ensure all assets are loading correctly

### 404 on refresh
- Configure server to serve `index.html` for all routes (see server configurations above)

### Build errors
- Run `npm run lint` to check for code issues
- Ensure all dependencies are installed
- Check Node.js version compatibility

## Support

For issues specific to deployment platforms, refer to their documentation:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
