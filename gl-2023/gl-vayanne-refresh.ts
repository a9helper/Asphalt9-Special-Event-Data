import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 300,
  toolCars: [
    {
      car_id: 'artura',
      fullName: 'Mclaren Artura',
      nickName: 'Artura',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'evija',
      fullName: 'Lotus Evija',
      nickName: 'Evija',
      isKeyCar: false,
      rankLimits: [4118],
      star: 6,
    },
    {
      car_id: 'p72',
      fullName: 'De Tomaso P72🔑',
      nickName: 'P72',
      isKeyCar: true,
      rankLimits: [4410],
      star: 6,
    },
    {
      car_id: 'naran',
      fullName: 'Naran Hyper Coupe',
      nickName: '纳兰',
      isKeyCar: false,
      rankLimits: [4385],
      star: 6,
    },
    {
      car_id: 'torino',
      fullName: 'Torino Design Super Sport🔑',
      nickName: '都林',
      isKeyCar: true,
      rankLimits: [4585],
      star: 6,
    },
    {
      car_id: 'divo',
      fullName: 'Bugatti Divo',
      nickName: 'Divo',
      isKeyCar: false,
      rankLimits: [4630],
      star: 6,
    },
    {
      car_id: 'owl',
      fullName: 'Aspark Owl',
      nickName: '猫头鹰',
      isKeyCar: false,
      rankLimits: [4717],
      star: 6,
    },
    

    


    

    {
      car_id: 'vayanne',
      fullName: 'Deus Vayanne',
      nickName: 'Vayanne',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    
  ],
  processRewords: [
    
    { conditions: 25, reword: { type: 'seCard', count: 1 } },
    
    { conditions: 100, reword: { type: 'seCard', count: 1 } },
    { conditions: 150, reword: { type: 'seasonToken', count: 2000 } },
    
    { conditions: 250, reword: { type: 'seCard', count: 2 } },
    { conditions: 300, reword: { type: 'seCard', count: 2 } },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 400, reword: { type: 'sePart', count: 1 } },
    { conditions: 420, reword: { type: 'seSkin', count: 1 } },
    { conditions: 440, reword: { type: 'seKey', count: 1 } },
  ],
  notes: [
    "？",
  ],
  stages: [
    
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 300 },
            
            { type: 'seCard', count: 2 },
            
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 100000 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 150 },
            { type: 'seCard', count: 1 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
            
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 300 },
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 200000 },
            
            
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
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vayanne', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 80 },
            { type: 'seasonToken', count: 800 },
            { type: 'credit', count: 200000 },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 150000 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 225 },
            { type: 'seCard', count: 1 },
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
            
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 450 },
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 250000 },
            
            
          ],
        },
      ],
    },
    
    {
      stage: 5,
      unlockConditions: 65,
      clubRewords: [],
      missions: [
           
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 150000 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 225 },
            { type: 'seCard', count: 1 },
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
            
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'naran', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 450 },
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 250000 },
            
            
          ],
        },
      ],
    },
    
    {
      stage: 6,
      unlockConditions: 95,
      clubRewords: [],
      missions: [

        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vayanne', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'seasonToken', count: 1000 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    
    {
      stage: 7,
      unlockConditions: 120,
      clubRewords: [],
      missions: [
                
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 200000 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 300 },
            { type: 'seCard', count: 1 },
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 105 },
            { type: 'seCard', count: 2 },
            
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 600 },
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 375000 },
            
            
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 200000 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 300 },
            { type: 'seCard', count: 1 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 105 },
            { type: 'seCard', count: 1 },
            
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 600 },
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 375000 },
            
            
          ],
        },
      ],
    },
    
    {
      stage: 9,
      unlockConditions: 175,
      clubRewords: [],
      missions: [
   
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'owl', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'owl', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 200000 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'owl', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 300 },
            { type: 'seCard', count: 1 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'owl', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 105 },
            { type: 'seCard', count: 1 },
            
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'owl', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 600 },
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 375000 },
            
            
          ],
        },
      ],
    },
    
    {
      stage: 10,
      unlockConditions: 215,
      clubRewords: [],
      missions: [
        
       
        {
          conditions: 23,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vayanne', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 200 },
            { type: 'seasonToken', count: 1200 },
            { type: 'credit', count: 400000 },
          ],
        },
      ],
    },
    
    {
      stage: 11,
      unlockConditions: 250,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 375000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1200 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 12,
      unlockConditions: 250,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 15,
          join: {
            star: 6,
            rank: 4118,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1200 },
            { type: 'token', count: 120 },
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 13,
      unlockConditions: 250,
      clubRewords: [],
      missions: [
        
        {
          conditions: 16,
          join: {
            star: 6,
            rank: 4385,
          },
          toolCars: [
            { car_id: 'naran', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1500 },
            { type: 'token', count: 135 },
            { type: 'credit', count: 625000 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 14,
      unlockConditions: 250,
      clubRewords: [],
      missions: [
        
        {
          conditions: 18,
          join: {
            star: 6,
            rank: 4410,
          },
          toolCars: [
            { car_id: 'p72', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1500 },
            { type: 'token', count: 135 },
            { type: 'credit', count: 625000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 15,
      unlockConditions: 250,
      clubRewords: [],
      missions: [
             
        {
          conditions: 18,
          join: {
            star: 6,
            rank: 4585,
          },
          toolCars: [
            { car_id: 'torino', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 750000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 2 },
            
          ],
        },
      ],
    },

    
    
    
    
    {
      stage: 16,
      unlockConditions: 250,
      clubRewords: [],
      missions: [
             
        {
          conditions: 15,
          join: {
            star: 6,
            rank: 4630,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 750000 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    

    {
      stage: 17,
      unlockConditions:250,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 16,
          join: {
            star: 6,
            rank: 4717,
          },
          toolCars: [
            { car_id: 'owl', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 750000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions:400,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'token', count: 200 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seasonToken', count: 1500 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'token', count: 450 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'seasonToken', count: 3000 },
            { type: 'credit', count: 750000 },
            
          ],
        },
      ],
    },
  ],
}

export default template
