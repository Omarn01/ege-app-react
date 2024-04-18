import { useEffect, useState } from 'react'
import style from './LearnedCountry.module.scss'
import { ICountry, country } from '../../data/data'

import { AiOutlineLike } from 'react-icons/ai'
import { AiOutlineDislike } from 'react-icons/ai'

export default function LearnedCountry() {
  const [show, setShow] = useState(false)

  const [data, setData] = useState<Array<ICountry>>(country)

  const [i, setI] = useState(0)

  useEffect(() => {
    setData(() => data.filter(({ id }) => id !== i - 1))
  }, [i])

  const handlerNext = () => {
    setShow(false)

    setI(prev => (prev += 1))
    const updateData = data.filter(({ id }) => id !== i)
    console.log('update', updateData)
  }

  const onLike = () => {
    // setData((prev: ICountry) => )
  }

  console.log(country)

  return (
    <div className={style.learnedCountry}>
      <div className={style.info}>
        <p className={style.country}>{country[i].country}</p>
        {show && <p className={style.capital}>{country[i].capital}</p>}
      </div>
      {show && (
        <div className={style.rate}>
          <AiOutlineLike onClick={() => onLike()} className={style.like} />
          <AiOutlineDislike className={style.dislike} />
        </div>
      )}
      <div className={style.buttons}>
        <p onClick={() => setShow(true)} className={style.button}>
          Показать ответ
        </p>
        <p onClick={handlerNext} className={style.button}>
          Далее
        </p>
      </div>
    </div>
  )
}
