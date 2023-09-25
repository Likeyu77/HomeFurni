import React from 'react'
import aboutUS from '../assets/aboutUs.jpg'
import customer from '../assets/customer.jpg'

const About = () => {
  return (
    <>
      <div className="relative w-full h-64 md:h-80 bg-slate-300 overflow-hidden">
        <img
          src={aboutUS}
          alt="about use"
          className="h-full w-full object-cover -z-10"
        />
        <div
          className="absolute md:h-32 md:w-64 md:text-5xl h-24 w-48 top-1/3 flex text-3xl items-center
         bg-slate-300/70">
          <h1 className="pl-4 text-neutral">About Us</h1>
        </div>
      </div>
      <article className="py-8 px-12 h-80 md:h-48 flex items-center">
        <p>
          <span className="font-bold text-xl">HomeFurni</span>, a renowned name
          with a 30-year legacy, is your ultimate destination for furniture that
          blends craftsmanship, innovation, and elegance. Offering a wide range
          of furniture styles, from modern minimalism to rustic charm and
          traditional opulence, HomeFurni caters to diverse tastes and
          preferences. Crafted by skilled artisans, each piece embodies quality
          and durability, utilizing sustainable materials and eco-friendly
          practices.
        </p>
      </article>

      {/* vision */}

      <div className=" w-full flex flex-col md:flex-row md:h-80 lg:h-64 mt-16">
        <img
          src={customer}
          alt="customer"
          className=" h-full pb-4 md:pb-0 md:w-1/3 object-cover"
        />

        <article className="px-4 pb-4 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2">Our Vision</h1>
          <p>
            Customer satisfaction is at the core of HomeFurni's mission. The
            friendly and knowledgeable staff provides expert guidance to help
            you select the perfect pieces for your home. With a commitment to
            creating comfortable, beautiful, and functional living spaces,
            HomeFurni ensures your home becomes a sanctuary that reflects your
            style and personality.
          </p>
          <p>
            Experience the artistry of furniture with HomeFurni, where every
            piece tells a story of exceptional design and enduring quality.
            Create your dream home with HomeFurni, a trusted name that
            transforms houses into personalized havens.
          </p>
        </article>
      </div>
    </>
  )
}

export default About
