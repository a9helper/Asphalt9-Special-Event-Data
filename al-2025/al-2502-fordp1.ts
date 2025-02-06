import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 210,
  toolCars: [
    {
      car_id: 'dsp',
      fullName: 'DS Automobiles DS E-Tense Performance',
      nickName: 'DSP',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sc20',
      fullName: 'Lamborghini SC20🔑',
      nickName: 'SC20',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'agerars',
      fullName: 'Koenigsegg Agera RS',
      nickName: 'Agera RS',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'imola',
      fullName: 'Pagani Imola',
      nickName: '伊莫拉',
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
      car_id: 'mbbs',
      fullName: 'Mercedes-Benz Mercedes-AMG GT Black Series🔑',
      nickName: '梅奔BS',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'battista',
      fullName: 'Automobili Pininfarina Battista',
      nickName: '秋王',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },




    {
      car_id: 'cc850',
      fullName: 'Koenigsegg CC850🔑',
      nickName: 'CC850',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "注意阶段 18 不提供试驾。"
    
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 1 } },
    { conditions: 28, reword: { type: 'credit', count: 4888 } },
    { conditions: 38, reword: { type: 'token', count: 8 } },
    { conditions: 58, reword: { type: 'seCard', count: 2 } },
    { conditions: 68, reword: { type: 'credit', count: 8888 } },
    { conditions: 88, reword: { type: 'token', count: 18 } },
    { conditions: 118, reword: { type: 'credit', count: 28888 } },
    { conditions: 128, reword: { type: 'token', count: 48 } },
    { conditions: 148, reword: { type: 'seCard', count: 5 } },
    { conditions: 178, reword: { type: 'credit', count: 48888 } },
    { conditions: 208, reword: { type: 'token', count: 68 } },
    { conditions: 238, reword: { type: 'sePart', count: 1 } },
    { conditions: 258, reword: { type: 'credit', count: 88888 } },
    { conditions: 288, reword: { type: 'token', count: 88 } },
    { conditions: 330, reword: { type: 'seKey', count: 1 } },
    { conditions: 350, reword: { type: 'seSkin', count: 1 } },









  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 8888 },
        { type: 'token', count: 48 },
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cc850', freeTry: true }],
          rewords: [
            { type: 'token', count: 3*48 },
            { type: 'credit', count: 5*8888 +5*14888},
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        { type: 'token', count: 8 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 5*18888},
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 28888 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 5 * 28888 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        { type: 'token', count: 8 },
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 5 * 28888 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 28888 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 4 * 28888 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        { type: 'credit', count: 14888 },
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cc850', freeTry: true }],
          rewords: [
            { type: 'token', count: 3*48 },
            { type: 'credit', count: 5*8888 +5*14888},
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 70,
      clubRewords: [
        { type: 'credit', count: 38888 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'token', count: 76 },
            { type: 'credit', count: 5 * 38888 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 38888 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'token', count: 76 },
            { type: 'credit', count: 5 * 38888 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 38888 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'token', count: 76 },
            { type: 'credit', count: 5 * 38888 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 8888 },
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cc850', freeTry: true }],
          rewords: [
            { type: 'token', count: 3*48 },
            { type: 'credit', count: 5*8888 +5*14888},
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 48888 },
        { type: 'token', count: 28 },
        
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: true }],
          rewords: [
            { type: 'credit', count: 4 * 48888 },
            { type: 'token', count: 36 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: true }],
          rewords: [
            { type: 'token', count: 174 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'dsp', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 4 },
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
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 66888 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            { type: 'token', count: 184 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 174 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc20', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 190,
      clubRewords: [
        { type: 'credit', count: 66888 },
        { type: 'token', count: 28 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 66888 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            { type: 'token', count: 138 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 174 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'agerars', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },


      ],
    },
    {
      stage: 14,
      unlockConditions: 210,
      clubRewords: [
        { type: 'token', count: 18 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 66888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 174 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: true }],
          rewords: [
            
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
        { type: 'token', count: 28 },
        { type: 'credit', count: 66888 },
        
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
            { type: 'credit', count: 5 * 66888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 174 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },

      ],
    },
    {
      stage: 16,
      unlockConditions: 240,
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
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
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
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 174 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            
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
        { type: 'token', count: 28 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
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
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 174 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'battista', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 270,
      clubRewords: [
        { type: 'credit', count: 38888 },
        { type: 'token', count: 88 },
        
      ],
      missions: [
        
        
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'cc850', freeTry: false }],
          rewords: [
            { type: 'credit', count: 5*38888 },
            { type: 'token', count: 192 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'cc850', freeTry: false }],
          rewords: [
            { type: 'credit', count: 4*158888 },
            { type: 'token', count: 352 },
            
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'cc850', freeTry: false }],
          rewords: [
            { type: 'credit', count: 4*1388888 },
            { type: 'token', count: 684 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'cc850', freeTry: false }],
          rewords: [
            { type: 'token', count: 1388 },
            
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
          toolCars: [{ car_id: 'cc850', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
