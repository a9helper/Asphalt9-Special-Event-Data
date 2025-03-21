import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 98,
  toolCars: [
    {
      car_id: 'xjr-15',
      fullName: 'Jaguar XJR-15',
      nickName: 'XJR15',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'sarthe',
      fullName: 'Vencer Sarthe',
      nickName: '剃刀',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'enzo',
      fullName: 'Ferrari Enzo Ferrari',
      nickName: 'Enzo',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'one77',
      fullName: 'Aston Martin One77',
      nickName: 'One77',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },




    {
      car_id: 'gtr-50',
      fullName: 'Nissan GTR-50 Italdesign',
      nickName: 'GTR-50',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
  ],
  processRewords: [
    { conditions: 40, reword: { type: 'token', count: 200 }  },
    { conditions: 70, reword: { type: 'seCard', count: 2 }  },
    { conditions: 130, reword: { type: 'token', count: 300 }  },
    { conditions: 150, reword: { type: 'seCard', count: 3 }  },
    { conditions: 170, reword: { type: 'sePart', count: 2 }  },








    
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
      unlockConditions: 30,
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
      unlockConditions: 45,
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
      unlockConditions: 65,
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
      unlockConditions: 85,
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
      unlockConditions: 110,
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
      unlockConditions: 110,
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
