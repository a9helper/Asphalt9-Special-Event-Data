import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 60,
  toolCars: [
    {
      car_id: 'gallardo',
      fullName: 'Lamborghini Gallardo LP 560-4',
      nickName: '盖拉多',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'mclarengt',
      fullName: 'McLaren GT',
      nickName: '迈凯伦GT',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '550',
      fullName: 'Sin R1 550',
      nickName: 'SIN',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'huayrar',
      fullName: 'Pagani Huayra R',
      nickName: 'Huayra R',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'f8',
      fullName: 'Ferrari F8 Tributo',
      nickName: 'F8',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'at96',
      fullName: 'TechRules AT96 Track Version🔑',
      nickName: '腾风',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'fenyr',
      fullName: 'W Motors Fenyr SuperSport',
      nickName: '狼王',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'cs',
      fullName: 'Rimac Concept S',
      nickName: 'CS',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },




    {
      car_id: 'cc850',
      fullName: 'Koenigsegg CC850🔑',
      nickName: 'CC850',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'credit', count: 50000 }  },
    { conditions: 30, reword: { type: 'token', count: 200 }  },
    { conditions: 50, reword: { type: 'seCard', count: 2 }  },
    { conditions: 75, reword: { type: 'seCard', count: 3 }  },
    { conditions: 100, reword: { type: 'seCard', count: 3 }  },
    { conditions: 120, reword: { type: 'token', count: 250 }  },
    { conditions: 150, reword: { type: 'sePart', count: 1 }  },
    { conditions: 175, reword: { type: 'sePart', count: 1 }  },









    
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
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cc850', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 150000 },
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
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: true },
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: true },
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gallardo', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 100 },
            
          ],
        },
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 25,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huayrar', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 8 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '550', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huayrar', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '550', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huayrar', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 350000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '550', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 350000 },
            { type: 'token', count: 75 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huayrar', freeTry: true },
            { car_id: '550', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '550', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huayrar', freeTry: true },
            { car_id: '550', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huayrar', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '550', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'huayrar', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
        
      ],
    },
    {
      stage: 4,
      unlockConditions: 40,
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
            { car_id: 'cc850', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 8 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'f8', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'f8', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'token', count: 90 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'f8', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'token', count: 90 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
            { car_id: 'f8', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'f8', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'f8', freeTry: true },
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'f8', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 80,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'seCard', count: 8 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fenyr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 400000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fenyr', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 550000 },
            { type: 'token', count: 90 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fenyr', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 550000 },
            { type: 'token', count: 90 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fenyr', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 8 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 8 },
            
            
          ],
        },
        
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fenyr', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 8 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 8 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fenyr', freeTry: true },
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'fenyr', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 200 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 200 },
            
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 100,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cc850', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cc850', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 1000000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cc850', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 7500000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cc850', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cc850', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 4 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cc850', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'seKey', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 100,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cc850', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
