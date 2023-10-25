import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 200,
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
      car_id: 'mclarengt',
      fullName: 'McLaren GT',
      nickName: '迈凯伦GT',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '488gtbevo',
      fullName: 'Ferrari 488 GTB Challenge EVO🔑',
      nickName: '488 EVO',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sorpasso',
      fullName: 'FV Frangivento Sorpasso GT3🔑',
      nickName: 'Sorpasso',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'senna',
      fullName: 'McLaren Senna',
      nickName: 'Senna',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'veyron',
      fullName: 'Bugatti Veyron 16.4 Grand Sport Vitesse',
      nickName: '威龙',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '1789',
      fullName: 'Vision 1789',
      nickName: '1789',
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
  ],
  processRewords: [
    
    { conditions: 10, reword: { type: 'seasonToken', count: 500 } },
    { conditions: 25, reword: { type: 'credit', count: 30000 } },
    
    { conditions: 60, reword: { type: 'seCard', count: 1 } },
    { conditions: 90, reword: { type: 'token', count: 30 } },
    { conditions: 120, reword: { type: 'seCard', count: 1 } },
    { conditions: 150, reword: { type: 'seasonToken', count: 750 } },
    { conditions: 180, reword: { type: 'seCard', count: 2 } },
    { conditions: 225, reword: { type: 'credit', count: 50000 } },
    { conditions: 250, reword: { type: 'seasonToken', count: 1000 } },
    { conditions: 275, reword: { type: 'seCard', count: 2 } },
    { conditions: 300, reword: { type: 'token', count: 100 } },
    { conditions: 330, reword: { type: 'seasonToken', count: 1875 } },
    { conditions: 375, reword: { type: 'seCard', count: 3 } },
    { conditions: 425, reword: { type: 'sePart', count: 1 } },
    { conditions: 472, reword: { type: 'sePart', count: 2 } },
    { conditions: 472, reword: { type: 'seSkin', count: 1 } },
    
  ],
  notes: [
    "蓝币给的有点少。"
  ],
  stages: [
    
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 15000 },
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 750 },
            
            { type: 'seCard', count: 3 },
            { type: 'token', count: 20 },
            { type: 'credit', count: 60000 },
            
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: false },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 21000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 20 },
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
            { car_id: 'mclarengt', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 750 },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 30 },
            { type: 'credit', count: 160000 },
          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '488gtbevo', freeTry: true },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 30000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '488gtbevo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 30 },
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
            { car_id: '488gtbevo', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 900 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 5,
      unlockConditions: 45,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 36000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 165000 },
            { type: 'token', count: 30 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 900 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 6,
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
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 45 },
            { type: 'credit', count: 240000 },
          ],
        },
      ],
    },
    
    {
      stage: 7,
      unlockConditions: 85,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'senna', freeTry: false },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 45000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'senna', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 180000 },
            { type: 'token', count: 30 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'senna', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1275 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 8,
      unlockConditions: 100,
      clubRewords: [],
      missions: [
                     
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 54000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 195000 },
            { type: 'token', count: 30 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1350 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 9,
      unlockConditions: 120,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 60000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 210000 },
            { type: 'token', count: 30 },
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
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1425 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 10,
      unlockConditions: 140,
      clubRewords: [],
      missions: [
        
       
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cs', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 60 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    
    {
      stage: 11,
      unlockConditions: 160,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
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
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1100 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 45 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 12,
      unlockConditions: 190,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: false },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
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
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 45 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mclarengt', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1100 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 13,
      unlockConditions: 220,
      clubRewords: [],
      missions: [
        
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '488gtbevo', freeTry: true },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
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
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '488gtbevo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 160000 },
            { type: 'token', count: 30 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '488gtbevo', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1300 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: '488gtbevo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 4 },
            { type: 'token', count: 60 },
            { type: 'sePart', count: 1 },
            
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
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
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 160000 },
            { type: 'token', count: 30 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1400 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 240000 },
            { type: 'seCard', count: 4 },
            { type: 'token', count: 60 },
            { type: 'sePart', count: 1 },
            
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
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
            { type: 'credit', count: 175000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 255000 },
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 2400 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: '1789', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 390000 },
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },

    
    
    
    
    {
      stage: 16,
      unlockConditions: 330,
      clubRewords: [],
      missions: [
          
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'senna', freeTry: false },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
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
            { type: 'credit', count: 175000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'senna', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 255000 },
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'senna', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 2475 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'senna', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 420000 },
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    

    {
      stage: 17,
      unlockConditions:370,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
            { car_id: 'artura', freeTry: false },
          ],
          rewords: [
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
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 255000 },
            { type: 'token', count: 45 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 2550 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 12,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'token', count: 120 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 2 },
            
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: true }],
          rewords: [
            { type: 'credit', count: 280000 },
            { type: 'token', count: 60 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 1200 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: true }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 80 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 2000 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'cs', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 100 },
            { type: 'credit', count: 1000000 },
            
          ],
        },
      ],
    },
  ],
}

export default template
