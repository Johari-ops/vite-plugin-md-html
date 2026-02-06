import { defineConfig } from 'vite'
import mdToHtml from "./vite-plugin-exemple.js";

export default defineConfig({
  plugins: [mdToHtml()]
})