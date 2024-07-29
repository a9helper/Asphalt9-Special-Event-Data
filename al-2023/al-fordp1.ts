import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 210,
  toolCars: [
    {
      car_id: 'barchetta',
      fullName: 'Pagani Zonda HP Barchetta🔑',
      nickName: 'Barchetta',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'huayrar',
      fullName: 'Pagani Huayra R',
      nickName: 'Huayra R',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'veyron',
      fullName: 'Bugatti Veyron 16.4 Grand Sport Vitesse',
      nickName: '威龙',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'spano',
      fullName: 'Spania GTA 2015 GTA Spano',
      nickName: 'Spano',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'senna',
      fullName: 'McLaren Senna',
      nickName: '塞纳',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'mbbs',
      fullName: 'Mercedes-Benz Mercedes-AMG GT Black Series🔑',
      nickName: '梅奔BS',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'gtr-50',
      fullName: 'Nissan GTR-50 Italdesign',
      nickName: 'GTR-50',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'battista',
      fullName: 'Automobili Pininfarina Battista',
      nickName: '秋王',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },


    
  {
    car_id: 'fordp1',
    fullName: 'Ford Team Fordzilla P1',
    nickName: '福特P1',
    isKeyCar: false,
    rankLimits: [],
    star: 6,
  },
    
  ],
  notes: [
    
  ],
  processRewords: [
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 128, reword: { type: 'seCard', count: 2 } },
    { conditions: 228, reword: { type: 'seCard', count: 3 } },
    { conditions: 238, reword: { type: 'seSkin', count: 1 } },
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 88 },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 98 },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 98 },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 98 },
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 98 },
            { type: 'credit', count: 60000 },
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
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
            { type: 'credit', count: 100000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 62,
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
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 98 },
            { type: 'credit', count: 40000 },
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
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 98 },
            { type: 'credit', count: 40000 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 85,
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
          toolCars: [{ car_id: 'gtr-50', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 98 },
            { type: 'credit', count: 40000 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 95,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
            { type: 'credit', count: 125000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 108,
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
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'token', count: 105 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 125,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 140,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 155,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 170,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'token', count: 105 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 185,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'token', count: 105 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
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
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 200,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 100000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 220,
      clubRewords: [
        { type: 'token', count: 288 },
        { type: 'sePart', count: 1 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'token', count: 3*68 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 750000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'token', count: 688 },
            { type: 'credit', count: 1000000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1750000 },
            { type: 'token', count: 888*2 },
          ],
        },
      ],
    },

    {
      stage: 19,
      unlockConditions: 222,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
