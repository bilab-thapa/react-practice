import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Test from './pages/Test/Test'
import Effect from './pages/Test/Effect'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/contact' element = {<Contact />}/>
      <Route path='/about' element = {<About />}/>
      <Route path='/test' element = {<Test/>}/>
      <Route path='/effect' element = {<Effect/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App
