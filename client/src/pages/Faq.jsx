import React from 'react'
import FaqBox from '../components/FaqBox'

const Faq = () => {

  return (
    <div className='w-full flex flex-col items-center bg-[var(--bg)] mt-4 mb-26'>
      <div className='max-w-[1920px] w-full flex flex-col justify-center items-center'>
        <section className='flex flex-col mt-6 mb-16 max-w-300 w-full'>
          <h1 className=''>Ask Us Anything!</h1>
          <hr className="block w-12 h-1 mb-9 mt-2 bg-[var(--text-h)] "></hr>
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
        </section>
        <section className='flex flex-col max-w-300 w-full m-6'>
          <h1>Frequently Asked Questions</h1>
          <hr className="block w-12 h-1 mb-9 mt-2 bg-[var(--text-h)] "></hr>
          <div className='flex flex-col space-y-5'>
            <FaqBox
              category='Items'
              queries={[
                {
                  question: 'Can I purchase an item online?',
                  answer: 'As of now, our website is for viewing what items we have in stock for in-person shopping.'
                },
                {
                  question: 'Can I request an item to be on hold?',
                  answer: 'Due to high demand, we can only hold items for 1 week. Unclaimed items will be returned to the shelf and made available to other customers.'
                },
                {
                  question: 'When do you get new stock/restock?',
                  answer: 'Stay updated on new arrivals and restocks by following our social media, subscribing to our email list, and viewing our K-Pop page!'
                }
              ]}
            />
            <FaqBox
              category='Shipping'
              queries={[
                {
                  question: 'Do you offer shipping for custom cake orders?',
                  answer: 'We currently do not offer shipping for custom cake orders.'
                }
              ]}
            />
            <FaqBox 
              category='Events'
              queries={[
                {
                  question: 'When are events held?',
                  answer: '**Enter official answer here'
                },
                {
                  question: 'Do events have age restrictions?',
                  answer: '**Enter official answer here'
                },
                {
                  question: 'Can I be a vendor at an event?',
                  answer: '**Enter official answer here'
                },
                {
                  question: 'Can I host an event?',
                  answer: 'Request to host an event by filling out the Request to Host form located in the Events page! You may also contact us through our email or our social media!'
                }
              ]}
            />
            <FaqBox 
              category='Returns'
              queries={[
                {
                  question: 'The item I purchased is damaged / missing inclusions',
                  answer: '**Enter official answer here'
                },
                {
                  question: 'The item I purchased is a gift, can the receiver return the item?',
                  answer: '**Enter official answer here'
                }
              ]}
            />
            <FaqBox 
              category='Accessibilty'
              queries={[
                {
                  question: 'Is the store accessible?',
                  answer: 'Yes! Our parking, entrance, and shop interior are all ADA-compliant and fully accessible.'
                },
                {
                  question: 'Are there quieter times to visit?',
                  answer: 'For a calmer, more sensory-friendly visit, we recommend stopping by on Wednesdays, Thursdays, or Sundays between 12PM–3PM.'
                },
                {
                  question: 'When is the shop more social?',
                  answer: 'If you are looking to meet other fans and enjoy a lively atmosphere, visit us on Wednesdays, Fridays, or Saturdays between 5PM–7PM —these are our most social hours!'
                },
                {
                  question: 'Need accommodations during your visits?',
                  answer: "We're happy to help make your visit comfortable. If you have specific accessibilty needs or would like assistance while shopping, please don't hesitate to ask a staff member—we're always glad to work with you!"
                }
              ]}
            />
          </div>
        </section>
      </div>

    </div>
  )
}

export default Faq