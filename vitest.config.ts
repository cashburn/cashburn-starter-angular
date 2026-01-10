import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        reporters: ['default', 'junit'],
        coverage: {
            thresholds: {
                // Require that no more than 10 lines are uncovered
                lines: 80,
            },
        },
    },
});
