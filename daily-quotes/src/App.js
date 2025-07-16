import './App.css';
import { useEffect, useState, useRef } from 'react';
import QuoteCard from './components/QuoteCard';
import NewQuoteButton from './components/NewQuoteButton';
import fetchQuote from './utils/fetchQuote';

function App() {  
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fetched = useRef(false);
  const apiKey = process.env.REACT_APP_QUOTE_API_KEY;

  const fetchQuote = async() => {
    setIsLoading(true);
    const result = await fetchQuote(apiKey);
    setQuote(result.quote);
    setAuthor(result.author);
    setIsLoading(false);   
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
    </div>
  );
}

export default App;
