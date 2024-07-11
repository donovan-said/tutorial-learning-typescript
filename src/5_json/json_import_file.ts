/**
 * Import JSON object from file
 * 
 * - https://maxgadget.dev/article/how-to-import-a-json-file-in-typescript-a-comprehensive-guide
 * - https://www.scaler.com/topics/nodejs/require-vs-import-nodejs/
 */

// Require Method (CommonJS Module System)

const data_r = require('../../samples/data.json')

for (let x in data_r.employees) {
    console.log(
        "Employee Full Name: "
        + data_r.employees[x].firstName
        + " "
        + data_r.employees[x].lastName
    )
}

// Import Method (ES6 Module System)

import data_i from './samples/data.json';

for (let y in data_i.employees) {
    console.log(
        "Employee Full Name: "
        + data_i.employees[y].firstName
        + " "
        + data_i.employees[y].lastName
    )
}