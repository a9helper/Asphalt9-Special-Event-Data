import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 190,
  toolCars: [
    {
      car_id: 'xxe',
      fullName: 'Ferrari 599XX EVO',
      nickName: 'XXE',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'f50',
      fullName: 'Ferrari F50',
      nickName: 'F50',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    
    {
      car_id: '911tg2',
      fullName: 'Porsche 911 GT2 RS Clubsport',
      nickName: '911GT2',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'mbbs',
      fullName: 'Mercedes-Benz Mercedes-AMG GT Black Series',
      nickName: 'AMG BS',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'diablo',
      fullName: 'Lamborghini Diablo GT',
      nickName: 'Diablo',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: '600lt',
      fullName: 'Mclaren 600LT Spider',
      nickName: '600LT',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'xj220',
      fullName: 'Jaguar XJ220S TWR',
      nickName: 'XJ220S',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    
    

    {
      car_id: 'torino',
      fullName: 'Torino Design Super Sport',
      nickName: 'Torino',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 1 } },
    { conditions: 250, reword: { type: 'seCard', count: 1 } },
    { conditions: 300, reword: { type: 'sePart', count: 1 } },
    { conditions: 400, reword: { type: 'sePart', count: 1 } },
    { conditions: 450, reword: { type: 'seSkin', count: 1 } },
    { conditions: 500, reword: { type: 'seKey', count: 1 } },
  ],
  notes: [
    "想要进入阶段 11 ，需要 3 星 Diablo 。",
    "想要进入阶段 13 ，需要满星 F50 。",
    "想要进入阶段 14 ，需要 5 星 911GT2 。",
    "想要进入阶段 15 ，需要满星 AMG BS 。",
    "后面的更难，不再赘述~"
  ],
  stages: [
    
    {
      unlockConditions: 0,
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
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'token', count: 25 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },

    
    {
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 25,
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
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 90 },
            { type: 'credit', count: 150000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 35,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911tg2', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '911tg2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '911tg2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 100 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 85,
      clubRewords: [
        { type: 'token', count: 20 },
      ],
      missions: [
        
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 200000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 105,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
                
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 125,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
              
        {
          conditions:16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 375000 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 100 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 155,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 180,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 200000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 215,
      clubRewords: [
        { type: 'credit', count: 20000 },
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

          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xxe', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 240,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 270,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911tg2', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '911tg2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '911tg2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 3500000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '911tg2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 750000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 340,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 370,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 750000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '600lt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 410,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 440,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 300000 },
            { type: 'token', count: 175 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 500000 },
            { type: 'token', count: 250 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 750000 },
            { type: 'token', count: 375 },
            { type: 'sePart', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 1500000 },
            
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    

    {
      unlockConditions:450,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
