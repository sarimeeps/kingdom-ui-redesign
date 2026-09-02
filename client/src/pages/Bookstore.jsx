import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router'
import { PiArrowCircleRight } from "react-icons/pi";
import bookclub from '../assets/book_shop/bookclub.jpg';
import BookItem from '../components/BookItem.jsx';
import Pagination from '../components/Pagination.jsx';
import Filter from '../components/Filter.jsx';
import Sorter from '../components/Sorter.jsx';

const Bookstore = () => {

  const [books, setBooks] = useState([])

  //loading bookstore inventory
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/books`)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error("Failed to load books")
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //       setBooks(data)
  //     })
  //     .catch(err => console.error(err))
  // }, [])

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/clover/books`)
      const data = await response.json()

      setBooks(data)
    }
    getItems()
  }, [])


  const [currentGenre, setCurrentGenre] = useState('')
  const [currentAuthor, setCurrentAuthor] = useState('')
  const [currentStatus, setCurrentStatus] = useState('')

  const [order, setOrder] = useState('')

  const filteredBooks = books
    .filter(book => currentGenre ? book.genre === currentGenre : true)
    .filter(book => currentAuthor ? book.author === currentAuthor : true)
    .filter(book => !currentStatus || book.status === (currentStatus === 'In Stock'))
  const genreFilteredBooks = books.filter(book => currentGenre ? book.genre === currentGenre : true)

  //TODO: Improve filter logic so each filter option is based on other active filters

  //retrieving genres, authors, and book status to display in filter components
  const allGenres = [...new Set(books.map(book => book.genre))]
  const allAuthors = [...new Set(genreFilteredBooks.map(book => book.author))]
  const allStatus = ['In Stock', 'Out of Stock']

  const getGenreCount = (genre) =>
    books
      .filter(b => b.genre === genre)
      .filter(b => currentAuthor ? b.author === currentAuthor : true)
      .filter(b => !currentStatus || b.status === (currentStatus === 'In Stock'))
      .length
      
  const getAuthorCount = (author) =>
    books
      .filter(b => b.author === author)
      .filter(b => currentGenre ? b.genre === currentGenre : true)
      .filter(b => !currentStatus || b.status === (currentStatus === 'In Stock'))
      .length
      
  const getStatusCount = (statusLabel) =>
    books
      .filter(b => b.status === (statusLabel === 'In Stock'))
      .filter(b => currentGenre ? b.genre === currentGenre : true)
      .filter(b => currentAuthor ? b.author === currentAuthor : true)
      .length

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (order) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Alphabetically, A-Z':
        return a.name.localeCompare(b.name);
      case 'Alphabetically, Z-A':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  })

  useEffect(() => {
    setCurrentPage(1)
    // setCurrentAuthor('')
  }, [currentGenre])

  useEffect(() => {
    setCurrentPage(1)
  }, [currentAuthor, currentStatus])

  //book grid pagination set up 
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 15;

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentCards = sortedBooks.slice(firstCardIndex, lastCardIndex);

  const genreCounts = Object.fromEntries(allGenres.map(g => [g, getGenreCount(g)]))
  const authorCounts = Object.fromEntries(allAuthors.map(a => [a, getAuthorCount(a)]))
  const statusCounts = Object.fromEntries(allStatus.map(s => [s, getStatusCount(s)]))

  return (
    <div className='flex flex-col items-center mb-3'>
      <div className='w-full py-6 flex justify-center bg-linear-to-r from-[#E79CD6]/50 to-[#E7AAD4]/50 to-[#E6ABC9]/50 to-[#E8B7D2]/50 to-[#F4C6D3]/50'>
        <section className='flex flex-col md:flex-row justify-center w-full max-w-[1920px] md:space-x-18 space-y-10 my-15 px-4'>
          <div className='justify-items-center'>
            <div className='max-w-3xl h-full md:mt-20'>
              <h1 className='w-full text-center my-6 lg:text-start'>Join Our Book Club</h1>
              <hr className="hidden lg:block  w-12 h-1 mb-9 mt-2 bg-[var(--text-h)] "></hr>
              <p className='text-center lg:text-left lg:text-[1.375rem] md:text-xl text-lg'>Here at Kingdom, we host monthly book clubs featuring romance and queer titles. Anyone and everyone is welcome to join at anytime!</p>
              <Link to='/events' className='w-fit flex mx-auto lg:mx-0 items-center gap-4 mt-6 text-[#ffffff] font-(family-name:--btn-font) lg:text-base md:text-sm font-bold bg-[var(--button)] border-2 border-white rounded-2xl px-4 py-2 active:bg-[var(--text-h)] active:font-extrabold'>
                SEE EVENTS
                <PiArrowCircleRight size={30} />
              </Link>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='aspect-[4/3] max-h-90 max-w-170 md:max-h-110 overflow-hidden border rounded-xl border-transparent'>
              <img src={bookclub} alt="" className='w-full h-full object-cover' />
            </div>
          </div>
        </section>
      </div>

      <section className='max-w-[1920px] mt-19 bg-[var(--bg)] w-full flex flex-col items-center'>
        <h1 className=''>Our Books</h1>
        <div className='flex flex-row max-w-390 w-full mt-9 mb-12 px-3'>
          <div className='w-full flex flex-col'>
            <div className='mb-3'>
              <p className='text-gray-600'>FILTER BY</p>
            </div>
            <div className='w-full flex flex-col md:flex-row space-x-6 space-y-3'>
              <Filter
                category='Availability'
                choice={currentStatus}
                setChoice={setCurrentStatus}
                selections={allStatus}
                counts={statusCounts}
                />
              <Filter
                category='Genre'
                choice={currentGenre}
                setChoice={setCurrentGenre}
                selections={allGenres}
                counts={genreCounts}
                />
              <Filter
                category='Author'
                choice={currentAuthor}
                setChoice={setCurrentAuthor}
                selections={allAuthors}
                counts={authorCounts}
                />
            </div>
          </div>
          <div className='w-full flex flex-col'>
            <div className='mb-3 flex self-end max-w-60 w-full'>
              <p className='text-gray-600'>SORT BY</p>
            </div>
            <div className='w-full flex justify-end'>
              <Sorter
                onSortChange={setOrder} 
                disabled={filteredBooks.length === 0}
                />
            </div>
          </div>
        </div>
        <ul className='max-w-390 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-6'>
          {
            currentCards.map((book, index) => (
              <li key={book.id} className='content-center mx-auto'>
                <BookItem
                  cover={book.cover}
                  title={book.name}
                  author={book.author}
                  price={book.price}
                  status={book.available} />
              </li>
            ))}
        </ul>
        <div className='m-5'>
          <Pagination
            totalCards={sortedBooks.length}
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </section>
    </div>
  )
}

export default Bookstore