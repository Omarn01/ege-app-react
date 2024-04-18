import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/homepage/Home'
import Menu from './components/pages/menuPage/Menu'
import Navigation from './components/ui/navigation/Navigation'

import LearnCountry from './components/pages/country/LearnCountry'
import LearnedCountry from './components/pages/country/LearnendCountry'
import TestCountry from './components/pages/country/TestCountry'

import style from './App.module.scss'

function App() {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/learnCountry' element={<LearnCountry />} />
        <Route path='/learnedCountry' element={<LearnedCountry />} />
        <Route path='/testCountry' element={<TestCountry />} />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App
