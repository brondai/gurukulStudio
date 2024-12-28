import Link from "next/link";
import { Margarine } from "next/font/google";
import Image from "next/image";
import clsx from "clsx";

const title = Margarine({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <section className="container mx-auto min-h-screen px-4 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-1 md:col-span-8">
            <p className="text-xl md:text-2xl text-slate-500">
              Introducing our Engaging Children&apos;s Education Platform
            </p>
            <h1 className={clsx(title.className, "text-5xl md:text-7xl mt-6 text-pink-600")}>
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
      </section>

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-8 md:mb-16">
          <h2 className={clsx(title.className, "text-4xl md:text-5xl text-pink-600 mb-6")}>
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
              className={clsx(title.className, "text-4xl text-pink-600 mb-6")}
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

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <Image src="/icon1.svg" alt="Approach icon" fill />
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
              <Image src="/icon1.svg" alt="Approach icon" fill />
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
              <Image src="/icon1.svg" alt="Approach icon" fill />
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

      <section className="container mx-auto px-4 py-12 md:py-24">
        <h2
          className={clsx(
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
              className={clsx(title.className, "text-4xl text-pink-600 mb-6")}
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

      <section className="container mx-auto relative p-6 md:p-12 min-h-[300px] md:min-h-56 rounded-[32px] flex flex-col justify-center text-white overflow-clip">
        <Image src="/bg.png" alt="bg" fill className="object-cover -z-10" />
        <h2 className={clsx(title.className, "text-4xl md:text-6xl font-semibold")}>
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
              className={clsx(title.className, "text-4xl text-pink-600 mb-6")}
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
  );
}
