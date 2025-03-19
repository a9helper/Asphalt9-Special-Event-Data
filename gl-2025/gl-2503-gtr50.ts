import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 150,
  toolCars: [
    {
      car_id: 'panamera',
      fullName: 'Porsche Panamera Turbo S🔑',
      nickName: '帕拉梅拉',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'svj',
      fullName: 'Lamborghini Aventador SVJ Roadster',
      nickName: 'SVJ',
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
      car_id: 'zagato',
      fullName: 'Aston Martin DBS GT Zagato',
      nickName: 'Zagato',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },




    {
      car_id: 'imola',
      fullName: 'Pagani Imola',
      nickName: '伊莫拉',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 }  },
    { conditions: 80, reword: { type: 'credit', count: 500000 }  },
    { conditions: 110, reword: { type: 'seCard', count: 2 }  },
    { conditions: 140, reword: { type: 'token', count: 200 }  },
    { conditions: 170, reword: { type: 'seCard', count: 3 }  },
    { conditions: 200, reword: { type: 'seCard', count: 4 }  },
    { conditions: 220, reword: { type: 'seSkin', count: 1 }  },
    { conditions: 240, reword: { type: 'sePart', count: 1 }  },
    { conditions: 275, reword: { type: 'sePart', count: 1 }  },
    { conditions: 305, reword: { type: 'sePart', count: 1 }  },








    
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 45 },
            { type: 'credit', count: 90000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 5,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        { type: 'token', count: 20 },
        
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 45 },
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 45,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'apolloevo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'apolloevo', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'apolloevo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 75,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 45 },
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 95,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 9,
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 120,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'apolloevo', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'apolloevo', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'apolloevo', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 12,
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'credit', count: 1000000 },
            { type: 'sePart', count: 3 },
            
          ],
        },
        
      ],
    },
    
    
    
    {
      stage: 13,
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
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
