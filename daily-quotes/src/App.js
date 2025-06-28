import './App.css';
import { useEffect, useState, useRef } from 'react';
import QuoteCard from './components/QuoteCard';
import NewQuoteButton from './components/NewQuoteButton';

function App() {  
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fetched = useRef(false);

  const fetchQuote = async() => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': '9H/PrbGZku8Zd22NqbVLFA==RNypWse1hhzcmlUl'} 
      });
      const data = await response.json();
      setQuote(data[0].quote);
      setAuthor(data[0].author);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
      setQuote('Error fetching quote.');
      setAuthor('System');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(!fetched.current) {
      fetched.current = true;
      fetchQuote();
    }
  }, []);

  return (
    <div className='app'>
      <QuoteCard quote={quote} author={author} isLoading={isLoading} />
      <NewQuoteButton onClick={fetchQuote} />
      {/* <CopyShare quote={quote} author={author} />                                 */}
    </div>
  );
}

export default App;
