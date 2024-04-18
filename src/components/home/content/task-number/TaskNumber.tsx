import { useState } from 'react'
import style from './TaskNumber.module.scss'
import { GoQuestion } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'

interface IProps {
  number: number
  clueText: string
  onClick: () => void
}

export default function TaskNumber({ number, clueText, onClick }: IProps) {
  const [clue, setClue] = useState(false)

  return (
    <>
      <div onClick={() => onClick()} className={style.taskNumber}>
        <IoIosArrowDown />
        <h3>Задание №{number}</h3>
        <GoQuestion onClick={() => setClue(prev => !prev)} />
        {clue && <div className={style.clue}>{clueText}</div>}
      </div>
    </>
  )
}
