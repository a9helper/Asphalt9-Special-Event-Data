import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 235,
  toolCars: [
    {
      car_id: 'clk',
      fullName: 'Mercedes-Benz CLK-GTR',
      nickName: 'CLK GTR',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'miura',
      fullName: 'Lamborghini Miura Concept🔑',
      nickName: 'Miura',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'm4gt3',
      fullName: 'BMW M4 GT3',
      nickName: 'M4 GT3',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '935',
      fullName: 'Porsche 935(2019)🔑',
      nickName: '935',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sennagtr',
      fullName: 'McLaren Senna GTR',
      nickName: '塞纳GTR',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '9x8',
      fullName: 'Peugeot 9x8',
      nickName: '9x8',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'centodieci',
      fullName: 'Bugatti Centodieci🔑',
      nickName: '白龙',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },

    {
      car_id: 'p72',
      fullName: 'De Tomaso P72🔑',
      nickName: 'P72',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    '钥匙 + 贴纸获取条件：完成 130 条件解锁第 11 关;',
    '也就是说，工具车至少 4 辆为 2 星，并且【CLK、Miura、M4GT3、935】中至少 2 辆为 2 星。例如：',
    '2 星的 CLK、Miura、Senna GTR、9x8;',
    '2 星的 CLK、Miura、935、M4GT3。',
  ],
  processRewords: [
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 138, reword: { type: 'seCard', count: 2 } },
    { conditions: 170, reword: { type: 'seCard', count: 5 } },
    { conditions: 210, reword: { type: 'seKey', count: 1 } },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 280, reword: { type: 'seSkin', count: 1 } },
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
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 115000 },
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
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'clk', freeTry: true }],
          rewords: [{ type: 'credit', count: 80000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'clk', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
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
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [{ type: 'credit', count: 80000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: true }],
          rewords: [{ type: 'credit', count: 100000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
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
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '935', freeTry: true }],
          rewords: [{ type: 'credit', count: 80000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '935', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 46,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 115000 },
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
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [{ type: 'credit', count: 175000 }],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 75,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [{ type: 'credit', count: 175000 }],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 90,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
          rewords: [{ type: 'credit', count: 175000 }],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 110,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 115000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 130,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'clk', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 290 },
            { type: 'credit', count: 500000 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 150,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 230 },
            { type: 'credit', count: 750000 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 170,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 230 },
            { type: 'credit', count: 500000 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 190,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 230 },
            { type: 'credit', count: 500000 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 205,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 210 },
            { type: 'credit', count: 500000 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 215,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '935', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 210 },
            { type: 'credit', count: 500000 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 225,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 100000 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 210 },
            { type: 'credit', count: 600000 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 240,
      clubRewords: [
        { type: 'token', count: 288 },
        { type: 'sePart', count: 1 },
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: false }],
          rewords: [
            { type: 'token', count: 400 },
            { type: 'credit', count: 800000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: false }],
          rewords: [
            { type: 'token', count: 750 },
            { type: 'credit', count: 3000000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: false }],
          rewords: [{ type: 'token', count: 1200 }],
        },
      ],
    },

    {
      stage: 19,
      unlockConditions: 240,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
