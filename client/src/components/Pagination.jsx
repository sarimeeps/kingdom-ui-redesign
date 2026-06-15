const Pagination = ({ totalCards, cardsPerPage, setCurrentPage, currentPage }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className="border w-13 h-13">
            {pages.map((page, index) => {
                return <button 
                key={index} 
                onClick={() => setCurrentPage(page)}
                className={page == currentPage ? 'text-2xl' : ''}
                >
                    {page}
                </button>
            })}
        </div>
    )
}

export default Pagination