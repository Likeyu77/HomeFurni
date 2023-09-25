import React from 'react'
import NavLinks from './NavLinks'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { BsWechat } from 'react-icons/bs'

const contacts = [
  <BiLogoFacebook />,
  <BiLogoInstagram />,
  <BiLogoTwitter />,
  <BsWechat />,
]

const Footer = () => {
  return (
    <footer className="flex flex-col sm:grid grid-cols-4 justify-items-center bg-seconda py-12 gap-8 bg-base-200">
      <article className="flex flex-col sm:pl-12 col-span-2 sm:w-2/3 w-full px-6">
        <h1 className="text-3xl font-bold mb-4">HomeFurni</h1>
        <p>
          30 years of craftsmanship, elegance. Your sanctuary for quality,
          style, and personal touch.
        </p>
      </article>

      <div
        className={`hidden sm:col-span-1 list-none sm:grid px-2 justify-around`}>
        <NavLinks />
      </div>

      <div className="text-2xl flex justify-around flex-row sm:flex-col sm:justify-between col-span-1">
        <BiLogoFacebook className="hover:scale-125 duration-200" />
        <BiLogoInstagram className="hover:scale-125 duration-200" />
        <BiLogoTwitter className="hover:scale-125 duration-200" />
        <BsWechat className="hover:scale-125 duration-200" />
      </div>
    </footer>
  )
}

export default Footer
