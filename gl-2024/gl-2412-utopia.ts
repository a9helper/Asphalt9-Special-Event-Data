import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 180,
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
      car_id: 'gtr',
      fullName: 'Nissan GT-R Nismo',
      nickName: 'GTR',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'j50',
      fullName: 'Ferrari J50',
      nickName: 'J50',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'vulcano',
      fullName: 'Icona Vulcano Titanium',
      nickName: '火山',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'fxxk',
      fullName: 'Ferrari FXX K',
      nickName: 'FXXK',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'lykan',
      fullName: 'W Motors Lykan HyperSport',
      nickName: '狼崽',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },





    {
      car_id: 'xjr',
      fullName: 'Jaguar XJR-9🔑',
      nickName: 'XJR',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'fordp1',
      fullName: 'Ford Team Fordzilla P1',
      nickName: '福特P1',
      isKeyCar: false,
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
      car_id: 'naran',
      fullName: 'Naran Hyper Coupe',
      nickName: '纳兰',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'torino',
      fullName: 'Torino Design Super Sport🔑',
      nickName: '都林',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'lykanneon',
      fullName: 'W Motors Lykan Neon🔑',
      nickName: '霓虹狼崽',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    




    {
      car_id: 'mistral',
      fullName: 'Bugatti Mistral',
      nickName: 'Mistral',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 65, reword: { type: 'seCard', count: 2 }  },
    { conditions: 90, reword: { type: 'credit', count: 100000 }  },
    { conditions: 115, reword: { type: 'seCard', count: 3 }  },
    { conditions: 135, reword: { type: 'token', count: 200 }  },
    { conditions: 180, reword: { type: 'seCard', count: 4 }  },
    { conditions: 220, reword: { type: 'credit', count: 250000 }  },
    { conditions: 250, reword: { type: 'seCard', count: 5 }  },
    { conditions: 290, reword: { type: 'token', count: 300 }  },
    { conditions: 320, reword: { type: 'sePart', count: 1 } },
    { conditions: 345, reword: { type: 'sePart', count: 1 } },
    { conditions: 380, reword: { type: 'sePart', count: 2 } },





    
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
          ],
        },
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fordp1', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fordp1', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
          ],
        },
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mistral', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 50,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valkyrie', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valkyrie', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 65,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 85,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mistral', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'token', count: 60 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 105,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 125,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykanneon', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykanneon', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 140,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mistral', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'token', count: 60 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 165,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
            { car_id: 'vulcan', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
            { car_id: 'vulcan', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 180,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fordp1', freeTry: true },
            { car_id: 'gtr', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fordp1', freeTry: true },
            { car_id: 'gtr', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fordp1', freeTry: true },
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
      unlockConditions: 195,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valkyrie', freeTry: true },
            { car_id: 'j50', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valkyrie', freeTry: true },
            { car_id: 'j50', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valkyrie', freeTry: true },
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
      unlockConditions: 215,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: true },
            { car_id: 'vulcano', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: true },
            { car_id: 'vulcano', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 240,
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
            { car_id: 'torino', freeTry: true },
            { car_id: 'fxxk', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
            { car_id: 'fxxk', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 260,
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
            { car_id: 'lykanneon', freeTry: true },
            { car_id: 'lykan', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykanneon', freeTry: true },
            { car_id: 'lykan', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykanneon', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 285,
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
          toolCars: [
            { car_id: 'mistral', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mistral', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mistral', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 600000 },
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mistral', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 1200000 },
            { type: 'seCard', count: 8 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mistral', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mistral', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        
        
        
      ],
    },
    
    
    {
      stage: 17,
      unlockConditions: 285,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
