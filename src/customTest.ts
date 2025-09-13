import { test as base } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { CasinoPage } from './pages/casinoPage';

type Options = {
    homePage: HomePage;
    casinoPage: CasinoPage
};

const test = base.extend<Options>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    casinoPage: async ({ page }, use) => {
        await use(new CasinoPage(page));
    }
});

export { test };