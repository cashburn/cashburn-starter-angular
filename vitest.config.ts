import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        reporters: ['default', 'junit'],
        coverage: {
            thresholds: {
                lines: 60,
                branches: 60,
                functions: 60,
                statements: 60,
            },
        },
    },
});
