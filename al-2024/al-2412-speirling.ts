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
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 112 },
            { type: 'credit', count: 4*38888 },
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
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            { type: 'credit', count: 4*48888 },
            { type: 'token', count: 112 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
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
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'credit', count: 4*48888 },
            { type: 'token', count: 112 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
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
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'credit', count: 4*48888 },
            { type: 'token', count: 112 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
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
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5*48888 },
            { type: 'token', count: 112 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
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
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 4*48888 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'token', count: 112 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
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
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5*48888 },
            { type: 'token', count: 112 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
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
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 112 },
            { type: 'credit', count: 5*58888 },
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
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: false }],
          rewords: [
            { type: 'credit', count: 5*68888 },
            { type: 'token', count: 152 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'countach', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
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
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5*68888 },
            { type: 'token', count: 152 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
          rewords: [
            
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: false }],
          rewords: [
            { type: 'credit', count: 5*88888 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: false }],
          rewords: [
            { type: 'token', count: 152 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: false }],
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
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'token', count: 152 },
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            
            
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
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'token', count: 190 },
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 6*88888 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            
            
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
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'token', count: 190 },
            { type: 'credit', count: 6*88888 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
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
          conditions: 34,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: false }],
          rewords: [
            { type: 'token', count: 4*58+4*48+5*38 },
            { type: 'credit', count: 4*138888+4*108888+5*88888 },
            { type: 'seCard', count: 5 },
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: false }],
          rewords: [
            { type: 'token', count:5 },
            
            
          ],
        },
        
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: false }],
          rewords: [
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
      ],
    },
    {
      stage: 18,
      unlockConditions: 245,
      clubRewords: [
        { type: 'sePart', count: 1 },
        
      ],
      missions: [
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
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
