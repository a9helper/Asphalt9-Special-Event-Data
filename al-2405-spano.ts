import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 140,
  toolCars: [
    {
      car_id: 'f40',
      fullName: 'Ferrari F40',
      nickName: 'F40',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'alfieri',
      fullName: 'Maserati Alfieri',
      nickName: '玛莎',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'ass',
      fullName: 'Artega Scalo Superelletra',
      nickName: 'ASS',
      star: 4,
      isKeyCar: false,
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
      car_id: '812',
      fullName: 'Ferrari 812 Superfast',
      nickName: '812',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: '918',
      fullName: 'Porsche 918 Spyder',
      nickName: '918',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'enzo',
      fullName: 'Ferrari Enzo Ferrari',
      nickName: '恩佐',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    
    

    {
      car_id: 'f8',
      fullName: 'Ferrari F8 Tributo',
      nickName: 'F8',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 48, reword: { type: 'seCard', count: 1 } },
    { conditions: 88, reword: { type: 'seCard', count: 2 } },
    { conditions: 138, reword: { type: 'seCard', count: 3 } },
    { conditions: 168, reword: { type: 'sePart', count: 1 } },
    { conditions: 188, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    "和去年的 F8 特赛相比变化不大：",
    "取消了阶段 10 俱乐部的 60000 金币；",
    "增加一个 Enzo 的阶段，并提高了 14-16 阶段的解锁需求；",
    "需要 140 个条件之后解锁卡牌包。"
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 35000},
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f40', freeTry: true }],
          rewords: [
            {type:'token', count: 90},
            {type:'credit', count: 3*8888},
            {type:'seCard', count:1},

          ],
        },
      ],
    },

    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        {type:'token', count: 50},
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'alfieri', freeTry: true }],
          rewords: [
            {type:'token', count: 105},
            {type:'credit', count: 5*8888},
            {type:'seCard', count: 2},
          ],
        },

      ],
    },
    
    {
      stage: 3,
      unlockConditions: 18,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 35000},
      ],
      missions: [

        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: true }],
          rewords: [
            {type:'token', count: 90 },
            {type:'credit', count: 5*8888},
            {type:'seCard', count: 2},
          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 30,
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
          toolCars: [{ car_id: 'ass', freeTry: true }],
          rewords: [
            {type:'token', count: 90 },
            {type:'credit', count: 5*8888 },
            {type:'seCard', count: 3 },
          ],
        },

      ],
    },
    
    {
      stage: 5,
      unlockConditions: 42,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000},
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            {type:'token', count: 120 },
            {type:'credit', count: 5 * 8888 },
            {type:'seCard', count: 3 },
          ],
        },

      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        {type:'token', count: 60},
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '812', freeTry: true }],
          rewords: [
            {type:'token', count: 120 },
            {type:'credit', count: 3 * 12888 },
            {type:'seCard', count: 2 },
          ],
        },

      ],
    },
    
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 50000 },
      ],
      missions: [

        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: true }],
          rewords: [
            {type:'token', count: 105 },
            {type:'credit', count: 3 * 12888 },
            {type:'seCard', count: 2 },
          ],
        },
      ],
    },
    
    {
      stage: 8,
      unlockConditions: 70,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: true }],
          rewords: [
            {type:'token', count: 135 },
            {type:'credit', count: 3 * 12888 + 3 * 16888 },
            {type:'seCard', count: 3 },
          ],
        },
      ],
    },
    
    {
      stage: 9,
      unlockConditions: 80,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 75000 },
      ],
      missions: [

        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'alfieri', freeTry: true }],
          rewords: [
            {type:'token', count: 70 },
            {type:'credit', count: 3 * 12888  },
            {type:'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ass', freeTry: true }],
          rewords: [
            {type:'token', count: 70 },
            {type:'seCard', count: 2 },
          ],
        },
      ],
    },
    
    {
      stage: 10,
      unlockConditions: 88,
      clubRewords: [
        {type:'token', count: 75},
        // {type:'credit', count: 60000},
      ],
      missions: [

        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f40', freeTry: true }],
          rewords: [
            {type:'token', count: 150 },
            {type:'credit', count: 3 * 12888  },
            {type:'seCard', count: 5 },
          ],
        },
      ],
    },
    
    {
      stage: 11,
      unlockConditions: 95,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 75000},
      ],
      missions: [

        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            
            {type:'token', count: 150 },
            {type:'credit', count: 3 * 12888},
            {type:'seCard', count: 5 },
            {type:'sePart', count: 1 },

          ],
        },
      ],
    },
    
    {
      stage: 12,
      unlockConditions: 105,
      clubRewords: [
        {type:'seCard', count: 1},
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '812', freeTry: true }],
          rewords: [
            { type:'seCard', count: 5 },
            { type:'token', count: 150 },
            { type:'credit', count: 3 * 12888},
            {type:'sePart', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 13,
      unlockConditions: 110,
      clubRewords: [
        {type:'seCard', count: 1},
        { type:'credit', count: 100000},
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: true }],
          rewords: [
            { type:'seCard', count: 7 },
            { type:'token', count: 195 },
            { type:'credit', count: 3 * 12888},
            {type:'sePart', count: 2 },
          ],
        },

      ],
    },
    
    {
      stage: 14,
      unlockConditions: 130,
      clubRewords: [
        {type:'token', count: 50},
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'enzo', freeTry: true }],
          rewords: [
            { type:'seCard', count: 7 },
            { type:'token', count: 195 },
            { type:'credit', count: 3 * 12888},
            {type:'sePart', count: 2 },
          ],
        },

      ],
    },
    
    {
      stage: 15,
      unlockConditions: 160,
      clubRewords: [
        {type:'token', count: 100},
      ],
      missions: [
        {
          conditions: 27,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type:'sePart', count: 1 },
            { type:'token', count: 3*188+3*88+3*38 },
            { type:'credit', count: 5*22888+5*48888+5*88888},
          ],
        },
      ],
    },
    

    
    
    
    {
      stage: 16,
      unlockConditions: 160,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
