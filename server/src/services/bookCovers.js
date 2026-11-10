const BASE = 'https://www.googleapis.com/books/v1/volumes'

//searching for book covers using book title & author (using isbn returns an error, maybe google api bug??)
export async function fetchGoogleCover(title, author) {
    const url = `${BASE}?q=${encodeURIComponent(title)}+${encodeURIComponent(author)}&maxResults=1&key=${process.env.GOOGLE_BOOKS_API_KEY}`
    const res = await fetch(url)

    if (!res.ok) throw new Error(`Google Books ${res.status} for ISBN ${title}`)

    const data = await res.json()
    const links = data.items?.[0]?.volumeInfo?.imageLinks
    if (!links) return null

    const raw = links.thumbnail ?? links.smallThumbnail
    return raw?. replace('http://', 'https://')
}