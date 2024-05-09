import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeComponent from './pages/HomeComponent'
import CssBaseline from '@mui/material/CssBaseline';
import ProfileComponent from './pages/ProfileComponent';
import { Container } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/FooterComponent'
import ServiceComponent from './pages/ServiceComponent'
import AboutComponent from './pages/AboutComponent'
import ContactComponent from './pages/ContactComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <HomeComponent />
        <Container>
          <ProfileComponent />
          <AboutComponent/>
          <ServiceComponent />
          <ContactComponent/>
        </Container>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
