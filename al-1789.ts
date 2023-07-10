import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 220,
  toolCars: [
    {
      car_id: 'mk500',
      fullName: 'Bolwell MK X Nagari 500',
      nickName: 'MK 500',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'rrturbo',
      fullName: 'ATS Automobili Corsa RRTurbo',
      nickName: 'ATS',
      star: 4,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'drakogte',
      fullName: 'Drako GTE',
      nickName: 'Drako',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'af8',
      fullName: 'Arash AF8 Falcon Edition',
      nickName: 'AF8',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'scv12',
      fullName: 'Lamborghini Essenza SCV12',
      nickName: 'SCV12',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'regera',
      fullName: 'Koenigsegg Regera',
      nickName: '统治',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },


    {
      car_id: '1789',
      fullName: 'Vision 1789',
      nickName: '1789',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 2 } },
    { conditions: 130, reword: { type: 'seCard', count: 3 } },
    { conditions: 180, reword: { type: 'seCard', count: 4 } },
    { conditions: 220, reword: { type: 'seCard', count: 8 } },
    { conditions: 260, reword: { type: 'sePart', count: 2 } },
    { conditions: 300, reword: { type: 'sePart', count: 3 } },
    { conditions: 333, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    "333条件解锁1789贴纸。这意味着AF8必须至少4星。",
    "请勾选1789为【已解锁】状态，可获得更多奖励！"

  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        {type:'seCard', count:1},
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: true }],
          rewords: [
            { type: 'credit', count: 30000 },
            { type: 'token', count: 200 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 10,
      clubRewords: [
        {type:'credit', count:50000},
        {type:'token', count:75},
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk500', freeTry: true }],
          rewords: [
            { type: 'credit', count: 30000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk500', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 25,
      clubRewords: [
        {type:'credit', count:50000},
        {type:'token', count:75},
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'rrturbo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 40000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'rrturbo', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'rrturbo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 35,
      clubRewords: [
        {type:'seCard',count:2},
        {type:'credit', count:75000},
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakogte', freeTry: true }],
          rewords: [
            { type: 'credit', count: 40000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakogte', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 50,
      clubRewords: [
        {type:'seCard',count:1},
        {type:'token',count:75},
        {type:'credit', count:75000},
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 60,
      clubRewords: [
        {type:'seCard',count:2},
        {type:'credit', count:75000},
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: true }],
          rewords: [
            { type: 'credit', count: 50000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 75,
      clubRewords: [
        {type:'seCard',count:1},
        {type:'credit', count:100000},
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 70000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 85,
      clubRewords: [
        {type:'seCard',count:2},
        {type:'credit', count:100000},
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk500', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk500', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk500', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mk500', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 95,
      clubRewords: [
        {type:'seCard',count:2},
        {type:'credit', count:100000},
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'rrturbo', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'rrturbo', freeTry: true }],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'rrturbo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 105,
      clubRewords: [
        {type:'seCard',count:2},
        {type:'credit', count:125000},
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 50000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 120,
      clubRewords: [
        {type:'seCard',count:3},
        {type:'credit', count:125000},
        {type:'token', count:150},
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 50000 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'token', count: 200 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    {
      unlockConditions: 130,
      clubRewords: [
        {type:'seCard',count:2},
        {type:'credit', count:125000},
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'token', count: 100 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      unlockConditions: 140,
      clubRewords: [
        {type:'seCard',count:3},
        {type:'credit', count:125000},
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakogte', freeTry: true }],
          rewords: [
            { type: 'credit', count: 50000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakogte', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakogte', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 155,
      clubRewords: [
        {type:'seCard',count:3},
        {type:'credit', count:150000},
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 70000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'token', count: 176 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'af8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 165,
      clubRewords: [
        {type:'seCard',count:3},
        {type:'credit', count:150000},
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'scv12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 170000 },
            { type: 'token', count: 176 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      unlockConditions: 180,
      clubRewords: [
        {type:'seCard',count:3},
        {type:'credit', count:150000},
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 230000 },
            { type: 'token', count: 264 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      unlockConditions: 195,
      clubRewords: [
        {type:'seCard',count:3},
        {type:'credit', count:175000},
      ],
      missions: [
        {
          conditions: 30,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakogte', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 256 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      unlockConditions: 212,
      clubRewords: [
        {type:'seCard',count:3},
        {type:'credit', count:200000},
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1700000 },
            { type: 'token', count: 964 },
            { type: 'sePart', count: 2 },
            
          ],
        },
      ],
    },
    {
      unlockConditions: 222,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
