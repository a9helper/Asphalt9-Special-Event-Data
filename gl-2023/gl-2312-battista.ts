import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'taycan',
      fullName: 'Porsche Taycan Turbo S',
      nickName: '电蛙',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'sr1',
      fullName: 'Peugeot SR1',
      nickName: 'SR1',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'elva',
      fullName: 'McLaren Elva',
      nickName: 'Elva',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'invencible',
      fullName: 'Lamborghini Invencible',
      nickName: '无敌',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '911gt1',
      fullName: 'Porsche 911 GT1 Evolution',
      nickName: '911GT1',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
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
      car_id: 'visionamg',
      fullName: 'Mercedes-Benz 2022 Showcar Vision AMG',
      nickName: 'Vision AMG',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'victor',
      fullName: 'Aston Martin Victor',
      nickName: 'Victor',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },

    {
      car_id: 'battista',
      fullName: 'Automobili Pininfarina Battista',
      nickName: '巴蒂',
      isKeyCar: false,
      rankLimits: [],
      star: 6, 
    },
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'seCard', count: 1 } },
    { conditions: 20, reword: { type: 'token', count: 50 } },
    { conditions: 40, reword: { type: 'seCard', count: 1 } },
    { conditions: 70, reword: { type: 'credit', count: 50000 } },
    { conditions: 130, reword: { type: 'token', count: 100 } },
    { conditions: 160, reword: { type: 'seCard', count: 2 } },
    { conditions: 190, reword: { type: 'sePart', count: 1 } },
    { conditions: 210, reword: { type: 'seCard', count: 2 } },
    { conditions: 240, reword: { type: 'sePart', count: 1 } },
    { conditions: 270, reword: { type: 'sePart', count: 2 } },
    { conditions: 300, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'credit', count: 50000 },
            { type: 'token', count: 40 },
            { type: 'seasonToken', count: 1000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 5,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'taycan', freeTry: false }],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'taycan', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'seasonToken', count: 500 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 10,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'seasonToken', count: 500 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'credit', count: 40000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'seasonToken', count: 500 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 50000 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 90000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'seasonToken', count: 500 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 35,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'seasonToken', count: 500 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'credit', count: 180000 },
            { type: 'token', count: 120 },
            { type: 'seasonToken', count: 2000 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 55,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'visionamg', freeTry: false }],
          rewords: [
            { type: 'credit', count: 105000 },
          ],
        },
      ],
    },

    {
      stage: 10,
      unlockConditions: 55,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'seasonToken', count: 500 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 70000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'token', count: 70 },
            { type: 'seasonToken', count: 1000 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 75,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'taycan', freeTry: false }],
          rewords: [
            { type: 'credit', count: 165000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'taycan', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'seasonToken', count: 700 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 85,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'seasonToken', count: 750 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 100,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'seasonToken', count: 800 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 225000 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            
            { type: 'credit', count: 150000 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'seasonToken', count: 850 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 125,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 900 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'credit', count: 255000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 135,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'token', count: 100 },
            { type: 'seasonToken', count: 1000 },
          ],
        },

      ],
    },

    {
      stage: 19,
      unlockConditions: 145,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'visionamg', freeTry: false }],
          rewords: [
            { type: 'credit', count: 180000 },
          ],
        },
      ],
    },
    {
      stage: 20,
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 1000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'credit', count: 270000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 21,
      unlockConditions: 180,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: false }],
          rewords: [
            { type: 'credit', count: 285000 },
            { type: 'sePart', count: 1 },
            { type: 'seasonToken', count: 1200 },
          ],
        },
      ],
    },
    {
      stage: 22,
      unlockConditions: 195,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'sePart', count: 1 },
            { type: 'seasonToken', count: 1400 },
          ],
        },
      ],
    },
    {
      stage: 23,
      unlockConditions: 220,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: false }],
          rewords: [
            { type: 'credit', count: 315000 },
            { type: 'sePart', count: 2 },
            { type: 'seasonToken', count: 1600 },
          ],
        },
      ],
    },
    {
      stage: 24,
      unlockConditions: 240,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: false }],
          rewords: [
            { type: 'credit', count: 330000 },
            { type: 'sePart', count: 2 },
            { type: 'seasonToken', count: 1800 },
          ],
        },
      ],
    },
    {
      stage: 25,
      unlockConditions: 250,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: false }],
          rewords: [
            { type: 'credit', count: 345000 },
            { type: 'sePart', count: 2 },
            { type: 'seasonToken', count: 2000 },
          ],
        },
      ],
    },
    
    
  ],
}

export default template
