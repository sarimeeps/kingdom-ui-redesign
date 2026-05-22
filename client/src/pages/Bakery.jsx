import React from 'react'
import BakeCard from '../components/BakeCard'
import cookies from '../assets/bake_shop/cookies.jpg'
import bread from '../assets/bake_shop/bread.jpg'
import cakes from '../assets/bake_shop/cakes.jpg'
import cinnamon from '../assets/bake_shop/cinn.jpg'
import customcake from '../assets/bake_shop/customcake.jpg'
import { Link } from 'react-router'

const Bakery = () => {


  return (
    <div className='flex flex-col items-center bg-[var(--bg)] mt-4'>
      <h1 className='m-6'>Our Baked Goods</h1>
      <section className='w-full flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-6 lg:gap-0'>
          <BakeCard
            title='Assorted Cookies'
            desc='$4.00 each or 3 for $10.00'
            image={cookies}
            sections={[
              {
                subtitle: 'Assorted Cookie Flavors:',
                flavors: ['Og Chocolate Chip', "Smore's", 'Lemon Cream', 'Banana Pudding', 'Cookies and Cream', 'Biscoff', 'Oatmeal Cranberry', 'White Chocolate']
              },
              {
                subtitle: 'Seasonal',
                flavors: ['Pumpkin Streusel', 'Apple Pie']
              }
            ]}
          />

          <BakeCard
            title='Japanese Milk Bread'
            desc={'Large Loaf: $12.00 · Small Loaf: $4.00 · Custard Bun: $4.00'}
            image={bread}
            sections={[
              {
                subtitle: 'Assorted Japanese Milk Buns - $4.50',
                flavors: ['Red Bean Paste', 'Vegetable Curry', 'Nutella', 'Peanut Butter Cup', 'Hotteok']
              },
              {
                subtitle: 'Seasonal Milk Buns:',
                flavors: ['Pumpkin', 'Sweet Potato']
              }
            ]}
          />

          <BakeCard
            title='Assorted Mini Cakes'
            desc='$6.00 each'
            image={cakes}
            sections={[
              {
                subtitle: 'Assorted Cake Flavors:',
                flavors: ['Strawberry Crunch', 'Funfetti', 'Vanilla', 'Chocolate', 'Biscoff', 'Peanut Butter Cup', 'Lemon']
              },
              {
                subtitle: 'Cheesecake:',
                flavors: ['New York-Style']
              }
            ]}
          />

          <BakeCard
            title='Additional Treats'
            image={cinnamon}
            sections={[
              {
                subtitle: 'Japanese Milk Bread Cinnamon Rolls:',
                price: 'Single: $4.00'
              },
              {
                subtitle: 'Brownies:',
                price: 'Single: $4.00'
              }
            ]}
          />
        </div>

      </section>
      <section className='w-full justify-items-center mt-20 p-20 bg-linear-to-l from-[#E79CD6]/50 to-[#E7AAD4]/50 to-[#E6ABC9]/50 to-[#E8B7D2]/50 to-[#F4C6D3]/50'>
        <div className='flex flex-col justify-center mb-15 lg:m-20 lg:flex-row lg:space-x-18 w-full max-w-[1920px]'>
          <div className='flex flex-col mb-9'>
            <div className='max-w-3xl w-full mx-auto '>
              <h1 className='my-6 text-center lg:text-start'>Custom Cakes</h1>
              <hr className="hidden lg:block w-12 h-1 mb-9 mt-2 bg-[var(--text-h)] "></hr>
              <p className='text-center lg:text-left lg:text-[1.375rem] md:text-xl text-lg'>We offer custom cakes! <strong className='font-semibold'>You may DM on instagram or call (336-727-3039)</strong> to discuss your custom cake. We also accept custom cake requests in the form below!
                <strong className='font-semibold'> In-store pick up only until further notice</strong>.
              </p>
              <p className='text-center font-bold lg:text-left lg:text-[1.375rem] md:text-xl text-lg pt-6'>*72 hour notice for all cake orders with a 50% deposit is required</p>
              <Link to='' className='w-fit flex mx-auto lg:mx-0 items-center gap-4 mt-6 text-[#ffffff] font-(family-name:--btn-font) lg:text-base md:text-sm font-bold bg-[var(--button)] border-2 border-white rounded-2xl px-4 py-2 active:bg-[var(--text-h)] active:font-extrabold'>
                REQUEST CAKE
              </Link>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='aspect-[4/3] max-h-110 max-w-170 overflow-hidden '>
              <img src={customcake} alt="" className='w-full h-full object-cover' />
            </div>
          </div>

        </div>


      </section>
    </div>
  )
}

export default Bakery