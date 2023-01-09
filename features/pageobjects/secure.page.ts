import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashHio () {
        return $('.header-my-account-wrapper_2KeJf');
    }

    public async clickHio(){
        await this.flashHio.click();
    }
}

export default new SecurePage();
