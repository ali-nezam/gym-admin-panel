import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnWarning: false, // هشدار رو قطع نکن
      failOnError: true, // ارور رو قطع نکن (مفیده تو dev)
      emitWarning: true,
      emitError: true,
    }),
  ],
});

// export default defineConfig({
//   plugins: [react(), ESLint()],
// });
