import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 160,
  toolCars: [
    {
      car_id: 'f50',
      fullName: 'Ferrari F50',
      nickName: 'F50',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'd8',
      fullName: 'Donkervoort D8 GTO Individual Series',
      nickName: 'D8',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'gallardo',
      fullName: 'Lamborghini Gallardo LP 560-4',
      nickName: '盖拉多',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'apolloevo',
      fullName: 'Apollo EVO',
      nickName: '菠萝EVO',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '550',
      fullName: 'Sin R1 550',
      nickName: 'SIN',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'victor',
      fullName: 'Aston Martin Victor',
      nickName: 'Victor',
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
  ],
  processRewords: [
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 138, reword: { type: 'seCard', count: 2 } },
    { conditions: 178, reword: { type: 'seCard', count: 5 } },
    { conditions: 238, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000},
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            {type:'token', count: 50},
            {type:'credit', count: 95000 },
            {type:'seCard', count:1},

          ],
        },
      ],
    },

    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000},
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: true }],
          rewords: [
            {type:'credit', count: 80000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: true }],
          rewords: [
            {type:'token', count: 50},
            {type:'seCard', count: 2},

          ],
        },

      ],
    },
    
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        {type:'token', count: 25},
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'd8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'd8', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },

          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },

          ],
        },

      ],
    },
    
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000},
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },

          ],
        },

      ],
    },
    {
      stage: 6,
      unlockConditions: 48,
      clubRewords: [
        {type:'token', count: 25},
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            {type:'token', count: 50},
            {type:'credit', count: 60000 },
            {type:'seCard', count:1},

          ],
        },

      ],
    },
    
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '550', freeTry: true }],
          rewords: [
            { type: 'credit', count: 175000 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '550', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
            { type: 'seCard', count: 3 },

          ],
        },
      ],
    },
    
    {
      stage: 8,
      unlockConditions: 70,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 60000},
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'credit', count: 175000 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
            { type: 'seCard', count: 3 },

          ],
        },
      ],
    },
    
    {
      stage: 9,
      unlockConditions: 80,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'd8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 175000 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'd8', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
            { type: 'seCard', count: 3 },

          ],
        },
      ],
    },
    
    {
      stage: 10,
      unlockConditions: 90,
      clubRewords: [
        {type:'token', count: 50},
      ],
      missions: [

        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            {type:'token', count: 50},
            {type:'credit', count: 60000 },
            {type:'seCard', count:1},

          ],
        },
      ],
    },
    
    {
      stage: 11,
      unlockConditions: 100,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [

        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: true }],
          rewords: [
            { type: 'token', count: 350 },
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },

          ],
        },
      ],
    },
    
    {
      stage: 12,
      unlockConditions: 108,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [

        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: true }],
          rewords: [
            { type: 'token', count: 350 },
            { type: 'credit', count: 450000 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },

          ],
        },
      ],
    },
    
    {
      stage: 13,
      unlockConditions: 115,
      clubRewords: [
        { type:'token', count: 75 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            { type: 'token', count: 350 },
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },

          ],
        },

      ],
    },
    
    {
      stage: 14,
      unlockConditions: 120,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 100000},
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'token', count: 350 },
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },

          ],
        },

      ],
    },
    
    {
      stage: 15,
      unlockConditions: 150,
      clubRewords: [
        {type:'token', count: 288},
        {type:'sePart', count: 1},
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },

          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 600 },

          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1000000 },
            { type: 'token', count: 750 },

          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'token', count: 1200 },

          ],
        },
      ],
    },
    

    
    
    
    {
      stage: 16,
      unlockConditions: 150,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
