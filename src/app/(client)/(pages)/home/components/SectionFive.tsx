import React from 'react'
import Image from 'next/image'
import { Margarine } from 'next/font/google';
import { cn } from '@/lib/utils';

const title = Margarine({
  weight: ["400"],
  subsets: ["latin"],
});

function SectionFive() {
  return (
    <>
    <section className="container mx-auto relative p-6 md:p-12 min-h-[300px] md:min-h-56 rounded-[32px] flex flex-col justify-center text-white overflow-clip">
        <Image src="/bg.png" alt="bg" fill className="object-cover -z-10" />
        <h2 className={cn(title.className, "text-4xl md:text-6xl font-semibold")}>
          Transforming <br className="hidden md:block" /> Education
        </h2>
        <p className="text-base max-w-[340px] mt-6">
          At our children&apos;s education company, we believe that education is
          the foundation for a brighter future
        </p>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
            <h2
              className={cn(title.className, "text-4xl text-pink-600 mb-6")}
            >
             Discover Our Programs
            </h2>
            <p className="text-gray-600 mb-8 line-clamp-4">
            Our children&apos;s education company is committed to providing a holistic learning experience that goes beyond the traditional classroom
            </p>
            <button className="bg-sky-400 text-white px-8 py-3 rounded-full hover:bg-sky-700 hover:text-white transition-colors">
              Enroll Today
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative aspect-square">
              <Image
                src="/section-last.png"
                alt="child"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionFive