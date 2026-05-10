import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          guide: path.resolve(__dirname, 'guide-1xbet-mb25t.html'),
          compte: path.resolve(__dirname, 'comment-creer-compte.html'),
          depot: path.resolve(__dirname, 'depot-retrait-mobile-money.html'),
          faq: path.resolve(__dirname, 'faq-1xbet.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          contact: path.resolve(__dirname, 'contact.html')
        }
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
