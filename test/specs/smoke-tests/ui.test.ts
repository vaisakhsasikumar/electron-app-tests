import { assert } from 'chai';

import { POM } from '../../utils/pom';

describe('Electron Testing', () => {
    it('should successfully launches the app', async () => {
        const mainPage = new POM();

        assert.strictEqual(await mainPage.checkApplicationIsReady(), true, 'Application is not ready');
    })

    it('should test application title', async () => {
        const mainPage = new POM();

        const title = await mainPage.getTitle();

        assert.strictEqual(title, 'MongoDB Query Executor', 'Incorrect application title');
    })

    it('should check the Enter MongoDB Query field is writable', async () => {
        const mainPage = new POM();

        const queryInput = mainPage.getQueryInput();
        await queryInput.setValue('{}');

        assert.strictEqual(await mainPage.getQueryInputText(), '{}', 'Incorrect query text');
    })
})

