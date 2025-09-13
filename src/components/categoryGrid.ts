import { Component } from "../pom/component";
import { CategoryGridItem } from "./categoryGridItem/categoryGridItem";

type CategoryItemsInfoType = {
    title: string;
    image: string;
    index: number;
}

type CategoryItemsTotalType = {
    data: CategoryItemsInfoType[];
    total: number;
}

export class CategoryGrid extends Component {
    private locators = {
        categoryItem: this.locator.locator('//div[contains(@class, "casinoGameItemContent")]')
    }

    private async getAllItems(): Promise<CategoryGridItem[]> {
        const allItems = await this.locators.categoryItem.all();
        return allItems.map(item => new CategoryGridItem(item, this.page));
    }

    private async removeFirstItemFromDOM(): Promise<void> {
            await this.page.evaluate(categoryItem => {
                const container = categoryItem?.parentElement;
                if (container) {
                    container.removeChild(container.firstElementChild!);
                }
            }, await this.page.$('.casinoGameItemContent'));
    }

    public async scrapeCategoryItems({keepOptimized = false} = {}): Promise<CategoryItemsTotalType> {
        const data: CategoryItemsTotalType = { data: [], total: 0 };
        let currentItem = 0

        while (true) {
            const allItems = await this.getAllItems();
            if (currentItem >= allItems.length) break;

            const element = allItems[currentItem];

            try {
                await this.page.waitForLoadState('networkidle', { timeout: 3000 });
            } catch {}

            await element.hover()
            const title = await element.getTitle();
            const image = await element.getImageLink();
            data.data.push({ title, image, index: currentItem + 1 });

            if (keepOptimized && currentItem >= 100) {
                await this.removeFirstItemFromDOM();
            }

            currentItem++
        }

        data.total = currentItem;

        return data
    }
}