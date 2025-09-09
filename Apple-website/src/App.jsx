
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Highlight from './components/Highlight'
import Model from './components/Model'
import * as Sentry from '@sentry/react';
import Feature from './components/Feature.jsx'
import HowItWork from './components/HowItWork.jsx'
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlight />
        <Model />
        <Feature />
        <HowItWork />
        <Footer />
      </main>
    </>
  )
}

export default Sentry.withProfiler(App);
