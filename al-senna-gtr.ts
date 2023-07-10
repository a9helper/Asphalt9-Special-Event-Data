import { SED } from './type.d.ts'

const sennaGTRALSE: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 210,
  toolCars: [
    {
      car_id: 'g60',
      fullName: 'Ginetta G60',
      nickName: 'G60',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'gt3',
      fullName: 'Bentley Continental GT3',
      nickName: '欧陆GT3',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'mgt',
      fullName: 'McLaren GT',
      nickName: '迈凯伦GT',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'p1',
      fullName: 'McLaren P1',
      nickName: 'P1',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'ap0',
      fullName: 'Apex AP-0',
      nickName: 'Apex',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'gt12',
      fullName: 'Aston Martin GT12',
      nickName: 'AM GT12',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'cx75',
      fullName: 'Jaguar C-X75',
      nickName: 'C-X75',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'sennagtr',
      fullName: 'McLaren Senna GTR',
      nickName: '塞纳GTR',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
  ],
  notes: [],
  processRewords: [
    {
      conditions: 50,
      reword: {
        type: 'seCard',
        count: 1,
      },
    },
    {
      conditions: 100,
      reword: {
        type: 'seCard',
        count: 2,
      },
    },
    {
      conditions: 150,
      reword: {
        type: 'seCard',
        count: 3,
      },
    },
    {
      conditions: 200,
      reword: {
        type: 'seCard',
        count: 5,
      },
    },
    {
      conditions: 225,
      reword: {
        type: 'seCard',
        count: 8,
      },
    },
    {
      conditions: 300,
      reword: {
        type: 'seSkin',
        count: 1,
      },
    },
    {
      conditions: 350,
      reword: {
        type: 'sePart',
        count: 3,
      },
    },
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [{ type: 'token', count: 40 }],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 10,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt3', freeTry: true }],
          rewords: [{ type: 'token', count: 40 }],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt3', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt3', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 25,
      clubRewords: [],
      missions: [
        
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'credit', count: 150000 },
          ],
        },
      ],
    },
    {
      unlockConditions: 40,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'g60', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 100 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 55,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt3', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt3', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt3', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt3', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt3', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 100 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 70,
      clubRewords: [],
      missions: [
        
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            { type: 'token', count: 210 },
            { type: 'credit', count: 150000 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 85,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mgt', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mgt', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mgt', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 100,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 100 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 110,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap0', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap0', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap0', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap0', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap0', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 100 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 125,
      clubRewords: [],
      missions: [
        
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: true }],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'credit', count: 150000 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 140,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt12', freeTry: true }],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 155,
      clubRewords: [],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cx75', freeTry: true }],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 3 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 170,
      clubRewords: [],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mgt', freeTry: true }],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 3 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 180,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p1', freeTry: true }],
          rewords: [
            { type: 'token', count: 220 },
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 6 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 190,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap0', freeTry: true }],
          rewords: [
            { type: 'token', count: 220 },
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 6 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 200,
      clubRewords: [],
      missions: [
        
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gt12', freeTry: true }],
          rewords: [
            { type: 'token', count: 280 },
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 8 },
          ],
        },
      ],
    },
    {
      unlockConditions: 210,
      clubRewords: [],
      missions: [
        
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cx75', freeTry: true }],
          rewords: [
            { type: 'token', count: 280 },
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 8 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 220,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 266664 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 746664 },
            { type: 'token', count: 576 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1177776 },
            { type: 'token', count: 488 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 4 },
            { type: 'credit', count: 1777776 },
          ],
        },
      ],
    },
    {
      unlockConditions: 230,
      clubRewords: [],
      missions: [
        
      ],
    },
    
  ],
}
