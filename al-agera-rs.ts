import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 270,
  toolCars: [
    {
      car_id: 'project8',
      fullName: 'Jaguar XE SV Project 8',
      nickName: '捷豹XE',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },

    // emoji key=🔑
    {
      car_id: '004c',
      fullName: 'Glickenhaus 004C🔑',
      nickName: '004C',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '718gt4',
      fullName: 'Porsche 718 Cayman GT4 Clubsport🔑',
      nickName: '718GT4',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'mk2',
      fullName: 'Ford GT MK II🔑',
      nickName: 'MK2',
      isKeyCar: true,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'valkyrie',
      fullName: 'Aston Martin Valkyrie',
      nickName: '女武神',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '007s',
      fullName: 'Glickenhaus 007S🔑',
      nickName: '007S',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'imola',
      fullName: 'Pagani Imola',
      nickName: '伊莫拉',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'divo',
      fullName: 'Bugatti Divo',
      nickName: 'Divo',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },

    {
      car_id: 'agerars',
      fullName: 'Koenigsegg Agera RS',
      nickName: 'Agera RS',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "Imola 和阶段 18 均不提供试驾，其他均可试驾（也需要一定星级）。",
    "6月8日多人下里程碑有 3 张图纸，多人通行证可再获得 2 张图纸。",
  ],
  processRewords: [
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 138, reword: { type: 'seCard', count: 2 } },
    { conditions: 228, reword: { type: 'seCard', count: 5 } },
    { conditions: 268, reword: { type: 'seSkin', count: 1 } },
    { conditions: 308, reword: { type: 'sePart', count: 1 } },
  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 48,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 70 },
            { type: 'credit', count: 80000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 110 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 70,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 110 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 80,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 110 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 90,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 100000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 100,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [{ type: 'credit', count: 60000 }],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [{ type: 'seCard', count: 1 }],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [{ type: 'token', count: 120 }],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 108,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [{ type: 'credit', count: 60000 }],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 115,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [{ type: 'credit', count: 60000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [{ type: 'token', count: 70 }],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 120,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [{ type: 'credit', count: 60000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 120 },
            { type: 'token', count: 70 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 128,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [{ type: 'credit', count: 60000 }],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [{ type: 'credit', count: 50000 }],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [{ type: 'token', count: 200 }],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [{ type: 'seCard', count: 3 }],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [{ type: 'token', count: 150 }],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 135,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valkyrie', freeTry: true },
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [{ type: 'credit', count: 60000 }],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valkyrie', freeTry: true },
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [{ type: 'credit', count: 50000 }],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valkyrie', freeTry: true },
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [{ type: 'token', count: 50 }],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [{ type: 'token', count: 150 }],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'token', count: 150 }],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [{ type: 'seCard', count: 5 }],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [{ type: 'seCard', count: 5 }],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 145,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 100000 },
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: true }],
          rewords: [{ type: 'credit', count: 60000 }],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: true }],
          rewords: [{ type: 'credit', count: 50000 }],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: true }],
          rewords: [{ type: 'token', count: 200 }],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: true }],
          rewords: [{ type: 'seCard', count: 3 }],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: true }],
          rewords: [{ type: 'token', count: 150 }],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 150,
      clubRewords: [
        { type: 'token', count: 288 },
        { type: 'sePart', count: 1 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: false }],
          rewords: [{ type: 'credit', count: 400000 }],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: false }],
          rewords: [{ type: 'credit', count: 564000 }],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1464000 },
            { type: 'token', count: 688 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: false }],
          rewords: [{ type: 'sePart', count: 1 }],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1690000 },
            { type: 'token', count: 1888 },
          ],
        },
      ],
    },

    {
      stage: 19,
      unlockConditions: 150,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
