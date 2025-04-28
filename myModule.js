// myModule.js (This is the module file)

const exportedValue = "Hello from my module!";

function myFunction(arg) {
  console.log(`Inside myFunction, argument: ${arg}`);
  return arg * 2;
}

const myObject = {
  name: "Module Object",
  value: 123
};

// Export the items you want to make available to other files:
module.exports = {
  exportedValue,  // ES6 shorthand for exportedValue: exportedValue
  myFunction,
  myObject
};

// You can also export them individually, but this is less common:
// exports.exportedValue = exportedValue;
// exports.myFunction = myFunction;

