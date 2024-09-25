import { SED } from '../type.d.ts'

const template: SED = {
  havePack: true,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: true,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'gallardo',
      fullName: 'Lamborghini Gallardo LP 560-4',
      nickName: '盖拉多',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'asterion',
      fullName: 'Lamborghini Asterion',
      nickName: '蓝牛',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'huracanste',
      fullName: 'Lamborghini Huracan Super Trofeo Evo🔑',
      nickName: 'D飓风',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'reventon',
      fullName: 'Lamborghini Reventon Roadster🔑',
      nickName: '雷文顿',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'sv',
      fullName: 'Lamborghini Aventador SV Coupe',
      nickName: 'SV',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'sc63',
      fullName: 'Lamborghini SC63🔑',
      nickName: 'SC63',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'diablo',
      fullName: 'Lamborghini Diablo GT',
      nickName: 'Diablo',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'svj',
      fullName: 'Lamborghini Aventador SVJ Roadster',
      nickName: 'SVJ',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'avj',
      fullName: 'Lamborghini Aventador J',
      nickName: 'AVJ',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },

    {
      car_id: 'egoista',
      fullName: 'Lamborghini Egoista',
      nickName: '自私',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'terzo',
      fullName: 'Lamborghini Terzo Millennio',
      nickName: '千年牛',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },



    
    {
      car_id: 'temerario',
      fullName: 'Lamborghini Temerario🔑',
      nickName: 'Temerario',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 20, reword: { type: 'credit', count: 10000 }  },
    { conditions: 60, reword: { type: 'sePack', count: 2 }  },
    { conditions: 100, reword: { type: 'token', count: 100 }  },
    { conditions: 160, reword: { type: 'sePack', count: 4 }  },
    { conditions: 220, reword: { type: 'seCard', count: 2 }  },
    { conditions: 280, reword: { type: 'seCard', count: 2 }  },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 400, reword: { type: 'sePart', count: 1 } },
    { conditions: 430, reword: { type: 'sePart', count: 1 } },












    
    
  ],
  notes: [
    "注意阶段 28 开启后 24 小时即结束，获取贴纸仅此一天机会！",
    "注意阶段 22 至 26 既有图纸奖励，又有 6 星 Temerario 任务夺取金卡，建议满星之后再回头补金卡！"

  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
            { type: 'seKey', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 5,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 15000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 30 },
          ],
        },
        
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 10,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'asterion', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 195000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'asterion', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 15,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huracanste', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 15000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huracanste', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huracanste', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 40 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 20,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'reventon', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 15000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'reventon', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'reventon', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 40 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 25,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sv', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 15000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sv', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sv', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 40 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 30,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
            
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 35,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc63', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 18000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc63', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 345000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc63', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 50 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 40,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'diablo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 18000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'diablo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 345000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'diablo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 50 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 45,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 18000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 345000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
          ],
        },
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 50,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'avj', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 18000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'avj', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 345000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'avj', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },


        
      ],
    },
    {
      stage: 12,
      unlockConditions: 55,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'egoista', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 18000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'egoista', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 345000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'egoista', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 60,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'terzo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 18000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'terzo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 345000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'terzo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 65,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
            
            { type: 'token', count: 150 },
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 70,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 24000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 480000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 75,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'asterion', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 24000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'asterion', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 480000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 160 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'asterion', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 60 },
          ],
        },
        
        
      ],
    },
    
    {
      stage: 17,
      unlockConditions: 80,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huracanste', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 24000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huracanste', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 480000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 160 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huracanste', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 70 },
          ],
        },
        
      ],
    },
    {
      stage: 18,
      unlockConditions: 85,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'reventon', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 24000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'reventon', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 480000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 160 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'reventon', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 70 },
          ],
        },
        
      ],
    },
    {
      stage: 19,
      unlockConditions: 90,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sv', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 24000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sv', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 480000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 160 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sv', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 70 },
          ],
        },
        
      ],
    },
    {
      stage: 20,
      unlockConditions: 95,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc63', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 24000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc63', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 480000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 160 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc63', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 70 },
          ],
        },
        
      ],
    },
    {
      stage: 21,
      unlockConditions: 100,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            
            { type: 'token', count: 300 },
          ],
        },
        
      ],
    },
    {
      stage: 22,
      unlockConditions: 105,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'diablo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'diablo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 840000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 240 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'diablo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 80 },
          ],
        },
        
      ],
    },
    {
      stage: 23,
      unlockConditions: 110,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 840000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svj', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 80 },
          ],
        },
        
      ],
    },
    {
      stage: 24,
      unlockConditions: 115,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'avj', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'avj', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 840000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'avj', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
          ],
        },
        
      ],
    },
    {
      stage: 25,
      unlockConditions: 120,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'egoista', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'egoista', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 840000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'egoista', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 80 },
          ],
        },
        
      ],
    },
    {
      stage: 26,
      unlockConditions: 125,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'terzo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'terzo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 840000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'terzo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 80 },
          ],
        },
        
      ],
    },
    {
      stage: 27,
      unlockConditions: 130,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'temerario', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 800000 },
            
            { type: 'token', count: 450 },
          ],
        },
        
      ],
    },
    {
      stage: 28,
      unlockConditions: 135,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'temerario', freeTry: false }],
          rewords: [
            { type: 'seSkin', count: 1 },
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
