import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 225,
  toolCars: [
    {
      car_id: 'miura',
      fullName: 'Lamborghini Miura Concept',
      nickName: 'Miura',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'm4gt3',
      fullName: 'BMW M4 GT3',
      nickName: 'M4 GT3',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'enzo',
      fullName: 'Ferrari Enzo',
      nickName: '恩佐',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'tachyon',
      fullName: 'Raesr Tachyon Speed',
      nickName: '超光速',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'nsxgt3',
      fullName: 'Acura NSX GT3 EVO',
      nickName: 'NSX GT3',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'panamera',
      fullName: 'Porsche Panamera Turbo S',
      nickName: '帕拉梅拉',
      star: 5,
      isKeyCar: true,
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
      car_id: 'apolloevo',
      fullName: 'Apollo EVO',
      nickName: '菠萝EVO',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    
  ],
  processRewords: [
    { conditions: 20, reword: { type: 'credit', count: 10000 } },
    { conditions: 60, reword: { type: 'seCard', count: 1 } },
    { conditions: 90, reword: { type: 'token', count: 30 } },
    { conditions: 120, reword: { type: 'seCard', count: 1 } },

    // { conditions: 150, reword: { type: 'sePart', count: 1 } },
    { conditions: 180, reword: { type: 'seCard', count: 1 } },
    // { conditions: 210, reword: { type: 'seSkin', count: 1 } },
    { conditions: 240, reword: { type: 'seCard', count: 1 } },
    // { conditions: 270, reword: { type: 'seKey', count: 1 } },
    { conditions: 300, reword: { type: 'sePart', count: 1 } },
    { conditions: 330, reword: { type: 'credit', count: 30000 } },
    { conditions: 360, reword: { type: 'sePart', count: 1 } },
    { conditions: 410, reword: { type: 'token', count: 100 } },
    { conditions: 475, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    "第 12 关使用5星 NSX GT3，可获得 NSX GT3 钥匙 1 把。",
    "第 17 关使用5星超光速，可获得超光速钥匙 1 把。",
  ],
  stages: [
    
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'miura', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
            { type: 'token', count: 90 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm4gt3', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'miura', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },

    
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
      ],
      missions: [
        
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'credit', count: 40000 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 80000 },
          ],
        },
      ],
    },
    
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
      ],
      missions: [
        
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'apolloevo', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 80 },
            { type: 'credit', count: 80000 },
          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 30,
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
            { car_id: 'enzo', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm4gt3', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 40 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'enzo', freeTry: false },
            { car_id: 'm4gt3', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'enzo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'enzo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
      ],
      missions: [
        
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tachyon', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm4gt3', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 40 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tachyon', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tachyon', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
      ],
      missions: [

        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'apolloevo', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 100 },
            { type: 'credit', count: 100000 },
          ],
        },
      ],
    },
    
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'nsxgt3', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm4gt3', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'nsxgt3', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'nsxgt3', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 8,
      unlockConditions: 80,
      clubRewords: [
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm4gt3', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 9,
      unlockConditions: 100,
      clubRewords: [
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm4gt3', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 80 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 10,
      unlockConditions: 130,
      clubRewords: [
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'apolloevo', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 120000 },
          ],
        },
      ],
    },
    
    {
      stage: 11,
      unlockConditions: 175,
      clubRewords: [
      ],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [

          ],
        },
        
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
            { type: 'token', count: 60 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 90000 },
          ],
        },
      ],
    },
    
    {
      stage: 12,
      unlockConditions: 220,
      clubRewords: [
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsxgt3', freeTry: true }],
          rewords: [

          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsxgt3', freeTry: true }],
          rewords: [
            { type: 'credit', count: 97500 },
            { type: 'token', count: 90 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsxgt3', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
      ],
    },
    
    {
      stage: 13,
      unlockConditions: 250,
      clubRewords: [
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },

          ],
        },
        
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'credit', count: 105000 },
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'miura', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 240000 },
          ],
        },
      ],
    },
    
    {
      stage: 14,
      unlockConditions: 280,
      clubRewords: [
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'panamera', freeTry: true }],
          rewords: [

          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'panamera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 112500 },
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'panamera', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 280000 },
          ],
        },
      ],
    },
    
    {
      stage: 15,
      unlockConditions: 310,
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
            { car_id: 'enzo', freeTry: false },
            { car_id: 'm4gt3', freeTry: false },
          ],
          rewords: [

          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'enzo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'enzo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    
    {
      stage: 16,
      unlockConditions: 340,
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
            { car_id: 'svj', freeTry: false },
            { car_id: 'm4gt3', freeTry: false },
          ],
          rewords: [

          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            { type: 'credit', count: 85000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 625000 },
          ],
        },
      ],
    },
    
    {
      stage: 17,
      unlockConditions: 370,
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
            { car_id: 'tachyon', freeTry: true },
          ],
          rewords: [

          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
            { type: 'credit', count: 270000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 750000 },
          ],
        },
      ],
    },
    
    {
      stage: 18,
      unlockConditions: 400,
      clubRewords: [
      ],
      missions: [
        
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 600000 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 750000 },
            { type: 'token', count: 210 },
            
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    

    {
      stage: 19,
      unlockConditions:420,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
