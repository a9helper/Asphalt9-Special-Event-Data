import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 220,
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
      car_id: 'f1',
      fullName: 'Mclaren F1 LM🔑',
      nickName: 'F1',
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
      car_id: '9x8',
      fullName: 'Peugeot 9x8',
      nickName: '9x8',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'tsr-s',
      fullName: 'Zenvo TSR-S🔑',
      nickName: 'TSR-S',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'mc20gt2',
      fullName: 'Maserati MC20 GT2🔑',
      nickName: 'MC20GT2',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },


    {
      car_id: 'er9',
      fullName: 'Lotus E-R9',
      nickName: 'ER9',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "注意阶段 15 不提供试驾。"
    
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 1 } },
    { conditions: 32, reword: { type: 'credit', count: 48888 } },
    { conditions: 48, reword: { type: 'token', count: 28 } },
    { conditions: 68, reword: { type: 'seCard', count: 2 } },
    { conditions: 105, reword: { type: 'credit', count: 88888 } },
    { conditions: 120, reword: { type: 'token', count: 48 } },
    { conditions: 160, reword: { type: 'seCard', count: 4 } },
    { conditions: 180, reword: { type: 'credit', count: 128888 } },
    { conditions: 200, reword: { type: 'token', count: 68 } },
    { conditions: 225, reword: { type: 'seCard', count: 5 } },
    { conditions: 250, reword: { type: 'sePart', count: 2 } },
    { conditions: 260, reword: { type: 'seSkin', count: 1 } },
    { conditions: 270, reword: { type: 'seKey', count: 1 } },





  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 28 },
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
        { type: 'credit', count: 48888 },
        { type: 'token', count: 28 },
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
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 48888 },
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
        { type: 'credit', count: 48888 },
        { type: 'token', count: 28 },
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
        { type: 'credit', count: 48888 },
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
        { type: 'credit', count: 48888 },
        { type: 'token', count: 28 },
        
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
      unlockConditions: 70,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 28 },
        
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
      unlockConditions: 90,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 28 },
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
      unlockConditions: 110,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 68888 },
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
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 68888 },
        { type: 'token', count: 38 },
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
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 88888 },
        { type: 'token', count: 38 },
        
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
      unlockConditions: 170,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'sePart', count: 1 },
        { type: 'token', count: 38 },
        
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
      unlockConditions: 190,
      clubRewords: [
        { type: 'sePart', count: 1 },
        { type: 'token', count: 38 },
        
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
      unlockConditions: 210,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 38 },
        
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
      unlockConditions: 245,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'sePart', count: 1 },
        
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
      
      unlockConditions: 250,
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
