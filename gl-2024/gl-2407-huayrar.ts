import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'continentalgt',
      fullName: 'Bentley Continental GT Speed',
      nickName: '欧陆',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'elva',
      fullName: 'McLaren Elva',
      nickName: 'Elva',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'eb110',
      fullName: 'Bugatti EB110🔑',
      nickName: 'EB110',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'ep9',
      fullName: 'Nio EP9',
      nickName: 'EP9',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'zondar',
      fullName: 'Pagani Zonda R🔑',
      nickName: '风之子',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sennagtr',
      fullName: 'McLaren Senna GTR',
      nickName: 'Senna GTR',
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
    
    {
      car_id: 'huayrar',
      fullName: 'Pagani Huayra R',
      nickName: 'Huayra R',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 40, reword: { type: 'seCard', count: 1 }  },
    { conditions: 70, reword: { type: 'seCard', count: 1 }  },
    { conditions: 120, reword: { type: 'seCard', count: 1 }  },
    { conditions: 225, reword: { type: 'seCard', count: 1 }  },
    { conditions: 250, reword: { type: 'seCard', count: 1 }  },
    { conditions: 310, reword: { type: 'sePart', count: 1 } },


    
    
  ],
  notes: [
    

  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0, // 15 30 45...
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 2 },
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 14,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 25,
      clubRewords: [
        { type: 'token', count: 20 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 35,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: false }],
          rewords: [
            { type: 'credit', count: 175000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            { type: 'credit', count: 175000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 65,
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
          toolCars: [{ car_id: 'h2', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'h2', freeTry: false }],
          rewords: [
            { type: 'credit', count: 175000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'h2', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'h2', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 70,
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
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 85,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '003', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '003', freeTry: false }],
          rewords: [
            { type: 'credit', count: 175000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '003', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '003', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 100,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'credit', count: 175000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'm4gt3', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 120,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vulcan', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'vulcan', freeTry: false }],
          rewords: [
            { type: 'credit', count: 175000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'vulcan', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'vulcan', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 12,
      unlockConditions: 140,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c-x75', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'c-x75', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'c-x75', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'c-x75', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 105 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'c-x75', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 160,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vulcano', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'vulcano', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'vulcano', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'vulcano', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 105 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'vulcano', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 180,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 105 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 350000 },
            { type: 'token', count: 150 },
            
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
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 200,
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
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 350000 },
            { type: 'token', count: 175 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 250 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
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
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 225,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 250,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 275,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        
        
      ],
    },
    {
      stage: 19,
      unlockConditions: 300,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
