import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "./support/World_.js";

Given('user enters username as {string}',function(username:string){
    console.log(`user entered username >> ${username}`)
    this.username = username;
});

When('user enters passowrd as {string}',function(password:string){
    console.log(`user entered password >> ${password}`);
    this.password = password;
});

Then('user click on login button', function(){
    console.log('user clicked on login button');
    this.loginClicked = 'true';
});

