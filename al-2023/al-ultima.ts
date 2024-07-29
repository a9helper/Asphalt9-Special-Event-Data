import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 215,
  toolCars: [
    {
      car_id: 'emira',
      fullName: 'Lotus Emira',
      nickName: 'Emira',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'tvr',
      fullName: 'TVR Griffith',
      nickName: 'tvr',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'one77',
      fullName: 'Aston Martin One77',
      nickName: 'One77',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'sennagtr',
      fullName: 'McLaren Senna GTR',
      nickName: 'Senna GTR',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'valhalla',
      fullName: 'Aston Martin Valhalla Concept Car',
      nickName: '英灵殿',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'xj220',
      fullName: 'Jaguar XJ220S TWR',
      nickName: 'XJ220',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'valkyrie',
      fullName: 'Aston Martin Valkyrie',
      nickName: '女武神',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'ultima',
      fullName: 'Ultima RS',
      nickName: 'Ultima',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 2 } },
    { conditions: 150, reword: { type: 'seCard', count: 3 } },
    { conditions: 200, reword: { type: 'seCard', count: 5 } },
    { conditions: 250, reword: { type: 'seCard', count: 8 } },
    { conditions: 300, reword: { type: 'sePart', count: 1 } },
    { conditions: 350, reword: { type: 'seKey', count: 1 } },
    { conditions: 375, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    "特赛钥匙最划算方式：其他工具车几乎全满+3星One77+5星XJ220+1星女武神",
    "特赛钥匙次划算方式：其他工具车几乎全满+3星One77+4星XJ220+3星女武神"
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'emira', freeTry: true }],
          rewords: [{ type: 'credit', count: 30000 }],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'emira', freeTry: true }],
          rewords: [{ type: 'token', count: 160 }],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'emira', freeTry: true }],
          rewords: [{ type: 'seCard', count: 1 }],
        },
      ],
    },
    {
      unlockConditions: 10,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tvr', freeTry: true }],
          rewords: [{ type: 'credit', count: 30000 }],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'tvr', freeTry: true }],
          rewords: [{ type: 'token', count: 160 }],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tvr', freeTry: true }],
          rewords: [{ type: 'seCard', count: 1 }],
        },
      ],
    },
    {
      unlockConditions: 20,
      clubRewords: [],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: true }],
          rewords: [
            { type: 'credit', count: 40000 },
            { type: 'token', count: 160 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 35,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [{ type: 'credit', count: 30000 }],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [
            { type: 'token', count: 160 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 50,
      clubRewords: [],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'emira', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'emira', freeTry: true }],
          rewords: [{ type: 'credit', count: 200000 }],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'emira', freeTry: true }],
          rewords: [{ type: 'token', count: 200 }],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'emira', freeTry: true }],
          rewords: [{ type: 'seCard', count: 1 }],
        },
      ],
    },
    {
      unlockConditions: 60,
      clubRewords: [],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tvr', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'tvr', freeTry: true }],
          rewords: [{ type: 'credit', count: 200000 }],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tvr', freeTry: true }],
          rewords: [{ type: 'token', count: 200 }],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tvr', freeTry: true }],
          rewords: [{ type: 'seCard', count: 1 }],
        },
      ],
    },
    {
      unlockConditions: 70,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [{ type: 'credit', count: 50000 }],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [{ type: 'token', count: 200 }],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [{ type: 'seCard', count: 2 }],
        },
      ],
    },
    {
      unlockConditions: 85,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 105,
      clubRewords: [],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'credit', count: 266664 }],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'token', count: 300 }],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'seCard', count: 2 }],
        },
      ],
    },
    {
      unlockConditions: 115,
      clubRewords: [],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'credit', count: 60000 }],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'seCard', count: 1 }],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'credit', count: 266664 }],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'credit', count: 375 }],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'seCard', count: 2 }],
        },
      ],
    },
    {
      unlockConditions: 125,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [{ type: 'credit', count: 60000 }],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [{ type: 'seCard', count: 1 }],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [{ type: 'credit', count: 266664 }],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [{ type: 'token', count: 375 }],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [{ type: 'seCard', count: 2 }],
        },
      ],
    },
    {
      unlockConditions: 140,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 380 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      unlockConditions: 155,
      clubRewords: [],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'credit', count: 80000 }],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'token', count: 210 }],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'seCard', count: 1 }],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 165,
      clubRewords: [],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [{ type: 'credit', count: 80000 }],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [{ type: 'token', count: 280 }],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 377776 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [{ type: 'seCard', count: 2 }],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [{ type: 'sePart', count: 1 }],
        },
      ],
    },
    {
      unlockConditions: 175,
      clubRewords: [],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [{ type: 'credit', count: 100000 }],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [{ type: 'token', count: 320 }],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [{ type: 'seCard', count: 2 }],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 755552 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [{ type: 'sePart', count: 1 }],
        },
      ],
    },
    {
      unlockConditions: 190,
      clubRewords: [],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'token', count: 400 }],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'seCard', count: 2 }],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'credit', count: 566664 }],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'seCard', count: 3 }],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'sePart', count: 1 }],
        },
      ],
    },
    {
      unlockConditions: 215,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'credit', count: 88888 }],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'token', count: 500 }],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'seCard', count: 2 }],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 588888 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'sePart', count: 1 }],
        },
      ],
    },
    {
      unlockConditions: 225,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: false }],
          rewords: [{ type: 'credit', count: 88888 }],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: false }],
          rewords: [{ type: 'seCard', count: 2 }],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: false }],
          rewords: [{ type: 'token', count: 800 }],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: false }],
          rewords: [{ type: 'seCard', count: 5 }],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 888888 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 1888888 },
          ],
        },
      ],
    },
    {
      unlockConditions: 250,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultima', freeTry: false }],
          rewords: [
          ],
        },
      ],
    },
  ],
}

export default template
