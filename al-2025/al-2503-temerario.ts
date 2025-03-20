import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  // dataTableImage:"https://s21.ax1x.com/2025/03/15/pEayQ4P.png",
  toolCars: [
    {
      car_id: 'centenario',
      fullName: 'Lamborghini Centenario',
      nickName: '百年牛',
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
      car_id: 'sc63',
      fullName: 'Lamborghini SC63🔑',
      nickName: 'SC63',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'evo',
      fullName: 'Lamborghini Huracan EVO Spyder',
      nickName: 'EVO',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'reventon',
      fullName: 'Lamborghini Reventon Roadster🔑',
      nickName: '雷文顿',
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
      car_id: 'lpi800',
      fullName: 'Lamborghini Countach LPI 800-4🔑',
      nickName: '新康塔什',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sian',
      fullName: 'Lamborghini Sian FKP 37🔑',
      nickName: 'Sian',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },





    {
      car_id: 'temerario',
      fullName: 'Lamborghini Temerario',
      nickName: 'Temerario',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    
    
  ],
  notes: [
    
    
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'credit', count: 58888 } },
    { conditions: 45, reword: { type: 'credit', count: 68888 } },
    { conditions: 75, reword: { type: 'seCard', count: 1 } },
    { conditions: 135, reword: { type: 'seCard', count: 1 } },
    { conditions: 165, reword: { type: 'credit', count: 108888 } },
    { conditions: 195, reword: { type: 'seCard', count: 2 } },
    { conditions: 225, reword: { type: 'credit', count: 128888 } },
    { conditions: 300, reword: { type: 'token', count: 388 } },
    { conditions: 320, reword: { type: 'seCard', count: 4 } },
    { conditions: 340, reword: { type: 'sePart', count: 1 } },
    { conditions: 360, reword: { type: 'seCard', count: 8 } },
    { conditions: 370, reword: { type: 'sePart', count: 2 } },
    { conditions: 380, reword: { type: 'seSkin', count: 1 } },







  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'temerario', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'centenario', freeTry: true }],
          rewords: [
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 90 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 90 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 90 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 90 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 85,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'temerario', freeTry: true }],
          rewords: [
            
          ],
        },

      ],
    },
    {
      stage: 7,
      unlockConditions: 85,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 108 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 85,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 108 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 85,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 108 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 85,
      clubRewords: [
        { type: 'seCard', count: 2 },
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 108 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 170,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'temerario', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 12,
      unlockConditions: 170,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'centenario', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 58888},
            { type: 'token', count: 228 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'centenario', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'centenario', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'centenario', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 170,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 58888},
            { type: 'token', count: 228 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },

      ],
    },
    {
      stage: 14,
      unlockConditions: 170,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 58888},
            { type: 'token', count: 228 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },

      ],
    },
    {
      stage: 15,
      unlockConditions: 170,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 58888},
            { type: 'token', count: 228 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },

      ],
    },
    {
      stage: 16,
      unlockConditions: 225,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'temerario', freeTry: true }],
          rewords: [
            
          ],
        },
        

      ],
    },
    {
      stage: 17,
      unlockConditions: 225,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'token', count: 348 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 88888 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },

      ],
    },
    {
      stage: 18,
      unlockConditions: 225,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'token', count: 348 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 88888 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },

      ],
    },
    {
      stage: 19,
      
      unlockConditions: 225,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'token', count: 348 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 88888 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },

      ],
    },
    {
      stage: 20,
      
      unlockConditions: 225,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'token', count: 348 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 88888 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },

      ],
    },
  ],
}

export default specialEventData
