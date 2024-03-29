// function abu() {
//     return new Promise ((resolve,reject)=>{
//      let x = setTimeout(()=>{
//             console.log("hello");
//         },1000)
//         resolve("babbuuuu")
//     })
// }
// abu ()
// .then((ans)=>{console.log(ans);}) 
    //    another method 

    // Creating a promise
const myPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const success = true; // Simulating success
      if (success) {
        resolve("Operation completed successfully!"); // Resolve the promise
      } else {
        reject(new Error("Operation failed!")); // Reject the promise with an error
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  // Using the promise
  myPromise
    .then((result) => {
      console.log(result); // Output: Operation completed successfully!
    })
    .catch((error) => {
      console.error(error); // Output: Error: Operation failed!
    });
  