import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 135,
  toolCars: [
    {
      car_id: 'motion',
      fullName: 'Kepler Motion',
      nickName: '开普勒',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'continentalgt',
      fullName: 'Bentley Continental GT Speed',
      nickName: '欧陆GT',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'tsr-s',
      fullName: 'Zenvo TSR-S',
      nickName: '摇摆燃',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: '911gt3',
      fullName: 'Porsche 911 GT3 RS',
      nickName: '绿蛙',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'sc18',
      fullName: 'Lamborghini SC18',
      nickName: 'SC18',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: '718gt4',
      fullName: 'Porsche 718 Cayman GT4 Clubsport', 
      nickName: '718GT4',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'sorpasso',
      fullName: 'FV Frangivento Sorpasso GT3',
      nickName: 'FV',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },

    {
      car_id: 'xjr',
      fullName: 'Jaguar XJR-9',
      nickName: 'XJR',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 100, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 1 } },
    { conditions: 300, reword: { type: 'seCard', count: 1 } },
    { conditions: 340, reword: { type: 'seCard', count: 1 } },

    { conditions: 380, reword: { type: 'sePart', count: 1 } },
    { conditions: 400, reword: { type: 'sePart', count: 1 } },
    { conditions: 420, reword: { type: 'seSkin', count: 1 } },
    { conditions: 460, reword: { type: 'seKey', count: 1 } },
  ],
  notes: [
    "注意当拥有2星开普勒+1星FV时，最多达到199条件，未能进入阶段12。",
  ],
  stages: [
    
    {
      unlockConditions: 0,
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
          toolCars: [
            { car_id: 'continentalgt', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'motion', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'continentalgt', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 45 },
            { type: 'seCard', count: 2 },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
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
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xjr', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 120000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 25,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tsr-s', freeTry: true },
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
            { car_id: 'motion', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tsr-s', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'tsr-s', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 45 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 45,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '911gt3', freeTry: false },
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
            { car_id: 'motion', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '911gt3', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '911gt3', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 45 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 60,
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
          toolCars: [
            { car_id: 'xjr', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 120000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 80,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc18', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 20 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'motion', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc18', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sc18', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 45 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
              
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '718gt4', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 20 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'motion', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '718gt4', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '718gt4', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 45 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 20 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'motion', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 20 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sorpasso', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 200000 },
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
            { type: 'seCard', count: 2 },
            { type: 'token', count: 45 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 140,
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
          toolCars: [
            { car_id: 'xjr', freeTry: true },
          ],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 120000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 175,
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
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
                
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 230,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 350000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '718gt4', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 260,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
                
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 350000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 290,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 400000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 2 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 320,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 40 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 400000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 180 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 360,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'motion', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 40 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 400000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'sorpasso', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 2 },
            { type: 'token', count: 180 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 400,
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
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
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
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 200000 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 900000 },
            { type: 'token', count: 375 },
            
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    

    {
      unlockConditions:400,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
