import React from 'react'

const Faq = () => {

  return (
    <div className='w-full flex flex-col items-center bg-[var(--bg)] mt-4'>
      <div className='max-w-[1920px] w-full flex justify-center'>
        <div className='flex flex-col m-6 min-w-400'>
          <h1 className=''>Ask Us Anything!</h1>
          <hr className="hidden lg:block w-12 h-1 mb-9 mt-2 bg-[var(--text-h)] "></hr>
          <p className='text-xl'>Have a question that isn't <strong className='underline'>answered below</strong> or need specific accommodations? Fill out the form and we will get back to you as soon as possible!</p>
          <form action="" className='grid grid-cols-2 gap-5 max-w-150 mt-6' id='query'>
            <label htmlFor="name">
              <span className='sr-only'>Name</span>
              <input type="text" id='name' name='name' placeholder='Name' className='border border-gray-400 rounded-sm p-2 w-full focus:border-[#8F3A6D] focus:outline-none focus:ring-1 focus:ring-[#8F3A6D] shadow-xs' />
            </label>
            <label htmlFor="email">
              <span className='sr-only'>Email</span>
              <input type="email" id='email' name='email' placeholder='Email' className='border border-gray-400 rounded-sm p-2 w-full focus:border-[#8F3A6D] focus:outline-none focus:ring-1 focus:ring-[#8F3A6D] shadow-xs' />
            </label>
            <label htmlFor="tel" className='col-span-2'>
              <span className='sr-only'>Phone Number</span>
              <input type="tel" id='tel' name='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Phone Number' className='border border-gray-400 p-2 rounded-sm w-full focus:border-[#8F3A6D] focus:outline-none focus:ring-1 focus:ring-[#8F3A6D] shadow-xs' />
            </label>
            <label htmlFor="query" className='col-span-2'>
              <span className='sr-only'>Question</span>
              <textarea id='query' name='query' placeholder='Question *' className='border border-gray-400 p-2 rounded-sm w-full h-30 focus:border-[#8F3A6D] focus:outline-none focus:ring-1 focus:ring-[#8F3A6D] shadow-xs' required />
            </label>
            <button type='submit' className='w-fit flex mx-auto lg:mx-0 items-center text-[#ffffff] font-(family-name:--btn-font) lg:text-base md:text-sm font-bold bg-[var(--button)] border-2 border-white rounded-3xl px-9 py-2 active:bg-[var(--text-h)] active:font-extrabold'>SUBMIT</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Faq