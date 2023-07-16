import { Before, BeforeAll, BeforeStep, After, AfterAll, AfterStep } from "@cucumber/cucumber";
import { CustomWorld } from "./World_.js";

Before(function(this:CustomWorld){
    this.context = {};
    console.log('Before Scenario Executed');
})

