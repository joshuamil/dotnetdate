module.exports = exports = dotnetdate;

function dotnetdate (input, message = '') {
  let tmp = parseInt(input.replace(/[^0-9]*/g, ''));
  let date = new Date(tmp);
  if (!isNaN(Date.parse(date))) {
    return date;
  } else {
    if (message === '') {
      return 'Invalid Date: "' + input + '"';
    } else {
      return message;
    }
  }
};
