
const KpopListing = ([ image, artist, album, price]) => {
    return (
        <div>
            <img 
                src={image}
                alt={album}
                className="aspect-square m-10 object-cover overflow-hidden"
            />
            <p>
                {artist}
            </p>
            <p>
                {album}
            </p>
            <p>
                ${price.toFixed(2)}
            </p>
        </div>
    )
}

export default KpopListing;