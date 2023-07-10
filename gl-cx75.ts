import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'tvr',
      fullName: 'TVR Griffith',
      nickName: 'TVR',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'svr',
      fullName: 'Jaguar F-Type SVR',
      nickName: 'SVR',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'svr',
      fullName: 'Jaguar F-Type SVR',
      nickName: 'SVR',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    
    


    
    {
      car_id: 'c-x75',
      fullName: 'Jaguar C-X75',
      nickName: 'C-X75',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 30, reword: { type: 'credit', count: 10000 } },
    { conditions: 100, reword: { type: 'seCard', count: 2 } },
    { conditions: 120, reword: { type: 'credit', count: 20000 } },
    { conditions: 160, reword: { type: 'credit', count: 30000 } },
    { conditions: 200, reword: { type: 'token', count: 100 } },
    { conditions: 220, reword: { type: 'seCard', count: 5 } },
    { conditions: 230, reword: { type: 'sePart', count: 1 } },
    { conditions: 240, reword: { type: 'sePart', count: 2 } },
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
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tvr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
            { type: 'seSkin', count: 1 },
            { type: 'token', count: 50 },
            
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
            { type: 'token', count: 50 },
            
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c-x75', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'seCard', count: 4 },
            { type: 'token', count: 75 },
            
          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tvr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'token', count: 75 },
            
          ],
        },
      ],
    },
    
    {
      stage: 5,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'token', count: 75 },
            
          ],
        },
      ],
    },

    
    {
      stage: 6,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c-x75', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 4 },
            { type: 'token', count: 100 },
            
          ],
        },
      ],
    },
    
    {
      stage: 7,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tvr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 100 },
            
          ],
        },
      ],
    },
    
    {
      stage: 8,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 100 },
            
          ],
        },
      ],
    },

    


    {
      stage: 9,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 25,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c-x75', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'credit', count: 125000 },
            { type: 'token', count: 125 },
            
          ],
        },
      ],
    },

    {
      stage: 10,
      unlockConditions: 0,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tvr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 125 },
            
          ],
        },
      ],
    },



    {
      stage: 11,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'svr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 125 },
            
          ],
        },
      ],
    },













    {
      stage: 12,
      unlockConditions: 0,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c-x75', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
