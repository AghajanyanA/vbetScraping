# vbetScraping

Automate data scraping from VBET with ease.

## Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/vbetScraping.git
    cd vbetScraping
    ```

2. **Install dependencies**
    ```bash
    yarn install
    ```

3. **Run the automation script**
    ```bash
    yarn start
    ```

## scrapeCategoryItems Option

When using `scrapeCategoryItems({ keepOptimized: true })`, the games count in the DOM is kept at 100 for optimized performance.  
To disable this limit and scrape all available games, simply set `keepOptimized` to `false`, or don't pass any parameter at all.


