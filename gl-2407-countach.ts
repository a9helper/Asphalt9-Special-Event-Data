import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: true,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'lt',
      fullName: 'Chevrolet Camaro LT',
      nickName: 'LT',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: 'ds',
      fullName: 'DS Automobiles DS E-Tense',
      nickName: 'DS',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: 'griffith',
      fullName: 'TVR Griffith',
      nickName: 'TVR',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'furai',
      fullName: 'Mazda Furai',
      nickName: '风籁',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'nsx',
      fullName: 'Acura 2017 NSX',
      nickName: 'nsx',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'h2',
      fullName: 'Pininfarina H2 Speed',
      nickName: 'h2',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: '003',
      fullName: 'Glickenhaus 003S',
      nickName: '003',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'm4gt3',
      fullName: 'BMW M4 GT3',
      nickName: 'M4 GT3',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'vulcan',
      fullName: 'Aston Martin Vulcan',
      nickName: '火神',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'c-x75',
      fullName: 'Jaguar C-X75',
      nickName: '大捷豹',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'vulcano',
      fullName: 'Icona Vulcano Titanium',
      nickName: '火山',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
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
      car_id: 'lpi800',
      fullName: 'Lamborghini Countach LPI 800-4🔑',
      nickName: '新康塔什',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 20, reword: { type: 'credit', count: 40000 } },
    { conditions: 35, reword: { type: 'token', count: 50 } },
    { conditions: 50, reword: { type: 'seCard', count: 1 }  },
    { conditions: 135, reword: { type: 'seCard', count: 2 }  },
    { conditions: 160, reword: { type: 'credit', count: 100000 } },
    { conditions: 195, reword: { type: 'token', count: 100 } },
    { conditions: 230, reword: { type: 'seCard', count: 3 }  },
    { conditions: 270, reword: { type: 'sePart', count: 1 } },
    { conditions: 300, reword: { type: 'seKey', count: 1 } },

    
    
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
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
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
          toolCars: [{ car_id: 'lt', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'lt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 60 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'lt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
        
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 30,
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
          toolCars: [{ car_id: 'ds', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ds', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 60 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ds', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 45,
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
          toolCars: [{ car_id: 'griffith', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'griffith', freeTry: false }],
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
          toolCars: [{ car_id: 'griffith', freeTry: false }],
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
          toolCars: [{ car_id: 'griffith', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 60,
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
      unlockConditions: 75,
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
      unlockConditions: 90,
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
      unlockConditions: 105,
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
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
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
      unlockConditions: 130,
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
      unlockConditions: 130,
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
      unlockConditions: 130,
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
      unlockConditions: 130,
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
      unlockConditions: 130,
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
      unlockConditions: 130,
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
      unlockConditions: 130,
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
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
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
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
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
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
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
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
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
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 16,
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
          toolCars: [{ car_id: 'lpi800', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
