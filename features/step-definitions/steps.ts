import { Given, When, Then } from '@wdio/cucumber-framework';

import checkContainsAnyText from '../support/check/checkContainsAnyText.js';
import checkIsEmpty from '../support/check/checkIsEmpty.js';
import checkContainsText from '../support/check/checkContainsText.js';
import checkCookieContent from '../support/check/checkCookieContent.js';
import checkCookieExists from '../support/check/checkCookieExists.js';
import checkDimension from '../support/check/checkDimension.js';
import checkElementExists from '../support/check/checkElementExists.js';
import checkEqualsText from '../support/check/checkEqualsText.js';
import checkModal from '../support/check/checkModal.js';
import checkOffset from '../support/check/checkOffset.js';
import checkProperty from '../support/check/checkProperty.js';
import checkSelected from '../support/check/checkSelected.js';
import checkTitle from '../support/check/checkTitle.js';
import checkUrl from '../support/check/checkURL.js';
import closeAllButFirstTab from '../support/action/closeAllButFirstTab.js';
import compareText from '../support/check/compareText.js';
import isEnabled from '../support/check/isEnabled.js';
import isDisplayed from '../support/check/isDisplayed.js';
import openWebsite from '../support/action/openWebsite.ts';
import setWindowSize from '../support/action/setWindowSize.js';
import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import addressPage from '../pageobjects/address.page';

const pages = {
    login: LoginPage
}

Given(/^user is on the login page$/, async () => {
    openWebsite("url","/")
});


When(/^user logs in with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^user should see logged-in icon$/, async () => {
     await SecurePage.flashHio.waitForDisplayed();
     await expect(SecurePage.flashHio).toBePresent();
});

Then(/^user should see LoginPage error on username and password fields$/,function(){
    LoginPage.emailLoginerror;
});


Then(/^user should see LoginPage error on username field and password is (.*)$/,async (password)=>{
    LoginPage.usernameLoginerror(password);
});

Then(/^user should see LoginPage error on password field and username is (.*)$/,async (username)=>{
    LoginPage.passwordLoginerror(username);
});

Then(/^user should see LoginPage error saying username or password is not matching$/,function(){
    LoginPage.invalidpassword;
});

Then(/^user should see LoginPage error with text password should be minimum 5 to 20 characters$/,function(){
    LoginPage.lowlenghtpassword;
});

Then(/^user click on logged in user$/,function(){
    SecurePage.clickHio;
});

When(/^user Fill address with firstname (.*) lastname (.*) address1 (.*) address2 (.*) city (.*) and zipcode (.*)$/, async (firstname, lastname, address1, address2, city, zipcode) => {
    await addressPage.addNewAddress(firstname, lastname, address1, address2, city, zipcode)
});




