import CopyShare from './CopyShare';
function QuoteCard({ quote, author, isLoading }) {

    return (
      <div className="quote-card">
            { isLoading ? (
                <img
                src="/spinner.gif"
                alt="Loading..."
                />
            ) : (
            <>
                <p className="quote">"{quote}"</p>
                <p className="author">
                    <a 
                        href={`https://www.google.com/search?q=${encodeURIComponent(author)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    — {author}
                    </a>
                </p>
                <CopyShare quote={quote} author={author} />                                
            </>
          )}
      </div>
    );
}

export default QuoteCard; 
