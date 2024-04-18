import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/homepage/Home'
import Menu from './components/pages/menuPage/Menu'
import Navigation from './components/ui/navigation/Navigation'

import style from './App.module.scss'

function App() {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App
