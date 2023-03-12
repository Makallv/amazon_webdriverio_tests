import {LandingPage} from "../pageobjects/landingPage";

class Pages{
    constructor() {
        this.landingPage = new LandingPage()
    }
}

export const pages = new Pages()