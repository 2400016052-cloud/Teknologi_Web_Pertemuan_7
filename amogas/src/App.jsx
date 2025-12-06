import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/navbar.jsx'
import RuangEkspresi from './components/Section1.jsx'
import Footer from './components/Footer.jsx'
import FeatureSection from './components/Section2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
        <NavigationBar />
        <RuangEkspresi />
      </div>
      <div className="App">
        <h1 className="text-4xl font-bold text-black">Four Pillar of Suffering</h1>
        <p>the Four Lord Souls (Gwyn, Nito, Witch of Izalith, Furtive Pygmy)</p>
      </div>
      <div>
        <FeatureSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
