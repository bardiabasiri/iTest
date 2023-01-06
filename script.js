let apiQuotes = [];

// Function : Display a New Quote

function newQuote() {
    //Pick a Random Quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}
// Get Quotes from API or local source
// response is an array with nested objects
// async fetch reqstest within a Try Catch Statement

async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(error)
        // Catching an Error
    }
}

//on load
getQuotes();