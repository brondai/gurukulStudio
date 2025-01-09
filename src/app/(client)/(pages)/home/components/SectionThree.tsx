import Image from 'next/image'
import React from 'react'

function SectionThree() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Card */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <Image 
                    src="/icon1.svg" 
                    alt="Approach icon" 
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl text-emerald-800 mb-4">
                  Our Unique Approach
                </h2>
                <p className="text-gray-600 mb-8">
                  Our children&apos;s education company is committed to delivering a
                  transformative learning experience that goes beyond the
                  traditional...
                </p>
                <button className="border border-sky-400 text-sky-400 px-8 py-3 rounded-full hover:bg-sky-700 hover:text-white transition-colors">
                  Join Us
                </button>
              </div>
    
              {/* Second Card */}
              <div className="bg-pink-600 text-white rounded-3xl p-8">
                <div className="w-12 h-12 bg-white rounded-full mb-6 mx-auto flex items-center justify-center">
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <Image src="/icon1.svg" alt="Approach icon" fill />
                </div>
    
                </div>
                <h2 className="text-2xl mb-4">Empowering Youn...</h2>
                <p className="mb-6">
                  At our children&apos;s education company, we understand that each
                  child is on a unique journey of growth and discovery
                </p>
                <p className="text-emerald-200">
                  Igniting a<br />
                  Lifelong Love of Learning
                </p>
              </div>
    
              {/* Third Card */}
              <div className="bg-sky-400 text-white rounded-3xl p-8">
                <div className="w-12 h-12 bg-white rounded-full mb-6 mx-auto flex items-center justify-center">
                  <div className="w-16 h-16 mx-auto mb-6 relative">
                    <Image src="/icon1.svg" alt="Approach icon" fill />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm mb-8">新管大</p>
                  <h2 className="text-xl mb-8">
                    Chldren & eblcdehcuerone
                    <br />
                    pouncecnatal Cerhiuinie
                    <br />
                    6oomitalbiaet
                  </h2>
                  <p className="text-sm">
                    靈早女フ月本齋分
                    <br />
                    領醫歷完全 齋支御本齋
                  </p>
                </div>
              </div>
            </div>
          </section>
  )
}

export default SectionThree