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
      car_id: 'hommage',
      fullName: 'BMW 3.0 CSL hommage',
      nickName: '宝马3.0',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: 'n',
      fullName: 'Apollo N',
      nickName: '菠萝',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'p1',
      fullName: 'McLaren P1™',
      nickName: 'P1',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'f50',
      fullName: 'Ferrari F50',
      nickName: 'F50',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: '570',
      fullName: 'McLaren 570S Spider',
      nickName: '570',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'gt12',
      fullName: 'Aston Martin Vantage GT12',
      nickName: 'GT12',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },





    {
      car_id: 'senna',
      fullName: 'McLaren Senna',
      nickName: 'Senna',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 25, reword: { type: 'seCard', count: 1 }  },
    { conditions: 50, reword: { type: 'seCard', count: 1 }  },
    { conditions: 75, reword: { type: 'seCard', count: 2 }  },
    { conditions: 100, reword: { type: 'seCard', count: 2 }  },
    { conditions: 150, reword: { type: 'seCard', count: 2 }  },
    { conditions: 200, reword: { type: 'seCard', count: 3 }  },
    { conditions: 250, reword: { type: 'seCard', count: 3 }  },
    { conditions: 300, reword: { type: 'seCard', count: 3 }  },
    { conditions: 400, reword: { type: 'sePart', count: 1 }  },
    { conditions: 450, reword: { type: 'sePart', count: 2 }  },
    { conditions: 500, reword: { type: 'seSkin', count: 1 }  },



    
  ],
  notes: [
    

  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0, // 15 30 45...
      clubRewords: [
        { type: 'seCard', count: 1 },

      ],
      missions: [
        {
          conditions: 49,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 500 },
            { type: 'seCard', count: 4 },

          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 5,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 26,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'hommage', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'hommage', freeTry: false }],
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
        // { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 26,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: false }],
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
        // { type: 'token', count: 20 },
      ],
      missions: [
        {
          conditions: 26,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 50,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 49,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 500 },
            { type: 'seCard', count: 4 },

          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 75,
      clubRewords: [
        // { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 26,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 100,
      clubRewords: [
        // { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 26,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '570', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '570', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 125,
      clubRewords: [
        // { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 26,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt12', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 150,
      clubRewords: [
        // { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    }, 
    {
      stage: 10,
      unlockConditions: 150,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 150,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
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
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        
        
      ],
    },
    {
      stage: 12,
      unlockConditions: 150,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '570', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '570', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '570', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '570', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '570', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt12', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt12', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt12', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt12', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 200,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 4 },
            { type: 'token', count: 250 },
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 200,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 4 },
            { type: 'token', count: 250 },
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 200,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 4,
            rank: 2482,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 4 },
            { type: 'token', count: 250 },
          ],
        },
        
      ],
    },
    {
      stage: 17,
      unlockConditions: 200,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '570', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 5 },
            { type: 'token', count: 250 },
          ],
        },
        
      ],
    },
    {
      stage: 18,
      unlockConditions: 200,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt12', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 4 },
            { type: 'token', count: 250 },
          ],
        },
        
      ],
    },
    {
      stage: 19,
      unlockConditions: 250,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 500 },
          ],
        },
        
      ],
    },
    {
      stage: 20,
      unlockConditions: 250,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 11,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 500 },
          ],
        },
        
      ],
    },
    {
      stage: 21,
      unlockConditions: 250,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 500 },
          ],
        },
        
      ],
    },
    {
      stage: 22,
      unlockConditions: 250,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 500 },
          ],
        },
        
      ],
    },
    {
      stage: 23,
      unlockConditions: 250,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 500 },
          ],
        },
        
      ],
    },
    {
      stage: 24,
      unlockConditions: 300,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
