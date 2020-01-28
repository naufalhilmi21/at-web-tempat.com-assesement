import { client } from 'nightwatch-api';
import { Given, When, Then } from 'cucumber';

Given(/^I open tempat.com's homepage$/, async () => {
  await client.url('https://tempat.com/');
});

When(/^I click location point$/, async () => {
  const element = "#div.jsx-2342177214.search-input"
  await client.waitForElementVisible(element);
  await client.click(element);
});

// When(/^I click "(.*?)" location$/, async (location) => {
//   const element = "#div.jsx-2342177214.search-input"
//   await client.waitForElementVisible(element);
//   await client.click(element);
// });

// When(/^I type "(.*?)"$/, async (locationQuery) => {
//   const element = "#div.jsx-2342177214.search-input"
//   await client.waitForElementVisible(element);
//   await client.click(element);
// });

// Then(/^I should see one of the name of the cafe is "(.*?)"$/, async (name) => {
//   await client.useXpath().assert.visible(`//p[contains(text(),'Hi, ${name}')]`)
// });
