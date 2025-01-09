import { cn } from '@/lib/utils'
import { Margarine } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const title = Margarine({
  weight: ["400"],
  subsets: ["latin"],
});

function SectionOne() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">
          <Image src="/colorwave.jpg" alt="bg" fill className="object-cover -z-10" />
          <div className="container mx-auto px-4">
            <div className="">
              <p className="text-xl md:text-2xl text-slate-500">
                Introducing our Engaging Children&apos;s Education Platform
              </p>
              <h1 className={cn(title.className, "text-5xl md:text-7xl mt-6 text-pink-600")}>
                Empowering Young <br className="hidden md:block" /> Minds to Thrive
              </h1>
              <p className="mt-8 text-base text-slate-500">
                Discover the Joy of Learning: Our Innovative Approach to
                Children&apos;s Education
              </p>
              <Link
                href={"/"}
                className="bg-sky-400 text-white px-8 py-3 rounded-full hover:bg-sky-700 hover:text-white transition-colors block w-fit mt-12"
              >
                Explore
              </Link>
            </div>
          </div>
        {/* </div> */}
      </section>
  )
}

export default SectionOne