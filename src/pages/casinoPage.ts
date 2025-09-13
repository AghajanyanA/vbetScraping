import { CategoryGrid } from './../components/categoryGrid';
import { Container } from "../pom/container";

type CategoryType = 'GAMES' | 'Popular Games' | 'New' | 'Jackpots'

export class CasinoPage extends Container {
    private locators = {
        category: (category: CategoryType) => this.page.locator(`//div[contains(@class, "horizontalCategoryItemWrp") and .//p[contains(., '${category}')]]`),
        categoryGrid: this.page.locator('//div[contains(@class, "casinoCategoryGames")]')
    }

    public CategoryGrid = new CategoryGrid(this.locators.categoryGrid, this.page);

    public async open(): Promise<void> {
        await this.page.goto('https://www.vbet.am/en/casino/slots', { waitUntil: 'domcontentloaded' })
    }

    public async clickCategory(category: CategoryType): Promise<void> {
        await this.locators.category(category).click();
        await this.page.waitForResponse('**/casino/getGames**');
    }
}