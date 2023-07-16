import { expect } from "@jest/globals";
import chalk from 'chalk';
import data from './data.json'

describe('test suite', () => {
    test('test case', () => {
        console.log(chalk.blueBright('Executing test for welcome == welcome'))
        console.log(data);
        const hobbies = data.hobbies as string[];
        hobbies.forEach(v => console.log(chalk.cyanBright(v)))
        expect('welcome').toEqual('welcome');
    })
})