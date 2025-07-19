import { test, expect } from '@playwright/test';

test.use({ headless: false }); 

test('Fill cybercrime complaint form', async ({ page }) => {
  const formData = {
    category: 'Rape/Gang Rape (RGR)-Sexually Abusive Content', 
    date: '2024-05-15',
    state: 'DELHI', // all caps
    district: 'NEW DELHI', // all caps 
    occurrence: 'LinkedIn',
    profileUrl : 'https://www.linkedin.com/in/anamikaaggarwal12',
    screenshots : [
      'cloudinary url',
      'cloudinary url',
    ],
    description: 'This is a harassment incident description of at least 200 characters. This needs to be a detailed description of the incident that occurred. Adding more text to meet the minimum character requirement for the complaint form submission.'
  };

  // Navigate to the form
  await page.goto('https://cybercrime.gov.in/Webform/Crime_ReportAnonymously.aspx');

  // 1. Select the case category
  await page.selectOption('#ContentPlaceHolder1_ddl_CategoryCrime', { label: formData.category });

  const dropdown = page.locator('#ContentPlaceHolder1_ddl_CategoryCrime');
  await dropdown.selectOption({ label: formData.category });

  // 2. Fill date - using the correct format for HTML date input (YYYY-MM-DD)
  await page.fill('id=txt_ApproxDateTime', formData.date);

  await page.selectOption('#ContentPlaceHolder1_ddl_State', { label: 'DELHI' });
  await page.waitForTimeout(5000); // Wait for postback to populate district dropdown

  // Wait for district options to be populated after state selection
  await page.selectOption('#ContentPlaceHolder1_ddl_District', { label: formData.district });

  await page.selectOption('id=ContentPlaceHolder1_ddl_InformationSource', { label: formData.occurrence });

  await page.waitForTimeout(5000); 

  await page.fill('id=ContentPlaceHolder1_txt_Info', formData.profileUrl );

  // ContentPlaceHolder1_fu_info

  await page.fill('#txt_AdditionalInfo', formData.description);

});
