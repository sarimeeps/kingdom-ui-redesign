const BookItem = ({cover, title, author, price, status}) => {

    return (
        <div className="max-w-60 h-full mb-2 mx-2">
            <div className="mb-2">
                <img src={ cover } alt={cover} className='w-full h-90 object-cover' />
            </div>
            <div className="">
                <p className='font-semibold text-[var(--text)] text-[1.375rem] truncate w-60'>{ title }</p>
                <p className='text-base text-[var(--text)] truncate w-60'>{ author }</p>
                {
                    status === true ? <p className='font-semibold text-lg text-[var(--text)]'>${ price }</p> : <p className="font-semibold text-lg text-[#D81313]">Out Of Stock</p>
                }
            </div>
        </div>
    )
}

export default BookItem;