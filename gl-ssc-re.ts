import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 180,
  toolCars: [
    {
      car_id: 'vulcan',
      fullName: 'Aston Martin Vulcan',
      nickName: '火神',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'gtr',
      fullName: 'Nissan GT-R Nismo',
      nickName: 'GTR',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'j50',
      fullName: 'Ferrari J50',
      nickName: 'J50',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'centenario',
      fullName: 'Lamborghini Centenario',
      nickName: '百年牛',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'fxxk',
      fullName: 'Ferrari FXX K',
      nickName: 'FXX K',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'vulcano',
      fullName: 'Icona Vulcano Titanium',
      nickName: '火山',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'lykan',
      fullName: 'W Motors Lykan Hypersport',
      nickName: '狼崽',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },



    {
      car_id: 'sc20',
      fullName: 'Lamborghini SC20',
      nickName: 'SC20',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'valhalla',
      fullName: 'Aston Martin Valhalla',
      nickName: '英灵殿',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'imola',
      fullName: 'Pagani Imola',
      nickName: 'Imola',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'divo',
      fullName: 'Bugatti Divo',
      nickName: 'Divo',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'millecavalli',
      fullName: 'Mazzanti Evantra Millecavalli',
      nickName: '皇后',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'lvn',
      fullName: 'Bugatti LA Voiture Noire',
      nickName: '黑龙',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'gemera',
      fullName: 'Koenigsegg Gemera',
      nickName: 'Gemera',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },



    
    {
      car_id: 'ssc',
      fullName: 'SSC Tuatara',
      nickName: '大蜥蜴',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    
  ],
  processRewords: [
    // { conditions: 25, reword: { type: 'seCard', count: 1 } },
    // { conditions: 50, reword: { type: 'seCard', count: 1 } },
    // { conditions: 100, reword: { type: 'seCard', count: 1 } },
    // { conditions: 150, reword: { type: 'seCard', count: 1 } },
    // { conditions: 200, reword: { type: 'seCard', count: 2 } },
    // { conditions: 250, reword: { type: 'seCard', count: 1 } },
    // { conditions: 300, reword: { type: 'seCard', count: 2 } },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 375, reword: { type: 'seSkin', count: 1 } },
    { conditions: 400, reword: { type: 'seKey', count: 1 } },
  ],
  notes: [
    
  ],
  stages: [
    
    {
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
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [{ type: 'credit', count: 150000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 125 },
          ],
        },
      ],
    },
    {
      unlockConditions:10,
      clubRewords:[
        { type: 'credit', count: 10000 },

      ],
      missions:[
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
            { type: 'credit', count: 150000 }
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
            { type: 'seCard', count: 2 },
            { type: 'token', count: 125 },
          ],
        },

      ]
    },
    {
      unlockConditions:20,
      clubRewords:[
        { type: 'token', count: 15 },

      ],
      missions:[

        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 200 },
          ],
        },
      ]
    },
    {
      unlockConditions:30,
      clubRewords:[
        { type: 'credit', count: 10000 },

      ],
      missions:[
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
            { type: 'credit', count: 150000 }
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
            { type: 'seCard', count: 2 },
            { type: 'token', count: 125 },
          ],
        },

      ]
    },
    {
      unlockConditions:40,
      clubRewords:[
        { type: 'credit', count: 10000 },

      ],
      missions:[
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
            { type: 'credit', count: 150000 }
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
            { type: 'seCard', count: 2 },
            { type: 'token', count: 125 },
          ],
        },

      ]
    },
    {
      unlockConditions:50,
      clubRewords:[
        { type: 'token', count: 15 },

      ],
      missions:[

        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 200 },
          ],
        },
      ]
    },
    {
      unlockConditions:60,
      clubRewords:[
        { type: 'credit', count: 15000 },

      ],
      missions:[
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: false },
            { car_id: 'millecavalli', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 }
          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'millecavalli', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 125 },
          ],
        },

      ]
    },
    {
      unlockConditions:70,
      clubRewords:[
        { type: 'credit', count: 10000 },

      ],
      missions:[
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: false },
            { car_id: 'lvn', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 }
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 125 },
          ],
        },

      ]
    },
    {
      unlockConditions:80,
      clubRewords:[
        { type: 'credit', count: 15000 },

      ],
      missions:[
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: false },
            { car_id: 'gemera', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 }
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gemera', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 125 },
          ],
        },

      ]
    },
    {
      unlockConditions:90,
      clubRewords:[
        { type: 'token', count: 15 },

      ],
      missions:[

        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 200 },
          ],
        },

      ]
    },
    {
      unlockConditions:100,
      clubRewords:[
        { type: 'credit', count: 20000 },

      ],
      missions:[
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcan', freeTry: false },
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [{ type: 'credit', count: 500000 }],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcan', freeTry: false },
            { car_id: 'sc20', freeTry: true },
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

      ]
    },
    {
      unlockConditions:110,
      clubRewords:[
        { type: 'credit', count: 0 },

      ],
      missions:[
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr', freeTry: false },
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [{ type: 'credit', count: 500000 }],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr', freeTry: false },
            { car_id: 'valhalla', freeTry: false },
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

      ]
    },
    {
      unlockConditions:120,
      clubRewords:[
        { type: 'credit', count: 20000 },

      ],
      missions:[

        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: false },
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [{ type: 'credit', count: 500000 }],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'j50', freeTry: false },
            { car_id: 'imola', freeTry: false },
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
      ]
    },
    {
      unlockConditions:130,
      clubRewords:[
        { type: 'credit', count: 10000 },

      ],
      missions:[
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'centenario', freeTry: false },
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [{ type: 'credit', count: 500000 }],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'centenario', freeTry: false },
            { car_id: 'divo', freeTry: false },
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

      ]
    },
    {
      unlockConditions:140,
      clubRewords:[
        { type: 'credit', count: 20000 },

      ],
      missions:[
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: false },
            { car_id: 'millecavalli', freeTry: false },
          ],
          rewords: [{ type: 'credit', count: 500000 }],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fxxk', freeTry: false },
            { car_id: 'millecavalli', freeTry: false },
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
            { car_id: 'millecavalli', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },

      ]
    },
    {
      unlockConditions:150,
      clubRewords:[
        { type: 'credit', count: 20000 },

      ],
      missions:[
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: false },
            { car_id: 'lvn', freeTry: true },
          ],
          rewords: [{ type: 'credit', count: 500000 }],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vulcano', freeTry: false },
            { car_id: 'lvn', freeTry: true },
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

      ]
    },
    {
      unlockConditions:160,
      clubRewords:[
        { type: 'credit', count: 20000 },

      ],
      missions:[
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: false },
            { car_id: 'gemera', freeTry: true },
          ],
          rewords: [{ type: 'credit', count: 500000 }],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lykan', freeTry: false },
            { car_id: 'gemera', freeTry: true },
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

      ]
    },
    {
      unlockConditions:170,
      clubRewords:[
        { type: 'credit', count: 10000 },

      ],
      missions:[

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
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'sePart', count: 2 },
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
      ]
    },
    {
      unlockConditions:180,
      clubRewords:[
        { type: 'credit', count: 10000 },

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ssc', freeTry: false },
          ],
          rewords: [
            
          ],
        },

      ]
    },
    
  ],
}

export default template
