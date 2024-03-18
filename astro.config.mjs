import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import reactRenderer from "@astrojs/renderer-react";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  renderers: [reactRenderer],
  integrations: [tailwind(), react()]
});