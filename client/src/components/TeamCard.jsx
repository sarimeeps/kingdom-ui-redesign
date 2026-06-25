import { useState } from 'react';

const TeamCard = ({ name, image, group, novel, bakedGood, kingdomMemory } = {}) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="justify-center items-center flex flex-col gap-4">
            <p className="text-2xl font-bold text-var(--text-h)"> {name} </p>
            <div
                className={`w-80 h-120 hover:cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-in-out ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
                onClick={() => setFlipped(!flipped)}
            >
                {!flipped && (
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-xl'
                    />
                )}
                {flipped && (
                    <div className='[transform:rotateY(180deg)] w-80 h-120 bg-[var(--text-h)] text-white px-4 py-6 rounded-xl flex flex-col gap-3'>
                        <h4 className='text-xl font-(family-name:[var(--sans)]) font-medium text-white'>Ult K-Pop Group & Bias</h4>
                        <p className='bg-white text-lg text-black p-2 h-full rounded-md'>{group}</p>
                        <h4 className='text-xl font-(family-name:[var(--sans)]) font-medium text-white'>Favorite Novel</h4>
                        <p className='bg-white text-lg text-black p-2 h-full rounded-md'>{novel}</p>
                        <h4 className='text-xl font-(family-name:[var(--sans)]) font-medium text-white'>Favorite Baked Good</h4>
                        <p className='bg-white text-lg text-black p-2 h-full rounded-md'>{bakedGood}</p>
                        <h4 className='text-xl font-(family-name:[var(--sans)]) font-medium text-white'>Favorite Kingdom Memory</h4>
                        <p className='bg-white text-lg text-black p-2 h-full rounded-md'>{kingdomMemory}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default TeamCard;