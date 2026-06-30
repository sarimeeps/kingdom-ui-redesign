import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Pagination = ({ totalCards, cardsPerPage, setCurrentPage, currentPage }) => {

    const totalPages = Math.ceil(totalCards / cardsPerPage);


    const getPages = (current, total) => {
        if (total === 1) {
            return [1];
        }

        const pages = [];
        const firstPage = 1;
        const lastPage = total;
        const prevPage = current - 1;
        const nextPage = current + 1;

        //adding first page
        pages.push(firstPage)

        //adding ellipses for the first half 
        if (Math.abs(firstPage - prevPage) > 1) {
            pages.push('...');
        }

        //adding previous page
        if (firstPage < prevPage) {
            pages.push(prevPage);
        }

        //adding current page
        if (current !== firstPage && current !== lastPage) {
            pages.push(current);
        }

        //adding next page
        if (nextPage < lastPage) {
            pages.push(nextPage);
        }

        //adding ellipses for the second half
        if (Math.abs(nextPage - lastPage) > 1) {
            pages.push('...');
        }

        //adding last page
        pages.push(lastPage);

        return pages;
    }


    return (
        <div className="flex justify-center w-50 gap-2">
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="mr-2"
            >
                <IoIosArrowDropleftCircle size={25} className={currentPage === 1 ? 'text-gray-400' : 'text-[var(--button)] cursor-pointer'} />
            </button>
            {getPages(currentPage, totalPages).map((page, index) => {
                return <button
                    key={index}
                    onClick={
                        !isNaN(page) ? () => setCurrentPage(page) : undefined
                    }

                    className={page === currentPage ? 'font-bold text-2xl -translate-y-1 text-[var(--text-h)]' : typeof page !== 'number' ? 'cursor-default' : 'text-xl text-[var(--text)] cursor-pointer'}
                >
                    {page}
                </button>
            })}
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-2"
            >
                <IoIosArrowDroprightCircle size={25} className={currentPage === totalPages ? 'text-gray-400' : 'text-[var(--button)] cursor-pointer'} />
            </button>
        </div >
    )
}

export default Pagination