import { client } from 'nightwatch-api';
import { Given, When, Then } from 'cucumber';

Given(/^I open xwork's homepage$/, async () => {
  await client.url('https://xwork.co/');
  await client.waitForElementVisible('body');
});

When(/^I click the login button$/, async () => {
  const element = "#login-btn"
  await client.waitForElementVisible(element);
  await client.click(element);
});

When(/^I fill out the login detail with email "(.*?)" and password "(.*?)"$/, async (email, password) => {
  const popUp = "#modal-login";
  await client.waitForElementVisible(popUp);
  await client.setValue("input[id='email-login-1']", email);
  await client.setValue("input[id='password-login-1']", password);
});

When(/^I click the submit button$/, async () => {
  await client.click("#do-login");
});

Then(/^I should see the name of the user is "(.*?)"$/, async (name) => {
  await client.useXpath().assert.visible(`//p[contains(text(),'Hi, ${name}')]`)
});
