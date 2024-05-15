import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'p900',
      fullName: 'De Tomaso P900',
      nickName: 'P900',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
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
      car_id: 'cs',
      fullName: 'Rimac Concept S',
      nickName: 'CS',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'divo',
      fullName: 'Bugatti Divo',
      nickName: 'Divo',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },


    {
      car_id: 'tur',
      fullName: 'Zenvo Aurora Tur',
      nickName: 'Tur',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'seCard', count: 2 } },
    { conditions: 30, reword: { type: 'token', count: 50 } },
    { conditions: 50, reword: { type: 'credit', count: 50000 } },
    { conditions: 80, reword: { type: 'seCard', count: 4 } },
    
    
    { conditions: 140, reword: { type: 'credit', count: 150000 } },
    { conditions: 180, reword: { type: 'token', count: 100 } },
    { conditions: 200, reword: { type: 'sePart', count: 1 } },
    
    
    { conditions: 230, reword: { type: 'seCard', count: 6 } },
    { conditions: 270, reword: { type: 'sePart', count: 2 } },
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
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 80 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
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
          toolCars: [{ car_id: 'p900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 40000 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'p900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 175000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'p900', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'p900', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 25,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 100 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 35,
      clubRewords: [
        { type: 'token', count: 20 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 125 },
            { type: 'credit', count: 125000 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: true }],
          rewords: [
            { type: 'credit', count: 325000 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 120 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 80,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 100,
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
          toolCars: [{ car_id: 'vantage', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: true }],
          rewords: [
            { type: 'credit', count: 325000 },
            { type: 'token', count: 175 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },

          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 125,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],
          rewords: [
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 225 },

          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],
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
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 425000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 275 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },

          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 175,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 175000 },
            { type: 'token', count: 325 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 500000 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },

          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 200,
      clubRewords: [
        { type: 'token', count: 30 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'credit', count: 255000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'token', count: 225 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
            { type: 'token', count: 375 },
            
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 200,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },

    
    
    
  ],
}

export default template
