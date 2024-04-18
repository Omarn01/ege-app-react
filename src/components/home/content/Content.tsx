import { Link } from 'react-router-dom'
import style from './Content.module.scss'

import { GoPlusCircle } from 'react-icons/go'

export default function Content() {
  return (
    <div className={style.content}>
      <div className={style.task}>
        <h3>Задание №17</h3>
        <h6>Интервальное запоминание</h6>

        <ul className={style.area}>
          <li className={style.item}>
            <Link to={'/newLearn'}>
              <GoPlusCircle />
              <div className={style.text}>
                <p className={style.newLearn}>
                  Учить новые страны и их столицы
                </p>
                <p>Выучено сегодня: 0 из 10</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
