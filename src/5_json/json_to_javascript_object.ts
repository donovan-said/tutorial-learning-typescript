/**
 * Convert JSON to JaveScript Object
 * 
 * https://www.w3schools.com/js/js_json.asp
 */

let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

for (let i in obj.employees) {
    console.log(
        "Employee Full Name: "
        + obj.employees[i].firstName
        + " "
        + obj.employees[i].lastName
    )
}