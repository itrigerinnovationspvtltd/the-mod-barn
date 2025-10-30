
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Features from './Components/Features'
import Testimonals from './Components/Testimonials'
import Contact from './Components/Contact'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import GoogleReview from './Components/GoogleReview'

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
        <GoogleReview/>
        <FAQ/>
        <Footer/>
        </div>
    </>
  )
}

export default App
