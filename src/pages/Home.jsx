import React from 'react' 
import About from '../components/About'
import Blog from '../components/Blog'
import ImgCarousel from '../components/Carousel'
import Services from '../components/Services'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
 

const Home = () => {
  return (
    <>
  <Navbar/>
  <ImgCarousel/>
  <About/>
  <Services/>
  {/* <Testimonial/>
  <Team/>
  <Blog/>
      <Footer/> */}
   
    </>
  )
}

export default Home