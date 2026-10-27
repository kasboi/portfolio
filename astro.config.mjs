import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://generalkas.com",
  integrations: [react(), sitemap()],
  vite: {
    ssr: {
      noExternal: ["styled-components", "framer-motion"],
    },
  },
});