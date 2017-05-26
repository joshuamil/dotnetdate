const dotnetdate = require('./dotnetdate-js');

// Transform a .NET JSON Date to a JS Date Object
// Will return '2001-03-09T07:30:09.000Z'
let valid = dotnetdate('/Date(984123009000)/');
console.log(valid);

// When an invalid date is encountered, return 'Invalid Date' message
// Will return 'Invalid Date: "Not a date"'
let invalid = dotnetdate('Not a date');
console.log(invalid);

// Specify a custom error message when an invalid date is encountered
// Will return 'This date is bad.'
let returnMessage = dotnetdate('Not a date', 'This date is bad.');
console.log(returnMessage);

// Specify a custom error message when an invalid date is encountered
let returnError = dotnetdate('Not a date', new Error('Invalid Date'));
console.log(returnError);
