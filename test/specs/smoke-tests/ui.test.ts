import { assert } from 'chai';

import { POM } from '../../utils/pom';

describe('Electron Testing', () => {
    it('should test application title', async () => {
        const mainPage = new POM();

        const title = await mainPage.getTitle();

        assert.strictEqual(title, 'MongoDB Query Executor', 'Incorrect application title');
    })
})

