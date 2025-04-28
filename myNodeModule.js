// // myModule.js
// const exportedValue = "Hello from Node.js!";

// // Export the value so it can be used by other Node.js code.
// module.exports = { exportedValue };

try {
    const simulatedModule = {
      exportedValue: "Hello from Node.js"
    };
  
    console.log(simulatedModule.exportedValue); // Output: Hello from Node.js!
  } catch (error) {
    console.error("An error occurred:", error);
  }