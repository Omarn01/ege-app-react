export interface ICountry {
  id: number
  country: string
  capital: string
  viewed: boolean
  know: boolean
}

export const country: ICountry[] = [
  {
    id: 1,
    country: 'Франция',
    capital: 'Париж',
    viewed: false,
    know: false,
  },
  {
    id: 2,
    country: 'Германия',
    capital: 'Берлин',
    viewed: false,
    know: false,
  },
  {
    id: 3,
    country: 'Швейцария',
    capital: 'Берн',
    viewed: false,
    know: false,
  },
  {
    id: 4,
    country: 'Испания',
    capital: 'Мадрид',
    viewed: false,
    know: false,
  },
  {
    id: 5,
    country: 'Великобритания',
    capital: 'Лондон',
    viewed: false,
    know: false,
  },
  {
    id: 6,
    country: 'Италия',
    capital: 'Рим',
    viewed: false,
    know: false,
  },
]
