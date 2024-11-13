import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'j50',
      fullName: 'Ferrari J50',
      nickName: 'J50',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'laferrari',
      fullName: 'Ferrari LaFerrari',
      nickName: '拉法',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'fxxk',
      fullName: 'Ferrari FXX K',
      nickName: 'FXXK',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'xxe',
      fullName: 'Ferrari 599XX EVO🔑',
      nickName: 'XXE',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'daytonasp3',
      fullName: 'Ferrari Daytona SP3🔑',
      nickName: '戴通纳SP3',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '488gtbevo',
      fullName: 'Ferrari 488 Challenge EVO🔑',
      nickName: '488 EVO',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    
    
    
    {
      car_id: 'sf90',
      fullName: 'Ferrari SF90 Stradale',
      nickName: 'SF90',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 20, reword: { type: 'seCard', count: 1 }  },
    { conditions: 35, reword: { type: 'seCard', count: 2 }  },
    { conditions: 60, reword: { type: 'seCard', count: 2 }  },
    { conditions: 80, reword: { type: 'seCard', count: 5 }  },
    { conditions: 110, reword: { type: 'sePart', count: 1 }  },
    { conditions: 130, reword: { type: 'sePart', count: 1 }  },






    
    
  ],
  notes: [
    

  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0, // 15 30 45...
      clubRewords: [
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 4 },

          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: false },
            { car_id: 'xxe', freeTry: true }
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'j50', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'j50', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
          ],
        },
        
        
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 15,
      clubRewords: [
        // { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'laferrari', freeTry: false },
            { car_id: 'daytonasp3', freeTry: true }
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'laferrari', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'laferrari', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 25,
      clubRewords: [
        // { type: 'token', count: 20 },
      ],
      missions: [
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: false },
            { car_id: '488gtbevo', freeTry: true }
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fxxk', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'fxxk', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 35,
      clubRewords: [
        // { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },

          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 55,
      clubRewords: [
        // { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: false },
            { car_id: 'xxe', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: false },
            { car_id: 'xxe', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'j50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
        // { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'laferrari', freeTry: false },
            { car_id: 'daytonasp3', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'laferrari', freeTry: false },
            { car_id: 'daytonasp3', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'laferrari', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 75,
      clubRewords: [
        // { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: false },
            { car_id: '488gtbevo', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: false },
            { car_id: '488gtbevo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 255 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'fxxk', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 90,
      clubRewords: [
        // { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 600000 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 10 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    }, 
    {
      stage: 10,
      unlockConditions: 100,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
