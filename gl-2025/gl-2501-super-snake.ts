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
      car_id: '1789',
      fullName: 'Vision 1789',
      nickName: '1789',
      isKeyCar: false,
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
    {
      car_id: 'spano',
      fullName: 'Spania GTA 2015 GTA Spano',
      nickName: 'Spano',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sorpasso',
      fullName: 'FV Frangivento Sorpasso GT3🔑',
      nickName: 'Sorpasso',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'gtrneon',
      fullName: 'Nissan GT-R Neon Edition',
      nickName: '霓虹GTR',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },




    {
      car_id: 'teorema',
      fullName: 'Pininfarina Teorema',
      nickName: 'Teorema',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 30, reword: { type: 'seCard', count: 1 }  },
    { conditions: 50, reword: { type: 'token', count: 100 }  },
    { conditions: 80, reword: { type: 'seCard', count: 2 }  },
    { conditions: 150, reword: { type: 'seCard', count: 3 }  },
    { conditions: 175, reword: { type: 'credit', count: 200000 }  },
    { conditions: 200, reword: { type: 'seCard', count: 4 }  },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 300, reword: { type: 'seCard', count: 5 }  },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 450, reword: { type: 'token', count: 350 }  },
    { conditions: 511, reword: { type: 'sePart', count: 1 } },







    
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
      clubRewords: [
        { type: 'credit', count: 15000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 75 },
          ],
        },
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
      clubRewords: [
        { type: 'token', count: 25 },
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 140000 },
          ],
        },
        
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 275000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 160000 },
          ],
        },
        
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 45,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'credit', count: 180000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 125 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 75,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 325000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 2 },
          ],
        },
        
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 350000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 220000 },
            { type: 'seCard', count: 2 },
          ],
        },
        
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 100,
      clubRewords: [
        { type: 'token', count: 25 },
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 175 },
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 175 },
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 210000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 130,
      clubRewords: [
        { type: 'token', count: 25 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'credit', count: 275000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 220 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 25000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 240 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        


        
      ],
    },
    {
      stage: 12,
      unlockConditions: 175,
      clubRewords: [
        
        { type: 'token', count: 25 },
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 325000 },
            { type: 'token', count: 250 },
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 25000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 250 },
            { type: 'credit', count: 325000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 2550000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 260 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 225,
      clubRewords: [
        { type: 'credit', count: 25000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 275 },
            { type: 'credit', count: 350000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 2700000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 280 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 250,
      clubRewords: [
        { type: 'token', count: 50 },
        
        
      ],
      missions: [
        
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 400000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 400 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 4500000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'teorema', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 450 },
            { type: 'sePart', count: 3 },
          ],
        },
        
      ],
    },
    
    
    
    {
      stage: 16,
      unlockConditions: 275,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'teorema', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
