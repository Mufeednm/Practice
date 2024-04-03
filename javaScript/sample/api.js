 

 
async function getQuotes(limit = 5, callback) {
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      const quotes = data.quotes.slice(0, limit); // Get the first 'limit' quotes
      callback(quotes); // Call the provided callback function with the quotes
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  }
  
  // Define a callback function to handle the quotes
  function handleQuotes(quotes) {
    const final = document.getElementById("abu");
    final.innerHTML = `
      <ul>
        ${quotes.map(quote => `<li>${quote.quote} - ${quote.author}</li>`).join('')}
      </ul>
    `;
  }
  
  getQuotes(5, handleQuotes); // Call getQuotes with limit and callback
  
    
  