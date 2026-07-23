const EventCard = ({ image, event, shop, desc }) => {
    return (
        <div className="w-90 mb-4 mt-10 shadow-xl rounded-xl bg-white hover:transform hover:-translate-y-2 hover:cursor-pointer transition-transform duration-300 ease-in-out">
            <div className="">
                <img
                    src={image}
                    alt={event}
                    className="w-full h-65 rounded-t-xl object-cover object-top"
                />

            </div>
            <div className="flex flex-col items-start gap-2 p-4 h-50 rounded-xl bg-white z-10 -mt-4 relative">
                <p className="max-w-40 font-bold text-sm text-[#77005C] bg-[#FBCFE7] border-2 border-[#E79CD6] rounded-xl px-8 ">{shop}</p>
                <p className="font-semibold text-left text-lg">{event}</p>
                <p className="text-base text-left ">{desc}</p>
            </div>
        </div>
    )
}
export default EventCard