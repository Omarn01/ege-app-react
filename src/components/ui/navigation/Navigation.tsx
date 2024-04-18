import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5'
import style from './Navigation.module.scss'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className={style.navigation}>
      <ul className={style.list}>
        <li className={style.item}>
          <IoHomeOutline />
          <Link to='/'>Главная</Link>
        </li>
        <li className={style.item}>
          <IoSettingsOutline />
          <Link to='/menu'>Меню</Link>
        </li>
      </ul>
    </div>
  )
}
