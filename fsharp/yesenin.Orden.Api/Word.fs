namespace yesenin.Orden

type Word = {
    Id: string
    Value: string
}

type WordCriteria =
  | All

type WordFind = WordCriteria -> Word[]

