const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5174/projects');
  
  // Wait for the page to load
  await new Promise(r => setTimeout(r, 2000));
  
  // Start screenshot
  await page.screenshot({ path: 'screenshot_0.png' });
  
  // Scroll halfway
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'screenshot_1.png' });
  
  // Scroll to 200vh
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'screenshot_2.png' });

  await browser.close();
})();
