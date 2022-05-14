import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

export default defineConfig({
  adapter: vercel(),
  integrations: [react()],
});
