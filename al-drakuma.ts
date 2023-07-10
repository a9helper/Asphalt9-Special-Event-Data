import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 200,
  toolCars: [
    {
      car_id: 'sr1',
      fullName: 'Peugeot SR1',
      nickName: 'SR1',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'continental',
      fullName: 'Bentley Continental GT3🔑',
      nickName: '欧陆GT3',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'c7r',
      fullName: 'Chevrolet Corvette C7.R🔑',
      nickName: 'C7R',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'r390',
      fullName: 'Nissan R390GT1🔑',
      nickName: 'R390',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'xxe',
      fullName: 'Ferrari 599XX EVO🔑',
      nickName: 'XXE',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'sennagtr',
      fullName: 'Mclaren Senna GTR',
      nickName: '塞纳GTR',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'zr1',
      fullName: 'Chevrolet Corvette ZR1',
      nickName: 'ZR1',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    
    

    {
      car_id: 'drakuma',
      fullName: 'Ajlani Drakuma',
      nickName: 'Drakuma',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 48, reword: { type: 'seCard', count: 1 } },
    { conditions: 98, reword: { type: 'seCard', count: 2 } },
    { conditions: 162, reword: { type: 'seCard', count: 3 } },
    { conditions: 238, reword: { type: 'sePart', count: 1 } },
    { conditions: 288, reword: { type: 'seSkin', count: 1 } },
    { conditions: 308, reword: { type: 'sePart', count: 1 } },
  ],
  notes: [
    "288 条件获得贴纸1张。",
    "阶段 18 使用 6 星 Drakuma 参赛，可获得 S 万能金卡1张。",
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 30000},
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: true }],
          rewords: [
            {type:'token', count: 30},
            {type:'credit', count:45000},

          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: true }],
          rewords: [
            {type:'seCard', count:2},
            {type:'token', count:50},
          ],
        },
      ],
    },

    {
      unlockConditions: 10,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'continental', freeTry: true }],
          rewords: [
            {type:'credit', count:45000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'continental', freeTry: true }],
          rewords: [
            {type:'seCard', count:1},
            {type:'token', count: 30},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'continental', freeTry: true }],
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
      ],
      missions: [

        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            
            {type:'token', count: 75},
            {type:'credit', count: 100000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 32,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'token', count: 25},
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 30},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 75},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 45,
      clubRewords: [
        {type:'token', count: 35},
        {type:'credit', count: 50000},
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 30},
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            {type:'seCard', count: 2},
            {type:'token', count: 75},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 55,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [

        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            
            {type:'token', count: 100},
            {type:'credit', count: 125000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 70,
      clubRewords: [
        {type:'credit', count: 60000},
        {type:'token', count: 35},
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            {type:'credit', count: 60000},
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 140000},
            {type:'token', count: 30},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 75},
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 75000},
            {type:'token', count: 30},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 75},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 90,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 60000},
      ],
      missions: [

        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zr1', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'zr1', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 45},
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zr1', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 160000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'zr1', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 90},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 100,
      clubRewords: [
        {type:'token', count: 50},
      ],
      missions: [

        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            
            {type:'token', count: 120},
            {type:'credit', count: 150000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 110,
      clubRewords: [
        {type:'credit', count: 75000},
        {type:'seCard', count: 1},
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: true }],
          rewords: [
            { type:'seCard', count: 4 },
            { type:'token', count: 165 },
            { type:'credit', count: 200000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 120,
      clubRewords: [
        {type:'token', count: 75},
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'continental', freeTry: true }],
          rewords: [
            { type:'seCard', count: 4 },
            { type:'token', count: 165 },
            { type:'credit', count: 150000},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 128,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'token', count: 100},
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type:'seCard', count: 5 },
            { type:'token', count: 225 },
            { type:'credit', count: 100000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 136,
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
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type:'seCard', count: 6 },
            { type:'token', count: 175 },
            { type:'credit', count: 100000},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 145,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 100000},
      ],
      missions: [
        
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type:'seCard', count: 7 },
            { type:'token', count: 175 },
            { type:'credit', count: 100000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 152,
      clubRewords: [
        {type:'token', count: 100},
      ],
      missions: [
        
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zr1', freeTry: true }],
          rewords: [
            { type:'seCard', count: 6 },
            { type:'token', count: 175 },
            { type:'credit', count: 310000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 160,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 150000},
      ],
      missions: [
        
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            { type:'seCard', count: 7 },
            { type:'sePart', count: 2 },
            { type:'token', count: 175 },
            { type:'credit', count: 100000},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 162,
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
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            { type:'credit', count: 200000},
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
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
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            { type:'credit', count: 300000},
            { type:'token', count: 264},
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
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
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
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
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            { type:'token', count: 752},
            
          ],
        },

      ],
    },
    
    {
      unlockConditions: 162,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
