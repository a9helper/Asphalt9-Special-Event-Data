import { SED } from '../type.d.ts'

const template: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 110,
  toolCars: [
    {
      car_id: 'rrturbo',
      fullName: 'ATS Automobili Corsa RRTurbo🔑',
      nickName: 'RRTurbo',
      isKeyCar: true,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'nsxgt3',
      fullName: 'Acura NSX GT3 EVO🔑',
      nickName: 'NSX GT3',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
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
      car_id: 'mc12',
      fullName: 'Maserati MC12🔑',
      nickName: 'MC12',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'p900',
      fullName: 'De Tomaso P900',
      nickName: 'P900',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
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
      car_id: 'zgt4',
      fullName: 'Nissan Z GT4',
      nickName: 'Z GT4',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    }, 
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 2 } },
    { conditions: 50, reword: { type: 'seCard', count: 3 } },
    { conditions: 75, reword: { type: 'credit', count: 350000 } },
    { conditions: 100, reword: { type: 'seCard', count: 5 } },
    { conditions: 150, reword: { type: 'token', count: 300 } },
    { conditions: 200, reword: { type: 'sePart', count: 1 } },
    { conditions: 300, reword: { type: 'sePart', count: 1 } },
    { conditions: 315, reword: { type: 'seSkin', count: 1 } },



















    
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
            { car_id: 'zgt4', freeTry: true },
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
            { car_id: 'rrturbo', freeTry: true },
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
            { car_id: 'rrturbo', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
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
            { car_id: 'rrturbo', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'rrturbo', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 3 },
            
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 20,
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
            { car_id: 'nsxgt3', freeTry: true },
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
            { car_id: 'nsxgt3', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 140000 },
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
            { car_id: 'nsxgt3', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'nsxgt3', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 135000 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'nsxgt3', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
            
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 35,
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
            { car_id: 'clk', freeTry: true },
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
            { car_id: 'clk', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 160000 },
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
            { car_id: 'clk', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 125 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'clk', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
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
            { car_id: 'clk', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions:50,
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
            { car_id: 'zgt4', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 150 },
            
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 70,
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
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 180000 },
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
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 165000 },
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mc12', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 105 },
            
            
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 90,
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
            { car_id: 'p900', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p900', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
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
            { car_id: 'p900', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 175 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'p900', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 180000 },
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
            { car_id: 'p900', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'seCard', count: 2 },
            
            
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 110,
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
            { car_id: '296', freeTry: true },
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
            { car_id: '296', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 220000 },
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
            { car_id: '296', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '296', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 195000 },
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '296', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 135 },
            
            
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 125,
      clubRewords: [
        { type: 'token', count: 25 },
        
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zgt4', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zgt4', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
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
            { car_id: 'zgt4', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 300 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zgt4', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zgt4', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
            { type: 'token', count: 300 },
            
          ],
        }, 
        
        
        
      ],
    }, 
    
    
    
    {
      stage: 10,
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
          toolCars: [
            { car_id: 'zgt4', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
