import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 130,
  toolCars: [
    {
      car_id: 'diablo',
      fullName: 'Lamborghini Diablo GT',
      nickName: 'Diablo',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'veneno',
      fullName: 'Lamborghini Veneno',
      nickName: '毒药',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sc18',
      fullName: 'Lamborghini SC18🔑',
      nickName: 'SC18',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
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
      nickName: '电牛',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
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
      car_id: 'sian',
      fullName: 'Lamborghini Sian FKP 37🔑',
      nickName: 'Sian',
      isKeyCar: true,
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
  ],
  notes: [
    "钥匙工具车竟然没有试驾！"
  ],
  processRewords: [
    
    { conditions: 175, reword: { type: 'seKey', count: 1 } },
    { conditions: 245, reword: { type: 'sePart', count: 1 } },
  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 50 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 70 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 70 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 35,
      clubRewords: [
        
        { type: 'token', count: 50 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 45,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 58,
      clubRewords: [
        { type: 'seCard', count: 2 },
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'egoista', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 70,
      clubRewords: [
        
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 80 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 85,
      clubRewords: [
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 98,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 75000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 108,
      clubRewords: [{ type: 'seCard', count: 2 }],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'egoista', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 120 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 115,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 100 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 120,
      clubRewords: [
        { type: 'seCard', count: 2 },
        { type: 'credit', count: 100000 },
      ],
      missions: [
        
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 125,
      clubRewords: [
        { type: 'seCard', count: 2 },
        { type: 'credit', count: 125000 },
      ],
      missions: [
        
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: false }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 130,
      clubRewords: [
        { type: 'seCard', count: 2 },
        { type: 'credit', count: 125000 },
      ],
      missions: [
        
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: false }],
          rewords: [
            { type: 'credit', count: 3600000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: false }],
          rewords: [
            { type: 'token', count: 450 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 900 },
            { type: 'sePart', count: 2 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    

    {
      stage: 15,
      unlockConditions: 130,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
