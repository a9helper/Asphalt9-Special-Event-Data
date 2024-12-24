import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 145,
  toolCars: [
    {
      car_id: 'at96',
      fullName: 'TechRules AT96 Track Version🔑',
      nickName: '腾风',
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
      car_id: 'p72',
      fullName: 'De Tomaso P72🔑',
      nickName: 'P72',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'c2',
      fullName: 'Rimac Nevera🔑',
      nickName: 'Nevera',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'ccxr',
      fullName: 'Koenigsegg CCXR🔑',
      nickName: 'CCXR',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    



    {
      car_id: 'chiron300',
      fullName: 'Bugatti Chiron Super Sport 300+🔑',
      nickName: '300+',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 20, reword: { type: 'seCard', count: 1 }  },
    { conditions: 75, reword: { type: 'seCard', count: 2 }  },
    { conditions: 100, reword: { type: 'credit', count: 100000 }  },
    { conditions: 120, reword: { type: 'seCard', count: 3 }  },
    { conditions: 150, reword: { type: 'token', count: 200 }  },
    { conditions: 200, reword: { type: 'seCard', count: 4 }  },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 275, reword: { type: 'sePart', count: 1 } },
    { conditions: 300, reword: { type: 'sePart', count: 2 } },
    { conditions: 323, reword: { type: 'seKey', count: 1 } },





    
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 45 },
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
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
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
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 25,
      clubRewords: [
        { type: 'token', count: 20 },
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 45 },
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
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
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
        { type: 'token', count: 25 },
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 100,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 120,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 140,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 160,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        


        
      ],
    },
    {
      stage: 12,
      unlockConditions: 180,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 220,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 250,
      clubRewords: [
        { type: 'token', count: 25 },
        
        
      ],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 250 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 1000000 },
            { type: 'token', count: 500 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
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
          toolCars: [
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    }, 
    
    {
      stage: 16,
      unlockConditions: 250,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'chiron300', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
