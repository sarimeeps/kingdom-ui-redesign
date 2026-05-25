import React from 'react'
import NewArrivals from '../components/NewArrivals'
import carousel1 from '../assets/home_carousel/carousel1.png';
import StoreFilter from '../components/StoreFilter';

const Kpop = () => {

  const filters = [
    {
      key: 'artist',
      label: 'Artist',
      options: ['All Artists','ATEEZ', 'BTS', 'CORTIS', 'LE SSERAFIM', 'SEVENTEEN', 'STRAY KIDS', 'TOMORROW X TOGETHER']
    },
    {
      key: 'sort',
      label: 'Sort',
      options: ['Newest', 'Oldest', 'Price: Low to High', 'Price: High to Low']
    }
  ]

  return (
    <div className='relative mx-auto w-full px-2 py-6'>
      {/* <h1>Kpop</h1> */}
      <div className='max-w-[1920px] bg-white rounded-xl flex items-center justify-center mx-auto w-full '>
        <img 
          src={carousel1} 
          alt="New Arrivals" 
          className="w-full h-135 m-10 object-cover rounded-xl" 
        />
      </div>
      <h1 className='text-center mt-6'>New Arrivals</h1>
      <NewArrivals />
      <h1 className='text-center mt-6'>Our Products</h1>
      <StoreFilter filters={filters} onChange={(vals) => console.log(vals)} />
    </div>
  )
}

export default Kpop