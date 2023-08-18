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
      car_id: 'vanda',
      fullName: 'Vanda Electrics Dendrobium',
      nickName: 'Vanda',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'avj',
      fullName: 'Lamborghini Aventador J',
      nickName: 'AVJ',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
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
    { conditions: 100, reword: { type: 'seCard', count: 1 } },
    { conditions: 150, reword: { type: 'seCard', count: 1 } },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 330, reword: { type: 'sePart', count: 1 } },
    { conditions: 380, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 50000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
      clubRewords: [],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'amg', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'amg', freeTry: false }],
          rewords: [
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 40,
      clubRewords: [],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'nsx', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
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
            { type: 'token', count: 15 },
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
            { type: 'token', count: 30 },
          ],
        },
        
      ],
    },
    {
      stage: 4,
      unlockConditions: 65,
      clubRewords: [],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 5,
      unlockConditions: 85,
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
            { type: 'credit', count: 150000 },
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
            { type: 'token', count: 15 },
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
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 105,
      clubRewords: [],
      missions: [
        
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: true }],
          rewords: [
            { type: 'credit', count: 175000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: false }],
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
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 125,
      clubRewords: [],
      missions: [
        
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
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
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 150,
      clubRewords: [],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: false }],
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
          toolCars: [{ car_id: 'bc', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 170,
      clubRewords: [],
      missions: [
        
                
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
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
          toolCars: [{ car_id: 'nsx', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 190,
      clubRewords: [],
      missions: [
        
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 125 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: false }],
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
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 220,
      clubRewords: [],
      missions: [
        
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 240,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sarthe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
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
            { type: 'token', count: 60 },
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
      stage: 13,
      unlockConditions: 270,
      clubRewords: [],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: true }],
          rewords: [
            { type: 'credit', count: 350000 },
            { type: 'token', count: 125 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'avj', freeTry: false }],
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
          toolCars: [{ car_id: 'n', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 300,
      clubRewords: [],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: true }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 150 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '918', freeTry: false }],
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
          toolCars: [{ car_id: 'vanda', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 325,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 150 },
            { type: 'sePart', count: 1 },
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vanda', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 325,
      clubRewords: [],
      missions: [
                
        {
          conditions: 34,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: false }],
          rewords: [
            { type: 'credit', count: 875000 },
            { type: 'token', count: 400 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 190,
      clubRewords: [],
      missions: [
        
                
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'regera', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
