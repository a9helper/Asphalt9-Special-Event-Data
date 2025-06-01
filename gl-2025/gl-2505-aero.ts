import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 174,
  toolCars: [
    {
      car_id: 'mc20',
      fullName: 'Maserati MC20',
      nickName: 'MC20',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'eb110',
      fullName: 'Bugatti EB110🔑',
      nickName: 'EB110',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '600lt',
      fullName: 'McLaren 600LT Spider',
      nickName: '600lt',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'zondar',
      fullName: 'Pagani Zonda R🔑',
      nickName: '风之子',
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
      car_id: 'sorpasso',
      fullName: 'FV Frangivento Sorpasso GT3🔑',
      nickName: 'Sorpasso',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    









    {
      car_id: 'bev',
      fullName: 'Lexus BEV Sport Concept',
      nickName: 'BEV',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 2 } },
    { conditions: 50, reword: { type: 'seCard', count: 3 } },
    { conditions: 75, reword: { type: 'credit', count: 300000 } },
    { conditions: 100, reword: { type: 'seCard', count: 5 } },
    { conditions: 200, reword: { type: 'token', count: 250 } },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 325, reword: { type: 'sePart', count: 1 } },
    { conditions: 345, reword: { type: 'seSkin', count: 1 } },















    
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
            { car_id: 'bev', freeTry: true },
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
        { type: 'credit', count: 15000 },
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc20', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc20', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc20', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
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
            { car_id: 'mc20', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 4 }, 
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc20', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 100 }, 
            { type: 'sePart', count: 1 }, 
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 4 }, 
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'eb110', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 105 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 45,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 125 }, 
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 350000 },
            { type: 'seCard', count: 4 }, 
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '600lt', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'sePart', count: 1 }, 
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
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bev', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
            
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 75,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zondar', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zondar', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zondar', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zondar', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 }, 
            { type: 'seCard', count: 3 }, 
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zondar', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 320000 },
            { type: 'seCard', count: 4 }, 
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zondar', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 135 },
            { type: 'sePart', count: 1 }, 
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 100,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 225000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 105 }, 
            { type: 'seCard', count: 3 }, 
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 340000 },
            { type: 'seCard', count: 4 }, 
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c1', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'sePart', count: 1 }, 
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 125,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 120 }, 
            { type: 'seCard', count: 3 }, 
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 360000 },
            { type: 'seCard', count: 6 }, 
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 165 },
            { type: 'sePart', count: 1 }, 
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 150,
      clubRewords: [
        { type: 'token', count: 45 },
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bev', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 625000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bev', freeTry: false },
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
            { car_id: 'bev', freeTry: false },
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
            { car_id: 'bev', freeTry: false },
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
            { car_id: 'bev', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 450000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bev', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
            { type: 'token', count: 450 },
            
          ],
        },
        
        
        
      ],
    }, 
    
    
    
    {
      stage: 10,
      unlockConditions: 175,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bev', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
