import { FaPlus, FaTshirt, FaSearch, FaMagic, FaTrash, FaUpload, FaCog, FaBars } from "react-icons/fa";
import { useState } from "react";
import Tshirt from "../assets/Tshirt.png";
import Sweater from "../assets/Sweater.png";
import Brown from "../assets/Brown.png";
import Logo from "../assets/Logo.png";

const products = [
  {
    name: "Green Shirt Example",
    category: "Men's Clothing",
    subcategory: "Polo Shirt",
    image: Tshirt,
  },
  {
    name: "Red Sweater Example",
    category: "Women's Clothing",
    subcategory: "Sweater (Pullover)",
    image: Sweater,
  },
  {
    name: "Brown Jumper Example",
    category: "Women's Clothing",
    subcategory: "Sweater (Pullover)",
    image: Brown,
  },
];

export default function ProductDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed md:relative bg-white shadow-md p-4 h-full z-50 w-64 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300`}>
        <button
          className="md:hidden absolute top-4 right-4 text-gray-600"
          onClick={() => setSidebarOpen(false)}
        >
          ✖
        </button>
        <img src={Logo} alt="" className="w-16 mx-auto" />
        <nav className="mt-6 space-y-6 flex flex-col items-center">
          <ul className="space-y-6">
            {[
              { icon: <FaPlus className="w-6 h-6" />, text: "Create" },
              { icon: <FaTshirt className="w-6 h-6" />, text: "My Products" },
              { icon: <FaMagic className="w-6 h-6" />, text: "Fashion Generator" },
              { icon: <FaSearch className="w-6 h-6" />, text: "SEO Keywords" },
              { icon: <FaTrash className="w-6 h-6" />, text: "Clean Up" },
              { icon: <FaUpload className="w-6 h-6" />, text: "Upscaler" },
              { icon: <FaCog className="w-6 h-6" />, text: "Remove Background" },
            ].map((item, index) => (
              <li key={index} className="flex flex-col items-center cursor-pointer text-gray-500">
                {item.icon}
                <span className="text-sm mt-2">{item.text}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 mb-4" onClick={() => setSidebarOpen(true)}>
          <FaBars className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add New Product</h3>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm md:text-base">
            Upgrade to Pro
          </button>
        </div>

        {/* Upload Section */}
        <div className="bg-purple-100 p-6 rounded-lg text-center border-dashed border-2 border-purple-400 flex flex-col items-center">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm md:text-base">
            + Start Uploading
          </button>
          <p className="mt-2 text-gray-600 text-sm">Drag & drop anywhere to add product</p>
        </div>

        {/* Product List */}
        <h3 className="mt-6 text-lg font-semibold">
          My Products: <span className="text-gray-500 text-sm">Monthly Product Limit 0/1</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-3 shadow-md rounded-lg relative flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-150 sm:w-150 h-72 sm:h-72 object-cover rounded-md" />
              <span className="absolute top-2 left-2 bg-white text-gray-800 px-2 py-1 text-xs rounded-md shadow-md">
                Example product
              </span>
              <h4 className="mt-2 text-sm font-semibold text-center">{product.name}</h4>
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="text-xs text-gray-500">{product.subcategory}</p>
            </div>
          ))}
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer">
          💬
        </div>
      </main>
    </div>
  );
}
