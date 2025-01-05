import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 120,
  toolCars: [
    {
      car_id: 'ass',
      fullName: 'Artega Scalo SuperErelletra',
      nickName: 'Artega',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'davinci',
      fullName: 'Italdesign Davinci',
      nickName: '达芬奇',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'clk',
      fullName: 'Mercedes-Benz CLK-GTR',
      nickName: 'CLK',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'sto',
      fullName: 'Lamborghini Huracan STO',
      nickName: 'STO',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },




    {
      car_id: 'speirling',
      fullName: 'Mcmurtry Speirling',
      nickName: 'Speirling',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'seCard', count: 2 }  },
    { conditions: 50, reword: { type: 'seCard', count: 3 }  },
    { conditions: 75, reword: { type: 'credit', count: 250000 }  },
    { conditions: 100, reword: { type: 'seCard', count: 5 }  },
    { conditions: 150, reword: { type: 'seCard', count: 5 }  },
    { conditions: 175, reword: { type: 'sePart', count: 1 }  },
    { conditions: 215, reword: { type: 'token', count: 250 }  },
    { conditions: 244, reword: { type: 'sePart', count: 2 }  },












    
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'speirling', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'credit', count: 125000 },
          ],
        },
        
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ass', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ass', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 75 },
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
            { car_id: 'ass', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 160000 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ass', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 80 },
            { type: 'seCard', count: 6 },
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
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 15,
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
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'davinci', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'davinci', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 220000 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'davinci', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 50,
      clubRewords: [
        { type: 'token', count: 30 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'speirling', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 70,
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
            { car_id: 'clk', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 125 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'clk', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'clk', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 120 },
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
            { car_id: 'clk', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'clk', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 105 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 25000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sto', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sto', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 175 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sto', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 340000 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sto', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 160 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 120,
      clubRewords: [
        { type: 'token', count: 30 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'speirling', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'speirling', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 250 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'speirling', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'speirling', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'speirling', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    
    
    
    {
      stage: 8,
      unlockConditions: 150,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'speirling', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
