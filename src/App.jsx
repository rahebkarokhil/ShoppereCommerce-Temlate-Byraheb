import React from 'react'
import Navbar from './Commponint/Navebar/Navbar'
import House from './Commponint/House/House'
import Products from './Commponint/Products/Products'
import Heroslider from './Commponint/Hero/Heroslider'
import Trending from './Commponint/Trending/Trending.jsx'
import Testimonials from './Commponint/Testimonials/Testimonials.jsx'
import Articles from './Commponint/Articles/Articles.jsx'
import Footer from './Commponint/Footer/Footer.jsx'



function App() {
  return (
    <div className=" font-poppins  ">
      <Navbar />\
      <Heroslider />
      <div className="container mx-auto">
        <House />
        <Products />
        <Trending />
        <Testimonials />
        <Articles />
        <Footer /> 
      </div>
    </div>
  );
}

export default App
