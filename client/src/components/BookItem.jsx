const BookItem = ({cover, title, author, price, status}) => {

    return (
        <div className="max-w-60 h-full mb-2 mx-2">
            <div className="mb-2">
                <img src={ cover } alt={cover} className='w-full h-90 object-cover' />
            </div>
            <div className="">
                <p className='font-bold text-2xl text-gray-700 truncate w-60'>{ title }</p>
                <p className='text-lg text-gray-500 truncate w-60'>{ author }</p>
                {
                    status === true ? <p className='font-semibold text-xl text-gray-500'>${ price }</p> : <p className="font-semibold text-xl text-red-500">Out Of Stock</p>
                }
            </div>
        </div>
    )
}

export default BookItem;