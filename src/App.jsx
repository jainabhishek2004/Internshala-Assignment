import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/Herosection";
import SiteHeader from "./components/sideHeader";
import HomePage from "../src/pages/HomePage";
import Login from "./pages/login"; // Import the Login page

function App() {
  return (
    
    <>
    <HomePage></HomePage>
    
    </>
  );
}

export default App;
