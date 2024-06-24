import React from 'react'
import './App.css'
import {Routes ,Route} from 'react-router-dom'
import Blog from './Components/Blog/Blog'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <>
    <div className="app">
   <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>} />
    </Routes>
    <Footer/>
    </div>
  
      
    </>
  )
}

export default App
