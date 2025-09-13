import { Component } from "../../pom/component";

export class CategoryGridItem extends Component {
    private locators = {
        title: this.locator.locator('//h3[contains(@class, "casinoGameItemLabelBc")]'),
        image: this.locator.locator('//img'),
    }

    public async getTitle(): Promise<string> {
        return await this.locators.title.textContent() || '';
    }

    public async getImageLink(): Promise<string> {
        return await this.locators.image.getAttribute('src') || '';
    }

    public async hover(): Promise<void> {
        await this.locator.hover();
    }
}