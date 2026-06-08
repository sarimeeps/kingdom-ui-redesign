import React from 'react'
import { Link } from 'react-router'
import { PiArrowCircleRight } from "react-icons/pi";
import books from '../assets/book_shop/bookclub.jpg';
import BookItem from '../components/BookItem.jsx';

const Bookstore = () => {


  return (
    <div className='flex flex-col items-center mt-15'>
      <section className='flex flex-row justify-center w-full max-w-[1920px] space-x-18 mb-30'>
        <div className='justify-items-center'>
          <div className='max-w-3xl h-full content-center'>
            <h1 className='my-6'>Join Our Book Club</h1>
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
            <img src={books} alt="" className='w-full h-full object-cover' />
          </div>
        </div>
      </section>
      <section className='bg-[var(--bg)] w-full flex flex-col items-center'>
        <h1 className='border mt-16 pb-6'>Our Books</h1>
        <div className='flex flex-row justify-center border max-w-200 w-full'>
          <div className='w-full text-center'>
            <p className='p-5'>Author Filter</p>
          </div>
          <div className='w-full text-center'>
            <p className='p-5'>Genre Filter</p>
          </div>
        </div>
        <div className='flex flex-row border max-w-380 w-full p-6'>
          <div className='w-full text-start'>
            <p>In Stock</p>
          </div>
          <div className='w-full text-end'>
            <p>Available in-store only</p>
          </div>
        </div>
        <div className='max-w-390 w-full grid grid-cols-4 gap-y-6'>
          <div className='content-center mx-auto '>
            <BookItem 
            title='She Gets The Girl'
            author='Racheal Lippincott and Alyson Derrick'
            price='12.99'
          />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bookstore