import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 180,
  toolCars: [
    {
      car_id: 'evija',
      fullName: 'Lotus Evija',
      nickName: '电莲',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'c1',
      fullName: 'Rimac Concept_One',
      nickName: 'C_One',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'naran',
      fullName: 'Naran Hyper Coupe',
      nickName: '纳兰',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'vantage',
      fullName: 'Aston Martin V12 Vantage 2022',
      nickName: 'Vantage',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },



    {
      car_id: 'tur',
      fullName: 'Zenvo Aurora Tur',
      nickName: '极光',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "注意阶段 11 不提供试驾。"
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 1 } },
    { conditions: 30, reword: { type: 'credit', count: 38888 } },
    { conditions: 45, reword: { type: 'token', count: 40 } },
    { conditions: 85, reword: { type: 'credit', count: 68888 } },
    { conditions: 105, reword: { type: 'seCard', count: 2 } },
    { conditions: 130, reword: { type: 'seCard', count: 3 } },
    { conditions: 150, reword: { type: 'seCard', count: 4 } },
    { conditions: 185, reword: { type: 'sePart', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 5 } },



  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
            { type: 'credit', count: 4*24888 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
      clubRewords: [
        { type: 'token', count: 50 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5*28888 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 35,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5*34888 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 55,
      clubRewords: [
        { type: 'token', count: 75 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5*38888 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 75,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 44888 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 44888 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 100,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 175 },
            { type: 'credit', count: 5 * 48888 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 120,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'credit', count: 5 * 54888 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 140,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 128888 },
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'token', count: 240 },
            { type: 'credit', count: 5 * 68888 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 8 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 165,
      clubRewords: [
        { type: 'token', count: 100 },
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'credit', count: 5 * 78888 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 8 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc63', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 190,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'token', count: 320 },
            { type: 'credit', count: 5 * 88888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 10 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 220,
      clubRewords: [
        { type: 'sePart', count: 1 },
        { type: 'token', count: 100 },
        { type: 'credit', count: 208888 },
      ],
      missions: [
        {
          conditions: 31,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: false }],
          rewords: [
            { type: 'token', count: 525 },
            { type: 'credit', count: 3 * 98888 + 4 * 78888 + 4 * 58888 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: false }],
          rewords: [
            { type: 'credit', count: 3 * 128888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: false }],
          rewords: [
            { type: 'token', count: 450 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 4 },
          ],
        },
      ],
    },
    

    {
      stage: 12,
      unlockConditions: 220,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'asfane', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
