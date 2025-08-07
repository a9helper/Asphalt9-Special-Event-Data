import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 108,
  toolCars: [
    {
      car_id: 'n',
      fullName: 'Apollo N',
      nickName: '菠萝',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'tsr-s',
      fullName: 'Zenvo TSR-S🔑',
      nickName: 'TSR-S',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'utopia',
      fullName: 'Pagani Utopia Coupe🔑',
      nickName: '乌托邦',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'temerario',
      fullName: 'Lamborghini Temerario🔑',
      nickName: 'Temerario',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    



    {
      car_id: 'er9',
      fullName: 'Lotus E-R9🔑',
      nickName: 'ER9',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 200, reword: { type: 'sePart', count: 1 }  },
    { conditions: 250, reword: { type: 'sePart', count: 2 }  },
    { conditions: 282, reword: { type: 'seKey', count: 1 }  },










    
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'er9', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 20,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'n', freeTry: false },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'n', freeTry: false },

          ],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'credit', count: 210000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'n', freeTry: false },

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
      unlockConditions: 30,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tsr-s', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tsr-s', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 240000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tsr-s', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 4,
      unlockConditions: 40,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'er9', freeTry: true },
          ],
          rewords: [
            
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 50,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'utopia', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'utopia', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 240000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'utopia', freeTry: true },

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
        
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 240000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 80,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'er9', freeTry: true },
          ],
          rewords: [
            
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 110,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'n', freeTry: false },

          ],
          rewords: [
            { type: 'token', count: 210 },
            { type: 'credit', count: 360000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'n', freeTry: false },

          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        
        
      ],
    },
    {
      stage: 9,
      unlockConditions: 130,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tsr-s', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 210 },
            { type: 'credit', count: 450000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tsr-s', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 145,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'er9', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 165,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'utopia', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'utopia', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 210 },
            { type: 'credit', count: 450000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'utopia', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 12,
      unlockConditions: 175,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 210 },
            { type: 'credit', count: 450000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 190,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 13,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 15 },
            { type: 'token', count: 225 },
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 25 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 25 },
            { type: 'token', count: 450 },
            { type: 'credit', count: 1000000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 40 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
            
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 190,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
