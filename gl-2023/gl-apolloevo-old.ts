import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 325,
  toolCars: [
    {
      car_id: 'miura',
      fullName: 'Lamborghini Miura Concept',
      nickName: 'Miura',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'miura',
      fullName: 'Lamborghini Miura Concept',
      nickName: 'Miura',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    



    {
      car_id: 'apolloevo',
      fullName: 'Apollo EVO',
      nickName: '菠萝EVO',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 60, reword: { type: 'seCard', count: 1 } },
    { conditions: 140, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 1 } },
    { conditions: 240, reword: { type: 'seCard', count: 1 } },
    { conditions: 300, reword: { type: 'seCard', count: 1 } },

    { conditions: 330, reword: { type: 'sePart', count: 1 } },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },

    { conditions: 400, reword: { type: 'seSkin', count: 1 } },
    { conditions: 420, reword: { type: 'seKey', count: 1 } },
  ],
  notes: [
    "总图纸确实是86张。",
    "Victor至少需要4金卡。",
    "Jesko 无金卡4618分。"
  ],
  stages: [
    
    {
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtx', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 195000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 120 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },

    
    {
      unlockConditions: 5,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [

        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtx', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 120 },
            { type: 'credit', count: 195000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 10,
      clubRewords: [
        { type: 'token', count: 15 },
      ],
      missions: [
        
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 150 },
            { type: 'credit', count: 225000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtx', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 195000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 120 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtx', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 195000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 120 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 70,
      clubRewords: [
        { type: 'token', count: 20 },
      ],
      missions: [
        
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 150 },
            { type: 'credit', count: 225000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 100,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'jesko', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtx', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'jesko', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'jesko', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'jesko', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 195000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'jesko', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 120 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
              
        {
          conditions: 8,
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
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtx', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
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
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 120000 },
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
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 195000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 120 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 175,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtx', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 120 },
            { type: 'credit', count: 195000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 205,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ccxr', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 150 },
            { type: 'credit', count: 225000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 220,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 16,
          join: {
            star: 5,
            rank: 3526,
          },
          toolCars: [
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 400 },
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 235,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 5,
            rank: 3844,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 400 },
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 250,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 6,
            rank: 3946,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            
            { type: 'token', count: 400 },
            { type: 'credit', count: 450000 },
            { type: 'seCard', count: 10 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 265,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 6,
            rank: 4071,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
          ],
          rewords: [
            
            { type: 'token', count: 400 },
            { type: 'credit', count: 450000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 280,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 6,
            rank: 4357,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 400 },
            { type: 'credit', count: 420000 },
            { type: 'seCard', count: 10 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 300,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 6,
            rank: 4585,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            
            { type: 'token', count: 400 },
            { type: 'credit', count: 525000 },
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 315,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 6,
            rank: 4630,
          },
          toolCars: [
            { car_id: 'jesko', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 400 },
            { type: 'credit', count: 525000 },
            { type: 'seCard', count: 7 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 330,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 300000 },
            { type: 'token', count: 280 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 450000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 2 },
            { type: 'credit', count: 750000 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 1200000 },
            { type: 'token', count: 750 },
            
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    

    {
      unlockConditions:350,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ccxr', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
