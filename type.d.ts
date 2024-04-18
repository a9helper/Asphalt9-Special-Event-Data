interface UUID {
  uuid?: string
}

interface SEToolCar {
  car_id: string
  fullName: string
  nickName: string
  isKeyCar: boolean
  rankLimits: number[]
  star: number
}

interface reword extends UUID {
  type: 'seCard' | 'seKey' | 'token' | 'sePack' | 'sePart' | 'credit' | 'seSkin' | 'seasonToken'
  count: number
}

type rewordType = reword['type']

interface processReword extends UUID {
  conditions: number
  reword: reword
}

interface join {
  star: number
  rank: number
}

interface toolCar {
  car_id: string
  freeTry: boolean
}

interface mission extends UUID {
  toolCars: toolCar[]
  join: join
  conditions: number
  rewords: reword[]
}

interface stage extends UUID {
  stage?: number
  clubRewords: reword[]
  unlockConditions: number
  missions: mission[]
}

export interface SED {
  havePack: boolean
  haveClubRewords: boolean
  haveSkin: boolean
  havePackConditions: boolean
  haveEventKey: boolean
  packConditions: number
  dataTableImage?: string
  toolCars: SEToolCar[]
  notes: string[]
  processRewords: processReword[]
  stages: stage[]
}
