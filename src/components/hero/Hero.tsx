import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24 md:px-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse gap-4 md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-sm font-semibold text-gray-600 mb-4">
              Web Development | Interface Optimization.
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Senior Front-End Developer
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              With over 5 years of expertise in developing dynamic user
              interfaces, optimizing web performance, and enhancing usability.
            </p>
            <Link
              href="#contact"
              className="w-full flex justify-center items-center inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="w-full md:w-[300px] relative">
            <div className="flex justify-center items-center">
              <div className="w-56 h-56 rounded-t-full overflow-hidden">
                <Image
                  src="/assets/Rulo_Profile.jpeg" // Replace with the correct image path
                  alt="Profile Picture"
                  width={250}
                  height={250}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24   absolute top-0 right-[7px] md:right-[-27px] ">
              <Image
                src="/assets/Skills_Card_Icon.svg" // Replace with the correct image path
                alt="Profile Picture"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
