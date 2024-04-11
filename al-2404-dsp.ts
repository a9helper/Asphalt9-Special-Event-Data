import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 170,
  toolCars: [
    {
      car_id: 'ds',
      fullName: 'DS Automobiles DS E-Tense',
      nickName: 'DS',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: 'g60',
      fullName: 'Ginetta G60',
      nickName: 'G60',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'arashaf10',
      fullName: 'Arash AF10',
      nickName: '阿拉什',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'monza',
      fullName: 'Ferrari Monza SP1',
      nickName: 'Monza',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'e1400',
      fullName: 'Ford Mustang Mach-E1400🔑',
      nickName: '电马',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'mc12',
      fullName: 'Maserati MC12',
      nickName: 'MC12',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    
    



    {
      car_id: 'dsp',
      fullName: 'DS Automobiles DS E-Tense Performance',
      nickName: 'DSP',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "获取贴纸条件略难。",
    "Performance 图纸前置来源：签到 2 张。",
    "第 10 关，可达到 119 条件，单人和白嫖村共 26 张，进度 5 张，合计 33 张。",
    "第 11 关，可达到 134 条件，单人和白嫖村共 30 张，进度 5 张，合计 37 张，可解锁。",
    "第 13 关，可达到 170 条件抽包。",
    "第 15 关开启时为通行证结束时、下赛季开启时。如果不出意外还会赶上疯狂维护星期四。据此规划手中的 C 升星卡防止红币！"

  ],
  processRewords: [
    { conditions: 38, reword: { type: 'seCard', count: 1 } },
    { conditions: 58, reword: { type: 'seCard', count: 2 } },
    { conditions: 88, reword: { type: 'seCard', count: 2 } },
    { conditions: 138, reword: { type: 'seCard', count: 3 } },
    { conditions: 188, reword: { type: 'seCard', count: 3 } },
    { conditions: 212, reword: { type: 'seSkin', count: 1 } },
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
          toolCars: [{ car_id: 'dsp', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ds', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 25,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 30,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 35,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
            { type: 'credit', count: 75000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 45,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'e1400', freeTry: true }],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 55,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 65,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ds', freeTry: true }],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 75,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 135000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 85,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions:3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 100,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 70 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'seCard', count: 3 },
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
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'token', count: 105 },
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 130,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'e1400', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'e1400', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'e1400', freeTry: true }],
          rewords: [
            { type: 'token', count: 105 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'e1400', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'e1400', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
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
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'token', count: 105 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 175,
      clubRewords: [
        { type: 'token', count: 288 },
        { type: 'sePart', count: 1 },
      ],
      missions: [
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: false }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'sePart', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: false }],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'credit', count: 1000000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: false }],
          rewords: [
            { type: 'token', count: 750 },
          ],
        },
      ],
    },
    
    {
      stage: 17,
      unlockConditions: 185,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: false }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
