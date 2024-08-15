import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 255,
  toolCars: [
    {
      car_id: 'gtx',
      fullName: 'KTM X-Bow GTX',
      nickName: 'GTX',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: 'mc20',
      fullName: 'Maserati MC20🔑',
      nickName: 'MC20',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'drakuma',
      fullName: 'Ajlani Drakuma',
      nickName: 'Drakuma',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '600lt',
      fullName: 'McLaren 600LT Spider',
      nickName: '600LT',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '296',
      fullName: 'Ferrari 296 GTB🔑',
      nickName: '296GTB',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'motion',
      fullName: 'Kepler Motion',
      nickName: '开普勒',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'huayrar',
      fullName: 'Pagani Huayra R',
      nickName: 'Huayra R',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    

    {
      car_id: 'ccxr',
      fullName: 'Koenigsegg CCXR🔑',
      nickName: 'CCXR',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "因阶段18未提供试驾，显而易见，KTM 未达到 3 星或者其他任意工具车未达到 5 星，将无法获得 340 条件的钥匙。"
  ],
  processRewords: [
    { conditions: 28, reword: { type: 'token', count: 28 } },
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 138, reword: { type: 'seCard', count: 2 } },
    { conditions: 188, reword: { type: 'seCard', count: 5 } },
    { conditions: 248, reword: { type: 'sePart', count: 1 } },
    { conditions: 298, reword: { type: 'seSkin', count: 1 } },
    { conditions: 340, reword: { type: 'seKey', count: 1 } },





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
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 125000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtx', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
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
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 125000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 70,
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
          toolCars: [{ car_id: '600lt', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 80 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 90,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 80 },
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 80 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 130,
      clubRewords: [
        { type: 'token', count: 50 },
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 125000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 150,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtx', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 13,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtx', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 200 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 13,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtx', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 170,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            { type: 'token', count: 220 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 190,
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
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            { type: 'token', count: 165 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },

    {
      stage: 14,
      unlockConditions: 210,
      clubRewords: [
        { type: 'seCard', count: 1 },

      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: true }],
          rewords: [
            
          ],
        },
        // {
        //   conditions: 5,
        //   join: {
        //     star: 2,
        //     rank: 0,
        //   },
        //   toolCars: [{ car_id: '600lt', freeTry: true }],
        //   rewords: [
        //     { type: 'credit', count: 500000 },
        //   ],
        // },
        {
          conditions: 10,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 225,
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
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
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
          toolCars: [{ car_id: '296', freeTry: true }],
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
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 240,
      clubRewords: [
        
        { type: 'token', count: 75 },
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
          rewords: [
            
          ],
        },
        // {
        //   conditions: 5,
        //   join: {
        //     star: 2,
        //     rank: 0,
        //   },
        //   toolCars: [{ car_id: 'motion', freeTry: true }],
        //   rewords: [
        //     { type: 'credit', count: 500000 },
        //   ],
        // },
        {
          conditions: 10,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 17,
      unlockConditions: 255,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 100000 },

      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            
          ],
        },
        // {
        //   conditions: 5,
        //   join: {
        //     star: 2,
        //     rank: 0,
        //   },
        //   toolCars: [{ car_id: 'huayrar', freeTry: true }],
        //   rewords: [
        //     { type: 'credit', count: 500000 },
        //   ],
        // },
        {
          conditions: 10,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 18,
      unlockConditions: 270,
      clubRewords: [
        { type: 'sePart', count: 1 },
        { type: 'token', count: 288 },

      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            { type: 'token', count: 200 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 800000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            { type: 'token', count: 400 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            { type: 'token', count: 750 },
            { type: 'credit', count: 6000000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            { type: 'token', count: 1500 },
            
          ],
        },
        
      ],
    },
    {
      stage: 19,
      unlockConditions: 270,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [],
        },
        
      ],
    },
  ],
}

export default specialEventData
