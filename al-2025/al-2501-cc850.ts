import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 240,
  toolCars: [
    {
      car_id: 'd8',
      fullName: 'Donkervoort D8 GTO Individual Series',
      nickName: 'D8',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'carrera',
      fullName: 'Porsche Carrera GT',
      nickName: '卡雷拉',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
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
      car_id: 'victor',
      fullName: 'Aston Martin Victor',
      nickName: 'Victor',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '1mw',
      fullName: 'Toroidion 1MW',
      nickName: '1MW',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'tachyon',
      fullName: 'Raesr Tachyon Speed🔑',
      nickName: '超光速',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
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
      car_id: 'speirling',
      fullName: 'Mcmurtry Speirling',
      nickName: 'Speirling',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
  ],
  notes: [
    "注意阶段 18 不提供试驾。"
    
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'credit', count: 28888 } },
    { conditions: 23, reword: { type: 'token', count: 18 } },
    { conditions: 38, reword: { type: 'seCard', count: 1 } },
    { conditions: 48, reword: { type: 'token', count: 28 } },
    { conditions: 75, reword: { type: 'credit', count: 48888 } },
    { conditions: 90, reword: { type: 'token', count: 48 } },
    { conditions: 105, reword: { type: 'seCard', count: 2 } },
    { conditions: 120, reword: { type: 'credit', count: 78888 } },
    { conditions: 150, reword: { type: 'credit', count: 108888 } },
    { conditions: 180, reword: { type: 'seCard', count: 3 } },
    { conditions: 228, reword: { type: 'sePart', count: 2 } },
    { conditions: 250, reword: { type: 'credit', count: 138888 } },
    { conditions: 300, reword: { type: 'token', count: 68 } },
    { conditions: 320, reword: { type: 'sePart', count: 2 } },







  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 18888 },
        { type: 'token', count: 8 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: true }],
          rewords: [
            { type: 'token', count: 36+48 },
            { type: 'credit', count: 3*18888 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'd8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*18888 },
            { type: 'token', count: 56+48 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 18888 },
        { type: 'token', count: 8 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*18888 },
            { type: 'token', count: 56+48 },
            { type: 'seCard', count: 3 },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*18888 },
            { type: 'token', count: 56+48 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 18888 },
        { type: 'token', count: 8 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*18888 },
            { type: 'token', count: 56+48 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: true }],
          rewords: [
            { type: 'token', count: 56 },
            { type: 'credit', count: 5*18888 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 62,
      clubRewords: [
        { type: 'credit', count: 18888 },
        { type: 'token', count: 8 },
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1mw', freeTry: true }],
          rewords: [
            { type: 'credit', count: 2*18888 },
            { type: 'token', count: 98 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 75,
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
          toolCars: [{ car_id: 'd8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 2*18888 },
            { type: 'token', count: 48+56 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 85,
      clubRewords: [
        { type: 'credit', count: 18888 },
        { type: 'token', count: 8 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 2*18888 },
            { type: 'token', count: 48+56 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 95,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5*18888 },
            { type: 'token', count: 56 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 108,
      clubRewords: [
        { type: 'credit', count: 18888 },
        { type: 'token', count: 8 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6*18888 },
            { type: 'token', count: 16 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'token', count: 114 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 125,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6*28888 },
            { type: 'token', count: 16 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*88888 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'token', count: 96 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 140,
      clubRewords: [
        { type: 'credit', count: 148888+28888 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1mw', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6*28888 },
            { type: 'token', count: 16 },
          ],
        },
        
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '1mw', freeTry: true }],
          rewords: [
            { type: 'credit', count: 2*148888 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '1mw', freeTry: true }],
          rewords: [
            { type: 'token', count: 116 },
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '1mw', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '1mw', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },


      ],
    },
    {
      stage: 14,
      unlockConditions: 160,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6*28888 },
            { type: 'token', count: 16 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*128888 },
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
            { type: 'token', count: 76 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            
            
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
            
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },

      ],
    },
    {
      stage: 15,
      unlockConditions: 180,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 38 },
        { type: 'credit', count: 28888 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6*28888 },
            { type: 'token', count: 16 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'token', count: 114 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 144 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },

      ],
    },
    {
      stage: 16,
      unlockConditions: 200,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 38 },
        { type: 'credit', count: 28888 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6*28888 },
            { type: 'token', count: 16 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'token', count: 114 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'token', count: 156 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 220,
      clubRewords: [
        { type: 'sePart', count: 1 },
        { type: 'token', count: 78 },
        { type: 'credit', count: 28888+128888 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'credit', count: 6*28888 },
            { type: 'token', count: 16 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*128888 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'token', count: 114 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
            
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
            { type: 'token', count: 156 },
            
          ],
        },
        {
          conditions: 8,
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
      stage: 18,
      unlockConditions: 245,
      clubRewords: [
        { type: 'sePart', count: 1 },
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: false }],
          rewords: [
            { type: 'credit', count: 6*48888 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: false }],
          rewords: [
            { type: 'credit', count: 204 },
          ],
        },
        
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: false }],
          rewords: [
            { type: 'credit', count: 758888 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: false }],
          rewords: [
            { type: 'token', count: 68 },
            { type: 'credit', count: 988888 },
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1758888 },
            { type: 'token', count: 176 },
            
          ],
        },
      ],
    },
    {
      stage: 19,
      
      unlockConditions: 260,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
