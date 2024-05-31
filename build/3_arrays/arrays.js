"use strict";
/**
 * Arrays
 *
 * https://www.w3schools.com/typescript/typescript_arrays.php
 */
// JavaScript push() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
const names = [];
names.push("Donovan");
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(`${names}`);
// Readonly Keyword
const lastNames = ["Said"];
// lastNames.push("Said"); Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(`${lastNames}`);
