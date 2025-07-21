import { SED } from '../type.d.ts'

const template: SED = {
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
      car_id: 'imola',
      fullName: 'Pagani Imola',
      nickName: '伊莫拉',
      isKeyCar: false,
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
      car_id: 'vision111',
      fullName: 'Mercedes-Benz Vision One-Eleven🔑',
      nickName: 'Vision 111',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'owl',
      fullName: 'Aspark Owl',
      nickName: '猫头鹰',
      isKeyCar: false,
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
    {
      car_id: 'mistral',
      fullName: 'Bugatti Mistral',
      nickName: 'Mistral',
      isKeyCar: false,
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
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 2 }  },
    { conditions: 45, reword: { type: 'seCard', count: 3 }  },
    { conditions: 75, reword: { type: 'seCard', count: 5 }  },
    { conditions: 80, reword: { type: 'credit', count: 500000 }  },
    { conditions: 100, reword: { type: 'seCard', count: 5 }  },
    { conditions: 150, reword: { type: 'token', count: 300 }  },
    { conditions: 200, reword: { type: 'sePart', count: 1 }  },
    { conditions: 330, reword: { type: 'sePart', count: 2 }  },
    { conditions: 339, reword: { type: 'seKey', count: 1 }  },













    
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
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
            { car_id: 'c2', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'credit', count: 125000 },
          ],
        },
        
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
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
            { car_id: 'imola', freeTry: true },
            { car_id: 'vulcan', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcan', freeTry: true },
            { car_id: 'imola', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcan', freeTry: true },
            { car_id: 'imola', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcan', freeTry: true },
            { car_id: 'imola', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcan', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcan', freeTry: true },
            { car_id: 'imola', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcan', freeTry: true },
            { car_id: 'imola', freeTry: true },

          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 90 },
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
            { car_id: 'gtr', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr', freeTry: true },
            { car_id: 'lpi800', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr', freeTry: true },
            { car_id: 'lpi800', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr', freeTry: true },
            { car_id: 'lpi800', freeTry: true },

          ],
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
          toolCars: [
            { car_id: 'gtr', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr', freeTry: true },
            { car_id: 'lpi800', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr', freeTry: true },
            { car_id: 'lpi800', freeTry: true },

          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
        
      ],
    },
    {
      stage: 4,
      unlockConditions: 35,
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
            { car_id: 'vision111', freeTry: true },
            { car_id: 'j50', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: true },
            { car_id: 'vision111', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: true },
            { car_id: 'vision111', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: true },
            { car_id: 'vision111', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: true },
            { car_id: 'vision111', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 8 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: true },
            { car_id: 'vision111', freeTry: true },

          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 50,
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
            { car_id: 'c2', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'credit', count: 250000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 70,
      clubRewords: [
        { type: 'credit', count:10000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'owl', freeTry: true },
            { car_id: 'vulcano', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: true },
            { car_id: 'owl', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 175 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: true },
            { car_id: 'owl', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 180000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: true },
            { car_id: 'owl', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: true },
            { car_id: 'owl', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: true },
          ],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: true },
            { car_id: 'owl', freeTry: true },

          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 135 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 90,
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
            { car_id: 'fxxk', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: true },
            { car_id: 'chiron300', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 175 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: true },
            { car_id: 'chiron300', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 180000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: true },
            { car_id: 'chiron300', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: true },
            { car_id: 'chiron300', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: true },
          ],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: true },
            { car_id: 'chiron300', freeTry: true },

          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 135 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 110,
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
            { car_id: 'mistral', freeTry: true },
            { car_id: 'lykan', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: true },
            { car_id: 'mistral', freeTry: true },

          ],
          rewords: [
            { type: 'token', count: 175 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: true },
            { car_id: 'mistral', freeTry: true },

          ],
          rewords: [
            { type: 'credit', count: 180000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: true },
            { car_id: 'mistral', freeTry: true },

          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: true },

          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: true },
            { car_id: 'mistral', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: true },
          ],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: true },
            { car_id: 'mistral', freeTry: true },

          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 135 },
          ],
        },
        
      ],
    },
    {
      stage: 9,
      unlockConditions: 125,
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
          toolCars: [{ car_id: 'c2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'c2', freeTry: true }],
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
          toolCars: [{ car_id: 'c2', freeTry: true }],
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
          toolCars: [{ car_id: 'c2', freeTry: true }],
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
          toolCars: [{ car_id: 'c2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 450000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'c2', freeTry: true }],
          rewords: [
            { type: 'token', count: 450 },
            { type: 'sePart', count: 2 },
            
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
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c2', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
