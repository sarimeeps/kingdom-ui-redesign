const Pagination = ({ totalCards, cardsPerPage, setCurrentPage, currentPage }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className="border flex justify-center w-50 gap-2">
            {pages.map((page, index) => {
                return <button 
                key={index} 
                onClick={() => setCurrentPage(page)}
                className={page == currentPage ? 'font-bold text-2xl -translate-y-1 text-[var(--text-h)]' : 'text-xl text-[var(--text)] cursor-pointer'}
                >
                    {page}
                </button>
            })}
        </div>
    )
}

export default Pagination