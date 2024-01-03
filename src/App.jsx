/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css'
import About from './components/main/about/About'
import Sidebar from './components/sidebar/Sidebar'
import ContactMe from './components/main/contactMe/ContactMe'
import cross from '/cross.png'
import hamburger from '/ham.png'

function App() {
  const [page, setPage] = useState('/portfolio-amisha')
  const [show, setShow] = useState(false)
  const [sidebarClass, setSidebarClass] = useState('')

  useEffect(() => {
    let path = window.location.pathname;
    if (path === '/portfolio-amisha' || path === '/portfolio-amisha/') {
      setPage('about');
    } else if (path === '/portfolio-amisha/contact') {
      setPage('contact');
    }
  }, [])

  return (
    <div className='container'>
      <Sidebar setPage={setPage} show={show} sidebarClass={sidebarClass}/>
      <div className='hamburger'>
        <img src={hamburger} alt='hamburger' width={'23px'} onClick={() => setShow(!show)}/>
      </div>
      {page === 'about' && <About />}
      {page === 'contact' && <ContactMe />}
    </div>

  )
}

export default App
