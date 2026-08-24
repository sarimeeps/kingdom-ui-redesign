import React, { useEffect, useState } from 'react'
import NewArrivals from '../components/NewArrivals'
import carousel1 from '../assets/home_carousel/carousel1.png';
import Filter from '../components/Filter';
import KpopListing from '../components/KpopListing';
import Pagination from '../components/Pagination.jsx';

const Kpop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/kpop_merch.json")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to load products")
        }
        return res.json();
      })
      .then(data => {
        setProducts(data)
      })
      .catch(err => console.error(err))
  }, [])

  const [currentProdType, setCurrentProdType] = useState('')
  const [currentArtist, setCurrentArtist] = useState('')
  const [currentStatus, setCurrentStatus] = useState('')

  const filteredKpop = products
    .filter(product => currentProdType ? product.type === currentProdType : true)
    .filter(product => currentArtist ? product.group === currentArtist : true)
    .filter(product => !currentStatus || product.status === (currentStatus === 'In Stock'))
  const prodTypeFilteredKpop = products.filter(product => currentProdType ? product.type === currentProdType : true)

  const prodTypes = [...new Set(products.map(product => product.type))]
  const artists = [...new Set(prodTypeFilteredKpop.map(product => product.group))]
  const status = ['In Stock', 'Out of Stock']

  useEffect(() => {
    setCurrentPage(1)
    setCurrentArtist('')
  }, [currentProdType])

  useEffect(() => {
    setCurrentPage(1)
  }, [currentArtist, currentStatus])

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentCards = filteredKpop.slice(firstCardIndex, lastCardIndex);

  return (
    <div className='relative mx-auto w-full px-2 py-6'>

      <section className='max-w-[1920px] bg-[var(--bg)] w-full flex flex-col items-center justify-self-center'>
        <h1 className='mt-6'>Our Products</h1>
        <p className="italic ">
          *Holds available for <span className="italic font-bold">1 week</span>
        </p>

        {/* filters for listings */}
        <div className='relative z-50 flex flex-row max-w-390 w-full mt-9 mb-12 px-3'>
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
                category='Artist'
                choice={currentArtist}
                setChoice={setCurrentArtist}
                selections={artists} />
              <Filter
                category='Type'
                choice={currentProdType}
                setChoice={setCurrentProdType}
                selections={prodTypes} />
            </div>
          </div>
          <div className='w-full flex flex-col'>
            <div className='mb-3 flex self-end max-w-60 w-full'>
              <p className='text-gray-600'>SORT BY</p>
            </div>
            <div className='w-full flex justify-end'>
              <Filter
                category='Price'
                choice={currentArtist}
                setChoice={setCurrentArtist}
                selections={artists} />
            </div>
          </div>
        </div>

        {/* product listings */}
        <ul className='relative max-w-390 w-full grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 px-10'>
          {
            currentCards.map((product, index) => (
              <li key={product.id} className='content-center mx-auto'>
                <KpopListing
                  title={product.title}
                  group={product.group}
                  price={product.price}
                  image={product.image}
                  status={product.status} />
              </li>
            ))}
        </ul>
        <div className='m-5'>
          <Pagination
            totalCards={filteredKpop.length}
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </section>
    </div>
  )
}

export default Kpop;