import './App.css'
import Contact from './Components/Contact'
import Features from './Components/Features'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Testimonals from './Components/Testimonials'

function App() {

  return (
    <>
      <div className='w-full overflow-hidden'>
        <Navbar/>
        <Home/>
        <Features/>
        <Testimonals/>
        <Contact/>
        </div>
    </>
  )
}

export default App
