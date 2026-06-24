import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    testTimeout: 300_000, // real FHE + TestNet round-trips are slow
    hookTimeout: 120_000,
    fileParallelism: false,
  },
})
