import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 185,
  toolCars: [
    {
      car_id: 'sesto',
      fullName: 'Lamborghini Sesto Elemento',
      nickName: '第六元素',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sc20',
      fullName: 'Lamborghini SC20🔑',
      nickName: 'SC20',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'saleens7',
      fullName: 'Saleen S7 Twin Turbo🔑',
      nickName: '萨林S7',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'divo',
      fullName: 'Bugatti Divo',
      nickName: 'Divo',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'evo37',
      fullName: 'Kimera EVO37🔑',
      nickName: 'EVO37',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },




    {
      car_id: 'htt',
      fullName: 'HTT Locus Plethore LC750',
      nickName: 'HTT',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 2 }  },
    { conditions: 50, reword: { type: 'seCard', count: 3 }  },
    { conditions: 75, reword: { type: 'credit', count: 350000 }  },
    { conditions: 100, reword: { type: 'seCard', count: 5 }  },
    { conditions: 200, reword: { type: 'seCard', count: 5 }  },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 300, reword: { type: 'token', count: 250 }  },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 469, reword: { type: 'sePart', count: 1 } },















    
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'token', count: 75 },
          ],
        },
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'credit', count: 140000 },
            { type: 'seCard', count: 2 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 160000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 45,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'credit', count: 180000 },
            { type: 'seCard', count: 2 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 60,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 125 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 75,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 2 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo37', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo37', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 220000 },
            { type: 'seCard', count: 2 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo37', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 100,
      clubRewords: [
        { type: 'token', count: 25 },
        
        
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 175 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 120,
      clubRewords: [
        { type: 'credit', count: 50000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 175 },
            { type: 'credit', count: 250000 },
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
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 210000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sesto', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 50000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'credit', count: 275000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc20', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 165 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 165,
      clubRewords: [
        { type: 'credit', count: 50000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'saleens7', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        


        
      ],
    },
    {
      stage: 12,
      unlockConditions: 180,
      clubRewords: [
        
        { type: 'token', count: 30 },
        
        
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 325000 },
            { type: 'token', count: 250 },
            { type: 'seCard', count: 2 },
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 50000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
            { type: 'credit', count: 325000 },
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
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 2550000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'divo', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 195 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 215,
      clubRewords: [
        { type: 'credit', count: 50000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo37', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo37', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 275 },
            { type: 'credit', count: 350000 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo37', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 2100000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo37', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 210 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 230,
      clubRewords: [
        { type: 'token', count: 50 },
        
        
      ],
      missions: [
        
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 250 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 400000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 400 },
          ],
        },
        
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'htt', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 450 },
            { type: 'sePart', count: 3 },
          ],
        },
        
      ],
    },
    
    
    
    {
      stage: 16,
      unlockConditions: 250,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
