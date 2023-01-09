# Test automation with Typescript, cucumber and webdriverIO

***
### Pre-Requisites

Pre-Requisites
##### Below are the pre-requisites
* Git
* Node.js
* Java JDK
Validate softwares are properly installed:
```shell
node -v;
git --version;
java --version; // required for viewing allure reporting
```

***
### Installation

How to install dependencies
1. Open Terminal and navigate to the folder in which you want to store the
framework, and copy paste the link below (with HTTPS path):
```shell
git clone https://github.com/
```
2. Navigate into the downloaded "wdio-test-automation" repository folder
```shell
cd **********
```

3. Install all required dependencies using:
```shell
npm install
```

***
### Test run

How to run tests
Use the below command to run the automation tests:
```shell
npm run test
```

### Report

View Test reports
To generate allure reports run `npm run report` then reports can be found in
`allure-report/index.html`

### Issues / limitations - ???
* When parallel sessions are running tests are flaky this is purely the way
application is behaving with API response but this parallel execution can be fixed
or to considered for improvements on framework
* When adding an address sometimes you see a random error "jouw session is
verlopen", this sometimes can make add address case flaky, this can also be fixed
and improved with more time as it is a bit hard to replicate, I couldn't fix it