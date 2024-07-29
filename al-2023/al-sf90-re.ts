import { SED } from '../type.d.ts'

let a={
  coco:123,
  co:456
}

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 120,
  toolCars: [
    {
      car_id: 'roma',
      fullName: 'Ferrari Roma',
      nickName: 'Roma',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'monza',
      fullName: 'Ferrari Monza SP1',
      nickName: 'Monza',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'laferrari',
      fullName: 'Ferrari LaFerrari',
      nickName: '拉法',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'xxe',
      fullName: 'Ferrari 599XX EVO',
      nickName: 'XXE',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: '488evo',
      fullName: 'Ferrari 488 Challenge EVO',
      nickName: '488EVO',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'enzo',
      fullName: 'Ferrari Enzo',
      nickName: '恩佐',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'f8',
      fullName: 'Ferrari F8 Tributo',
      nickName: 'F8',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    
    {
      car_id: 'sf90',
      fullName: 'Ferrari SF90 Stradale',
      nickName: 'SF90',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 2 } },
    { conditions: 150, reword: { type: 'seCard', count: 3 } },
    { conditions: 200, reword: { type: 'sePart', count: 1 } },
    { conditions: 222, reword: { type: 'sePart', count: 1 } },
  ],
  notes: [
    

  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 50000 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 10,
      clubRewords: [
        { type: 'token', count: 50 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 50000 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
            
          ],
        },

      ],
    },
    
    {
      unlockConditions: 35,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'laferrari', freeTry: true }],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'seCard', count: 5 },
            { type: 'token', count: 100 },
            
          ],
        },
      ],
    },
    
    {
      unlockConditions: 45,
      clubRewords: [
        { type: 'credit', count: 50000 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 58,
      clubRewords: [
        { type: 'token', count: 50 },
        { type: 'seCard', count: 2 },
        
      ],
      missions: [

        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '488evo', freeTry: true }],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '488evo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '488evo', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '488evo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 70,
      clubRewords: [
        { type: 'credit', count: 50000 },
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 2 },
            { type: 'token', count: 100 },
            
          ],
        },

      ],
    },
    
    {
      unlockConditions: 85,
      clubRewords: [
        { type: 'credit', count: 50000 },
        { type: 'seCard', count: 2 },
        { type: 'token', count: 50 },
        
      ],
      missions: [

        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'enzo', freeTry: true }],
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
          toolCars: [{ car_id: 'enzo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 175000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'enzo', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'enzo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'enzo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 98,
      clubRewords: [
        { type: 'seCard', count: 2 },
      ],
      missions: [

        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 108,
      clubRewords: [
        { type: 'credit', count: 100000 },
        { type: 'seCard', count: 2 },
        { type: 'token', count: 75 },
        
      ],
      missions: [

        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 2 },
            
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '488evo', freeTry: true },
            { car_id: 'xxe', freeTry: true }
          ],
          rewords: [
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '488evo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 115,
      clubRewords: [
        { type: 'credit', count: 100000 },
        { type: 'seCard', count: 2 },
        { type: 'token', count: 150 },
        
      ],
      missions: [

        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
            { type: 'seCard', count: 9 },
            { type: 'sePart', count: 3 },
            { type: 'token', count: 225 },

          ],
        },
      ],
    },
    
    {
      unlockConditions: 120,
      clubRewords: [
        { type: 'sePart', count: 1 },
        { type: 'token', count: 88 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: false }],
          rewords: [
            { type: 'credit', count: 125000 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: false }],
          rewords: [
            { type: 'token', count: 264 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: false }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'sePart', count: 2 },

          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'token', count: 564 },

          ],
        },

      ],
    },
    
    
    {
      unlockConditions: 120,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
