import { client } from 'nightwatch-api';
import { Given, When, Then } from 'cucumber';

Given(/^I open tempat.com's homepage$/, async () => {
  await client.url('https://tempat.com/');
});

When(/^I click "(.*?)" category$/, async (category) => {
  const element = `//div[@class='jsx-2846448905 act']//p[@class='jsx-2846448905'][contains(text(),'${category}')]`;
  await client.useXpath().waitForElementVisible(element);
  await client.click(element);
});
Then(/^I should see my search is filtered by "(.*?)"$/, async (category) => {
  const element = `//div[@class='jsx-3015350978 keyword-n-area']//p[@class='jsx-3015350978'][contains(text(),'${category}')]`;
  await client.useXpath().assert.visible(element)
});

Then(/^I shoul be directed to xwork webpage with meeting room filter$/, async () => {
    const url = 'https://xwork.co/id/room-listing';
    await client.windowHandles(function(result) {
        let currentTab = result.value[1]; // New Google tab index
       // Switch to Google tab
        client.switchWindow(currentTab, function() {
          client.assert.urlContains(url); // Verify new tab is Google
        });
    });
  });

Then(/^I shoul be directed to xwork webpage with co-working space filter$/, async () => {
    const url = 'https://xwork.co/id/office-listing';
    await client.windowHandles(function(result) {
        let currentTab = result.value[1]; // New Google tab index
       // Switch to Google tab
        client.switchWindow(currentTab, function() {
          client.assert.urlContains(url); // Verify new tab is Google
        });
    });
  });