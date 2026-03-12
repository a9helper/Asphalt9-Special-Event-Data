import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 235,
  toolCars: [
    
    {
      car_id: 'project8',
      fullName: 'Jaguar XE SV Project 8',
      nickName: 'Project8',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'ferrari_f12_berlinetta',
      fullName: 'Ferrari F12 Berlinetta',
      nickName: 'Berlinetta',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'berlinetta',
      fullName: 'Puritalia Berlinetta',
      nickName: 'F12 Berlinetta',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'revuelto',
      fullName: 'Lamborghini Revuelto',
      nickName: 'R牛',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'speedtail',
      fullName: 'McLaren Speedtail',
      nickName: '速尾',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '499p',
      fullName: 'Ferrari 499P Modificata🔑',
      nickName: '499P',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'mosler_super_gt',
      fullName: 'Mosler Super GT',
      nickName: '莫斯勒 SuperGT',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    





    {
      car_id: 'htt',
      fullName: 'HTT Locus Plethore LC750',
      nickName: 'HTT',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    
    
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 1 } },
    { conditions: 38, reword: { type: 'token', count: 58 } },
    { conditions: 58, reword: { type: 'seCard', count: 2 } },
    { conditions: 68, reword: { type: 'token', count: 88 } },
    { conditions: 108, reword: { type: 'seCard', count: 3 } },
    { conditions: 128, reword: { type: 'token', count: 188 } },
    { conditions: 158, reword: { type: 'seCard', count: 3 } },
    { conditions: 188, reword: { type: 'token', count: 288 } },
    { conditions: 248, reword: { type: 'sePart', count: 1 } },
    { conditions: 258, reword: { type: 'credit', count: 588888 } },
    { conditions: 288, reword: { type: 'sePart', count: 1 } },
    { conditions: 308, reword: { type: 'seCard', count: 10 } },
    { conditions: 318, reword: { type: 'sePart', count: 1 } },
    { conditions: 328, reword: { type: 'seSkin', count: 1 } },




  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 2 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 18888},
            { type: 'sePack', count: 3 },
            { type: 'token', count: 54 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 28888},
            { type: 'sePack', count: 3 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ferrari_f12_berlinetta', freeTry: true }],
          rewords: [
            // { type: 'credit', count: 5 * 28888},
            { type: 'sePack', count: 3 },
            { type: 'token', count: 72 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 28888},
            { type: 'sePack', count: 3 },
            // { type: 'token', count: 72 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            // { type: 'credit', count: 5 * 28888},
            { type: 'sePack', count: 3 },
            { type: 'token', count: 72 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        { type: 'seCard', count: 2},
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 9 * 18888},
            { type: 'sePack', count: 3 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 70,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'speedtail', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 38888},
            { type: 'sePack', count: 4 },
            { type: 'token', count: 76 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 90,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: true }
          ],
          rewords: [
            { type: 'credit', count: 5 * 38888},
            { type: 'sePack', count: 4 },
            { type: 'token', count: 76 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 110,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mosler_super_gt', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 38888},
            { type: 'sePack', count: 4 },
            { type: 'token', count: 112 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 130,
      clubRewords: [
        { type: 'seCard', count: 2},
        
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 38888},
            { type: 'sePack', count: 4 },
            { type: 'token', count: 122 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 145,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 58888 },
            { type: 'token', count: 36+56 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3  },
            { type: 'token', count: 114  },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'project8', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 5  },
            { type: 'sePart', count: 1  },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 165,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ferrari_f12_berlinetta', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ferrari_f12_berlinetta', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 58888 },
            { type: 'token', count: 120  },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ferrari_f12_berlinetta', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3  },
            { type: 'token', count: 114  },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ferrari_f12_berlinetta', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 5  },
            { type: 'sePart', count: 1  },
          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 185,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 68888 },
            { type: 'token', count: 36  },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3  },
            { type: 'token', count: 84  },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: true }],
          rewords: [
            { type: 'token', count: 114  },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 5  },
            { type: 'sePart', count: 1  },
          ],
        },


      ],
    },
    {
      stage: 14,
      unlockConditions: 200,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 68888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120  },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3  },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 5  },
            { type: 'credit', count: 114  },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1  },
          ],
        },

      ],
    },
    {
      stage: 15,
      unlockConditions: 210,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'speedtail', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'speedtail', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 68888 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'speedtail', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 152+84  },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'speedtail', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3  },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'speedtail', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 7  },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'speedtail', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2  },
          ],
        },

      ],
    },
    {
      stage: 16,
      unlockConditions: 225,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 88888 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 264  },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3  },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 5  },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2  },
          ],
        },

      ],
    },
    {
      stage: 17,
      unlockConditions: 230,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mosler_super_gt', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mosler_super_gt', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 6 * 88888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mosler_super_gt', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 114  },
            { type: 'sePack', count: 2  },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mosler_super_gt', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4  },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mosler_super_gt', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 7 },
            { type: 'token', count: 152  },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'mosler_super_gt', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2  },
          ],
        },

      ],
    },
    {
      stage: 18,
      unlockConditions: 245,
      clubRewords: [
        { type: 'seCard', count: 3},
        
        
      ],
      missions: [ 
        {
          conditions: 10,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: false }],
          rewords: [
            
            { type: 'token', count: 272  },
            { type: 'credit', count: 5 * 108888  },
            { type: 'seCard', count: 5  },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: false }],
          rewords: [
            { type: 'token', count: 352  },
            { type: 'credit', count: 4 * 188888  },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: false }],
          rewords: [
            { type: 'token', count: 3 * 188  },
            { type: 'credit', count: 4 * 998888  },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: false }],
          rewords: [
            { type: 'token', count: 1388  },
          ],
        },
      ],
    }, 
    {
      stage: 19,
      
      unlockConditions: 245,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },
  ],
}

export default specialEventData
