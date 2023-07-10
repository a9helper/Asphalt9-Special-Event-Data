import { SED } from './type.d.ts'

const naranSE: SED = {
  havePack: true,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 225,
  toolCars: [
    {
      car_id: 'arashaf10',
      fullName: 'Arash AF10',
      nickName: 'AF10',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'victor',
      fullName: 'Aston Martin Victor',
      nickName: '维克多',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '007s',
      fullName: 'SCG 007S🔑',
      nickName: '007S',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
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
      car_id: 'huracanste',
      fullName: 'Lamborghini Huracan Super Trofeo Evo🔑',
      nickName: '小小牛',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '488gtbevo',
      fullName: 'Ferrari 488 GTB Challenge EVO🔑',
      nickName: '488EVO',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sc18',
      fullName: 'Lamborghini SC18🔑',
      nickName: 'SC18',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'naran',
      fullName: 'Naran Hyper Coupe',
      nickName: '纳兰',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [],
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
        count: 2,
      },
    },
    {
      conditions: 150,
      reword: {
        type: 'seCard',
        count: 3,
      },
    },
    {
      conditions: 200,
      reword: {
        type: 'seCard',
        count: 5,
      },
    },
    {
      conditions: 250,
      reword: {
        type: 'seCard',
        count: 8,
      },
    },
    {
      conditions: 300,
      reword: {
        type: 'sePart',
        count: 1,
      },
    },
    {
      conditions: 405,
      reword: {
        type: 'sePart',
        count: 3,
      },
    },
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [{ type: 'token', count: 50 }],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 10,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [{ type: 'token', count: 50 }],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 25,
      clubRewords: [],
      missions: [

        {
          conditions:21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'token', count: 225 },
          ],
        },
      ],
    },
    {
      unlockConditions: 45,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 60,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 80,
      clubRewords: [],
      missions: [
        {
          conditions:21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'token', count: 225 },
          ],
        },
      ],
    },
    {
      unlockConditions: 95,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 110,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '488gtbevo', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '488gtbevo', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '488gtbevo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '488gtbevo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '488gtbevo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 120,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 140,
      clubRewords: [],
      missions: [
        {
          conditions:21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'token', count: 225 },
          ],
        },
      ],
    },
    {
      unlockConditions: 160,
      clubRewords: [],
      missions: [
        {
          conditions:11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 253 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 175,
      clubRewords: [],
      missions: [

        {
          conditions:11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'token', count: 253 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 185,
      clubRewords: [],
      missions: [
        {
          conditions:14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 253 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      unlockConditions: 195,
      clubRewords: [],
      missions: [
        {
          conditions:17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '488gtbevo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 253 },
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      unlockConditions: 205,
      clubRewords: [],
      missions: [
        {
          conditions:17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 313 },
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      unlockConditions: 215,
      clubRewords: [],
      missions: [
        {
          conditions:19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 438 },
            { type: 'seCard', count: 8 },
          ],
        },
      ],
    },
    {
      unlockConditions: 225,
      clubRewords: [],
      missions: [
        {
          conditions:19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 438 },
            { type: 'seCard', count: 8 },
          ],
        },
      ],
    },
    {
      unlockConditions: 235,
      clubRewords: [],
      missions: [
        {
          conditions:10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions:3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 266664 },
          ],
        },
        {
          conditions:4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 497776 },
            { type: 'token', count: 976 },
          ],
        },        
        {
          conditions:2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 388888 },
            { type: 'seSkin', count: 1 },
          ],
        },
        {
          conditions:3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 588888 },
            { type: 'sePart', count: 2 },
          ],
        },    
        {
          conditions:4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 888888 },
            { type: 'sePart', count: 3 },
          ],
        },            
      ],
    },

    {
      unlockConditions: 245,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],

          rewords: [],
        },
      ],
    },
  ],
}
