import { SED } from '../type.d.ts'

export const event: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'z4',
      fullName: 'BMW Z4 LCI E89',
      nickName: 'Z4',
      star: 3,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'cgs',
      fullName: 'Chevrolet Corvette Grand Sport',
      nickName: '五菱',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'j50',
      fullName: 'Ferrari J50',
      nickName: 'J50',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'slr',
      fullName: 'Mercedis-Benz SLR McLaren',
      nickName: 'SLR',
      star: 5,
      isKeyCar: false,
      rankLimits: [2100, 3000, 3300, 3850], //1,3,3,5
    },
    {
      car_id: 'evo',
      fullName: 'Lamborghini Huracan Evo Spyder',
      nickName: '小牛',
      star: 5,
      isKeyCar: false,
      rankLimits: [2200, 3000, 3500, 3900], //1,3,3,5
    },
    {
      car_id: '570s',
      fullName: 'McLaren 570S Spider',
      nickName: '570S',
      star: 6,
      isKeyCar: false,
      rankLimits: [2600, 3300, 3600, 3750], //2,4,5,5
    },
    {
      car_id: 'avj',
      fullName: 'Lamborghini Aventador J',
      nickName: 'AVJ',
      star: 5,
      isKeyCar: false,
      rankLimits: [2900, 3300, 3700, 3950], //1,3,4,5
    },
    {
      car_id: 'aperta',
      fullName: 'Ferrari LaFerrari Aperta',
      nickName: '黑拉法',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 75, reword: { type: 'seCard', count: 1 } },
    { conditions: 150, reword: { type: 'seCard', count: 1 } },
    { conditions: 250, reword: { type: 'seCard', count: 1 } },
    { conditions: 400, reword: { type: 'sePart', count: 1 } },
    { conditions: 450, reword: { type: 'sePart', count: 1 } },
    { conditions: 500, reword: { type: 'sePart', count: 1 } },
    { conditions: 550, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [],
  stages: [
  ],
}
