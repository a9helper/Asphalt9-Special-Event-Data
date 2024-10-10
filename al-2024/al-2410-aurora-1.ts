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
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'token', count: 60 },
            { type: 'credit', count: 125000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 12,
      clubRewords: [
        { type: 'token', count: 50 },
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],
          rewords: [
            { type: 'credit', count: 105000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],
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
          toolCars: [{ car_id: 'evija', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 25,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 40,
      clubRewords: [
        { type: 'token', count: 75 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 425000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'token', count: 125 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 60,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: false }],
          rewords: [
            { type: 'credit', count: 325000 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: false }],
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
          toolCars: [{ car_id: 'vantage', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 9 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 82,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 9 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 100,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 25,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: false }],
          rewords: [
            { type: 'credit', count: 325000 },
            { type: 'token', count: 235 },
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'vantage', freeTry: false }],
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
          toolCars: [{ car_id: 'vantage', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 130,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 150,
      clubRewords: [
        { type: 'token', count: 100 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 425000 },
            { type: 'token', count: 275 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'c1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 175,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 675000 },
            { type: 'token', count: 325 },
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 190,
      clubRewords: [
        { type: 'sePart', count: 1 },
        { type: 'token', count: 100 },
        { type: 'credit', count: 75000 },
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1125000 },
            { type: 'token', count: 375 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    

    {
      stage: 12,
      unlockConditions: 190,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
