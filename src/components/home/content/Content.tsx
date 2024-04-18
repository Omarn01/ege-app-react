import style from './Content.module.scss'

import Task from './task/Task'

export default function Content() {
  return (
    <div className={style.content}>
      <Task />
    </div>
  )
}

{
  /* <h6>Интервальное запоминание</h6>

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
        </ul> */
}
