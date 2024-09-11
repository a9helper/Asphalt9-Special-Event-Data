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
      car_id: 'evo',
      fullName: 'Lamborghini Huracan EVO Spyder',
      nickName: 'EVO',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'centenario',
      fullName: 'Lamborghini Centenario',
      nickName: '百年牛',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'veneno',
      fullName: 'Lamborghini Veneno',
      nickName: '毒药',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },

    {
      car_id: 'sesto',
      fullName: 'Lamborghini Sesto Elemento',
      nickName: '第六元素',
      isKeyCar: false,
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
      car_id: 'sc20',
      fullName: 'Lamborghini SC20🔑',
      nickName: 'SC20',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    
    
    {
      car_id: 'revuelto',
      fullName: 'Lamborghini Revuelto🔑',
      nickName: 'Revuelto',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 20, reword: { type: 'seCard', count: 1 }  },
    { conditions: 35, reword: { type: 'seCard', count: 2 }  },
    { conditions: 60, reword: { type: 'seCard', count: 2 }  },
    { conditions: 80, reword: { type: 'seCard', count: 3 }  },
    { conditions: 110, reword: { type: 'seCard', count: 5 }  },
    { conditions: 110, reword: { type: 'sePart', count: 1 }  },
    { conditions: 130, reword: { type: 'sePart', count: 1 }  },
    { conditions: 154, reword: { type: 'seKey', count: 1 }  },






    
    
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },

          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 12,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo', freeTry: false },
            { car_id: 'sesto', freeTry: true }
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
          toolCars: [{ car_id: 'evo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 22,
      clubRewords: [
        // { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'centenario', freeTry: false },
            { car_id: 'sc18', freeTry: true }
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
          toolCars: [{ car_id: 'centenario', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'centenario', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 32,
      clubRewords: [
        // { type: 'token', count: 20 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veneno', freeTry: false },
            { car_id: 'sc20', freeTry: true }
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
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 45,
      clubRewords: [
        // { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
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
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo', freeTry: false },
            { car_id: 'sesto', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo', freeTry: false },
            { car_id: 'sesto', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 255 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 70,
      clubRewords: [
        // { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'centenario', freeTry: false },
            { car_id: 'sc18', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 255 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'centenario', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 85,
      clubRewords: [
        // { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veneno', freeTry: false },
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 255 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 110,
      clubRewords: [
        // { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
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
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
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
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
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
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    }, 
    {
      stage: 10,
      unlockConditions: 110,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
