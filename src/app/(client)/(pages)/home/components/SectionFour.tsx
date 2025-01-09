import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Margarine } from 'next/font/google';

const title = Margarine({
  weight: ["400"],
  subsets: ["latin"],
});

function SectionFour() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
            <h2
              className={cn(
                title.className,
                "text-3xl text-pink-600 text-center mb-16"
              )}
            >
              Shaping The Future
            </h2>
    
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-square">
                  <Image
                    src="/section-3.png"
                    alt="child"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
    
              <div className="md:w-1/2">
                <h2
                  className={cn(title.className, "text-4xl text-pink-600 mb-6")}
                >
                  Nurturing Creativity and Confidence
                </h2>
                <p className="text-gray-600 mb-8 line-clamp-4">
                  Our children&apos;s education company takes pride in fostering an
                  environment that celebrates individuality, encourages
                  collaboration, and sparks the natural curiosity of children
                </p>
                <button className="bg-sky-400 text-white px-8 py-3 rounded-full hover:bg-sky-700 hover:text-white transition-colors">
                  Enroll Today
                </button>
              </div>
            </div>
          </section>
  )
}

export default SectionFour