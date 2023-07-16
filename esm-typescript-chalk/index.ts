import chalk from "chalk";
import data from './data.json' assert {type:'json'};
import { type } from "os";

const text = chalk.bold.blueBright('World Is Great');

console.log(text);

console.log(data)

const buzzy_hobbies = data.hobbies as string[];

buzzy_hobbies.forEach(h => console.log(chalk.cyanBright(h)));


// interface Users {
//     [key:string] : (arg1:string,arg2:string)=>void;
// };

// const mukesh: Users = {
//     hello : (a,b)=>{console.log(a+b)}
// }

// mukesh.hello('hi','hello');