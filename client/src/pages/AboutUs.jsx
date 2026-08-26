import React from 'react'
import about from '../assets/about_pics/about-cta.png'
import collage from '../assets/about_pics/about_collage.png'
import TeamCard from '../components/TeamCard';
import Morgan from '../assets/about_pics/Morgan.png';
import Deidre from '../assets/about_pics/MamaKingdom.png';
import Kaitlyn from '../assets/about_pics/Kaitlyn.png';

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-self-center">
      <div className='bg-linear-to-l bg-linear-to-r from-[#E79CD6]/50 to-[#E7AAD4]/50 to-[#E6ABC9]/50 to-[#E8B7D2]/50 to-[#F4C6D3]/50'>
        <div className="max-w-[1920px] w-full mb-10 flex flex-col items-center lg:flex-row lg:items-start justify-center gap-15 lg:p-20">
          <div className="text-center lg:text-left lg:max-w-4xl">
            <h1 className="my-6">About Kingdom</h1>
            <hr class="hidden lg:block w-12 h-1 mb-6 bg-[var(--text-h)] "></hr>
            <p className="text-xl font-medium py-4">
              We are a small, woman-owned family business dedicated to creating a welcoming space for North Carolina’s K-pop fans, romance book lovers, and dessert enthusiasts. Our goal is to build a fun and supportive community where you can celebrate your favorite artists, authors, and more!
            </p>
            <p className="text-xl font-medium py-4">
              We have frequent K-pop trade, cookie sleeve, and craft events; monthly book clubs for romance and queer titles; and baking events and classes such as cake and cookie decorating!
            </p>
          </div>
          <img
            src={about}
            alt="About Kingdom"
            className="w-full h-auto rounded-xl lg:max-w-2xl"
          />
        </div>
      </div>


      <div className="max-w-[1920px] w-full items-center justify-center gap-10 p-10 lg:p-20">
        <h1 className="text-center">Meet the Team</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-10 lg:py-20">
          <TeamCard
            name="Deidre"
            image={Deidre}
            group="Ateez & Doyoung (NCT 127)"
            novel="Unsure"
            bakedGood="Japanese Milk Bread"
            kingdomMemory="Cake decorating with Idol Keesu"
          />
          <TeamCard
            name="Kaitlyn"
            image={Kaitlyn}
            group="Ateez & Jongho"
            novel="Binding Thirteen - Chloe Walsh"
            bakedGood="Cinnamon Bun"
            kingdomMemory="Having first Idol (Keesu) visit Kingdom"
          />
          <TeamCard
            name="Morgan"
            image={Morgan}
            group="BTS & V"
            novel="Red Rising - Pierce Brown"
            bakedGood="Brownie"
            kingdomMemory="Having first Idol (Keesu) visit Kingdom"
          />
        </div>
      </div>

      <div className="w-full bg-linear-to-l from-[#E79CD6]/50 to-[#E7AAD4]/50 to-[#E6ABC9]/50 to-[#E8B7D2]/50 to-[#F4C6D3]/50 flex flex-col lg:items-start justify-center lg:gap-5 lg:p-20">
        <div className="max-w-[1920px] flex flex-col gap-6 p-10 text-center lg:text-left">
          <h1>Our Story</h1>
          <hr class="hidden lg:block w-12 h-1 mb-6 bg-[var(--text-h)] "></hr>
          <p className="text-xl font-medium">
            We decided to put together our passions; love of K-pop since 2012, love  of reading since childhood, and lifelong love of homemade sweet treats.</p>
          <p className="text-xl font-medium">
            In November 2022, after seeing ATEEZ in Atlanta, we finally got serious in our talks about opening a local K-pop store. Taking inspiration from  Korean cafes and events we wanted to bring that to our local community.
            You may be wondering why these three seemingly unrelated hobbies are  together in one shop? Accessibility to diverse K-pop, romance and  fantasy books, and homemade desserts are limited in the triad area, much less under one roof. Thus Kingdom was born! We have frequent K-pop  trade, cookie sleeve, and craft events; monthly book clubs for romance  and queer titles; and baking events and classes such as cake and cookie  decorating!</p>
          <p className="text-xl font-medium">
            After almost a year and a half of blood, sweat, and tears what was once  only a dream has finally become a reality. We opened our doors July 27th in 2024 and have since grown an amazing community, and this is only the beginning!</p>
          <p className="text-xl font-medium">
            Whether you only like K-pop, reading romance, a delicious sweet treat, or a combination of all three; Kingdom is a welcoming  space for all! We are so excited and can’t wait to join and expand with  the local community!</p>
        </div>
        <img className="w-full h-auto mt-4 rounded-xl" src={collage} alt="About Kingdom"></img>
      </div>
    </div>
  )
}

export default AboutUs;