document.addEventListener("DOMContentLoaded", () => {

  const quoteDisplay = document.querySelector(".quote-display");
  
  function displayQuote(quote) {
    console.log(quote);
    quoteDisplay.textContent = `"${quote}"`
  }

  async function fetchQuote() {
    const url = `https://api.freeapi.app/api/v1/public/quotes/quote/random`;
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
         throw new Error("fetch not successful");
      }
      const data = await response.json();
      console.log(data);
      displayQuote(data.data.content);
      
    } catch (error) {
      displayQuote("Always remember that you are absolutely unique. Just like everyone else.");
    }
  }
   fetchQuote();
});