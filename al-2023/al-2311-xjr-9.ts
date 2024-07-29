import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 200,
  toolCars: [
    {
      car_id: 'countach',
      fullName: 'Lamborghini Countach 25th Anniversary',
      nickName: '康塔什',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: '765lt',
      fullName: 'McLaren 765LT',
      nickName: '765LT',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'cgs',
      fullName: 'Chevrolet Corvette Grand Sport',
      nickName: '五菱',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '911gt3',
      fullName: 'Porsche 911 GT3 RS',
      nickName: '911GT3',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'aperta',
      fullName: 'Ferrari LaFerrari Aperta',
      nickName: '黑拉法',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'mclarengt',
      fullName: 'McLaren GT🔑',
      nickName: '迈凯伦GT',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '718gt4',
      fullName: 'Porsche 718 Cayman GT4 ClubSport🔑',
      nickName: '718GT4',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },



    {
      car_id: 'xjr',
      fullName: 'Jaguar XJR-9',
      nickName: 'XJR-9',
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
    { conditions: 228, reword: { type: 'seCard', count: 5 } },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 280, reword: { type: 'seSkin', count: 1 } },
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 50 },
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
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
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
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
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
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cgs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
            { type: 'credit', count: 60000 },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 48,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 50 },
            { type: 'credit', count: 60000 },
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
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 175000 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 70,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 175000 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 80,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 175000 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 90,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 50 },
            { type: 'credit', count: 60000 },
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
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 108,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: true }],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 115,
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
          toolCars: [{ car_id: 'cgs', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'cgs', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'cgs', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'cgs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'cgs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 120,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 128,
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
          toolCars: [{ car_id: '911gt3', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: true }],
          rewords: [
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 135,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 145,
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
          toolCars: [{ car_id: 'aperta', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'credit', count: 450000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: true }],
          rewords: [
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'aperta', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 150,
      clubRewords: [
        { type: 'token', count: 288 },
        { type: 'sePart', count: 1 },
      ],
      missions: [
        
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: false }],
          rewords: [
            { type: 'token', count: 600 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: false }],
          rewords: [
            { type: 'token', count: 750 },
            { type: 'credit', count: 1000000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: false }],
          rewords: [
            { type: 'token', count: 1200 },
          ],
        },
      ],
    },

    {
      stage: 19,
      unlockConditions: 150,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ]
}

export default specialEventData
