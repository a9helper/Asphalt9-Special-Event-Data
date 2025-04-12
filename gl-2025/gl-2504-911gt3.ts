import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 200,
  toolCars: [
    {
      car_id: 'gt350r',
      fullName: 'Ford Shelby GT350R',
      nickName: '野马',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'rs01',
      fullName: 'Renault R.S. 01🔑',
      nickName: '雷诺RS',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'stingray',
      fullName: 'Chevrolet Corvette Stingray',
      nickName: 'Stingray',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'cgs',
      fullName: 'Chevrolet Corvette Grand Sport',
      nickName: '五菱',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'mk2',
      fullName: 'Ford GT MKII🔑',
      nickName: 'MK2',
      isKeyCar: true,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'berlinetta',
      fullName: 'Puritalia Berlinetta',
      nickName: 'Berlinetta',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },




    {
      car_id: '911gt3',
      fullName: 'Porsche 911 GT3 RS',
      nickName: '911GT3',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'credit', count: 35000 }  },
    { conditions: 90, reword: { type: 'token', count: 80 }  },
    { conditions: 230, reword: { type: 'sePart', count: 1 }  },











    
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr-50', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 6 },
          ],
        },
        
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sarthe', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sarthe', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sarthe', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sarthe', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sarthe', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr-50', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'enzo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'enzo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'enzo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'enzo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'enzo', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'one77', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'one77', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'one77', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'one77', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'one77', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr-50', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr-50', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr-50', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr-50', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtr-50', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'credit', count: 600000 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 75,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 9,
      unlockConditions: 85,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 100,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 115,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 12,
      unlockConditions: 130,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 145,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 160,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 165,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr-50', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
