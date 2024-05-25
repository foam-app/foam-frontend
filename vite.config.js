import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://foambackend.onrender.com/",
    },
  },
  plugins: [react()],
});

// vite.config.js example
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "YOUR_API_PUBLIC_URL", // Use your actual API URL here
//         changeOrigin: true,
//       },
//     },
//   },
// });
