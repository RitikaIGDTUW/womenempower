import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {  // Proxy all requests starting with /api
        target: 'http://localhost:8080', // Your backend URL
        changeOrigin: true,
        secure: false,
        
      }
    }
  }
});
