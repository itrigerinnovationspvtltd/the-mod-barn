
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Features from './Components/Features'
import Testimonals from './Components/Testimonials'
import Contact from './Components/Contact'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className='w-full overflow-hidden'>
        <Navbar/>
        <Home/>
        <Features/>
        <Gallery/>
        <Testimonals/>
        <Contact/>
        <Footer/>
        </div>
    </>
  )
}

export default App
