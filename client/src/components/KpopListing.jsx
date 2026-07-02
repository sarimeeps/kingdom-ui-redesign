
const KpopListing = ({ title, group, price, image, status }) => {
    return (
        <div className="max-w-90 h-full mb-5">
            <img 
                src={image}
                alt={image}
                className="aspect-square drop-shadow-sm object-cover overflow-hidden mb-4"
            />
            <p className='text-base text-[var(--text)] truncate w-90'>{ group }</p>
                <p className='font-semibold text-[var(--text)] text-[1.375rem] truncate w-90'>{ title }</p>
            <p>
               {
                    status === true ? <p className='font-medium text-lg text-[var(--text)]'>${ price }</p> : <p className="font-medium text-lg text-[#D81313]">Out Of Stock</p>
                }
            </p>
        </div>
    )
}

export default KpopListing;