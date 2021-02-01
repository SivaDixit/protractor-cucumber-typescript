import {browser, element, by} from 'protractor'



export class GoogleHome{

private googleSearch:string = "input[name='q']";

async EnterTextInGoogleSearch(searchtext:string): Promise<void>{

try{
 await browser.sleep(2000);
 await element(by.css(this.googleSearch)).sendKeys(searchtext);

}

catch(error){
 throw error;
}

}




}