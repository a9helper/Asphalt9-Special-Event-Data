import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: "countach",
      fullName: "Lamborghini Countach 25th Anniversary",
      nickName: "康塔什",
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: "zerouno",
      fullName: "ItalDesign Zerouno",
      nickName: "假牛",
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: "f40",
      fullName: "Ferrari F40",
      nickName: "F40",
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "mc12",
      fullName: "Maserati MC12🔑",
      nickName: "MC12",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "miura",
      fullName: "Lamborghini Miura Concept🔑",
      nickName: "Miura",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "scv12",
      fullName: "Lamborghini Essenza SCV12🔑",
      nickName: "SCV12",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "aperta",
      fullName: "Ferrari LaFerrari Aperta",
      nickName: "黑拉法",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: "huayrar",
      fullName: "Pagani Huayra R",
      nickName: "Huayra R",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    

   
    
    {
      car_id: "sf90",
      fullName: "Ferrari SF90 Stradale",
      nickName: "SF90",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'credit', count: 50000 } },
    { conditions: 75, reword: { type: 'seCard', count: 2 }  },
    { conditions: 140, reword: { type: 'token', count: 150 } },
    { conditions: 180, reword: { type: 'seCard', count: 2 }  },
    { conditions: 200, reword: { type: 'sePart', count: 1 } },
    { conditions: 230, reword: { type: 'seSkin', count: 1 } },
    
    
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
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 45000 },
            { type: 'token', count: 200 },
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
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zerouno', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: false }],
          rewords: [
            { type: 'credit', count: 140000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'zerouno', freeTry: false }],
          rewords: [
            { type: 'credit', count: 140000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zerouno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'zerouno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
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
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f40', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f40', freeTry: false }],
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
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'f40', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
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
          toolCars: [{ car_id: 'f40', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'f40', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 140000 },
            { type: 'token', count: 300 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 55,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'credit', count: 260000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 260000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 2 },
            
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
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: false }],
          rewords: [
            { type: 'credit', count: 320000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type: 'credit', count: 320000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 2 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 120,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 320000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'token', count: 400 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'token', count: 600 },
            { type: 'credit', count: 480000 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 128,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },

    
    
    
  ],
}

export default template
