import { Container } from './../pom/container';

type NavigationType = 'Live' | 'Sports' | 'Casino' | 'VBET SAFE' | 'WONDER WHEEL';

export class HomePage extends Container {
    private locators = {
        navigationBar: (menuName: NavigationType) => this.page.locator(`//div[contains(@class, "asideMenuNavItem") and .//a[@aria-label="${menuName}"]]`),
    }

    public async open(): Promise<void> {
        await this.page.goto('https://www.vbet.am/en/', { waitUntil: 'domcontentloaded' })
    }

    public async clickNavigationItem(menuName: NavigationType): Promise<void> {
        await this.locators.navigationBar(menuName).click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.mouse.move(300, 50);
    }
}