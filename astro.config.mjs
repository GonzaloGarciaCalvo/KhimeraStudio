// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      minify: true,
    },
  },
});

/* 
module.exports = {
  // ...
  compile: {
    ts: {
      compiler: 'typescript',
      options: {
        // opciones de compilación de TypeScript
      },
    },
  },
};
*/
