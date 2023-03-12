import { pages } from "../support/pages";

const { expect } = require('chai')

export class AmazonLogin{
    async openAmazonHomePage() {
        await browser.maximizeWindow()
        await browser.url("https://wwww.amazon.com")
        const deliveryPlace = await pages.landingPage.getDeliverText()
        const place = "United Kingdom"
        await expect(await deliveryPlace.getText()).to.equal(place)
    }

    async openLogInPage() {
        await pages.landingPage.getLogInButton().click({button: "left"})
    }

    async userEmailInput() {
        await pages.landingPage.getUserEmailInput().waitForDisplayed()
    }
}