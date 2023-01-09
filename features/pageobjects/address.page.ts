import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddressPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get adressboek() {
        return $('//a[contains(text(),"Adressen")]');
    }

    public get addaddress() {
        return $('//button[@data-testid="create-address-pvh-icon-button"]');
    }

    public get firstName() {
        return $('//*[@id="firstName-Bform"]');
    }
    public get lastName() {
        return $('//*[@id="lastName-Bform"]');
    }
    public get address1() {
        return $('//*[@id="address1-Bform"]');
    }
    public get address2() {
        return $('//*[@id="address2-Bform"]');
    }
    public get city() {
        return $('//*[@id="city-Bform"]');
    }
    public get zipcode() {
        return $('//*[@id="zipCode-Bform"]');
    }

    public get saveaddress() {
        return $('//button[@data-testid="address-form-add-pvh-button"]');
    }

    public get updateaddress(){
        return $('//button[text()="Bewerken"]')
    }

    public async addNewAddress(firstname: string, lastname: string, address1: string, address2: string, city: string, zipcode: string, phone1: string, country: string) {
        await browser.url('https://nl.tommy.com/myaccount/addresses');
        await this.addaddress.click();
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.address1.setValue(address1);
        await this.address2.setValue(address2);
        await this.city.setValue(city);
        await this.zipcode.setValue(zipcode);
        await this.saveaddress.click();
    }
}

export default new AddressPage();
