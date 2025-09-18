import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 230,
  toolCars: [
    {
      car_id: 'f12tdf',
      fullName: 'Ferrari F12tdf',
      nickName: 'TDF',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'daytonasp3',
      fullName: 'Ferrari Daytona SP3🔑',
      nickName: '戴通纳SP3',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'zgt4',
      fullName: 'Nissan Z GT4',
      nickName: 'Z GT4',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'ssc',
      fullName: 'SSC Tuatara',
      nickName: '大蜥蜴',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'utopia',
      fullName: 'Pagani Utopia Coupe🔑',
      nickName: '乌托邦',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'p72',
      fullName: 'De Tomaso P72🔑',
      nickName: 'P72',
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
    





    {
      car_id: 'aero',
      fullName: 'SSC Ultimate Aero TT',
      nickName: 'Aero TT',
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
    { conditions: 98, reword: { type: 'seCard', count: 3 } },
    { conditions: 118, reword: { type: 'token', count: 188 } },
    { conditions: 138, reword: { type: 'seCard', count: 3 } },
    { conditions: 168, reword: { type: 'token', count: 288 } },
    { conditions: 188, reword: { type: 'sePart', count: 1 } },
    { conditions: 198, reword: { type: 'credit', count: 588888 } },
    { conditions: 258, reword: { type: 'sePart', count: 1 } },
    { conditions: 308, reword: { type: 'seCard', count: 10 } },
    { conditions: 318, reword: { type: 'sePart', count: 1 } },
    { conditions: 338, reword: { type: 'seSkin', count: 1 } },




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
          toolCars: [{ car_id: 'aero', freeTry: true }],
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
          toolCars: [{ car_id: 'f12tdf', freeTry: true }],
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
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
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
          toolCars: [{ car_id: 'zgt4', freeTry: true }],
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
          toolCars: [{ car_id: 'ssc', freeTry: true }],
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
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'aero', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 10 * 18888},
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
          toolCars: [{ car_id: 'utopia', freeTry: true }],
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
          toolCars: [{ car_id: 'p72', freeTry: true }],
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
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
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
          toolCars: [{ car_id: 'aero', freeTry: true }],
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
          toolCars: [{ car_id: 'f12tdf', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f12tdf', freeTry: true }],
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
          toolCars: [{ car_id: 'f12tdf', freeTry: true }],
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
          toolCars: [{ car_id: 'f12tdf', freeTry: true }],
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
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 58888 },
            { type: 'token', count: 36  },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
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
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
          rewords: [
            { type: 'token', count: 114  },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
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
          toolCars: [{ car_id: 'zgt4', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'zgt4', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 68888 },
            { type: 'token', count: 36  },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zgt4', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3  },
            { type: 'token', count: 120  },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'zgt4', freeTry: true }],
          rewords: [
            { type: 'token', count: 114  },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'zgt4', freeTry: true }],
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
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
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
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120  },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
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
          toolCars: [{ car_id: 'ssc', freeTry: true }],
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
          toolCars: [{ car_id: 'ssc', freeTry: true }],
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
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
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
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 152+84  },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3  },
            { type: 'sePack', count: 2  },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 5  },
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
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
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
          toolCars: [{ car_id: 'p72', freeTry: true }],
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
          toolCars: [{ car_id: 'p72', freeTry: true }],
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
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 7  },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
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
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
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
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
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
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4  },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 5  },
            { type: 'token', count: 152  },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
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
        { type: 'seCard', count: 2},
        
        
      ],
      missions: [ 
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'aero', freeTry: false }],
          rewords: [
            
            { type: 'token', count: 204  },
            { type: 'credit', count: 3 * 108888  },
            { type: 'seCard', count: 5  },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'aero', freeTry: false }],
          rewords: [
            { type: 'token', count: 352  },
            { type: 'credit', count: 4 * 118888  },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'aero', freeTry: false }],
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
          toolCars: [{ car_id: 'aero', freeTry: false }],
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
          toolCars: [{ car_id: 'aero', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },
  ],
}

export default specialEventData
