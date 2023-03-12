import {Given, When, Then} from "@wdio/cucumber-framework";
import {tests} from "../support/tests";

Given(/^I am on the Amazon homepage$/, async () => {
    await tests.AmazonLogin.openAmazonHomePage()
});

When("User clicks on login", async () => {
    await tests.AmazonLogin.openLogInPage()
});

Then("User should see login inputs", async () => {
    await tests.AmazonLogin.userEmailInput()
});
