import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: "davinci",
      fullName: "Italdesign Davinci",
      nickName: "达芬奇",
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: "220",
      fullName: "Lotus Elise Sprint 220",
      nickName: "小莲花",
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: "panamera",
      fullName: "Porsche Panamera Turbo S🔑",
      nickName: "帕拉梅拉",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "33",
      fullName: "Arrinera Hussarya 33",
      nickName: "33",
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "600lt",
      fullName: "McLaren 600LT Spider",
      nickName: "600lt",
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "cgs",
      fullName: "Chevrolet Corvette Grand Sport",
      nickName: "五菱",
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "imola",
      fullName: "Pagani Imola",
      nickName: "伊莫拉",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: "laferrari",
      fullName: "Ferrari LaFerrari",
      nickName: "拉法",
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },


    {
      car_id: "agerars",
      fullName: "Koenigsegg Agera RS",
      nickName: "Agera RS",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    
    { conditions: 10, reword: { type: 'credit', count: 50000 } },
    { conditions: 25, reword: { type: 'seasonToken', count: 2000 } },
    { conditions: 50, reword: { type: 'seCard', count: 2 } },
    { conditions: 75, reword: { type: 'seCard', count: 3 } },

    { conditions: 100, reword: { type: 'seCard', count: 3 } },
    { conditions: 120, reword: { type: 'sePart', count: 1 } },
    { conditions: 150, reword: { type: 'sePart', count: 1 } },
    { conditions: 175, reword: { type: 'sePart', count: 1 } },
    
    
  ],
  notes: [
    "需要解锁 Imola 车辆后才能抽包"
    
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'agerars', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 50 },
            { type: 'seasonToken', count: 2250 },
            
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
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'davinci', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 225000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '220', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 225000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'davinci', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '220', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'davinci', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 3750 },
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '220', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 75 },
            
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'davinci', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '220', freeTry: false },
          ],
          rewords: [
            
            
            
          ],
        },
        
      ],
    },
    
    {
      stage: 3,
      unlockConditions: 30,
      
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
       
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 225000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '33', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 225000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '33', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 3750 },
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '33', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 75 },
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '33', freeTry: false },
          ],
          rewords: [
            
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '33', freeTry: false },
          ],
          rewords: [
            
            
            
          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 50,
      
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
            { car_id: 'agerars', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 30 },
            { type: 'seasonToken', count: 3000 },
            
          ],
        },
      ],
    },
    
    {
      stage: 5,
      unlockConditions: 75,
      
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cgs', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cgs', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 4500 },
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cgs', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 90 },
            
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
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
            { car_id: 'cgs', freeTry: false },
          ],
          rewords: [
            
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'cgs', freeTry: false },
          ],
          rewords: [
            
            
            
          ],
        },
      ],
    },
    
    {
      stage: 6,
      unlockConditions: 90,
      
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [

        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'laferrari', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'laferrari', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: false },
          ],
          rewords: [
            { type: 'seasonToken', count: 4500 },
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'laferrari', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 90 },
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: false },
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
            { car_id: 'laferrari', freeTry: false },
          ],
          rewords: [
            
            
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: false },
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
            { car_id: 'laferrari', freeTry: false },
          ],
          rewords: [
            
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'imola', freeTry: false },
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
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'agerars', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'agerars', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seasonToken', count: 4500 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'agerars', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 1500000 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'agerars', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'agerars', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'agerars', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
            
          ],
        },
      ],
    },
    
    
    
    
    
    
    {
      stage: 8,
      unlockConditions:115,
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
            { car_id: 'agerars', freeTry: false },
          ],
          rewords: [
          ],
        },
        
      ],
    },
    
  ],
}

export default template
