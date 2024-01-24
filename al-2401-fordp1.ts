import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 135,
  toolCars: [
    {
      car_id: '004c',
      fullName: 'Glickenhaus 004C🔑',
      nickName: '004C',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'panamera',
      fullName: 'Porsche Panamera Turbo S',
      nickName: '帕拉梅拉',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'tsr-s',
      fullName: 'Zenvo TSR-S🔑',
      nickName: 'TSR-S',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '1mw',
      fullName: 'Toroidion 1MW',
      nickName: '1MW',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },





    {
      car_id: 'fordp1',
      fullName: 'Ford Team FordZilla P1',
      nickName: '福特P1',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "最后 2 阶段不提供试驾。",
    "138 条件获得 TSR-S 氮气特效一份。"
  ],
  processRewords: [
    { conditions: 28, reword: { type: 'seCard', count: 1 } },
    { conditions: 48, reword: { type: 'seCard', count: 1 } },
    { conditions: 68, reword: { type: 'seCard', count: 1 } },
    { conditions: 108, reword: { type: 'seCard', count: 2 } },
    { conditions: 128, reword: { type: 'seCard', count: 3 } },
    { conditions: 148, reword: { type: 'seCard', count: 6 } },
    { conditions: 158, reword: { type: 'sePart', count: 1 } },


  ],
  stages: [
    // stage 1 to 11
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'panamera', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 80000 },
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
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1mw', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 60,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 90 },
            { type: 'credit', count: 80000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 75,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'panamera', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 260 },
            { type: 'credit', count: 160000 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 95,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 9 },
            { type: 'token', count: 600 },
            { type: 'credit', count: 180000 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 115,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 75000 },
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1mw', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 10 },
            { type: 'token', count: 600 },
            { type: 'credit', count: 180000 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 135,
      clubRewords: [{ type: 'token', count: 100 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 2 },
            { type: 'token', count: 788+1388+488+188 },
            { type: 'credit', count: 625000 },
          ],
        },
      ],
    },
    

    {
      stage: 11,
      unlockConditions: 135,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
