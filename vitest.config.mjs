import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    pool: "forks",
    setupFiles: ['./vitest.setup.js'],
  },
})
