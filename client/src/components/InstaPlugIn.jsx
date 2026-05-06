import post1 from '../assets/ig-img-1.jpg';
import post2 from '../assets/ig-img-2.jpg';
import post3 from '../assets/ig-img-3.jpg';
import post4 from '../assets/ig-img-4.jpg';
import post5 from '../assets/ig-img-5.jpg';
import post6 from '../assets/ig-img-6.jpg';

import mascot from '../assets/mascot.jpg';

import { MdOutlineGridOn } from 'react-icons/md';
import { LuSquarePlay, LuRepeat } from "react-icons/lu";
import { TbUserPentagon } from "react-icons/tb";
import { PiLinkSimpleBold } from "react-icons/pi";


const InstaPlugin = () => {

    return (
        <div className="">
            <figure class="mx-auto max-w-full w-100 h-auto">
                <div class="p-1.5 bg-[#3c3c3c] shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] rounded-3xl">
                    <div className="bg-gray-900 bg-opacity-25 text-[#fff] rounded-2xl">
                        <div className="mb-2">
                            <div className="flex flex-wrap items-center p-4">
                                {/* profile pic */}
                                <img src={mascot} alt="profile-pic" className='w-22 h-22 object-cover rounded-full border-2 border-pink-600 p-1' />
                                {/* profile meta */}
                                <div className="w-8/12 ml-4 mt-5">
                                    <div className="mb-4">
                                        <h3 id='ig-handle' className='inline-block'>kingdomofkpopandmore</h3>
                                        <ul className='flex justify-around space-x-4 text-center leading-snug text-sm'>
                                            <li><span className='font-semibold'>527</span> posts</li>
                                            <li><span className='font-semibold'>3,245</span> followers</li>
                                            <li><span className='font-semibold'>331</span> following</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-sm my-2">
                                    <p className='font-semibold'>Kingdom</p>
                                    <p>🎂 Feeding you through your eyes, ears, and mouth!</p>
                                    <p>K-Pop, romance books, and bake shop!</p>
                                    <p>💃🏻 Women Owned</p>
                                    <p>⚡️ HOURS:</p>
                                    <p>Wed-Fri... more</p>
                                    <div className="flex gap-1">
                                        <PiLinkSimpleBold size={17} />
                                        <p className='font-semibold'>www.eventbrite.com/e/armyrang-tickets-19863...</p>
                                    </div>
                                    <p className='text-blue-500'>6000 Meadowbrook Mall Ct STE 1, Clemmons, North Carolina 27012</p>
                                </div>
                            </div>
                            <ul className='flex items-center justify-around space-x-1 uppercase tracking-widest font-semibold text-xs text-gray-600 mb-3'>
                                <li><MdOutlineGridOn size={25} color='white' /></li>
                                <li><LuSquarePlay size={27} color='gray' /></li>
                                <li><LuRepeat size={27} color='gray' /></li>
                                <li><TbUserPentagon size={28} color='gray' /></li>
                            </ul>
                            {/* ig-posts flexbox */}
                            <div className="flex flex-wrap -mx-px border-t">
                                {/* column */}
                                <div className="w-1/3 p-px">
                                    {/* post 1 */}
                                    <article className='post bg-gray-100 text-white relative pb-full aspect-[8/11]'>
                                        <img src={ post1 } alt="post-img" className='w-full h-full absolute left-0 top-0 object-cover' />
                                    </article>
                                </div>
                                <div className="w-1/3 p-px">
                                    {/* post 2 */}
                                    <article className='post bg-gray-100 text-white relative pb-full aspect-[8/11]'>
                                        <img src={ post2 } alt="post-img" className='w-full h-full absolute left-0 top-0 object-cover' />
                                    </article>
                                </div>
                                <div className="w-1/3 p-px">
                                    {/* post 3 */}
                                    <article className='post bg-gray-100 text-white relative pb-full aspect-[8/11]'>
                                        <img src={ post3 } alt="post-img" className='w-full h-full absolute left-0 top-0 object-cover' />
                                    </article>
                                </div>
                                <div className="w-1/3 p-px">
                                    {/* post 4 */}
                                    <article className='post bg-gray-100 text-white relative pb-full aspect-[8/11]'>
                                        <img src={ post4 } alt="post-img" className='w-full h-full absolute left-0 top-0 object-cover' />
                                    </article>
                                </div>
                                <div className="w-1/3 p-px">
                                    {/* post 5 */}
                                    <article className='post bg-gray-100 text-white relative pb-full aspect-[8/11]'>
                                        <img src={ post5 } alt="post-img" className='w-full h-full absolute left-0 top-0 object-cover' />
                                    </article>
                                </div>
                                <div className="w-1/3 p-px">
                                    {/* post 6 */}
                                    <article className='post bg-gray-100 text-white relative pb-full aspect-[8/11]'>
                                        <img src={ post6 } alt="post-img" className='w-full h-full absolute left-0 top-0 object-cover' />
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default InstaPlugin;
