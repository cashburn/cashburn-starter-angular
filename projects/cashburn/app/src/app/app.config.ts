import { provideHttpClient, withFetch } from '@angular/common/http';
import {
    ApplicationConfig,
    inject,
    provideAppInitializer,
    provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppConfigStore, ENV_NAME } from '@cashburn/core';
import { firstValueFrom } from 'rxjs';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideHttpClient(withFetch()),
        provideAppInitializer(() => {
            const configService = inject(AppConfigStore);
            return firstValueFrom(configService.loadConfig());
        }),
        { provide: ENV_NAME, useValue: 'dev' },
    ],
};
