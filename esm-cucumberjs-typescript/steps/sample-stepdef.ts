import { Given,When,Then, World } from "@cucumber/cucumber";
import Chalk from "chalk";
// import {CustomWorld} from "./support/World_.js";


Given('user is at homepage', function(){
    console.log(Chalk.redBright('>> user is at homepage'));
    console.log(this.eat(1));
})

When('add user name {string}',function(name:string){
    this.context.name = name;
    console.log(`${name} is set in context`);
})


When('user click on home page button', function(){
    console.log('>> user click on homepage button');
    console.log(this.eat(1));
    console.log(this.name);
    this.context["testing_done"] = 'true'
})

Then('user see homepage dashboard',function () {
    console.log('>> user see homepage dashboard');
    console.log(this.eat(1));
    console.log(this.context.name);
    console.log(this.context.testing_done);

})