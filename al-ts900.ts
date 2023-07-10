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
      car_id: 'berlinetta',
      fullName: 'Puritalia Berlinetta',
      nickName: 'Berlinetta',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'ie',
      fullName: 'Apollo IE',
      nickName: 'IE',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'at96',
      fullName: 'Techrules AT96',
      nickName: '腾风',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'bt62',
      fullName: 'Brabham BT62',
      nickName: 'BT62',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'tachyon',
      fullName: 'Raesr Tachyon Speed',
      nickName: '超光子',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'w12',
      fullName: 'Wolkswagen W12 Coupe',
      nickName: 'W12',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: '911gt2',
      fullName: 'Porsche 911 GT2 RS Clubsport',
      nickName: '911GT2',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'veyron',
      fullName: 'Bugatti Veyron 16.4 Grand Sport Vitesse',
      nickName: '威龙',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    

    {
      car_id: 'ts900',
      fullName: 'Tushek TS 900',
      nickName: 'TS900',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 260, reword: { type: 'seCard', count: 2 } },
    { conditions: 300, reword: { type: 'sePart', count: 3 } },
    { conditions: 333, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    '本次特殊赛事钥匙车均不提供试驾，请留意它们的解锁情况。',
    '本计算器不包含通行证第48级的免费1张图纸和付费2张图纸。'

  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        {type:'seCard', count:2},
        {type:'credit', count:50000},
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 10,
      clubRewords: [
        {type:'seCard', count:2},
        {type:'token', count:50},
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 23,
      clubRewords: [
        {type:'credit', count:50000},
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 35,
      clubRewords: [
        {type:'token', count:50},
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 45,
      clubRewords: [
        {type:'credit', count:50000},
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 60,
      clubRewords: [
        {type:'seCard', count:2},
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 78,
      clubRewords: [
        {type:'credit', count:50000},
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 90,
      clubRewords: [
        {type:'credit', count:50000},
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 105,
      clubRewords: [
        {type:'credit', count:100000},
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 120,
      clubRewords: [
        {type:'seCard', count:2},
      ],
      missions: [
        
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 75000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 130,
      clubRewords: [
        {type:'seCard', count:2},
        {type:'token', count:150},
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'bt62', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      unlockConditions: 140,
      clubRewords: [
        {type:'seCard', count:2},
        {type:'credit', count:125000},
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 150000 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 150,
      clubRewords: [
        {type:'seCard', count:2},
        {type:'credit', count:125000},
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 150000 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: true }],
          rewords: [
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 165,
      clubRewords: [
        {type:'seCard', count:2},
        {type:'credit', count:150000},
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 150000 },
            { type: 'token', count: 450 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 180,
      clubRewords: [
        {type:'seCard', count:3},
        {type:'token', count:100},
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 150000 },
            { type: 'token', count: 450 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'w12', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 195,
      clubRewords: [
        {type:'seCard', count:3},
        {type:'token', count:150},
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 175000 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 210,
      clubRewords: [
        {type:'seCard', count:3},
        {type:'token', count:150},
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 175000 },
            { type: 'token', count: 639 },
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 230,
      clubRewords: [
        {type:'sePart', count:1},
        {type:'token', count:688},
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 464000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 564000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            { type: 'token', count: 688 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1764000 },
            { type: 'sePart', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            { type: 'token', count: 1888 },
            { type: 'credit', count: 2000000 },
          ],
        },
      ],
    },
    {
      unlockConditions: 233,
      clubRewords: [
        {type:'seCard', count:2},
        {type:'credit', count:50000},
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ts900', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
