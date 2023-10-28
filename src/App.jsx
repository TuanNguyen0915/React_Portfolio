import { Routes, Route } from 'react-router-dom'

// pages
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Project from './pages/Project/Project'


// css
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
