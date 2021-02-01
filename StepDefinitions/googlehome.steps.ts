import {browser, element} from 'protractor'
import {Given, When, Then} from '@cucumber/cucumber'
import {GoogleHome} from './../Pages/GoogleHome'

const google = new GoogleHome();

Given(/^I am on the google home page$/,async()=>{


await browser.get('https://www.google.com/');
await console.log(await browser.getTitle());

});

When(/^I enter "(.*?)" in the google search$/,async(text:string)=>{

    await google.EnterTextInGoogleSearch(text);
});



