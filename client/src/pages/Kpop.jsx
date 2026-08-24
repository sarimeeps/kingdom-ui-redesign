import React, { useEffect, useState } from 'react'
import carousel1 from '../assets/home_carousel/carousel1.png';
import lightsticks from '../assets/kpop_page/lightsticks.jpg'
import Filter from '../components/Filter';
import KpopListing from '../components/KpopListing';
import Pagination from '../components/Pagination.jsx';
import Sorter from '../components/Sorter'

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
  const [order, setOrder] = useState('')


  const filteredKpop = products
    .filter(product => currentProdType ? product.type === currentProdType : true)
    .filter(product => currentArtist ? product.group === currentArtist : true)
    .filter(product => !currentStatus || product.status === (currentStatus === 'In Stock'))
  const prodTypeFilteredKpop = products.filter(product => currentProdType ? product.type === currentProdType : true)

  const allProdTypes = [...new Set(products.map(product => product.type))]
  const allArtists = [...new Set(prodTypeFilteredKpop.map(product => product.group))]
  const allStatus = ['In Stock', 'Out of Stock']

// Count of matching products per option with other active filters
  const getProdTypeCount = (type) =>
    products
      .filter(p=> p.type === type)
      .filter(p=> currentArtist ? p.group === currentArtist : true)
      .filter(p=> !currentStatus || p.status === (currentStatus === 'In Stock'))
      .length

  const getArtistCount = (artist) =>
    products
      .filter(p=> p.group === artist)
      .filter(p=> currentProdType ? p.type === currentProdType : true)
      .filter(p=> !currentStatus || p.status === (currentStatus === 'In Stock'))
      .length

  const getStatusCount = (statusLabel) =>
    products
      .filter(p=> p.status === (statusLabel === 'In Stock'))
      .filter(p=> currentProdType ? p.type === currentProdType : true)
      .filter(p=> currentArtist ? p.group === currentArtist : true)
      .length

  const sortedKpop = [...filteredKpop].sort((a, b) => {
    switch (order) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Alphabetically, A-Z':
        return a.title.localeCompare(b.title);
      case 'Alphabetically, Z-A':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  })



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

  const currentCards = sortedKpop.slice(firstCardIndex, lastCardIndex);

  const prodTypeCounts = Object.fromEntries(allProdTypes.map(t => [t, getProdTypeCount(t)]))
  const artistCounts = Object.fromEntries(allArtists.map(a => [a, getArtistCount(a)]))
  const statusCounts = Object.fromEntries(allStatus.map(s => [s, getStatusCount(s)]))

  return (
    <div className='relative mx-auto w-full px-4 py-6'>
      <div id="large-gradient" className="absolute top-0 left-0 -z-10 h-175 lg:h-183 md:h-190 w-full bg-linear-to-b from-[#E193CD]/80 from-30% via-[#E6ABC9]/60 via-60% to-[#F4C6D3]/0 to-100%"></div>

      <section>
        <div className='max-w-[1920px] bg-white rounded-xl flex items-center justify-center mx-auto w-full p-4 md:p-6 '>
          <img
            src={lightsticks}
            alt="New Arrivals"
            className="relative w-full aspect-video rounded-xl"
          />
        </div>
      </section>

      <section className='max-w-[1920px] mt-12 bg-[var(--bg)] w-full flex flex-col items-center justify-self-center'>
        <h1 className='mt-6 text-center'>Our Products</h1>
        <p className="italic ">
          *Holds available for <span className="italic font-bold">1 week</span>
        </p>

        {/* filters for listings */}
        <div className='relative z-10 flex flex-row max-w-390 w-full mt-9 mb-12 px-3'>
          <div className='w-full flex flex-col'>
            <div className='mb-3'>
              <p className='text-gray-600'>FILTER BY</p>
            </div>
            <div className='w-full flex flex-row space-x-6'>
              <Filter
                category='Availability'
                choice={currentStatus}
                setChoice={setCurrentStatus}
                selections={allStatus} 
                counts={statusCounts}
                />
              <Filter
                category='Artist'
                choice={currentArtist}
                setChoice={setCurrentArtist}
                selections={allArtists} 
                counts={artistCounts}
                />
              <Filter
                category='Type'
                choice={currentProdType}
                setChoice={setCurrentProdType}
                selections={allProdTypes} 
                counts={prodTypeCounts}
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
               disabled={filteredKpop.length <= 1}
               />
            </div>
          </div>
        </div>

        {/* product listings */}
        <ul className='relative max-w-390 w-full grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 px-4 sm:px-6 md:px-10'>
          {
            currentCards.map((product, index) => (
              <li key={product.id} className='w-full'>
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