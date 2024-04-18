import { useState } from 'react'
import TaskNumber from '../task-number/TaskNumber'
import style from './Task.module.scss'
import TaskContent from './task-content/TaskContent'

export default function Task() {
  const [show, setShow] = useState(false)

  const handlerShow = () => {
    setShow(prev => !prev)
  }
  console.log(show)
  return (
    <div className={style.task}>
      <TaskNumber
        onClick={handlerShow}
        clueText='Страны и их столицы'
        number={17}
      />
      {show && <TaskContent />}
    </div>
  )
}
