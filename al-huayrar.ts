import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 145,
  toolCars: [
    {
      car_id: 'continentalgt',
      fullName: 'Bentley Continental GT Speed',
      nickName: '欧陆Speed',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'elva',
      fullName: 'Mclaren Elva',
      nickName: 'Elva',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'eb110',
      fullName: 'Bugatti EB110',
      nickName: 'EB110',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'onyx',
      fullName: 'Peugeot Onyx',
      nickName: 'Onyx',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'zondar',
      fullName: 'Pagani Zonda R',
      nickName: 'Zonda R',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'barchetta',
      fullName: 'Pagani Zonda HP Barchetta',
      nickName: 'Zonda HP',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'bc',
      fullName: 'Pagani Huayra BC',
      nickName: 'BC',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    
    

    {
      car_id: 'huayrar',
      fullName: 'Pagani Huayra R',
      nickName: 'Huayra R',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 2 } },
    { conditions: 150, reword: { type: 'seCard', count: 3 } },
    { conditions: 200, reword: { type: 'sePart', count: 1 } },
    { conditions: 222, reword: { type: 'sePart', count: 1 } },
  ],
  notes: [
    '阶段15使用 Zonda HP 参赛，可获得它的钥匙1把。',
    '阶段17使用 Zonda R 参赛，可获得它的钥匙1把。',
    '阶段18使用 6 星 Huayra R 参赛，可获得A级万能图纸 1 张。这张万能金卡【不计入】计算器中的 Huayra R 金卡数量中。',

  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000},
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: true }],
          rewords: [
            {type:'seCard', count:2},
            {type:'credit', count:45000},
          ],
        },
      ],
    },

    {
      unlockConditions: 10,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'token', count: 50},
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: true }],
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
          toolCars: [{ car_id: 'elva', freeTry: true }],
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            
            {type:'token', count: 150},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 30,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000},
        {type:'token', count: 50},
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 60000},
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            {type:'seCard', count: 2},
            {type:'token', count: 75},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 40,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 60000},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 50,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'token', count: 50},
      ],
      missions: [

        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            
            {type:'token', count: 150},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 65,
      clubRewords: [
        {type:'credit', count: 50000},
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 90000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 75},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 75,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [

        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 90000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 75},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 85,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000},
      ],
      missions: [

        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            {type:'seCard', count: 1},
            {type:'credit', count: 90000},
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            {type:'seCard', count: 2},
            {type:'token', count: 75},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 95,
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
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            
            {type:'token', count: 150},
            {type:'credit', count: 150000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 110,
      clubRewords: [
        {type:'credit', count: 75000},
        {type:'token', count: 150},
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: true }],
          rewords: [
            {type:'seCard', count: 2},
            {type:'token', count: 150},
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: true }],
          rewords: [
            { type:'seCard', count: 5 },
            { type:'sePart', count: 1 },
            { type:'credit', count: 200000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 115,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 100000},
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: true }],
          rewords: [
            {type:'token', count: 150},
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: true }],
          rewords: [
            { type:'seCard', count: 1 },
            { type:'credit', count: 200000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: true }],
          rewords: [
            { type:'seCard', count: 3 },
            { type:'sePart', count: 1 },
          ],
        },

      ],
    },
    
    {
      unlockConditions: 120,
      clubRewords: [
        {type:'credit', count: 75000},
        {type:'token', count: 50},
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type:'seCard', count: 1 },
            { type:'credit', count: 200000},
            { type:'token', count: 150},
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type:'seCard', count: 2 },
            { type:'sePart', count: 1 },
            { type:'credit', count: 250000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 125,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'token', count: 50},
      ],
      missions: [        {
        conditions: 5,
        join: {
          star: 1,
          rank: 0,
        },
        toolCars: [{ car_id: 'elva', freeTry: true }],
        rewords: [
        ],
      },
      {
        conditions: 8,
        join: {
          star: 4,
          rank: 0,
        },
        toolCars: [{ car_id: 'elva', freeTry: true }],
        rewords: [
          { type:'seCard', count: 1 },
          { type:'credit', count: 250000},
          { type:'token', count: 100},
        ],
      },
      {
        conditions: 6,
        join: {
          star: 5,
          rank: 0,
        },
        toolCars: [{ car_id: 'elva', freeTry: true }],
        rewords: [
          { type:'seCard', count: 2 },
          { type:'sePart', count: 1 },
          { type:'credit', count: 225000},
        ],
      },

      ],
    },
    
    {
      unlockConditions: 132,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 75000},
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            { type:'seCard', count: 2 },
            { type:'credit', count: 250000},
            { type:'token', count: 100},
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            { type:'seCard', count: 3 },
            { type:'credit', count: 225000},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 137,
      clubRewords: [
        {type:'seCard', count: 2},
        {type:'credit', count: 75000},
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            { type:'seCard', count: 1 },
            { type:'credit', count: 250000},
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            { type:'seCard', count: 2 },
            { type:'credit', count: 375000},
            { type:'token', count: 150},
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            { type:'seCard', count: 3 },
            { type:'sePart', count: 1 },
            { type:'credit', count: 270000},
          ],
        },
      ],
    },
    
    {
      unlockConditions: 142,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 100000},
        {type:'sePart', count: 1},
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type:'credit', count: 200000},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type:'token', count: 150 },
            { type:'seCard', count: 1},
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type:'seCard', count: 1 },
            { type:'credit', count: 375000},
            { type:'sePart', count: 1},
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type:'seCard', count: 3 },
            { type:'credit', count: 270000},
          ],
        },

      ],
    },
    
    {
      unlockConditions: 149,
      clubRewords: [
        {type:'token', count: 100},
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type:'credit', count: 300000},
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type:'credit', count: 225000},
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type:'credit', count: 300000},
            { type:'token', count: 750},
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type:'credit', count: 600000},
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            { type:'credit', count: 2300000},
            { type:'sePart', count: 1},
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            
          ],
        },

      ],
    },
    
    {
      unlockConditions: 149,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
