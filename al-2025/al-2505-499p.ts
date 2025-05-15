import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: true,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'zerouno',
      fullName: 'ItalDesign Zerouno',
      nickName: '假牛',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'gt65',
      fullName: 'FV Frangivento GT65🔑',
      nickName: 'GT65',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'atsgt',
      fullName: 'ATS Automobili GT',
      nickName: 'ATS GT',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sf90xx',
      fullName: 'Ferrari SF90 XX Stradale',
      nickName: 'SF90XX',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'xxe',
      fullName: 'Ferrari 599XX EVO🔑',
      nickName: 'XXE',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'zondar',
      fullName: 'Pagani Zonda R🔑',
      nickName: '风之子',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'asfane',
      fullName: 'FV Frangivento Asfane🔑',
      nickName: 'Asfane',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'torino',
      fullName: 'Torino Design Super Sport🔑',
      nickName: '都灵',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    
    
    


    {
      car_id: '499p',
      fullName: 'Ferrari 499P Modificata🔑',
      nickName: '499P',
      isKeyCar: true,
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
    { conditions: 105, reword: { type: 'credit', count: 88888 } },
    { conditions: 135, reword: { type: 'seCard', count: 1 } },
    { conditions: 165, reword: { type: 'credit', count: 128888 } },
    { conditions: 195, reword: { type: 'seCard', count: 2 } },
    { conditions: 225, reword: { type: 'credit', count: 188888 } },
    { conditions: 300, reword: { type: 'token', count: 388 } },
    { conditions: 320, reword: { type: 'seCard', count: 4 } },
    { conditions: 340, reword: { type: 'sePart', count: 1 } },
    { conditions: 360, reword: { type: 'seCard', count: 8 } },
    { conditions: 370, reword: { type: 'sePart', count: 2 } },
    { conditions: 405, reword: { type: 'seKey', count: 1 } },


    







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
          toolCars: [{ car_id: '499p', freeTry: true }],
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
          toolCars: [{ car_id: 'zerouno', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 90 },
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
          toolCars: [{ car_id: 'gt65', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 90 },
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
          toolCars: [{ car_id: 'atsgt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 90 },
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
          toolCars: [{ car_id: 'sf90xx', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 90,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 90,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 108 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 90,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 108 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 90,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 108 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 90,
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
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 108 },
          ],
        },
      ],
    },
    {
      stage: 11,
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
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 200,
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
          toolCars: [{ car_id: 'zerouno', freeTry: true }],
          rewords: [
            { type: 'token', count: 228},
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'zerouno', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 6 * 58888},
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zerouno', freeTry: true }],
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
          toolCars: [{ car_id: 'zerouno', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 200,
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
          toolCars: [{ car_id: 'gt65', freeTry: true }],
          rewords: [
            { type: 'token', count: 228},
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt65', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 6 * 58888},
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt65', freeTry: true }],
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
          toolCars: [{ car_id: 'gt65', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },


      ],
    },
    {
      stage: 14,
      unlockConditions: 200,
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
          toolCars: [{ car_id: 'atsgt', freeTry: true }],
          rewords: [
            { type: 'token', count: 228},
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 6 * 58888},
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: true }],
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
          toolCars: [{ car_id: 'atsgt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },

      ],
    },
    {
      stage: 15,
      unlockConditions: 200,
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
          toolCars: [{ car_id: 'sf90xx', freeTry: true }],
          rewords: [
            { type: 'token', count: 228},
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90xx', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 6 * 58888},
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90xx', freeTry: true }],
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
          toolCars: [{ car_id: 'sf90xx', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },

      ],
    },
    {
      stage: 16,
      unlockConditions: 270,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
          ],
        },

      ],
    },
    {
      stage: 17,
      unlockConditions: 270,
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
          toolCars: [{ car_id: 'xxe', freeTry: true }],
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
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 88888},
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
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
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 270,
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
          toolCars: [{ car_id: 'zondar', freeTry: true }],
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
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 88888},
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            
          ],
        },
      ],
    },
    {
      stage: 19,
      
      unlockConditions: 270,
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
          toolCars: [{ car_id: 'asfane', freeTry: true }],
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
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 88888},
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            
          ],
        },
      ],
    },
    {
      stage: 20,
      
      unlockConditions: 270,
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
          toolCars: [{ car_id: 'torino', freeTry: true }],
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
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6 * 88888},
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
            
          ],
        },
      ],
    },
  ],
}

export default specialEventData
