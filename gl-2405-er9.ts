import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 190,
  toolCars: [
    {
      car_id: 'barchetta',
      fullName: 'Pagani Zonda HP Barchetta🔑',
      nickName: 'Barchetta',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'mc20gt2',
      fullName: 'Maserati MC20 GT2',
      nickName: 'MC20 GT2',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
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
      star: 5,
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
      car_id: 'er9',
      fullName: 'Lotus E-R9',
      nickName: 'ER9',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    
    { conditions: 30, reword: { type: 'credit', count: 40000 } },
    { conditions: 50, reword: { type: 'seCard', count: 2 } },
    { conditions: 120, reword: { type: 'seCard', count: 5 } },
    { conditions: 150, reword: { type: 'token', count: 100 } },
    { conditions: 190, reword: { type: 'credit', count: 100000 } },
    { conditions: 220, reword: { type: 'seCard', count: 5 } },
    { conditions: 270, reword: { type: 'sePart', count: 1 } },
    { conditions: 290, reword: { type: 'seSkin', count: 1 } },
    { conditions: 315, reword: { type: 'seKey', count: 1 } },

  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
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
            { type: 'credit', count: 250000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            { type: 'credit', count: 140000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'credit', count: 140000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
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
        { type: 'token', count: 20 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'credit', count: 140000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
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
      unlockConditions: 45,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 140000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
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
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 10000 },
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
            { type: 'credit', count: 140000 },
            
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
            { type: 'token', count: 80 },
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
      unlockConditions: 75,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 140000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
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
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 125,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            { type: 'credit', count: 275000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'barchetta', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },

          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 145,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
          rewords: [
            { type: 'credit', count: 275000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20gt2', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },

          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 145,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: false }],
          rewords: [
            { type: 'credit', count: 400000 },

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
            { type: 'token', count: 120 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },

          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 175,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 275000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },

          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 120 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },

          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 230,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 120 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },

          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 250,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'credit', count: 240000 },
            { type: 'token', count: 120 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 160 },
            
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'credit', count: 390000 },
            { type: 'token', count: 200 },
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 250,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'er9', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },

    
    
    
  ],
}

export default template
