import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Showcase from '../components/GraphicsDesign/Showcase/Showcase'
import Cards from '../components/GraphicsDesign/Cards/Cards'
import Cat from '../components/GraphicsDesign/Categories/Cat'

const GraphicsDesign = () => {
  return (
    <div>
       <Navbar />
       <Showcase />
       <Cards />
       <Cat />
       <Footer/>
    </div>
  )
}

export default GraphicsDesign
