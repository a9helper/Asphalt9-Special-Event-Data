import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 156,
  toolCars: [
    {
      car_id: 'carrerars',
      fullName: 'Porsche 911 Carrera RS 3.8',
      nickName: 'Carrera RS',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: '004c',
      fullName: 'Glickenhaus 004C🔑',
      nickName: '004C',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'mclarengt',
      fullName: 'McLaren GT',
      nickName: '迈凯伦GT',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'motion',
      fullName: 'Kepler Motion',
      nickName: '开普勒',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'er9',
      fullName: 'Lotus E-R9🔑',
      nickName: 'ER9',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },




    {
      car_id: 'supersnake',
      fullName: 'Ford Shelby Super Snake',
      nickName: '超级蛇',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 }  },
    { conditions: 80, reword: { type: 'credit', count: 200000 }  },
    { conditions: 110, reword: { type: 'seCard', count: 2 }  },
    { conditions: 150, reword: { type: 'token', count: 200 }  },
    { conditions: 180, reword: { type: 'seCard', count: 3 }  },
    { conditions: 220, reword: { type: 'seCard', count: 5 }  },
    { conditions: 275, reword: { type: 'sePart', count: 1 } },
    { conditions: 325, reword: { type: 'sePart', count: 1 } },
    { conditions: 375, reword: { type: 'sePart', count: 2 } },













    
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
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
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
            { car_id: 'carrerars', freeTry: true },
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
            { car_id: 'carrerars', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 20,
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
            { car_id: '004c', freeTry: true },
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
            { car_id: '004c', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 120 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '004c', freeTry: true },
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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: true },
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
            { car_id: 'mclarengt', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 120 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: true },
          ],
          rewords: [
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
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 60 },
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
            { car_id: 'motion', freeTry: true },
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
            { car_id: 'motion', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 90 },
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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'er9', freeTry: true },
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
            { car_id: 'er9', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 120 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'er9', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 115,
      clubRewords: [
        { type: 'credit', count: 25000 },
        
        
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'carrerars', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'carrerars', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '004c', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '004c', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 145,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },


        
      ],
    },
    {
      stage: 12,
      unlockConditions: 160,
      clubRewords: [
        
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 175,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'motion', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'motion', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 15 },
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 190,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'er9', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'er9', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 300 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'er9', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 210,
      clubRewords: [
        { type: 'token', count: 25 },
        
        
      ],
      missions: [
        
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
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
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        {
          conditions: 13,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 375 },
            { type: 'credit', count: 1000000 },
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'supersnake', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 4 },
          ],
        },
        
      ],
    },
    
    
    
    {
      stage: 16,
      unlockConditions: 210,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'supersnake', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
