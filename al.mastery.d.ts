

interface ToolCar{
  car_id:string
  fullName:string
  shortName:string
  // rankLimits: number[]  // 客户端计算
  carClass: string
  star: number
  rank: number
  isKeyCar: boolean
  rewardBP: number
  // isMasteryCar: boolean  // 客户端计算

}
interface ProcessReward   {
  conditions: number
  rewards: reward[]
}
interface reward   {
  type: 'seCard' | 'seKey' | 'token' | 'sePack' | 'sePart' | 'credit' | 'seSkin' | 'seasonToken'
  count: number
}

interface Mission{
  toolCarId: string
  rankList: number[]
}


interface Chapter{
  targetCarId: string
  unlockConditions: number
  missions: Mission[]
  processRewards: ProcessReward[]


}

export interface MasteryEvent{
  toolCars:ToolCar[]
  notes:string[]
  processRewards:ProcessReward[]
  chapters:Chapter[]
}
