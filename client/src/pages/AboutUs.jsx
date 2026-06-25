import React from 'react'
import about from '../assets/about_pics/about-cta.png'
import TeamCard from '../components/TeamCard';
import Morgan from '../assets/about_pics/Morgan.png';
import Deidre from '../assets/about_pics/MamaKingdom.png';
import Kaitlyn from '../assets/about_pics/Kaitlyn.png';

const AboutUs = () => {
  return (
    <div>
      <div className="w-full mb-10 flex flex-row items-start justify-center lg:gap-20 p-10 lg:p-20">
        <div>
          <h1>About Kingdom</h1>
          <hr className="hidden lg:block w-12 h-1 mb-9 mt-2 "></hr>
          <p className="text-lg font-medium mb-6">
            We are a small, woman-owned family business dedicated to creating a welcoming space for North Carolina’s K-pop fans, romance book lovers, and dessert enthusiasts. Our goal is to build a fun and supportive community where you can celebrate your favorite artists, authors, and more!
          </p>
          <p className="text-lg font-medium">
            We have frequent K-pop trade, cookie sleeve, and craft events; monthly book clubs for romance and queer titles; and baking events and classes such as cake and cookie decorating!
          </p>
        </div>
        <img src={about} alt="About Kingdom"></img>
      </div>
      <div className="w-full mb-10 flex flex-col items-center justify-center gap-10 p-10 lg:p-20">
        <h1>Meet the Team</h1>
        <TeamCard
          name="Deidre"
          image={Deidre}
          group="BLACKPINK & Lisa"
          novel="The Song of Achilles"
          bakedGood="Chocolate Chip Cookies"
          kingdomMemory="First K-pop album purchased"
        />
        <TeamCard
          name="Kaitlyn"
          image={Kaitlyn}
          group="Stray Kids & Hyunjin"
          novel="Red, White & Royal Blue"
          bakedGood="Lemon Bars"
          kingdomMemory="First book club attended at Kingdom"
        />
        <TeamCard 
          name="Morgan" 
          image={Morgan} 
          group="BTS & V" 
          novel="The Seven Husbands of Evelyn Hugo" 
          bakedGood="Red Velvet Cake" 
          kingdomMemory="First K-pop concert attended" 
        />
      </div>
    </div>
  )
}

export default AboutUs;