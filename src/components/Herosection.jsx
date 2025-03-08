


import HeroImage from "../assets/imageintern.png";
import MobileImage from "../assets/Mobile.png"


export default function HeroSection() {
  return (
    <>
    
    <section className="bg-gradient-to-r from-pink-50 to-purple-100 min-h-screen flex items-center justify-center px-6 ">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-32 sm:-mt-6">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mr-38">
            DELIVER YOUR IDEAS FASTER
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 mt-4 leading-tight text-left">
            Supercharge your productivity with{" "}
            <span className="text-purple-600">AI image tools</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg text-left">
            Say goodbye to tedious and time-consuming photo editing tasks and
            embrace a high-productivity workflow with an AI-assisted toolset.
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-900 text-white font-semibold text-lg rounded-lg hover:bg-gray-800 transition">
            TRY IT NOW
          </button>
        </div>

        {/* Right Side: Image with Icons */}
        <div className="relative md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Main Image */}
            <img
              src={HeroImage} // Use imported image here
              alt="AI Assistant"
              className=" w-full h-full object-cover"
            />

            
          </div>
        </div>
      </div>
    </section>
    <section className="overflow-hidden bg-gray-50 py-36">
      <div className="container mx-auto px-8">
        <div className="-m-6 flex flex-wrap items-center">
          {/* Image Section */}
          <div className="flex w-full p-6 md:w-1/2">
            <img
              className="mx-auto"
              src={MobileImage}
              alt="Pincel web app for mobile image editing"
            />
          </div>
          {/* Text Section */}
          <div className="relative w-full p-6 md:w-1/2">
            <img
              className="absolute top-0 left-0"
              src="gradia-assets/elements/applications/radial.svg"
              alt=""
            />
            <div className="relative z-10 max-w-2xl text-center">
              <h2 className="mb-6 font-heading text-5xl font-bold text-gray-900 sm:text-5xl xl:text-10xl text-left">
                Ready when you are
              </h2>
              <p className="mb-16 text-lg text-black-600 text-left">
                Creativity has no bounds! Pincel is designed to provide an
                intuitive editing experience on all mobile devices, so you can
                also get things done on the go. Productivity is not a
                destination, it's a lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
