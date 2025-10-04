import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: true,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'supraracing',
      fullName: 'Toyota GR Supra Racing Concept',
      nickName: 'Supra',
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
      star: 5,
    },
    {
      car_id: 'mk2',
      fullName: 'Ford GT MKII🔑',
      nickName: 'MK2',
      isKeyCar: true,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'veneno',
      fullName: 'Lamborghini Veneno',
      nickName: '毒药',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'autentica',
      fullName: 'Lamborghini Autentica🔑',
      nickName: 'Autentica',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'venomgt',
      fullName: 'Hennessey Venom GT',
      nickName: '毒液GT',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'valkyrie',
      fullName: 'Aston Martin Valkyrie',
      nickName: '女武神',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'lykanneon',
      fullName: 'W Motors Lykan HyperSport Neon Edition',
      nickName: '霓虹狼崽',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    
    
    

    {
      car_id: 'mk4',
      fullName: 'Ford GT MK IV🔑',
      nickName: 'MK4🔑',
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
    { conditions: 370, reword: { type: 'seKey', count: 1 } },
    { conditions: 380, reword: { type: 'sePart', count: 2 } },
    { conditions: 400, reword: { type: 'seSkin', count: 1 } },


    







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
          toolCars: [{ car_id: 'mk4', freeTry: true }],
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
          toolCars: [{ car_id: 'supraracing', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 126 },
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
          toolCars: [{ car_id: 'motion', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 126 },
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
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 126 },
          ],
        },
      ],
    },
    {
      stage: 5,
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
          toolCars: [{ car_id: 'veneno', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 8 * 18888},
            { type: 'token', count: 126 },
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
          toolCars: [{ car_id: 'mk4', freeTry: true }],
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
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 144 },
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
          toolCars: [{ car_id: 'venomgt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 144 },
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
          toolCars: [{ car_id: 'valkyrie', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 144 },
          ],
        },
      ],
    },
    {
      stage: 10,
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
          toolCars: [{ car_id: 'lykanneon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 10 * 18888},
            { type: 'token', count: 144 },
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
          toolCars: [{ car_id: 'mk4', freeTry: true }],
          rewords: [
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'supraracing', freeTry: true }],
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
          toolCars: [{ car_id: 'supraracing', freeTry: true }],
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
          toolCars: [{ car_id: 'supraracing', freeTry: true }],
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
          toolCars: [{ car_id: 'supraracing', freeTry: true }],
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
        
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
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
          toolCars: [{ car_id: 'motion', freeTry: true }],
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
          toolCars: [{ car_id: 'motion', freeTry: true }],
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
          toolCars: [{ car_id: 'motion', freeTry: true }],
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
        
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: false }],
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
          toolCars: [{ car_id: 'mk2', freeTry: false }],
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
          toolCars: [{ car_id: 'mk2', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: false }],
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
        
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: true }],
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
          toolCars: [{ car_id: 'veneno', freeTry: true }],
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
          toolCars: [{ car_id: 'veneno', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: true }],
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
          toolCars: [{ car_id: 'mk4', freeTry: true }],
          rewords: [
          ],
        },

      ],
    },
    {
      stage: 17,
      unlockConditions: 270,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
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
          toolCars: [{ car_id: 'autentica', freeTry: true }],
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
          toolCars: [{ car_id: 'autentica', freeTry: true }],
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
          toolCars: [{ car_id: 'autentica', freeTry: true }],
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
          toolCars: [{ car_id: 'autentica', freeTry: true }],
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
        
        
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'venomgt', freeTry: false }],
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
          toolCars: [{ car_id: 'venomgt', freeTry: false }],
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
          toolCars: [{ car_id: 'venomgt', freeTry: false }],
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
          toolCars: [{ car_id: 'venomgt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'venomgt', freeTry: false }],
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
        

      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
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
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
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
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
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
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
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
          toolCars: [{ car_id: 'valkyrie', freeTry: false }],
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
        

      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lykanneon', freeTry: false }],
          rewords: [
            { type: 'token', count: 348 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'lykanneon', freeTry: false }],
          rewords: [
            { type: 'credit', count: 6 * 88888},
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'lykanneon', freeTry: false }],
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
          toolCars: [{ car_id: 'lykanneon', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'lykanneon', freeTry: false }],
          rewords: [
            
            
          ],
        },
      ],
    },
  ],
}

export default specialEventData
