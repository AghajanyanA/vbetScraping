import type { Page } from "@playwright/test";

export class Container {
    public constructor(protected page: Page) {}
}