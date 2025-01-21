import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 115,
  toolCars: [
    {
      car_id: 'vantage',
      fullName: 'Aston Martin Vantage V12 2022',
      nickName: 'Vantage',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'af8',
      fullName: 'Arash AF8 Falcon Edition🔑',
      nickName: 'AF8',
      isKeyCar: true,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: '296',
      fullName: 'Ferrari 296 GTB🔑',
      nickName: '296',
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
      car_id: 'atsgt',
      fullName: 'ATS Automobili GT',
      nickName: 'ATS GT',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 30, reword: { type: 'seCard', count: 1 }  },
    { conditions: 60, reword: { type: 'credit', count: 200000 }  },
    { conditions: 90, reword: { type: 'seCard', count: 2 }  },
    { conditions: 120, reword: { type: 'seCard', count: 2 }  },
    { conditions: 150, reword: { type: 'token', count: 300 }  },
    { conditions: 180, reword: { type: 'seCard', count: 5 }  },
    { conditions: 210, reword: { type: 'sePart', count: 1 }  },
    { conditions: 242, reword: { type: 'sePart', count: 2 }  },










    
  ],
  notes: [
    
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
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'atsgt', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vantage', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vantage', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
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
            { car_id: 'vantage', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vantage', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
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
            { car_id: 'vantage', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 25,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'af8', freeTry: true },
          ],
          rewords: [
            // { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'af8', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
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
            { car_id: 'af8', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'af8', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'atsgt', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 1 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '296', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '296', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
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
            { car_id: '296', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '296', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
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
            { car_id: '296', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 80,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '9x8', freeTry: true },
          ],
          rewords: [
            // { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '9x8', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
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
            { car_id: '9x8', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '9x8', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
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
            { car_id: '9x8', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 450 },
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: '9x8', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 100,
      clubRewords: [
        { type: 'token', count: 30 },
        
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'atsgt', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'atsgt', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 750000 },
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
            { car_id: 'atsgt', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 450 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'atsgt', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 1000000 },
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
            { car_id: 'atsgt', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 600 },
            { type: 'seCard', count: 5 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'atsgt', freeTry: true },
          ],
          rewords: [
            // { type: 'token', count: 600 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    
    
    
    {
      stage: 8,
      unlockConditions: 100,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'atsgt', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
