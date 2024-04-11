import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 200,
  toolCars: [
    {
      car_id: '765lt',
      fullName: 'McLaren 765LT',
      nickName: '765LT',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'mbbs',
      fullName: 'Mercedes-Benz Mercedes-AMG GT Black Series🔑',
      nickName: '梅奔BS',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '911gt2',
      fullName: 'Porsche 911 GT2 RS ClubSport🔑',
      nickName: '911GT2',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sc63',
      fullName: 'Lamborghini SC63',
      nickName: 'SC63',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    
    
    

   
    {
      car_id: 'asfane',
      fullName: 'FV Frangivento Asfane',
      nickName: 'Asfane',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'seCard', count: 2 } },
    { conditions: 30, reword: { type: 'token', count: 50 } },
    { conditions: 50, reword: { type: 'credit', count: 50000 } },
    { conditions: 80, reword: { type: 'seCard', count: 4 } },
    
    
    { conditions: 140, reword: { type: 'credit', count: 150000 }  },
    { conditions: 180, reword: { type: 'token', count: 100 } },
    
    
    { conditions: 220, reword: { type: 'sePart', count: 1 } },
    { conditions: 250, reword: { type: 'seCard', count: 6 } },
    { conditions: 270, reword: { type: 'sePart', count: 2 } },
    { conditions: 274, reword: { type: 'seKey', count: 1 } },
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
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 60 },
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
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'credit', count: 175000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 80 },
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
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 100 },
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
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
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
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
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
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 175 },
            { type: 'seCard', count: 3 },
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
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 275000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 200 },
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
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 8 },
            { type: 'token', count: 240 },
            { type: 'sePart', count: 1 },

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
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'credit', count: 325000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 8 },
            { type: 'token', count: 300 },
            { type: 'sePart', count: 2 },

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
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 350000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 10 },
            { type: 'token', count: 320 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },

          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 200,
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
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'credit', count: 220000 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 200 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 325 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 450 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 4 },
            
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
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },

    
    
    
  ],
}

export default template
