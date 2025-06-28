function CopyShare({quote, author}) {
    return (
        <>
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText(`${quote} — ${author}`)}>
                Copy Quote 
            </button>
            <div className="share-icons">
                <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(quote + ' — ' + author)}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img className="facebook-icon" src="/facebook-icon.png" alt="Facebook" />
                </a>
        
                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(quote)}&summary=${encodeURIComponent(author)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="linkedin-icon" src="/linkedin-icon.png" alt="LinkedIn" />
                </a>
            </div>
        </>
    
    );
}

export default CopyShare;