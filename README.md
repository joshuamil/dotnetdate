# dotnetdate-js

`dotnetdate-js` replaces Microsoft .NET "JSON" formatted dates to proper JavaScript Date Objects. If you have a date that looks like `/Date(984123009000)/` in your JSON output, then using this function will turn it into a proper date object.

## Install

```
$ npm install dotnetdate-js
```


## Usage

```js
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
```

## Options

`dotnetdate-js` accepts the following parameters.

### input (String = '')
The original date value you wish to transform

### message (String = 'Invalid Date: {input_value}') [Optional]
The value you wish to return in the event that an invalid date is returned. By default the text 'Invalid Date: "{input_value}"' will be returned. You can specify a string or an object to be returned. As noted in the example, you could choose to return an error here instead of a string using: `new Error('message')`.

## license

ISC
