import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
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
      car_id: 'sc20',
      fullName: 'Lamborghini SC20🔑',
      nickName: 'SC20',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
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
      car_id: 'valhalla',
      fullName: 'Aston Martin Valhalla Concept Car',
      nickName: '英灵殿',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
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
      car_id: 'imola',
      fullName: 'Pagani Imola',
      nickName: '伊莫拉',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'centenario',
      fullName: 'Lamborghini Centenario',
      nickName: '百年牛',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
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
      car_id: 'fxxk',
      fullName: 'Ferrari FXX K',
      nickName: 'FXXK',
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
      car_id: 'vulcano',
      fullName: 'Icona Vulcano Titanium',
      nickName: '火山',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'lvn',
      fullName: 'Bugatti LA Voiture Noire🔑',
      nickName: '黑龙',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
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
      car_id: 'gemera',
      fullName: 'Koenigsegg Gemera🔑',
      nickName: 'Gemera',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },





    
    {
      car_id: 'ssc',
      fullName: 'SSC Tuatara🔑',
      nickName: '大蜥蜴',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 375, reword: { type: 'seSkin', count: 1 } },
    { conditions: 390, reword: { type: 'seKey', count: 1 } },
    
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
          toolCars: [
            { car_id: 'vulcan', freeTry: false },
            { car_id: 'sc20', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'seCard', count: 2 },
            
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr', freeTry: false },
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'token', count: 15 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 250 },
            { type: 'credit', count: 250000 },
            
          ],
        },

      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
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
            { car_id: 'j50', freeTry: false },
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 15000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'centenario', freeTry: false },
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        { type: 'token', count: 15 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 250 },
            { type: 'credit', count: 250000 },
            
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 15000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: false },
            { car_id: 'mbbs', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mbbs', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 70,
      clubRewords: [
        { type: 'credit', count: 15000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: false },
            { car_id: 'lvn', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 80,
      clubRewords: [
        { type: 'credit', count: 15000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: false },
            { car_id: 'gemera', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gemera', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 90,
      clubRewords: [
        { type: 'token', count: 15 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 250 },
            { type: 'credit', count: 250000 },
            
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 100,
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
          toolCars: [
            { car_id: 'sc20', freeTry: true },
            { car_id: 'vulcan', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },
            { car_id: 'vulcan', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 110,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
            { car_id: 'gtr', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
            { car_id: 'gtr', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions:120,
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
          toolCars: [
            { car_id: 'imola', freeTry: false },
            { car_id: 'j50', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: false },
            { car_id: 'j50', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 130,
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
          toolCars: [
            { car_id: 'divo', freeTry: false },
            { car_id: 'centenario', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
            { car_id: 'centenario', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 140,
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
          toolCars: [
            { car_id: 'mbbs', freeTry: true },
            { car_id: 'fxxk', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mbbs', freeTry: true },
            { car_id: 'fxxk', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mbbs', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 16,
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
          toolCars: [
            { car_id: 'lvn', freeTry: true },
            { car_id: 'vulcano', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: true },
            { car_id: 'vulcano', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 160,
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
          toolCars: [
            { car_id: 'gemera', freeTry: true },
            { car_id: 'lykan', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gemera', freeTry: true },
            { car_id: 'lykan', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gemera', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 170,
      clubRewords: [
        { type: 'token', count: 20 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 180000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 450 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
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
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 500 },
            { type: 'sePart', count: 2 },
            
          ],
        },
      ],
    },

    
    
    
    {
      stage: 19,
      unlockConditions: 180,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: false },
          ],
          rewords: [
          ],
        },
        
      ],
    },
    
  ],
}

export default template
