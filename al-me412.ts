import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 200,
  toolCars: [
    {
      car_id: 'boxster',
      fullName: 'Porsche Boxster 25th',
      nickName: 'Boxster',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'roma',
      fullName: 'Ferrari Roma',
      nickName: '罗马',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'ares',
      fullName: 'Ares S1🔑',
      nickName: 'Ares',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '911gt1',
      fullName: 'Porsche 911 GT1 Evolution',
      nickName: '911GT1',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: '650s',
      fullName: 'Mclaren 650S GT3',
      nickName: '650S',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'evija',
      fullName: 'Lotus Evija',
      nickName: '电莲',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'elva',
      fullName: 'McLaren Elva',
      nickName: 'Elva',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },

    {
      car_id: 'me412',
      fullName: 'Chrysler ME412',
      nickName: 'ME412',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    '阶段 18 均不提供试驾，其他均可试驾（也需要一定星级）。',
    '免费通行证有 1 张图纸（和 1 张金卡），7月6日多人下里程碑有 3 张图纸，多人通行证可再获得 5 张图纸。',
  ],
  processRewords: [
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 138, reword: { type: 'seCard', count: 2 } },
    { conditions: 228, reword: { type: 'seCard', count: 3 } },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 70 },
            { type: 'credit', count: 75000 },
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'boxster', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 60 },
            { type: 'credit', count: 45000 },
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 60 },
            { type: 'credit', count: 45000 },
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
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 70 },
            { type: 'credit', count: 45000 },
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 70 },
            { type: 'credit', count: 45000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
            { type: 'credit', count: 100000 },
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
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 70 },
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
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 70 },
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
          toolCars: [{ car_id: 'boxster', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 70 },
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
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [{ type: 'credit', count: 150000 }],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [{ type: 'token', count: 30 }],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 110,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [{ type: 'credit', count: 100000 }],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 120,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt1', freeTry: true }],
          rewords: [{ type: 'credit', count: 100000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt1', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 90 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 135,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [{ type: 'credit', count: 100000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ares', freeTry: true }],
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
          toolCars: [{ car_id: 'ares', freeTry: true }],
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
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [{ type: 'token', count: 70 }],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 150,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [{ type: 'credit', count: 100000 }],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [{ type: 'credit', count: 50000 }],
        },
        {
          conditions: 11,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [{ type: 'token', count: 150 }],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 165,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 }
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 50000 }
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [{ type: 'token', count: 75}],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [{ type: 'seCard', count: 6 }],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 180,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 100000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [{ type: 'credit', count: 100000 }],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [{ type: 'credit', count: 50000 }],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 200,
      clubRewords: [
        { type: 'token', count: 288 },
        { type: 'sePart', count: 1 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [{ type: 'credit', count: 250000 }],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [{ type: 'credit', count: 566664 }],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1166664 },
            { type: 'token', count: 588 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [{ type: 'sePart', count: 1 }],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1388888 },
            { type: 'token', count: 1888 },
          ],
        },
      ],
    },

    {
      stage: 19,
      unlockConditions: 200,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
