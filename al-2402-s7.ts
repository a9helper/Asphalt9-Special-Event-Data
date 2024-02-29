import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 250,
  toolCars: [
    {
      car_id: 'gtx',
      fullName: 'KTM X-Bow GTX',
      nickName: 'GTX',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: 'gt12',
      fullName: 'Aston Martin Vantage GT12',
      nickName: 'GT12',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'c-x75',
      fullName: 'Jaguar C-X75',
      nickName: '大捷豹',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'solus',
      fullName: 'Mclaren Solus GT🔑',
      nickName: 'Solus GT',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
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
      car_id: 'me412',
      fullName: 'Chrysler ME412',
      nickName: 'ME412',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'ares',
      fullName: 'Ares S1🔑',
      nickName: 'Ares',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    



    {
      car_id: 'saleens7',
      fullName: 'Saleen S7 twin Turbo',
      nickName: '赛麟S7',
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
    { conditions: 190, reword: { type: 'seCard', count: 5 } },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 300, reword: { type: 'seSkin', count: 1 } },
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 55 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 6,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 2 },
            { type: 'token', count: 80 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 15,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 2 },
            { type: 'token', count: 80 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 25,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 140000 },
            { type: 'seCard', count: 1 },
            { type: 'token', count: 80 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 35,
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
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 45,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
            { type: 'credit', count: 80000 },
          ],
        },
      ],
    },
    {
      stage: 7,
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
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 65,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 75,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 85,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 75000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 100,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 100000 },
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
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 118,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 135,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 152,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 400000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'token', count: 250 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 168,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'token', count: 250 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 180,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: true }],
          rewords: [
            { type: 'token', count: 250 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 200,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 210,
      clubRewords: [
        { type: 'token', count: 100 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
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
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 750000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            { type: 'token', count: 688 },
            { type: 'credit', count: 1000000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1500000 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [{ type: 'token', count: 2000 }],
        },
      ],
    },

    {
      stage: 19,
      unlockConditions: 220,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'apolloevo', freeTry: false }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
