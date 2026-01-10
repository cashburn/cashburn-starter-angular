import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        reporters: ['default', 'junit'],
        coverage: {
            thresholds: {
                lines: 40,
                branches: 60,
                functions: 40,
                statements: 60,
            },
        },
    },
});
