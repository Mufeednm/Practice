// Creating a promise
let myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data from an API
    setTimeout(() => {
      let success = true; // Simulating success or failure
      if (success) {
        resolve("Operation successful"); // If successful, resolve the promise
      } else {
        reject("Operation failed"); // If failed, reject the promise
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  // Consuming the promise
  myPromise
    .then((successMessage) => {
      // If promise is fulfilled
      console.log("Success:", successMessage);
    })
    .catch((errorMessage) => {
      // If promise is rejected
      console.log("Error:", errorMessage);
    });
  