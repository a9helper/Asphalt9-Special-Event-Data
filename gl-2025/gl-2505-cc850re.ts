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
