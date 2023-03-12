export class LandingPage{

    getLogInButton() {
        return $('#nav-link-accountList')
    }

    getDeliverText() {
        return $('#glow-ingress-line2')
    }

    getUserEmailInput() {
        return $('[type=email]')
    }
}