import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 250,
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
      car_id: 'bt62',
      fullName: 'Brabham BT62🔑',
      nickName: 'BT62',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '9x8',
      fullName: 'Peugeot 9x8',
      nickName: '9x8',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'me412',
      fullName: 'Chrysler ME412',
      nickName: 'ME412',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'spano',
      fullName: 'Spania GTA 2015 GTA Spano',
      nickName: 'Spano',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'solus',
      fullName: 'McLaren Solus GT🔑',
      nickName: 'Solus',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },



    


    
    {
      car_id: 'saleens7',
      fullName: 'Saleen S7 Twin Turbo🔑',
      nickName: '萨林S7',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    
  ],
  processRewords: [
    
    { conditions: 30, reword: { type: 'seCard', count: 1 } },
    { conditions: 50, reword: { type: 'token', count: 100 } },
    { conditions: 80, reword: { type: 'seCard', count: 1 } },
    { conditions: 140, reword: { type: 'seCard', count: 1 } },
    { conditions: 170, reword: { type: 'credit', count: 60000 } },
    { conditions: 300, reword: { type: 'seCard', count: 2 } },
    { conditions: 410, reword: { type: 'sePart', count: 1 } },
    { conditions: 475, reword: { type: 'sePart', count: 1 } },
    { conditions: 490, reword: { type: 'seSkin', count: 1 } },
    { conditions: 515, reword: { type: 'seKey', count: 1 } },
  ],
  notes: [
    "A9玩家的至暗时刻",
  ],
  stages: [
    
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 60 },
            
          ],
        },
        {
          conditions: 14,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 150 },
            { type: 'credit', count: 150000 },
            { type: 'token', count: 30 },
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bt62', freeTry: true },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 150 },
            
          ],
        },
        
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 20000 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bt62', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
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
            { car_id: 'bt62', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 300 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 3,
      unlockConditions: 25,
      clubRewords: [],
      missions: [
        
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 45 },
            { type: 'seasonToken', count: 240 },
            { type: 'credit', count: 160000 },
          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 50,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '9x8', freeTry: false },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 150 },
            
          ],
        },
        
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 20000 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '9x8', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
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
            { car_id: '9x8', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 300 },
            { type: 'seCard', count: 2 },
            
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'me412', freeTry: false },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 210 },
            
          ],
        },
        
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 40000 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'me412', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 60 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'me412', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 300 },
            { type: 'seCard', count: 3 },
            
          ],
        },
      ],
    },
    
    {
      stage: 6,
      unlockConditions: 100,
      clubRewords: [],
      missions: [

        
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            
            
            { type: 'token', count: 75 },
            { type: 'seasonToken', count: 320 },
            { type: 'credit', count: 240000 },
          ],
        },
      ],
    },
    
    {
      stage: 7,
      unlockConditions: 135,
      clubRewords: [],
      missions: [
                
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 210 },
            
          ],
        },
        
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 40000 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 60 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 525 },
            { type: 'seCard', count: 3 },
            
          ],
        },
      ],
    },
    
    {
      stage: 8,
      unlockConditions: 165,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'solus', freeTry: true },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 210 },
            
          ],
        },
        
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 40000 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'solus', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 60 },
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
            { car_id: 'solus', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 525 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    
    {
      stage: 9,
      unlockConditions: 190,
      clubRewords: [],
      missions: [

        
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            
            
            { type: 'token', count: 45 },
            { type: 'seasonToken', count: 400 },
            { type: 'credit', count: 320000 },
          ],
        },
      ],
    },
    
    {
      stage: 10,
      unlockConditions: 225,
      clubRewords: [],
      missions: [
        
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 240 },
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 600 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 11,
      unlockConditions: 260,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bt62', freeTry: true },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 375 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'token', count: 60 },
            
          ],
        },
        {
          conditions: 12,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bt62', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 90 },
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bt62', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 900 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 12,
      unlockConditions: 285,
      clubRewords: [],
      missions: [
      
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'solus', freeTry: true },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 375 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'token', count: 60 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'solus', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'solus', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 900 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 13,
      unlockConditions: 325,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '9x8', freeTry: false },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 375 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
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
            { car_id: '9x8', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '9x8', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 600000 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: '9x8', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 900 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 14,
      unlockConditions: 355,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'me412', freeTry: false },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 600 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'me412', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'me412', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 600000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'me412', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1200 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 15,
      unlockConditions: 390,
      clubRewords: [],
      missions: [
        
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 600 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr-15', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 600000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'spano', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 1200 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },

    
    
    
    
    {
      stage: 16,
      unlockConditions: 460,
      clubRewords: [],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
            { car_id: 'xjr-15', freeTry: false },
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
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [
            { type: 'credit', count: 15000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            
            { type: 'credit', count: 150000 },
            { type: 'token', count: 20 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 300000 },
            { type: 'seasonToken', count: 1200 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 600000 },
            { type: 'token', count: 600 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 1200000 },
            { type: 'seasonToken', count: 3000 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    

    {
      stage: 17,
      unlockConditions:460,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
