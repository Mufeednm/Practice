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

    // Function to fetch data from an API
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Creating a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // Setting up the request
    xhr.open('GET', url, true);

    // Event handler for successful request
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Resolve the promise with the response text
        resolve(xhr.responseText);
      } else {
        // Reject the promise with an error message
        reject('Request failed with status ' + xhr.status);
      }
    };

    // Event handler for failed request
    xhr.onerror = function () {
      // Reject the promise with an error message
      reject('Request failed');
    };

    // Sending the request
    xhr.send();
  });
}

// Example usage of fetchData function
fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => {
    console.log('Data fetched successfully:', data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

  