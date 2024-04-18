import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/homepage/Home'
import Menu from './components/pages/menuPage/Menu'
import Navigation from './components/ui/navigation/Navigation'

import style from './App.module.scss'
import Learn from './components/pages/country/Learn'
import Learning from './components/pages/country/Learning'
import Test from './components/pages/country/Test'

function App() {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/learnedCountry' element={<Learning />} />
        <Route path='/testCountry' element={<Test />} />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App
