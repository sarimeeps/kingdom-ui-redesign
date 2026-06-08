import book from '../assets/book_shop/book1.jpg';

const BookItem = ({cover, title, author, price, status}) => {

    return (
        <div className="max-w-80 h-full mb-2">
            <div className="mb-2">
                <img src={ book } alt="" className='w-full h-full object-cover' />
            </div>
            <div className="">
                <p className='font-bold text-2xl text-gray-700 truncate w-85'>{ title }</p>
                <p className='text-lg text-gray-500 truncate w-85'>{ author }</p>
                <p className='font-semibold text-xl text-gray-500'>{ price }</p>
            </div>
        </div>
    )
}

export default BookItem;