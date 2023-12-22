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
      car_id: '392',
      fullName: 'Dodge Challenger 392 Hemi Scat Pack',
      nickName: '392',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: '488',
      fullName: 'Ferrari 488 GTB',
      nickName: '488',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'alfieri',
      fullName: 'Maserati Alfieri',
      nickName: '玛莎',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'ep9',
      fullName: 'Nio EP9',
      nickName: 'EP9',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'infiniti',
      fullName: 'Infiniti Project Black S',
      nickName: '英菲尼迪',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'dbs',
      fullName: 'Aston Martin DBS SuperLeggera',
      nickName: 'DBS',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    



    {
      car_id: 'chiron',
      fullName: 'Bugatti Chiron',
      nickName: '布加迪',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    
    { conditions: 10, reword: { type: 'credit', count: 50000 } },
    { conditions: 25, reword: { type: 'seCard', count: 1 } },
    { conditions: 50, reword: { type: 'token', count: 100 } },
    { conditions: 75, reword: { type: 'credit', count: 75000 } },
    { conditions: 100, reword: { type: 'seCard', count: 1 } },
    { conditions: 135, reword: { type: 'token', count: 200 } },
    { conditions: 175, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 1 } },
    { conditions: 225, reword: { type: 'credit', count: 125000 } },
    { conditions: 250, reword: { type: 'seCard', count: 1 } },
    { conditions: 290, reword: { type: 'seCard', count: 2 } },
    { conditions: 300, reword: { type: 'seSkin', count: 1 } },
    { conditions: 324, reword: { type: 'seCard', count: 3 } },
    
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
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 250 },
            { type: 'seCard', count: 3 },
            
          ],
        },
      ],
    },

    
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '392', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '392', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 135 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        
      ],
    },
    
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [],
      missions: [
        
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '488', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '488', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 135 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 40,
      clubRewords: [],
      missions: [
       
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'alfieri', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'alfieri', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 135 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 5,
      unlockConditions: 60,
      clubRewords: [],
      missions: [
        
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ep9', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ep9', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 135 },
            { type: 'seCard', count: 3 },
            
          ],
        },
      ],
    },
    
    {
      stage: 6,
      unlockConditions: 80,
      clubRewords: [],
      missions: [

        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'infiniti', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'infiniti', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 135 },
            { type: 'seCard', count: 3 },
            
          ],
        },
      ],
    },
    
    {
      stage: 7,
      unlockConditions: 100,
      clubRewords: [],
      missions: [
       
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'dbs', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'dbs', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 135 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'dbs', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 4 },
            
          ],
        },
      ],
    },
    
    {
      stage: 8,
      unlockConditions: 135,
      clubRewords: [],
      missions: [
                   
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '392', freeTry: false },
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
            { car_id: '392', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 135 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '392', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 9,
      unlockConditions: 155,
      clubRewords: [],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '488', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '488', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 275000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '488', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 195 },
            { type: 'seCard', count: 3 },
            
          ],
        },
      ],
    },
    
    {
      stage: 10,
      unlockConditions: 175,
      clubRewords: [],
      missions: [
        
       
        {
          conditions: 20,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 325000 },
            { type: 'token', count: 350 },
            
          ],
        },
      ],
    },
    
    {
      stage: 11,
      unlockConditions: 195,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'alfieri', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'alfieri', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'alfieri', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 195 },
            { type: 'seCard', count: 3 },
            
          ],
        },
      ],
    },
    
    {
      stage: 12,
      unlockConditions: 220,
      clubRewords: [],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ep9', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ep9', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 350000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ep9', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 195 },
            { type: 'seCard', count: 5 },
            
          ],
        },
      ],
    },
    
    {
      stage: 13,
      unlockConditions: 245,
      clubRewords: [],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'infiniti', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'infiniti', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 400000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'infiniti', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 195 },
            { type: 'seCard', count: 5 },
            
          ],
        },
      ],
    },
    
    {
      stage: 14,
      unlockConditions: 270,
      clubRewords: [],
      missions: [
        
       
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'dbs', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'dbs', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 195 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'dbs', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'seCard', count: 4 },
            
          ],
        },
      ],
    },
    
    {
      stage: 15,
      unlockConditions: 290,
      clubRewords: [],
      missions: [
           
        {
          conditions: 20,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 550000 },
            { type: 'token', count: 475 },
          ],
        },
      ],
    },

    
    
    
    
    
    {
      stage: 16,
      unlockConditions:324,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'chiron', freeTry: false },
          ],
          rewords: [
          ],
        },
        
      ],
    },
    
  ],
}

export default template
