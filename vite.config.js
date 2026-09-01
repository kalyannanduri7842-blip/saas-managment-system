import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-fallback-handler',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || '';
          if (
            url.startsWith('/api') ||
            url === '/health' ||
            url === '/status' ||
            (req.headers['accept'] && req.headers['accept'].includes('application/json'))
          ) {
            if (!url.endsWith('.js') && !url.endsWith('.jsx') && !url.endsWith('.css') && !url.endsWith('.html') && !url.includes('@vite') && !url.includes('node_modules')) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({
                status: 'ok',
                success: true,
                message: 'Alea Enterprise ERP Service Operational',
                timestamp: new Date().toISOString()
              }));
              return;
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5176,
    host: true
  }
});
