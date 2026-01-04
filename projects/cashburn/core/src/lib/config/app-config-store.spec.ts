import { TestBed } from '@angular/core/testing';

import { AppConfigStore } from './app-config-store';

describe('AppConfigStore', () => {
    let service: AppConfigStore;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AppConfigStore);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
