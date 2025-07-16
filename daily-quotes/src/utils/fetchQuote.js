const fetchQuote = async(apiKey) => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': apiKey} 
      });
      const data = await response.json();
      return {
        quote: data[0].quote,
        author: data[0].author,
        error: null
      };
    } catch (error) {
      console.error('Failed to fetch quote:', error);
      return {
        quote: 'Error fetching quote.',
        author: 'System',
        error
      };
    } 
  };

  export default fetchQuote;