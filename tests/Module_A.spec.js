import { test, expect } from '@playwright/test';

test('A1 TEST', async({page, request}) =>{


     const Posting = await request.post('https://api.practicesoftwaretesting.com/users/register',
      {
        data: 
        {
        first_name: 'Amit',
        last_name: 'Rajput',
        email: `amit${Date.now()}@test.com`,
        password: 'Password123!'
      }
    }
);

expect(Posting.ok()).toBe(true);
console.log(await Posting.json());
console.log(await Posting.status());
console.log(await Posting.statusText());

});



















//npx playwright test --project=chromium --headed