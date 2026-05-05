// import { InstagramEmbed, PlaceholderEmbed } from "react-social-media-embed";

// function InstaPlugIn() {
//     return (
//         // <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
//         //     <h2 className="text-2xl font-bold">Instagram Plugin Placeholder</h2>



//         // </div>
//         <div className="flex justify-center">
//             <InstagramEmbed
//                 url="https://www.instagram.com/p/Cq8n9sXoLhP/"
//                 width={328}
//                 height={400}
//                 captioned
//             />
//         </div>
//     );
// }

// export default InstaPlugIn;

import books from '../assets/books.png';


const InstaPlugin = () => {

    return (
        <div className="">
            <figure class="mx-auto max-w-full w-100 h-auto">
                <div class="p-1.5 bg-[#3c3c3c] shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] rounded-3xl">
                    <div className="bg-gray-100 bg-opacity-25 rounded-2xl">
                        <div className="mb-2">
                            <div className="flex flex-wrap items-center p-4">
                                {/* profile pic */}
                                <img src={ books} alt="profile-pic" className='w-20 h-20 object-cover rounded-full border-2 border-pink-600 p-1' />
                                {/* profile meta */}
                                <div className="w-8/12 ml-4">
                                    <div className="mb-4">
                                        <h3 className='inline-block'>kingdomofkpopandmore</h3>
                                        <ul className='flex justify-around space-x-4 text-center text-gray-600 leading-snug text-sm'>
                                            <li><span className='font-semibold'>527</span>posts</li>
                                            <li><span className='font-semibold'>3,245</span>followers</li>
                                            <li><span className='font-semibold'>331</span>following</li>
                                        </ul>
                                        <div className="text-sm my-2">
                                            <p className=''>Kingdom</p>
                                            <p>Feeding you through your eyes, ears, and mouth!</p>
                                        </div>
                                        
                                    </div>
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