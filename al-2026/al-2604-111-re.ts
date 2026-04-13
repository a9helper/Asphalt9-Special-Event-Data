import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 235,
  toolCars: [
    
    {
      car_id: 'visionamg',
      fullName: 'Mercedes-Benz 2022 Showcar Vision AMG',
      nickName: 'VisionAMG',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
  {
    car_id: 'dodge_charger_srt_hellcat_redeye_widebody',
    fullName: 'Dodge Charger SRT Hellcat Redeye Widebody',
    nickName: '地狱猫',
    isKeyCar: false,
    rankLimits: [],
    star: 5,
  },
  {
    car_id: 'mercedes_benz_c_63_amg_dtm',
    fullName: 'Mercedes-Benz C 63 AMG DTM',
    nickName: 'C63',
    isKeyCar: true,
    rankLimits: [],
    star: 5,
  },
  {
    car_id: 'mc20',
    fullName: 'Maserati MC20🔑',
    nickName: 'MC20',
    isKeyCar: true,
    rankLimits: [],
    star: 6,
  },
  {
    car_id: 'spano',
    fullName: 'Spania GTA 2015 GTA Spano',
    nickName: 'Spano',
    isKeyCar: false,
    rankLimits: [],
    star: 6,
  },
  {
    car_id: 'supersnake',
    fullName: 'Ford Shelby Super Snake',
    nickName: '超级蛇',
    isKeyCar: true,
    rankLimits: [],
    star: 6,
  },
  {
    car_id: 'one1',
    fullName: 'Koenigsegg One:1🔑',
    nickName: '旺旺',
    isKeyCar: true,
    rankLimits: [],
    star: 6,
  },
    





    {
      car_id: 'vision111',
      fullName: 'Mercedes-Benz Vision One-Eleven🔑',
      nickName: 'Vision 111',
      isKeyCar: true,
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
    { conditions: 303, reword: { type: 'seKey', count: 1 } },
    { conditions: 308, reword: { type: 'seCard', count: 8 } },
    { conditions: 313, reword: { type: 'sePart', count: 2 } },




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
          toolCars: [{ car_id: 'vision111', freeTry: true }],
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
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
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
          toolCars: [{ car_id: 'dodge_charger_srt_hellcat_redeye_widebody', freeTry: true }],
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
          toolCars: [{ car_id: 'mercedes_benz_c_63_amg_dtm', freeTry: true }],
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
          toolCars: [{ car_id: 'mc20', freeTry: true }],
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
          toolCars: [{ car_id: 'vision111', freeTry: true }],
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
          toolCars: [{ car_id: 'spano', freeTry: true }],
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
            { car_id: 'supersnake', freeTry: true }
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
      unlockConditions: 105,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'one1', freeTry: true }],
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
      unlockConditions: 125,
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
          toolCars: [{ car_id: 'vision111', freeTry: true }],
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
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
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
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
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
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
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
          toolCars: [{ car_id: 'dodge_charger_srt_hellcat_redeye_widebody', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'dodge_charger_srt_hellcat_redeye_widebody', freeTry: true }],
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
          toolCars: [{ car_id: 'dodge_charger_srt_hellcat_redeye_widebody', freeTry: true }],
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
          toolCars: [{ car_id: 'dodge_charger_srt_hellcat_redeye_widebody', freeTry: true }],
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
          toolCars: [{ car_id: 'mercedes_benz_c_63_amg_dtm', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mercedes_benz_c_63_amg_dtm', freeTry: true }],
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
          toolCars: [{ car_id: 'mercedes_benz_c_63_amg_dtm', freeTry: true }],
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
          toolCars: [{ car_id: 'mercedes_benz_c_63_amg_dtm', freeTry: true }],
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
          toolCars: [{ car_id: 'mercedes_benz_c_63_amg_dtm', freeTry: true }],
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
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
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
          toolCars: [{ car_id: 'mc20', freeTry: true }],
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
          toolCars: [{ car_id: 'mc20', freeTry: true }],
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
          toolCars: [{ car_id: 'mc20', freeTry: true }],
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
          toolCars: [{ car_id: 'mc20', freeTry: true }],
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
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
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
          toolCars: [{ car_id: 'spano', freeTry: true }],
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
          toolCars: [{ car_id: 'spano', freeTry: true }],
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
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 7  },
          ],
        },
        {
          conditions:  3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
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
          toolCars: [{ car_id: 'supersnake', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'supersnake', freeTry: true }],
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
          toolCars: [{ car_id: 'supersnake', freeTry: true }],
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
          toolCars: [{ car_id: 'supersnake', freeTry: true }],
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
          toolCars: [{ car_id: 'supersnake', freeTry: true }],
          rewords: [
            { type: 'sePack', count: 5  },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'supersnake', freeTry: true }],
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
          toolCars: [{ car_id: 'one1', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'one1', freeTry: true }],
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
          toolCars: [{ car_id: 'one1', freeTry: true }],
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
          toolCars: [{ car_id: 'one1', freeTry: true }],
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
          toolCars: [{ car_id: 'one1', freeTry: true }],
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
          toolCars: [{ car_id: 'one1', freeTry: true }],
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
          toolCars: [{ car_id: 'vision111', freeTry: false }],
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
          toolCars: [{ car_id: 'vision111', freeTry: false }],
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
          toolCars: [{ car_id: 'vision111', freeTry: false }],
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
          toolCars: [{ car_id: 'vision111', freeTry: false }],
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
          toolCars: [{ car_id: 'vision111', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },
  ],
}

export default specialEventData
