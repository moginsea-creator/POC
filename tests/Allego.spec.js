import {test, expect} from '@playwright/test';
test('testcase1', async ({ page }) => {
  await page.goto('https://exp-my.allego.com/home.do?channelId=-2');
  await expect(page).toHaveTitle(/Allego/);
});

//npx playwright test --project=chromium --headed