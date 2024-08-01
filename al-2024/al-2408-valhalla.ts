import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 50,
  toolCars: [



    {
      car_id: 'valhalla',
      fullName: 'Aston Martin Valhalla Concept Car',
      nickName: '英灵殿',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    
  ],
  processRewords: [
    
    { conditions: 15, reword: { type: 'seCard', count: 3 } },
    { conditions: 35, reword: { type: 'seCard', count: 4 } },
    { conditions: 55, reword: { type: 'seCard', count: 6 } },
    { conditions: 85, reword: { type: 'seCard', count: 7 } },
    { conditions: 105, reword: { type: 'seSkin', count: 1 } },
  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 100000 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 330 },
            { type: 'credit', count: 58888*15 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 0,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 390 },
            { type: 'credit', count: 63888*15 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 2 },
        { type: 'credit', count: 100000 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 450 },
            { type: 'credit', count: 68888*15 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 0,
      clubRewords: [
        
        { type: 'token', count: 50 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 510 },
            { type: 'credit', count: 73888*15 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 3 },
        { type: 'token', count: 100 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 570 },
            { type: 'credit', count: 78888*15 },
          ],
        },
      ],
    },

    {
      stage: 6,
      unlockConditions: 70,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
