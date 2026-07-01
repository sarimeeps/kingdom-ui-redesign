import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router'
import { PiArrowCircleRight } from "react-icons/pi";
import bookclub from '../assets/book_shop/bookclub.jpg';
import BookItem from '../components/BookItem.jsx';
import Pagination from '../components/Pagination.jsx';
import Filter from '../components/Filter.jsx';


const Bookstore = () => {

  const [books, setBooks] = useState([])

  //loading bookstore inventory
  useEffect(() => {
    fetch("/data/books.json")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to load books")
        }
        return res.json();
      })
      .then(data => {
        setBooks(data)
      })
      .catch(err => console.error(err))
  }, [])


  const [currentGenre, setCurrentGenre] = useState('')
  const [currentAuthor, setCurrentAuthor] = useState('')
  const [currentStatus, setCurrentStatus] = useState('')

  const filteredBooks = books
                        .filter(book => currentGenre ? book.genre === currentGenre : true)
                        .filter(book => currentAuthor ? book.author === currentAuthor : true)
                        .filter(book => !currentStatus || book.status === (currentStatus === 'In Stock'))
  const genreFilteredBooks = books.filter(book => currentGenre ? book.genre === currentGenre : true)

  //TODO: Improve filter logic so each filter option is based on other active filters

  //retrieving genres, authors, and book status to display in filter components
  const genres = [...new Set(books.map(book => book.genre))]
  const authors = [...new Set(genreFilteredBooks.map(book => book.author))]
  const status = ['In Stock', 'Out of Stock']



  useEffect(() => {
    setCurrentPage(1)
    setCurrentAuthor('')
  }, [currentGenre])

  useEffect(() => {
    setCurrentPage(1)
  }, [currentAuthor, currentStatus])

  //book grid pagination set up 
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 15;

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentCards = filteredBooks.slice(firstCardIndex, lastCardIndex);

  return (
    <div className='flex flex-col items-center mt-10 mb-3'>
      <section className='flex flex-row justify-center w-full max-w-[1920px] space-x-18 my-15 px-4'>
        <div className='justify-items-center'>
          <div className='max-w-3xl h-full content-center'>
            <h1 className='my-6 text-center lg:text-start'>Join Our Book Club</h1>
            <hr className="hidden lg:block w-12 h-1 mb-9 mt-2 bg-[var(--text-h)] "></hr>
            <p className='text-center lg:text-left lg:text-[1.375rem] md:text-xl text-lg'>Here at Kingdom, we host monthly book clubs featuring romance and queer titles. Anyone and everyone is welcome to join at anytime!</p>
            <Link to='/events' className='w-fit flex mx-auto lg:mx-0 items-center gap-4 mt-6 text-[#ffffff] font-(family-name:--btn-font) lg:text-base md:text-sm font-bold bg-[var(--button)] border-2 border-white rounded-2xl px-4 py-2 active:bg-[var(--text-h)] active:font-extrabold'>
              SEE EVENTS
              <PiArrowCircleRight size={30} />
            </Link>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='aspect-[4/3] max-h-110 max-w-170 overflow-hidden border rounded-xl border-transparent'>
            <img src={bookclub} alt="" className='w-full h-full object-cover' />
          </div>
        </div>
      </section>
      <section className='max-w-[1920px] mt-19 bg-[var(--bg)] w-full flex flex-col items-center'>
        <h1 className='mt-16'>Our Books</h1>
        <div className='flex flex-row max-w-390 w-full mt-9 mb-12 px-3'>
          <div className='w-full flex flex-col'>
            <div className='mb-3'>
              <p className='text-gray-600'>FILTER BY</p>
            </div>
            <div className='w-full flex flex-row space-x-6'>
              <Filter
                category='Availability'
                choice={currentStatus}
                setChoice={setCurrentStatus}
                selections={status} />
                <Filter
                category='Genre'
                choice={currentGenre}
                setChoice={setCurrentGenre}
                selections={genres} />
              <Filter
                category='Author'
                choice={currentAuthor}
                setChoice={setCurrentAuthor}
                selections={authors} />
            </div>
          </div>
          <div className='w-full flex flex-col'>
            <div className='mb-3 flex self-end max-w-60 w-full'>
              <p className='text-gray-600'>SORT BY</p>
            </div>
            <div className='w-full flex justify-end'>
              <Filter
                category='Price'
                choice={currentGenre}
                setChoice={setCurrentGenre}
                selections={genres} />
            </div>
          </div>
        </div>
        <ul className='max-w-390 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-6'>
          {
            currentCards.map((book, index) => (
              <li key={book.id} className='content-center mx-auto'>
                <BookItem
                  cover={book.cover}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  status={book.status} />
              </li>
            ))}
        </ul>
        <div className='m-5'>
          <Pagination
            totalCards={filteredBooks.length}
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