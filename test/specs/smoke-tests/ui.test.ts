import { browser } from '@wdio/globals'
import { assert } from 'chai';

describe('Electron Testing', () => {
    it('should test application title', async () => {
        assert.strictEqual(await browser.getTitle(), 'MongoDB Query Executor', 'Incorrect application title');
    })
})

