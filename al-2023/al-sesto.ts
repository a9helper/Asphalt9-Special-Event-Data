import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 188,
  toolCars: [
    {
      car_id: 'countach',
      fullName: 'Lamborghini Countach 25th Anniversary',
      nickName: '康塔什',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'huracanste',
      fullName: 'Lamborghini Huracan Super Trofeo EVO',
      nickName: '小小牛',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'sv',
      fullName: 'Lamborghini Aventador SV Coupe',
      nickName: 'SV',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'miura',
      fullName: 'Lamborghini Miura Concept',
      nickName: '缪拉',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'gallardo',
      fullName: 'Lamborghini Gallardo LP 560-4',
      nickName: '盖拉多',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'murcielago',
      fullName: 'Lamborghini Murcielago LP 640 Roadster',
      nickName: '蝙蝠',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'svj',
      fullName: 'Lamborghini Aventador SVJ Roadster',
      nickName: 'SVJ',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'avj',
      fullName: 'Lamborghini Aventador J',
      nickName: 'AVJ',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },



    {
      car_id: 'sesto',
      fullName: 'Lamborghini sesto Elemento',
      nickName: '元素',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 48, reword: { type: 'seCard', count: 1 } },
    { conditions: 98, reword: { type: 'seCard', count: 2 } },
    { conditions: 178, reword: { type: 'seCard', count: 3 } },
    { conditions: 238, reword: { type: 'sePart', count: 1 } },
    { conditions: 288, reword: { type: 'seSkin', count: 1 } },
    { conditions: 308, reword: { type: 'sePart', count: 1 } },
  ],
  notes: [
    

  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 20000},
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            {type:'credit', count:30000},
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            {type:'seCard', count:2},
            {type:'token', count:75},
          ],
        },
      ],
    },

    {
      unlockConditions: 10,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'token', count: 25},
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            {type:'credit', count:50000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            {type:'seCard', count:1},
            {type:'credit', count:45000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            {type:'seCard', count:1},
            {type:'token', count:75},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 20,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 35000},
      ],
      missions: [

        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: true }],
          rewords: [
            
            {type:'token', count: 90},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 32,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'token', count: 30},
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sv', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sv', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 45000},
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sv', freeTry: true }],
          rewords: [
            {type:'seCard', count: 2},
            {type:'token', count: 75},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 45,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
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
            {type:'seCard', count: 1},
            {type:'credit', count: 45000},
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            {type:'seCard', count: 2},
            {type:'credit', count: 60000},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 55,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'token', count: 35},
      ],
      missions: [

        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: true }],
          rewords: [
            
            {type:'token', count: 105},
            {type:'credit', count: 125000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 70,
      clubRewords: [
        {type:'credit', count: 50000},
        {type:'seCard', count: 1},
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 60000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 75000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 105},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 80,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [

        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'murcielago', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'murcielago', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 60000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'murcielago', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 75},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 95,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000},
      ],
      missions: [

        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            {type:'seCard', count: 1},
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: true }],
          rewords: [
            {type:'credit', count: 75000},
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: true }],
          rewords: [
            {type:'credit', count: 90000},
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: true }],
          rewords: [
            {type:'token', count: 75},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 108,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [

        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: true }],
          rewords: [
            
            {type:'token', count: 150},
            {type:'credit', count: 90000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 120,
      clubRewords: [
        {type:'credit', count: 75000},
        {type:'token', count: 100},
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            {type:'token', count: 120},
            {type:'credit', count: 150000},
            {type:'seCard', count: 4},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 130,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 75000},
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            {type:'token', count: 135},
            {type:'credit', count: 150000},
            {type:'seCard', count: 4},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 140,
      clubRewords: [
        {type:'credit', count: 75000},
        {type:'seCard', count: 1},
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sv', freeTry: true }],
          rewords: [
            {type:'token', count: 150},
            {type:'credit', count: 175000},
            {type:'seCard', count: 5},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 148,
      clubRewords: [
        {type:'token', count: 100},
      ],
      missions: [        
        {
        conditions: 16,
        join: {
          star: 1,
          rank: 0,
        },
        toolCars: [{ car_id: 'miura', freeTry: true }],
        rewords: [
          {type:'token', count: 150},
          {type:'credit', count: 150000},
          {type:'seCard', count: 7},
        ],
      },

      ],
    },
    
    {
      unlockConditions: 155,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 88000},
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: true }],
          rewords: [
            {type:'credit', count: 200000},
            {type:'seCard', count: 7},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 165,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 88000},
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'murcielago', freeTry: true }],
          rewords: [
            {type:'token', count: 180},
            {type:'credit', count: 450000},
            {type:'seCard', count: 5},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 170,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 88000},
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: true }],
          rewords: [
            { type:'seCard', count: 5},
            { type:'sePart', count: 2},
            {type:'credit', count: 180000},
          ],
        },
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: false }],
          rewords: [
            { type:'token', count: 375 },
            { type:'sePart', count: 2},
          ],
        },
        
      ],
    },
    
    {
      unlockConditions: 177,
      clubRewords: [
        {type:'token', count: 150},
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: false }],
          rewords: [
            { type:'credit', count: 225000},
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: false }],
          rewords: [
            { type:'credit', count: 225000},
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: false }],
          rewords: [
            { type:'credit', count: 300000},
            { type:'token', count: 300},
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: false }],
          rewords: [
            { type:'sePart', count: 2},
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: false }],
          rewords: [
            { type:'credit', count: 800000},
            { type:'sePart', count: 2},
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: false }],
          rewords: [
            
            { type:'token', count: 352},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 178,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sesto', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
