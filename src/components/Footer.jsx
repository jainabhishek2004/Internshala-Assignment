
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white py-4 px-6 rounded-3xl w-full md:w-1/2 md:mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-4xl ">
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 ">
          <img src={Logo} alt="" className="w-16 h-16" />
          <nav className="flex flex-wrap justify-center items-center gap-y-2 md:gap-y-0 md:gap-x-6 text-sm flex-col md:flex-row">
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">How It Works</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Affiliates</a>
            
          </nav>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 mt-3 md:mt-0">
          <button className="bg-white text-black px-4 py-2 rounded-md w-full md:w-auto">Book 1:1 Demo</button>
          <button className="bg-black text-white px-4 py-2 rounded-md w-full md:w-auto">Get Started</button>
        </div>
      </div>
    </footer>
  );
}
