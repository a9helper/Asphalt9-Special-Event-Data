import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 200,
  toolCars: [
    {
      car_id: '765lt',
      fullName: 'McLaren 765LT',
      nickName: '765LT',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'mbbs',
      fullName: 'Mercedes-Benz Mercedes-AMG GT Black Series🔑',
      nickName: '梅奔BS',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
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
      car_id: '911gt2',
      fullName: 'Porsche 911 GT2 RS ClubSport🔑',
      nickName: '911GT2',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },




    {
      car_id: 'asfane',
      fullName: 'FV Frangivento Asfane',
      nickName: 'Asfane',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "注意阶段 11 不提供试驾。"
  ],
  processRewords: [
    { conditions: 20, reword: { type: 'credit', count: 48888 } },
    { conditions: 40, reword: { type: 'seCard', count: 1 } },
    { conditions: 60, reword: { type: 'token', count: 48 } },
    { conditions: 80, reword: { type: 'seCard', count: 1 } },
    { conditions: 125, reword: { type: 'credit', count: 88888 } },
    { conditions: 145, reword: { type: 'seCard', count: 2 } },
    { conditions: 170, reword: { type: 'token', count: 108 } },
    { conditions: 195, reword: { type: 'seCard', count: 3 } },
    { conditions: 225, reword: { type: 'seKey', count: 1 } },
    { conditions: 265, reword: { type: 'sePart', count: 2 } },










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
