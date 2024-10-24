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
      car_id: 'p900',
      fullName: 'De Tomaso P900',
      nickName: 'P900',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'zagato',
      fullName: 'Aston Martin DBS GT Zagato',
      nickName: 'Zagato',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'cs',
      fullName: 'Rimac Concept S',
      nickName: 'CS',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'divo',
      fullName: 'Bugatti Divo',
      nickName: 'Divo',
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
    "注意阶段 11 也不提供试驾。",
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 1 } },
    { conditions: 30, reword: { type: 'credit', count: 38888 } },
    { conditions: 45, reword: { type: 'token', count: 48 } },
    { conditions: 85, reword: { type: 'credit', count: 68888 } },
    { conditions: 105, reword: { type: 'seCard', count: 2 } },
    { conditions: 130, reword: { type: 'token', count: 88 } },
    { conditions: 150, reword: { type: 'seCard', count: 2 } },
    { conditions: 185, reword: { type: 'credit', count: 148888 } },
    { conditions: 200, reword: { type: 'seCard', count: 3 } },
    { conditions: 230, reword: { type: 'token', count: 188 } },



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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
            { type: 'credit', count: 50000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        { type: 'token', count: 50 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 475000 },
            { type: 'token', count: 185 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'p900', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'p900', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 30,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zagato', freeTry: false }],
          rewords: [
            { type: 'credit', count: 270000 },
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zagato', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'zagato', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'zagato', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 50,
      clubRewords: [
        { type: 'token', count: 75 },
      ],
      missions: [
        {
          conditions: 25,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: false }],
          rewords: [
            { type: 'credit', count: 55000*6+100000+105000 },
            { type: 'token', count: 230 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 80,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 27,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 585000 },
            { type: 'token', count: 275 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 115,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 125,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 325000 },
            { type: 'token', count: 175 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'p900', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 145,
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
          toolCars: [{ car_id: 'zagato', freeTry: false }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 90 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'zagato', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 160,
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
          toolCars: [{ car_id: 'cs', freeTry: false }],
          rewords: [
            { type: 'credit', count: 425000 },
            { type: 'token', count: 275 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 185,
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
          toolCars: [{ car_id: 'divo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 325 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'divo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 200,
      clubRewords: [
        { type: 'sePart', count: 1 },
        { type: 'token', count: 100 },
        { type: 'credit', count: 75000 },
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 375 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'credit', count: 450000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tur', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 2 },
            { type: 'token', count: 600 },
          ],
        },
      ],
    },
    

    {
      stage: 12,
      unlockConditions: 200,
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
