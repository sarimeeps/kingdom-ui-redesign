import { InstagramEmbed, PlaceholderEmbed } from "react-social-media-embed";

function InstaPlugIn() {
    return (
        // <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
        //     <h2 className="text-2xl font-bold">Instagram Plugin Placeholder</h2>
            


        // </div>
        <div className="flex justify-center">
            <InstagramEmbed
                url="https://www.instagram.com/p/Cq8n9sXoLhP/"
                width={328}
                height={400}
                captioned
            />
        </div>
    );
}

export default InstaPlugIn;