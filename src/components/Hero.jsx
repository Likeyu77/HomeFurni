import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

const Hero = () => {
  return (
    <div>
      <header className="grid grid-cols-4  justify-items-end items-center">
        <div className="col-span-3">
          <h2 className="text-3xl font-bold">
            Our favourite products at reduced prices
          </h2>
          <p>
            We've all seen our bedroom get a bit untidy, but not to worry, we
            have the storage solutions for your bedroom ready - and at new lower
            prices.
          </p>
        </div>
        <Link
          to="products"
          className="btn  btn-outline btn-primary col-span-1 w-24">
          Shop now
        </Link>
      </header>

      <div
        className="grid grid-cols-4 grid-rows-2 gap-4 pt-8"
        style={{ height: '30rem' }}>
        <div className="col-span-2 row-span-2 relative bg-green-300">
          <img
            src={hero2}
            alt="bedroom"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
        <div className="col-span-2 row-span-1 relative bg-green-300">
          <img
            src={hero1}
            alt="bedroom"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
        <div className="col-span-2 row-span-1 relative bg-green-300">
          <img
            src={hero3}
            alt="bedroom"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
