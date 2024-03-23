// Asynchronous function to simulate fetching data
async function fetchData() {
    // Simulating an asynchronous operation, e.g., fetching data from an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = true; // Simulating success or failure
        if (success) {
          resolve("Data fetched successfully"); // Resolve the promise with data
        } else {
          reject("Error fetching data"); // Reject the promise with an error
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using the async function with await
  async function fetchDataAsync() {
    try {
      // Waiting for the fetchData function to complete
      const result = await fetchData();
      console.log(result); // Output the result
    } catch (error) {
      console.error(error); // Output any errors
    }
  }
  
  // Calling the async function
  fetchDataAsync();
  