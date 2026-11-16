import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const getPages = (current, total) => {
    if (total === 1) {
        return [1];
    }

    const pages = [];
    const delta = 2;
    const ellipsesRange = [];
    for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
            pages.push(i);
        }
    }
    let j;
    for (const i of pages) {
        if (j) {
            if (i - j === 2) {
                ellipsesRange.push(j + 1);
            } else if (i - j !== 1) {
                ellipsesRange.push('...');
            }
        }
        ellipsesRange.push(i);
        j = i;
    }
    return ellipsesRange;
}


const Pagination = ({ totalCards, cardsPerPage, setCurrentPage, currentPage }) => {

    const totalPages = Math.ceil(totalCards / cardsPerPage);

    return (
        <div className="flex justify-center gap-2">
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="mr-2"
            >
                <IoIosArrowBack size={25} className={currentPage === 1 ? 'text-gray-400' : 'text-[var(--button)] cursor-pointer'} />
            </button>
            {getPages(currentPage, totalPages).map((page, index) => {
                return <button
                    key={index}
                    onClick={
                        !isNaN(page) ? () => setCurrentPage(page) : undefined
                    }

                    className={page === currentPage ? 'font-semibold text-xl text-[#fff] bg-[var(--text-h)] border border-[#E7AAD4] rounded-sm p-2' : typeof page !== 'number' ? 'cursor-default' : 'text-xl text-[var(--text-h)] border border-[#E7AAD4] bg-[#fff] rounded-sm p-2 cursor-pointer'}
                >
                    {page}
                </button>
            })}
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-2"
            >
                <IoIosArrowForward size={25} className={currentPage === totalPages ? 'text-gray-400' : 'text-[var(--button)] cursor-pointer'} />
            </button>
        </div >
    )
}

export default Pagination