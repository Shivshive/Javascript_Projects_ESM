import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "./World_.js";

Given('navigate to {string}',function(url:string){
    console.log(`Navigating to url >> ${url}`);
});

When('print user name',function(){
    console.log(`printing user name >> ${this.name}`)
});

Then('verify user logged in',function(){
    console.log("Is user logged in >> "+this.loginClicked);
})