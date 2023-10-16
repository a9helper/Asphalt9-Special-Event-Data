import { SED } from './type.d.ts'

const sed: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 150,
  toolCars: [
    {
      car_id: 'roma',
      fullName: 'Ferrari Roma',
      nickName: 'Roma',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'enzo',
      fullName: 'Ferrari Enzo',
      nickName: '恩佐',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'laferrari',
      fullName: 'Ferrari LaFerrari',
      nickName: '拉法',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'xxe',
      fullName: 'Ferrari 599XX EVO',
      nickName: '599XXE',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '488evo',
      fullName: 'Ferrari 488 Challenge EVO',
      nickName: '488EVO',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'f8',
      fullName: 'Ferrari F8 Tributo',
      nickName: 'F8',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sf90',
      fullName: 'Ferrari SF90 Stradale',
      nickName: 'SF90',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    '5星 XXE 可在阶段5获得 XXE 钥匙1把。',
    '6星488 EVO 可在阶段7获得 488 EVO 钥匙1把。',
    '关卡解锁条件已降低，原条件可参考2022年同款赛事。',
  ],
  processRewords: [
    {
      conditions: 50,
      reword: {
        type: 'seCard',
        count: 1,
      },
    },
    {
      conditions: 100,
      reword: {
        type: 'seCard',
        count: 1,
      },
    },
    {
      conditions: 150,
      reword: {
        type: 'seCard',
        count: 1,
      },
    },
    {
      conditions: 250,
      reword: {
        type: 'sePart',
        count: 1,
      },
    },
    {
      conditions: 300,
      reword: {
        type: 'sePart',
        count: 2,
      },
    },
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
        {
          type: 'token',
          count: 10,
        },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'roma',
              freeTry: false,
            },
          ],
          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'roma',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 100000,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'roma',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 100,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'roma',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 200000,
            },
            {
              type: 'seCard',
              count: 2,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 20,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
        {
          type: 'token',
          count: 10,
        },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'enzo',
              freeTry: false,
            },
          ],
          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'enzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 100000,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'enzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 100,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'enzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 200000,
            },
            {
              type: 'seCard',
              count: 2,
            },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'enzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 200,
            },
            {
              type: 'seCard',
              count: 3,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 30,
      clubRewords: [
        {
          type: 'credit',
          count: 15000,
        },
        {
          type: 'token',
          count: 15,
        },
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sf90',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 200000,
            },
            {
              type: 'token',
              count: 200,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sf90',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 60,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
        {
          type: 'token',
          count: 10,
        },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'laferrari',
              freeTry: false,
            },
          ],
          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'laferrari',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 125000,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'laferrari',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 100,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'laferrari',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 250000,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'laferrari',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 150,
            },
            {
              type: 'seCard',
              count: 2,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 80,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
        {
          type: 'token',
          count: 10,
        },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'xxe',
              freeTry: true,
            },
          ],
          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'xxe',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 125000,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'xxe',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 100,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'xxe',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 250000,
            },
            {
              type: 'seCard',
              count: 2,
            },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'xxe',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 200,
            },
            {
              type: 'seCard',
              count: 3,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 100,
      clubRewords: [
        {
          type: 'credit',
          count: 25000,
        },
        {
          type: 'token',
          count: 25,
        },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sf90',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 300000,
            }
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sf90',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 240,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sf90',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 3,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 125,
      clubRewords: [
        {
          type: 'credit',
          count: 20000,
        },
        {
          type: 'token',
          count: 20,
        },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: '488evo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 250000,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: '488evo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: '488evo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 125,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: '488evo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 500000,
            },
            {
              type: 'seCard',
              count: 2,
            },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: '488evo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 250,
            },
            {
              type: 'seCard',
              count: 3,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: '488evo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePart',
              count: 1,
            },
            {
              type: 'seCard',
              count: 4,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 150,
      clubRewords: [
        {
          type: 'credit',
          count: 20000,
        },
        {
          type: 'token',
          count: 20,
        },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'f8',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 250000,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'f8',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'f8',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 125,
            },
            {
              type: 'seCard',
              count: 1,
            },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'f8',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 500000,
            },
            {
              type: 'seCard',
              count: 2,
            },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'f8',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 250,
            },
            {
              type: 'seCard',
              count: 3,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'f8',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'sePart',
              count: 1,
            },
            {
              type: 'seCard',
              count: 4,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 180,
      clubRewords: [
        {
          type: 'credit',
          count: 50000,
        },
        {
          type: 'token',
          count: 50,
        },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sf90',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 150000,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sf90',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 300000,
            },
            {
              type: 'token',
              count: 120,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sf90',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 450000,
            },
            {
              type: 'token',
              count: 180,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sf90',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 300,
            },
            {
              type: 'sePart',
              count: 3,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 240,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: false }],
          rewords: [],
        },
      ],
    },
  ],
}

export default sed
