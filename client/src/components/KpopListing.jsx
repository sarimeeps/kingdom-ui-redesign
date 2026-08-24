
const KpopListing = ({ title, group, price, image, status }) => {
    return (
        <div className="relative max-w-390 mb-5">
            <img
                src={image}
                alt={title}
                className="aspect-square drop-shadow-sm object-cover mb-4"
            />
            <p className='text-base text-[var(--text)] truncate w-full'>{group}</p>
            <p className='font-semibold text-[var(--text)] text-[1.375rem] truncate w-full'>{title}</p>

            {
                status === true ? <p className='font-medium text-lg text-[var(--text)]'>${price}</p> : <p className="font-medium text-lg text-[#D81313]">Out Of Stock</p>
            }

        </div>
    )
}

export default KpopListing;