const { test, expect } = require('@playwright/test');

test('TC01 - Register User', async ({ page }) => {

  // Generate unique email
  const email = `playwright${Date.now()}@gmail.com`;

  // 1. Launch browser & 2. Navigate
  await page.goto('https://automationexercise.com/');

  // 3. Verify home page
  await expect(page).toHaveTitle(/Automation Exercise/);

  // 4. Click Signup/Login
  await page.locator('a[href="/login"]').click();

  // 5. Verify New User Signup
  await expect(page.getByText('New User Signup!')).toBeVisible();

  // 6. Enter name & email
  await page.locator('[data-qa="signup-name"]').fill('Mohan');

  await page.locator('[data-qa="signup-email"]').fill(email);

  // 7. Click Signup
  await page.locator('[data-qa="signup-button"]').click();

  // 8. Verify ENTER ACCOUNT INFORMATION
  await expect(page.locator('text=Enter Account Information')).toBeVisible();

  // 9. Fill details
  await page.locator('#id_gender1').check();

  await page.locator('#password').fill('Password123');

  await page.selectOption('#days', '10');
  await page.selectOption('#months', '5');
  await page.selectOption('#years', '1995');

  // 10. Newsletter checkbox
  await page.locator('#newsletter').check();

  // 11. Special offers checkbox
  await page.locator('#optin').check();

  // 12. Address Details

  await page.locator('#first_name').fill('Mohan');

  await page.locator('#last_name').fill('Kumar');

  await page.locator('#company').fill('ABC Technologies');

  await page.locator('#address1').fill('Velachery');

  await page.locator('#address2').fill('Near Railway Station');

  await page.selectOption('#country', 'India');

  await page.locator('#state').fill('Tamil Nadu');

  await page.locator('#city').fill('Chennai');

  await page.locator('#zipcode').fill('600042');

  await page.locator('#mobile_number').fill('9876543210');

  // 13. Create Account
  await page.locator('[data-qa="create-account"]').click();

  // 14. Verify Account Created
  await expect(page.getByRole('heading', { name: 'Account Created!' })).toBeVisible();

  // 15. Continue
  await page.locator('[data-qa="continue-button"]').click();

  // 16. Verify Logged in as username
  await expect(page.locator('text=Logged in as')).toBeVisible();

  // 17. Delete Account
  await page.locator('a[href="/delete_account"]').click();

  // 18. Verify Account Deleted
  await expect(page.locator('b')).toContainText('Account Deleted!');

  await page.locator('[data-qa="continue-button"]').click();

});