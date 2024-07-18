import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
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
            { type: 'credit', count: 250000 },
            { type: 'token', count: 100 },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 120 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 120 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 120 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mclarengt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 120 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 160 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'token', count: 200 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
            { car_id: 'roma', freeTry: false },
            { car_id: '004c', freeTry: false },
            { car_id: '296', freeTry: false },
            { car_id: 'mclarengt', freeTry: false },
            { car_id: 'solus', freeTry: false },
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
            { car_id: 'roma', freeTry: false },
            { car_id: '004c', freeTry: false },
            { car_id: '296', freeTry: false },
            { car_id: 'mclarengt', freeTry: false },
            { car_id: 'solus', freeTry: false },
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 240 },
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
            { car_id: 'roma', freeTry: false },
            { car_id: '004c', freeTry: false },
            { car_id: '296', freeTry: false },
            { car_id: 'mclarengt', freeTry: false },
            { car_id: 'solus', freeTry: false },
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
            { car_id: 'roma', freeTry: false },
            { car_id: '004c', freeTry: false },
            { car_id: '296', freeTry: false },
            { car_id: 'mclarengt', freeTry: false },
            { car_id: 'solus', freeTry: false },
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'credit', count: 750000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
            { car_id: 'roma', freeTry: false },
            { car_id: '004c', freeTry: false },
            { car_id: '296', freeTry: false },
            { car_id: 'mclarengt', freeTry: false },
            { car_id: 'solus', freeTry: false },
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'credit', count: 750000 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
            { car_id: 'roma', freeTry: false },
            { car_id: '004c', freeTry: false },
            { car_id: '296', freeTry: false },
            { car_id: 'mclarengt', freeTry: false },
            { car_id: 'solus', freeTry: false },
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
            
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
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        
      ],
    },
    {
      stage: 12,
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 130,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        
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
