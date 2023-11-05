import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 220,
  toolCars: [
    {
      car_id: 'mc12',
      fullName: 'Maserati MC12🔑',
      nickName: 'MC12',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'gtx',
      fullName: 'KTM X-Bow GTX',
      nickName: 'GTX',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: 'motion',
      fullName: 'Kepler Motion',
      nickName: '开普勒',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'fxxk',
      fullName: 'Ferrari FXX K',
      nickName: 'FXXK',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'sorpasso',
      fullName: 'FV Frangivento Sorpasso GT3🔑',
      nickName: 'FV',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'lpi800',
      fullName: 'Lamborghini Countach LPI 800-4🔑',
      nickName: '新康塔什',
      isKeyCar: true,
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
    "建议车手们在【2星未解锁CCXR】的条件下确认能达到钥匙条件248，然后勾选【已解锁】CCXR。",
    "提车推荐1：5星FXXK、无通行证、5星新康。",
    "提车推荐2：5星FXXK、无通行证、4星新康+2星FV。",
    "提车推荐3：5星FXXK、3星开普勒、4星新康。",
    "提车推荐4：5星FXXK、4星开普勒、3星新康。",
  ],
  processRewords: [
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 128, reword: { type: 'seCard', count: 2 } },
    { conditions: 228, reword: { type: 'seCard', count: 3 } },
    { conditions: 248, reword: { type: 'seKey', count: 1 } },
    { conditions: 268, reword: { type: 'seSkin', count: 1 } },
    { conditions: 308, reword: { type: 'sePart', count: 2 } },
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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 90 },
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
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
            { type: 'credit', count: 80000 },
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
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtx', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 90 },
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
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
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
      unlockConditions: 40,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fxxk', freeTry: true }],
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
      unlockConditions: 50,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
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
      unlockConditions: 60,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 110 },
            { type: 'credit', count: 140000 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 75,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 110 },
            { type: 'credit', count: 140000 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 90,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtx', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 110 },
            { type: 'credit', count: 140000 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 105,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 100000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 120,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 40 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 140,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 40 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
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
          toolCars: [{ car_id: 'motion', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 150 },
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
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 160,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fxxk', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 40 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'fxxk', freeTry: true }],
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
          toolCars: [{ car_id: 'fxxk', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'fxxk', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 200 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'fxxk', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 185,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 40 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
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
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'token', count: 300 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 40 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
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
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'token', count: 300 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 225,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
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
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
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
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            { type: 'token', count: 688 },
            { type: 'credit', count: 1500000 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 2500000 },
            { type: 'sePart', count: 1 },
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
            { type: 'token', count: 2000 },
          ],
        },
      ],
    },

    {
      stage: 17,
      unlockConditions: 225,
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
