import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 190,
  toolCars: [
    {
      car_id: 'huracanste',
      fullName: 'Lamborghini Huracan Super Trofeo Evo🔑',
      nickName: 'D飓风',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'ultimars',
      fullName: 'Ultima RS🔑',
      nickName: 'Ultima RS',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'xj220',
      fullName: 'Jaguar XJ220 TWR🔑',
      nickName: 'XJ220',
      isKeyCar: true,
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
      car_id: 'svj',
      fullName: 'Lamborghini Aventador SVJ Roadster',
      nickName: 'SVJ',
      isKeyCar: false,
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
    car_id: 'ssc',
    fullName: 'SSC Tuatara🔑',
    nickName: '大蜥蜴',
    isKeyCar: true,
    rankLimits: [],
    star: 6,
  },
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'seCard', count: 2 } },
    { conditions: 30, reword: { type: 'token', count: 75 }  },
    { conditions: 50, reword: { type: 'credit', count: 75000 } },
    { conditions: 70, reword: { type: 'seCard', count: 3 } },
    { conditions: 140, reword: { type: 'credit', count: 200000 } },
    { conditions: 250, reword: { type: 'token', count: 200 }  },
    { conditions: 350, reword: { type: 'sePart', count: 2 } },
    { conditions: 390, reword: { type: 'seSkin', count: 1 } },

    { conditions: 395, reword: { type: 'seKey', count: 1 } },
    
    
  ],
  notes: [
    "幽默GL"

  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 125 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 65 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 45,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'credit', count: 425000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'token', count: 105 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 90,
      clubRewords: [
        { type: 'token', count: 70 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            { type: 'credit', count: 175000 },
            { type: 'token', count: 250 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 115,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [
            { type: 'credit', count: 425000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'imola', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 130,
      clubRewords: [
        { type: 'token', count: 75 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            { type: 'credit', count: 350000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            { type: 'credit', count: 625000 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'svj', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 165,
      clubRewords: [
        { type: 'credit', count: 25000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'credit', count: 575000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 2 },
            
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
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
            
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
            { type: 'credit', count: 875000 },
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 180,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            { type: 'credit', count: 625000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            { type: 'token', count: 250 },
            { type: 'credit', count: 225000 },
            
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
            { type: 'credit', count: 500000 },
            
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
            { type: 'token', count: 300 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            { type: 'credit', count: 750000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'credit', count: 600000 },
            { type: 'sePart', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 180,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },

    
    
    
  ],
}

export default template
