import { test, expect } from '@playwright/test';

test('A1 TEST', async({page, request}) =>{

    const email = `amit${Date.now()}@test.com`;
    const password = 'Amit@100010001000qa2013';
     const Posting = await request.post('https://api.practicesoftwaretesting.com/users/register',
      {
        data: 
        {
        first_name: 'Amit',
        last_name: 'Rajput',
        email: email ,
        password: password
      }
    }
);

expect(Posting.ok()).toBe(true);
console.log(await Posting.json());
console.log(await Posting.status());
console.log(await Posting.statusText());

  await page.goto('https://practicesoftwaretesting.com');

  await page.click('[data-test="nav-sign-in"]');

  await page.fill('#email', email);
  await page.fill('#password', password);

  await page.click('input[type="submit"]');

  await expect(page.locator('body')).toContainText('Amit');

});
//npx playwright test --project=chromium --headed


















