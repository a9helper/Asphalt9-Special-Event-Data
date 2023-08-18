import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    
    {
      car_id: 'asterion',
      fullName: 'Lamborghini Asterion',
      nickName: '蓝牛',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'sv',
      fullName: 'Lamborghini Aventador SV Coupe',
      nickName: 'SV',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'sc18',
      fullName: 'Lamborghini SC18',
      nickName: 'SC18',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },

    {
      car_id: 'revuelto',
      fullName: 'Lamborghini Revuelto',
      nickName: 'Revuelto',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 5, reword: { type: 'credit', count: 15000 } },
    { conditions: 50, reword: { type: 'credit', count: 25000 } },
    { conditions: 125, reword: { type: 'token', count: 60 } },
    { conditions: 150, reword: { type: 'seCard', count: 3 } },
    { conditions: 210, reword: { type: 'token', count: 120 } },
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
            { type: 'token', count: 45 },
            { type: 'seSkin', count: 1 },
          ],
        },
      ],
    },

    // stage and unlockConditions from 2 to 15:
    // 5 10 15 25 35 45 60 75 90 110 130 150 175 175
    {
      stage: 2,
      unlockConditions: 5,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asterion', freeTry: true }],
          rewords: [
            { type: 'credit', count: 40000 },
            { type: 'token', count: 30 },
          ],
        },

      ],
    },
    {
      stage: 3,
      unlockConditions: 10,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sv', freeTry: true }],
          rewords: [
            { type: 'credit', count: 40000 },
            { type: 'token', count: 30 },
          ],
        },

      ],
    },
    {
      stage: 4,
      unlockConditions: 15,
      clubRewords: [],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 80000 },
            { type: 'token', count: 60 },
          ],
        },

      ],
    },
    {
      stage: 5,
      unlockConditions: 25,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 30 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 35,
      clubRewords: [],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asterion', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 45,
      clubRewords: [],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 100000 },
            { type: 'token', count: 75 },
          ],
        },


      ],
    },
    {
      stage: 8,
      unlockConditions: 60,
      clubRewords: [],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sv', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'token', count: 60 },
          ],
        },

      ],
    },
    {
      stage: 9,
      unlockConditions: 75,
      clubRewords: [],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'token', count: 60 },
          ],
        },

      ],
    },
    {
      stage: 10,
      unlockConditions: 90,
      clubRewords: [],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 120000 },
            { type: 'token', count: 150 },
          ],
        },

      ],
    },
    {
      stage: 11,
      unlockConditions: 110,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asterion', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 75 },
          ],
        },

      ],
    },
    {
      stage: 12,
      unlockConditions: 130,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sv', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 75 },
          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 150,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 75 },
          ],
        },

      ],
    },
    {
      stage: 14,
      unlockConditions: 175,
      clubRewords: [],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'asterion', freeTry: true },
            { car_id: 'sv', freeTry: true },
            { car_id: 'sc18', freeTry: true },
            { car_id: 'revuelto', freeTry: true }
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count:225 },
            { type: 'seCard', count: 1 },
          ],
        },

      ],
    },
    {
      stage: 15,
      unlockConditions: 175,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            
          ],
        },

      ],
    },

    
  ],
}

export default template
