import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 200,
  toolCars: [
    {
      car_id: 'w12',
      fullName: 'Volkswagen W12 Coupe🔑',
      nickName: 'W12',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'boxster',
      fullName: 'Porsche Boxster 25th',
      nickName: 'Boxster',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'zr1',
      fullName: 'Chevrolet Corvette ZR1',
      nickName: '大五菱',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'scv12',
      fullName: 'Lamborghini Essenza SCV12🔑',
      nickName: 'SCV12',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'tachyon',
      fullName: 'Raesr Tachyon Speed🔑',
      nickName: '超光速',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'reventon',
      fullName: 'Lamborghini Reventon Roadster🔑',
      nickName: '雷文顿',
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
      car_id: 'ts900',
      fullName: 'Tushek TS 900 Racer Pro',
      nickName: 'TS900',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    
  ],
  notes: [
    
  ],
  processRewords: [
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 138, reword: { type: 'seCard', count: 2 } },
    { conditions: 228, reword: { type: 'seCard', count: 5 } },
    { conditions: 280, reword: { type: 'seSkin', count: 1 } },
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
          toolCars: [{ car_id: 'ts900', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 25,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'boxster', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 40,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zr1', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 55,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 75,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 90,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
            { type: 'credit', count: 175000 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 100,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
            { type: 'credit', count: 175000 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 110,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
            { type: 'credit', count: 175000 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 120,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 135,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [

        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'reventon', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 150,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'token', count: 195 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 170,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'token', count: 195 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 190,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'token', count: 195 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 205,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'token', count: 195 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sian', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 220,
      clubRewords: [
        { type: 'token', count: 288 },
        { type: 'sePart', count: 1 },
      ],
      missions: [
        
        
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 400 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 4000000 },
            { type: 'token', count: 750 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            { type: 'token', count: 1200 },
          ],
        },
      ],
    },
    
    {
      stage: 17,
      unlockConditions: 220,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
