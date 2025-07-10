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
      car_id: 'vulcan',
      fullName: 'Aston Martin Vulcan',
      nickName: '火神',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'e1400',
      fullName: 'Ford Mustang Mach-E1400🔑',
      nickName: '电马',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'rtr',
      fullName: 'Ford Mustang RTR Spec 5 10th Anniv.',
      nickName: '野马RTR',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'mc20gt2',
      fullName: 'Maserati MC20 GT2🔑',
      nickName: 'MC20GT2',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'fegen3',
      fullName: 'Formula E Gen 3 EVO Championship Edition🔑',
      nickName: 'FE Gen3',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'teorema',
      fullName: 'Pininfarina Teorema',
      nickName: 'Teorema',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'fordp1',
      fullName: 'Ford Team FordZilla P1',
      nickName: '福特P1',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'tartarus',
      fullName: 'Raesr Tartarus',
      nickName: 'Tartarus',
      isKeyCar: false,
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
          toolCars: [{ car_id: 'vulcan', freeTry: true }],
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
          toolCars: [{ car_id: 'e1400', freeTry: true }],
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
          toolCars: [{ car_id: 'rtr', freeTry: true }],
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
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
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
          toolCars: [{ car_id: 'fegen3', freeTry: true }],
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
          toolCars: [{ car_id: 'teorema', freeTry: true }],
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
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
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
          toolCars: [{ car_id: 'tartarus', freeTry: true }],
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
          toolCars: [{ car_id: 'vulcan', freeTry: true }],
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
          toolCars: [{ car_id: 'vulcan', freeTry: true }],
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
          toolCars: [{ car_id: 'vulcan', freeTry: true }],
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
          toolCars: [{ car_id: 'vulcan', freeTry: true }],
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
          toolCars: [{ car_id: 'e1400', freeTry: true }],
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
          toolCars: [{ car_id: 'e1400', freeTry: true }],
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
          toolCars: [{ car_id: 'e1400', freeTry: true }],
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
          toolCars: [{ car_id: 'e1400', freeTry: true }],
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
          toolCars: [{ car_id: 'rtr', freeTry: true }],
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
          toolCars: [{ car_id: 'rtr', freeTry: true }],
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
          toolCars: [{ car_id: 'rtr', freeTry: true }],
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
          toolCars: [{ car_id: 'rtr', freeTry: true }],
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
          toolCars: [{ car_id: 'mc20gt2', freeTry: false }],
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
          toolCars: [{ car_id: 'mc20gt2', freeTry: false }],
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
          toolCars: [{ car_id: 'mc20gt2', freeTry: false }],
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
          toolCars: [{ car_id: 'mc20gt2', freeTry: false }],
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
          toolCars: [{ car_id: 'fegen3', freeTry: true }],
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
          toolCars: [{ car_id: 'fegen3', freeTry: true }],
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
          toolCars: [{ car_id: 'fegen3', freeTry: true }],
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
          toolCars: [{ car_id: 'fegen3', freeTry: true }],
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
          toolCars: [{ car_id: 'fegen3', freeTry: true }],
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
          toolCars: [{ car_id: 'teorema', freeTry: true }],
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
          toolCars: [{ car_id: 'teorema', freeTry: true }],
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
          toolCars: [{ car_id: 'teorema', freeTry: true }],
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
          toolCars: [{ car_id: 'teorema', freeTry: true }],
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
          toolCars: [{ car_id: 'teorema', freeTry: true }],
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
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
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
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
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
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
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
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
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
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
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
          toolCars: [{ car_id: 'tartarus', freeTry: true }],
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
          toolCars: [{ car_id: 'tartarus', freeTry: true }],
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
          toolCars: [{ car_id: 'tartarus', freeTry: true }],
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
          toolCars: [{ car_id: 'tartarus', freeTry: true }],
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
          toolCars: [{ car_id: 'tartarus', freeTry: true }],
          rewords: [
            
            
          ],
        },
      ],
    },
  ],
}

export default specialEventData
