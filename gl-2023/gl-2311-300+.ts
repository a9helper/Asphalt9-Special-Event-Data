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
      car_id: 'vulcan',
      fullName: 'Aston Martin Vulcan',
      nickName: '火神',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'gtr',
      fullName: 'Nissan GT-R Nismo',
      nickName: 'GTR',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'j50',
      fullName: 'Ferrari J50',
      nickName: 'J50',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'centenario',
      fullName: 'Lamborghini Centenario',
      nickName: '百年牛',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'fxxk',
      fullName: 'Ferrari FXX K',
      nickName: 'FXXK',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'lykan',
      fullName: 'W Motors Lykan HyperSport',
      nickName: '狼崽',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
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
      car_id: 'xjr',
      fullName: 'Jaguar XJR-9🔑',
      nickName: 'XJR',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'c1',
      fullName: 'Rimac Concept_One',
      nickName: 'C_One',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'lpi800',
      fullName: 'Lamborghini Countach LPI 800-4🔑',
      nickName: '新康塔什',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'c2',
      fullName: 'Rimac Nevera🔑',
      nickName: 'C2',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'ccxr',
      fullName: 'Koenigsegg CCXR🔑',
      nickName: 'CCXR',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },



    {
      car_id: '300+',
      fullName: 'Bugatti Chiron Super Sport 300+',
      nickName: '300+',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    
    
    { conditions: 60, reword: { type: 'seCard', count: 1 } },
    { conditions: 180, reword: { type: 'seCard', count: 1 } },
    { conditions: 240, reword: { type: 'seCard', count: 1 } },
    { conditions: 280, reword: { type: 'sePart', count: 1 } },
    { conditions: 300, reword: { type: 'sePart', count: 2 } },
    { conditions: 340, reword: { type: 'sePart', count: 2 } },
    { conditions: 350, reword: { type: 'seSkin', count: 1 } },
    { conditions: 375, reword: { type: 'seKey', count: 1 } },


    
  ],
  notes: [
    "阶段4没有2星C_One限制，有点怪怪。"
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
            { car_id: 'at96', freeTry: true },
            { car_id: 'vulcan', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1200 },
            
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 150000 },
            
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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
            { car_id: 'gtr', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1200 },
            
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 150000 },
            
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
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '300+', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 45 },
            { type: 'credit', count: 200000 },
            { type: 'seasonToken', count: 1600 },
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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
            { car_id: 'j50', freeTry: false },
          ],
          rewords: [
            
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
          ],
          rewords: [
            
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 200000 },
            { type: 'seasonToken', count: 1400 },
          ],
        },
      ],
    },
    
    {
      stage: 5,
      unlockConditions: 55,
      clubRewords: [],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
            { car_id: 'centenario', freeTry: false },
          ],
          rewords: [
            
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 200000 },
            { type: 'seasonToken', count: 1400 },
          ],
        },
      ],
    },
    
    {
      stage: 6,
      unlockConditions: 75,
      clubRewords: [],
      missions: [

        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '300+', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 45 },
            { type: 'credit', count: 200000 },
            { type: 'seasonToken', count: 1800 },
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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
            { car_id: 'fxxk', freeTry: false },
          ],
          rewords: [
            
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
          ],
          rewords: [
            
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 250000 },
            { type: 'seasonToken', count: 1600 },
          ],
        },
      ],
    },
    
    {
      stage: 8,
      unlockConditions: 130,
      clubRewords: [],
      missions: [
              
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
            { car_id: 'lykan', freeTry: false },
          ],
          rewords: [
            
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 250000 },
            { type: 'seasonToken', count: 1600 },
          ],
        },
      ],
    },
    
    {
      stage: 9,
      unlockConditions: 150,
      clubRewords: [],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '300+', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 45 },
            { type: 'credit', count: 200000 },
            { type: 'seasonToken', count: 2000 },
          ],
        },
      ],
    },
    
    {
      stage: 10,
      unlockConditions: 170,
      clubRewords: [],
      missions: [
        
       
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
            { car_id: 'vulcan', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'credit', count: 500000 },
            
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
            { car_id: 'vulcan', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 2600 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'at96', freeTry: true },
          ],
          rewords: [
            
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 11,
      unlockConditions: 190,
      clubRewords: [],
      missions: [
        
        
             
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
            { car_id: 'gtr', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'credit', count: 500000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
            { car_id: 'gtr', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 2600 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
          ],
          rewords: [
            
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 12,
      unlockConditions: 215,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
            { car_id: 'j50', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'credit', count: 750000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
            { car_id: 'j50', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 4000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
          ],
          rewords: [
            
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 13,
      unlockConditions: 235,
      clubRewords: [],
      missions: [
      
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
            { car_id: 'centenario', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'credit', count: 750000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
            { car_id: 'centenario', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 4000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    
    {
      stage: 14,
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
            { car_id: 'c2', freeTry: true },
            { car_id: 'fxxk', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'credit', count: 1250000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
            { car_id: 'fxxk', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 5000 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: true },
          ],
          rewords: [
            
            { type: 'seCard', count: 6 },
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
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
            { car_id: 'lykan', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'credit', count: 1250000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
            { car_id: 'lykan', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 5000 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },

    
    
    
    
    {
      stage: 16,
      unlockConditions: 310,
      clubRewords: [],
      missions: [
          
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '300+', freeTry: true },
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
            { car_id: '300+', freeTry: true },
          ],
          rewords: [
            
            { type: 'credit', count: 750000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '300+', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '300+', freeTry: true },
          ],
          rewords: [
            
            { type: 'credit', count: 1500000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '300+', freeTry: true },
          ],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: '300+', freeTry: true },
          ],
          rewords: [
            
            { type: 'sePart', count: 2 },
            { type: 'seasonToken', count: 8000 },
          ],
        },
        
      ],
    },
    

    
  ],
}

export default template
