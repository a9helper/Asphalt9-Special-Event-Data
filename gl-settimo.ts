import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 145,
  toolCars: [
    {
      car_id: 'project8',
      fullName: 'Jaguar XE SV Project 8',
      nickName: 'Project 8',
      star: 5,
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
      car_id: 'r390',
      fullName: 'Nissan R390GT1',
      nickName: 'R390',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: '004c',
      fullName: 'Glickenhaus 004C',
      nickName: '004C',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'bt62',
      fullName: 'Brabham BT62',
      nickName: 'BT62',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'w12',
      fullName: 'Volkswagen W12 Coupe',
      nickName: 'W12',
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
      car_id: 'settimo',
      fullName: 'Inferno AutoMobili Settimo Cerchio',
      nickName: 'Settimo',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 25, reword: { type: 'seCard', count: 1 } },
    { conditions: 70, reword: { type: 'seCard', count: 1 } },
    { conditions: 120, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'sePart', count: 1 } },
    { conditions: 290, reword: { type: 'sePart', count: 1 } },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
  ],
  notes: [
    '阶段12使用满星BT62可获得BT62钥匙1把。',
    '阶段16使用满星W12可获得W12钥匙1把。',
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 160000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },

    {
      unlockConditions: 10,
      clubRewords: [],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 160000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },

    {
      unlockConditions: 20,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'settimo', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },

    {
      unlockConditions: 30,
      clubRewords: [],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },

    {
      unlockConditions: 40,
      clubRewords: [],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },

    {
      unlockConditions: 50,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'settimo', freeTry: true }],
          rewords: [
            { type: 'token', count: 160 },
            { type: 'credit', count: 400000 },
          ],
        },
      ],
    },

    {
      unlockConditions: 65,
      clubRewords: [],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },

    {
      unlockConditions: 70,
      clubRewords: [],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 320000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },

    {
      unlockConditions: 85,
      clubRewords: [],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 320000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },

    {
      unlockConditions: 100,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'settimo', freeTry: true }],
          rewords: [
            { type: 'token', count: 240 },
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
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 160000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 240000 },
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
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 160000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 240000 },
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
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 6 },
            { type: 'credit', count: 320000 },
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
          toolCars: [{ car_id: 'project8', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 6 },
            { type: 'credit', count: 320000 },
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
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 8 },
            { type: 'credit', count: 320000 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },

    {
      unlockConditions: 230,
      clubRewords: [],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 480000 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 600000 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },

    {
      unlockConditions: 260,
      clubRewords: [],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 480000 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 600000 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },

    {
      unlockConditions: 290,
      clubRewords: [],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'settimo', freeTry: false }],
          rewords: [{ type: 'credit', count: 50000 }],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'settimo', freeTry: false }],
          rewords: [{ type: 'credit', count: 100000 }],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'settimo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'token', count: 800 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'settimo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'settimo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 600000 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'settimo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 800000 },
            { type: 'sePart', count: 1 },
          ],
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
          toolCars: [{ car_id: 'settimo', freeTry: false }],
          rewords: [],
        },
      ],
    },
  ],
}

export default template
