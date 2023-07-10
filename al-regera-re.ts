import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    
    {
      car_id: 'amg',
      fullName: 'Mercedes-Benz AMG GT S',
      nickName: 'AMG',
      star: 3,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'nsx',
      fullName: 'Acura 2017 NSX',
      nickName: 'NSX',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'sarthe',
      fullName: 'Vencer Sarthe',
      nickName: '剃刀',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'n',
      fullName: 'Apollo N',
      nickName: '大菠萝',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: '550',
      fullName: 'Sin R1 550',
      nickName: 'Sin',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: '918',
      fullName: 'Porsche 918 Spyder',
      nickName: '918',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'bc',
      fullName: 'Pagani Huayra BC',
      nickName: 'BC',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    
    {
      car_id: 'regera',
      fullName: 'Koenigsegg Regera',
      nickName: '统治',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 2 } },
    { conditions: 150, reword: { type: 'seCard', count: 2 } },
    { conditions: 190, reword: { type: 'seCard', count: 3 } },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 289, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 30000 },
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 12,
      clubRewords: [],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'amg', freeTry: true }],
          rewords: [
            { type: 'credit', count: 45000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'amg', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 30,
      clubRewords: [],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: true }],
          rewords: [
            { type: 'credit', count: 45000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: false }],
          rewords: [
            { type: 'token', count: 45 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 45,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 60,
      clubRewords: [],
      missions: [
        
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '550', freeTry: true }],
          rewords: [
            { type: 'credit', count: 90000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '550', freeTry: false }],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 75,
      clubRewords: [],
      missions: [
        
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: true }],
          rewords: [
            { type: 'credit', count: 105000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: false }],
          rewords: [
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 85,
      clubRewords: [],
      missions: [
        
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 95,
      clubRewords: [],
      missions: [
        
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '550', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 90 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '550', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 110,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    {
      unlockConditions: 120,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 105 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      unlockConditions: 130,
      clubRewords: [],
      missions: [
        
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 145,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 120 },
          ],
        },
      ],
    },
    {
      unlockConditions: 160,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: true }],
          rewords: [
            { type: 'token', count: 135 },
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      unlockConditions: 175,
      clubRewords: [],
      missions: [
        
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 255000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    {
      unlockConditions: 190,
      clubRewords: [],
      missions: [
                
        {
          conditions: 25,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: false }],
          rewords: [
            { type: 'credit', count: 675000 },
            { type: 'token', count: 450 },
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 4 },
          ],
        },
      ],
    },
    {
      unlockConditions: 190,
      clubRewords: [],
      missions: [
        
                
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
