import { useState } from 'react';

const TeamCard = ({ name, image, group, novel, bakedGood, kingdomMemory } = {}) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div>
            <div className="justify-center items-center text-center mb-4">
                <p className="text-2xl font-bold text-var(--text-h)"> {name} </p>

            </div>
            <div
                className={`relative w-80 h-120 [perspective:1000px] hover:cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-in-out ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
                onClick={() => setFlipped(!flipped)}
            >
                <div
                    className={`absolute inset-0 [transform-style:preserve-3d] transition-transform duration-500 ease-in-out ${flipped ? '[transform:rotateY(180deg)]' : ''
                        }`}
                >
                    {/* Front face: normal photo */}
                    <img
                        src={image}
                        alt={name}
                        className="absolute inset-0 w-full h-full object-cover rounded-xl [backface-visibility:hidden]"
                    />

                    {/* Back face wrapper */}
                    <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl overflow-hidden">
                        {/* Mirrored "back of photo" image, always visible on this face */}
                        <img
                            src={image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover [transform:scaleX(-1)]"
                        />

                        {/* Answer content, fades in only after the flip settles */}
                        <div
                            className={`absolute inset-0 bg-[var(--text-h)] text-white px-4 py-6 flex flex-col gap-3 transition-opacity duration-200 ${flipped ? '[transform:rotateY(180deg)] opacity-100 delay-500' : 'opacity-0 delay-0'
                                }`}
                        >
                            <h4 className="text-xl font-medium text-white">Ult K-Pop Group & Bias</h4>
                            <p className="bg-white text-lg text-black p-2 h-full rounded-md">{group}</p>
                            <h4 className="text-xl font-medium text-white">Favorite Novel</h4>
                            <p className="bg-white text-lg text-black p-2 h-full rounded-md">{novel}</p>
                            <h4 className="text-xl font-medium text-white">Favorite Baked Good</h4>
                            <p className="bg-white text-lg text-black p-2 h-full rounded-md">{bakedGood}</p>
                            <h4 className="text-xl font-medium text-white">Favorite Kingdom Memory</h4>
                            <p className="bg-white text-lg text-black p-2 h-full rounded-md">{kingdomMemory}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamCard;