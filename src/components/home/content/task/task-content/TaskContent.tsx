import { Link } from 'react-router-dom'
import style from './TaskContent.module.scss'

import { GoPlusCircle } from 'react-icons/go'

export default function TaskContent() {
  return (
    <div className={style.taskContent}>
      <Link to={'/learnCountry'} className={style.paragraph}>
        <GoPlusCircle />
        <h3>Выучить новые страны и их столицы</h3>
      </Link>

      <Link to={'/learnedCountry'} className={style.paragraph}>
        <GoPlusCircle />
        <h3>Список выученных столиц</h3>
      </Link>

      <Link to={'/testCountry'} className={style.paragraph}>
        <GoPlusCircle />
        <h3>Тест по столицам</h3>
      </Link>
    </div>
  )
}
