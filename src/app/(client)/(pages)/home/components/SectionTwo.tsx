import React from 'react'
import { cn } from '@/lib/utils';
import { Margarine } from 'next/font/google';
import Image from 'next/image'

const title = Margarine({
  weight: ["400"],
  subsets: ["latin"],
});

function SectionTwo() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="text-center mb-8 md:mb-16">
              <h2 className={cn(title.className, "text-4xl md:text-5xl text-pink-600 mb-6")}>
                Nurturing Curiosity
                <br className="hidden md:block" />
                and Growth
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At our children&apos;s education company, we believe that learning
                should be a transformative experience. Our comprehensive curriculum
                and engaging activities are designed to ignite th...
              </p>
            </div>
    
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-square">
                  <Image
                    src="/section-2.png"
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
                  Inspiring the Leaders of Tomorrow
                </h2>
                <p className="text-gray-600 mb-8 line-clamp-4">
                  Our experienced educators are dedicated to creating a dynamic and
                  supportive learning environment, where children can explore their
                  interests, develop critical-thinking skills, and build meaningful
                  relationships
                </p>
                <button className="bg-sky-400 text-white px-8 py-3 rounded-full hover:bg-sky-700 hover:text-white transition-colors">
                  Join Us
                </button>
              </div>
            </div>
          </section>
  )
}

export default SectionTwo