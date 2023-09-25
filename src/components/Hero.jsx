import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

const Hero = () => {
  return (
    <div>
      <header className="sm:grid sm:grid-cols-4 sm:justify-items-end sm:items-center ">
        <div className="col-span-3">
          <h2 className="sm:text-3xl text-xl font-bold">
            Our favourite products at reduced prices
          </h2>
          <p className="text-sm pt-1 sm:text-lg">
            We've all seen our bedroom get a bit untidy, but not to worry, we
            have the storage solutions for your bedroom ready - and at new lower
            prices.
          </p>
        </div>
        <Link
          to="products"
          className="btn  btn-outline btn-primary col-span-1 w-24 hidden sm:flex">
          Shop now
        </Link>
      </header>

      <div
        className="sm:grid grid-cols-4 grid-rows-2 gap-4 pt-8 hidden "
        style={{ height: '30rem' }}>
        <div className="col-span-2 row-span-2 relative">
          <img
            src={hero2}
            alt="bedroom"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
        <div className="col-span-2 row-span-1 relative ">
          <img
            src={hero1}
            alt="bedroom"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
        <div className="col-span-2 row-span-1 relative ">
          <img
            src={hero3}
            alt="bedroom"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>

      <div className="w-full carousel rounded-box mt-8">
        <div className="carousel-item w-full">
          <img
            src={hero1}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={hero2}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={hero3}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
