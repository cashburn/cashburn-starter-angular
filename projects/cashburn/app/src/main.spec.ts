import { bootstrapApplication } from '@angular/platform-browser';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { App } from './app/app';
import { appConfig } from './app/app.config';

// Mock the bootstrapApplication function
vi.mock('@angular/platform-browser', () => ({
    bootstrapApplication: vi.fn().mockResolvedValue(undefined),
}));

describe('main', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should call bootstrapApplication with App and appConfig', async () => {
        // Import main.ts to execute the bootstrap call
        await import('./main');

        expect(bootstrapApplication).toHaveBeenCalledWith(App, appConfig);
    });

    it('should export App and appConfig', () => {
        // Verify that the imports are available
        expect(App).toBeDefined();
        expect(appConfig).toBeDefined();
    });
});
