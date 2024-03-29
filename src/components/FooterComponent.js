'use client'

import Link from "next/link"
import Image from "next/image"

export default function FooterComponent() {
  return (<footer className="text-gray-600 body-font">
    <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="/logo.png" className="h-20 w-20" />
          <span className="ml-3 text-md">Wear the new things</span>
        </Link>
        <p className="mt-2 text-sm text-gray-500 px-4">Wear the latest things, with no hesitation</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FASHIONS</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href="/category/mencasuals" className="text-gray-600 hover:text-gray-800">{`Men's Wear`}</Link>
            </li>
            <li>
              <Link href="/category/womencasuals" className="text-gray-600 hover:text-gray-800">{`Women's Wear`}</Link>
            </li>
            <li>
              <Link href="/category/jewelary" className="text-gray-600 hover:text-gray-800">Jewelary</Link>
            </li>
            <li>
              <Link href="/category/fragrances" className="text-gray-600 hover:text-gray-800">Fragrances</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ELECTRONICS</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href="/category/smartphones" className="text-gray-600 hover:text-gray-800">Smartphones</Link>

            </li>
            <li>
              <Link href="/category/laptops" className="text-gray-600 hover:text-gray-800">Laptops</Link>
            </li>
            <li>
              <Link href="/category/laptops" className="text-gray-600 hover:text-gray-800">Mac Book</Link>
            </li>
            <li>
              <Link href="/category/smartphones" className="text-gray-600 hover:text-gray-800">I-Phone</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">HEALTH CARE</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href="/category/skincare" className="text-gray-600 hover:text-gray-800">SkinCare</Link>
            </li>
            <li>
              <Link href="/category/skincare" className="text-gray-600 hover:text-gray-800">Facewash</Link>
            </li>
            <li>
              <Link href="/category/skincare" className="text-gray-600 hover:text-gray-800">Facial Powder</Link>
            </li>
            <li>
              <Link href="/category/skincare" className="text-gray-600 hover:text-gray-800">Shampoo</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">DECORATIONS</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href="/category/homedecorations" className="text-gray-600 hover:text-gray-800">Home Decoration</Link>
            </li>
            <li>
              <Link href="/category/homedecorations" className="text-gray-600 hover:text-gray-800">Door Screen</Link>
            </li>
            <li>
              <Link href="/category/homedecorations" className="text-gray-600 hover:text-gray-800">Pillow Cover</Link>
            </li>
            <li>
              <Link href="/category/homedecorations" className="text-gray-600 hover:text-gray-800">Double Bedshit</Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="rouL" strokeLinejoin="roLd" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" strokeLinecap="rouL" strokeLinejoin="roLd" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="rouL" strokeLinejoin="roLd" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="rouL" strokeLinejoin="roLd" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>)
}