import { SED } from './type.d.ts'

const huayraRE: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'continentalgt',
      fullName: 'Bentley Continental GT Speed',
      nickName: '欧陆GT',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'elva',
      fullName: 'Mclaren Elva',
      nickName: 'Elva',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'eb110',
      fullName: 'Bugatti EB110🔑',
      nickName: 'EB110',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'ep9',
      fullName: 'NIO EP9',
      nickName: 'EP9',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'zondar',
      fullName: 'Pagani Zonda R🔑',
      nickName: 'Zonda R',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'barchetta',
      fullName: 'Pagani Zonda HP Barchetta🔑',
      nickName: 'Zonda HP',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'evija',
      fullName: 'Lotus Evija',
      nickName: '电莲花',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'huayrar',
      fullName: 'Pagani Huayra R',
      nickName: 'Huayra R',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    '五星 Pagani Zonda HP 可在第 15 关获得 Zonda HP 钥匙一把。',
    '六星 Pagani Zonda R 可在第 17 关获得 Zonda R 钥匙一把。',
  ],
  processRewords: [
    {
      conditions: 40,
      reword: {
        type: 'seCard',
        count: 1,
      },
    },
    {
      conditions: 70,
      reword: {
        type: 'seCard',
        count: 1,
      },
    },
    {
      conditions: 120,
      reword: {
        type: 'seCard',
        count: 1,
      },
    },
    {
      conditions: 225,
      reword: {
        type: 'seCard',
        count: 1,
      },
    },
    {
      conditions: 250,
      reword: {
        type: 'seCard',
        count: 1,
      },
    },
    {
      conditions: 360,
      reword: {
        type: 'sePart',
        count: 1,
      },
    },
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 10,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 15,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
          ],
        },
      ],
    },
    {
      unlockConditions: 25,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],

          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],

          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],

          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    {
      unlockConditions: 35,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ep9', freeTry: false }],

          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ep9', freeTry: false }],

          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
      ],
    },
    {
      unlockConditions: 50,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 375000 },
          ],
        },
      ],
    },
    {
      unlockConditions: 65,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],

          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],

          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],

          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    {
      unlockConditions: 70,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],

          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],

          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 37500 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],

          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    {
      unlockConditions: 85,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],

          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],

          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],

          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    {
      unlockConditions: 100,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'credit', count: 500000 },
          ],
        },
      ],
    },
    {
      unlockConditions: 120,
      clubRewords: [],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],

          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],

          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],

          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 140,
      clubRewords: [],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ep9', freeTry: false }],

          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ep9', freeTry: false }],

          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ep9', freeTry: false }],

          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 160,
      clubRewords: [],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],

          rewords: [{ type: 'token', count: 150 }],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],

          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],

          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 180,
      clubRewords: [],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],

          rewords: [{ type: 'token', count: 225 }],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],

          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],

          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 200,
      clubRewords: [],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],

          rewords: [{ type: 'token', count: 225 }],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],

          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],

          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 225,
      clubRewords: [],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],

          rewords: [{ type: 'token', count: 225 }],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],

          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],

          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],

          rewords: [
            { type: 'credit', count: 625000 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 250,
      clubRewords: [],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],

          rewords: [{ type: 'token', count: 225 }],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],

          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],

          rewords: [
            { type: 'credit', count: 625000 },
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],

          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 275,
      clubRewords: [],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [{ type: 'credit', count: 150000 }],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [{ type: 'credit', count: 2250000 }],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type: 'token', count: 750 },
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [{ type: 'credit', count: 600000 }],
        },
        {
          conditions: 14,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [{ type: 'credit', count: 2300000 }],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [],
        },
      ],
    },
    {
      unlockConditions: 300,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],

          rewords: [],
        },
      ],
    },
  ],
}
