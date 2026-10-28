import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Showcase from '../components/AppDesign/Showcase/Showcase'
import Cards from '../components/AppDesign/Cards/Cards'
import Cat from '../components/AppDesign/Categories/Cat'

const AppDesign = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Cards />
      <Cat />
       <Footer />
    </div>
  )
}

export default AppDesign
