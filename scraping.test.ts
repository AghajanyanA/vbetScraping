import { test } from "./src/customTest.ts"

test.describe('Scraping Vbet', () => {
    test('Vbet new casino games scraping', async ({ homePage, casinoPage }) => {
        await homePage.open();
        await homePage.clickNavigationItem('Casino')
        await casinoPage.clickCategory('New');
        const items = await casinoPage.CategoryGrid.scrapeCategoryItems({keepOptimized: true});
        console.log(items);
    });
});