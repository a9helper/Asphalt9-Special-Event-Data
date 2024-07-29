import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 100,
  toolCars: [
    {
      car_id: 'praga',
      fullName: 'Praga R1',
      nickName: 'Praga',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'ds',
      fullName: 'DS Automobiles DS E-Tense',
      nickName: 'DS',
      star: 3,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: '220',
      fullName: 'Lotus Elise Sprint 220',
      nickName: '小莲花',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'gtr',
      fullName: 'Nissan GT-R Nismo',
      nickName: 'GTR',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: '003',
      fullName: 'Glickenhaus 003S',
      nickName: '003',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'trezor',
      fullName: 'Renault Trezor',
      nickName: 'Trezor',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'onyx',
      fullName: 'Peugeot Onyx',
      nickName: 'Onyx',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    


    {
      car_id: 'ultimars',
      fullName: 'Ultima RS',
      nickName: 'Ultima',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 25, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 1 } },
    { conditions: 150, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 1 } },
    { conditions: 250, reword: { type: 'seCard', count: 1 } },
    { conditions: 275, reword: { type: 'seCard', count: 1 } },
    { conditions: 300, reword: { type: 'sePart', count: 2 } },
    { conditions: 315, reword: { type: 'seSkin', count: 2 } },
  ],
  notes: [
    
  ],
  stages: [
    
    {
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'praga', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'praga', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 5,
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
          toolCars: [{ car_id: 'ds', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ds', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    {
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 75 },
          ],
        },
        
      ],
    },
    {
      unlockConditions: 25,
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
          toolCars: [{ car_id: '220', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '220', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    {
      unlockConditions: 35,
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
          toolCars: [{ car_id: 'gtr', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    {
      unlockConditions: 45,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    {
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '003', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 90000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '003', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    {
      unlockConditions: 70,
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
          toolCars: [{ car_id: 'trezor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 90000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'trezor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    {
      unlockConditions: 80,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    {
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 120 },
          ],
        },
      ],
    },
    {
      unlockConditions: 100,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'praga', freeTry: false }],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'praga', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 15000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'praga', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    {
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ds', freeTry: false }],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ds', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 15000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ds', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
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
          toolCars: [{ car_id: '220', freeTry: false }],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '220', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '220', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr', freeTry: false }],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 140,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '003', freeTry: false }],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '003', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 180000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '003', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'trezor', freeTry: false }],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'trezor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'trezor', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    {
      unlockConditions: 160,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: false }],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: false }],
          rewords: [
            { type: 'token', count: 25 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'onyx', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 225000 },
          ],
        },
      ],
    },
    {
      unlockConditions: 170,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 400000 },
          ],
        },
      ],
    },









    {
      unlockConditions:180,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
