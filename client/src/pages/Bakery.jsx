import React from 'react'
import BakeCard from '../components/BakeCard'
import cookies from '../assets/bake_shop/cookies.jpg'
import bread from '../assets/bake_shop/bread.jpg'
import cakes from '../assets/bake_shop/cakes.jpg'
import cinnamon from '../assets/bake_shop/cinn.jpg'
import customcake from '../assets/bake_shop/customcake.jpg'

const Bakery = () => {

  
  return (
    <div className='flex flex-col items-center bg-[var(--bg)]'>
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
        

      </section>
    </div>
  )
}

export default Bakery