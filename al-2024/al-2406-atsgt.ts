import { SED } from '../type.d.ts'

const template: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 255,
  toolCars: [
    {
      car_id: 'sc20',
      fullName: 'Lamborghini SC20🔑',
      nickName: 'SC20',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'apolloevo',
      fullName: 'Apollo EVO',
      nickName: '菠萝EVO',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    
    
    

    {
      car_id: 'atsgt',
      fullName: 'ATS Automobili GT',
      nickName: 'ATS GT',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 380, reword: { type: 'seCard', count: 1 } },
  ],
  notes: [
    "更新：原先需要 6 星 SC20 的一张金卡已改成需要 6 星 ATSGT 。"
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        {type:'token', count: 10},
        {type:'credit', count: 25000},
      ],
      missions: [
        {
          conditions: 70,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: true }],
          rewords: [
            {type:'sePack', count: 82},
            {type:'credit', count: 200000 },
            {type:'seCard', count: 8 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            {type:'seCard', count: 3 },

          ],
        },
      ],
    },

    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'token', count: 20},
      ],
      missions: [
        {
          conditions: 61,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            {type:'sePack', count: 81 },
            {type:'credit', count: 400000 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            {type:'seCard', count: 3 },

          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: false }],
          rewords: [
            {type:'seCard', count: 5 },
            {type:'sePack', count: 1 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            {type:'seCard', count: 3 },

          ],
        },

      ],
    },
    
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        {type:'token', count: 30},
        {type:'credit', count: 50000},
      ],
      missions: [
        {
          conditions: 61,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            {type:'sePack', count: 81 },
            {type:'credit', count: 600000 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            {type:'seCard', count: 3 },

          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: false }],
          rewords: [
            {type:'seCard', count: 5 },
            {type:'sePack', count: 1 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            {type:'seCard', count: 3 },

          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        {type:'seCard', count: 1},
        {type:'credit', count: 75000},
      ],
      missions: [
        {
          conditions: 61,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            {type:'sePack', count: 81 },
            {type:'credit', count: 800000 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            {type:'seCard', count: 3 },

          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: false }],
          rewords: [
            {type:'seCard', count: 5 },
            {type:'sePack', count: 1 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            {type:'seCard', count: 3 },

          ],
        },

      ],
    },
    
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        {type:'seCard', count: 2 },
      ],
      missions: [
        {
          conditions: 61,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            {type:'sePack', count: 81 },
            {type:'credit', count: 1200000 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            {type:'seCard', count: 5 },

          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: false }],
          rewords: [
            {type:'seCard', count: 5 },
            {type:'sePack', count: 1 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            {type:'seCard', count: 5 },

          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        {type:'seCard', count: 2 },
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: true }],
          rewords: [
            {type:'sePart', count: 1 },
            {type:'credit', count: 3000000 },

          ],
        },
        {
          conditions: 14,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: false }],
          rewords: [
            {type:'sePack', count: 12 },
            {type:'sePart', count: 2 },

          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            {type:'sePart', count: 1 },

          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            {type:'sePart', count: 2 },

          ],
        },

      ],
    },
    
    

    
    
    
    {
      stage: 7,
      unlockConditions: 50,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
