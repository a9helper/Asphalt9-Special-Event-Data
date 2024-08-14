import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'vulcan',
      fullName: 'Aston Martin Vulcan',
      nickName: '火神',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'gtr',
      fullName: 'Nissan GT-R Nismo',
      nickName: 'GTR',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'j50',
      fullName: 'Ferrari J50',
      nickName: 'J50',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'vulcano',
      fullName: 'Icona Vulcano Titanium',
      nickName: '火山',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'lykan',
      fullName: 'W Motors Lykan HyperSport',
      nickName: '狼崽',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },

    {
      car_id: 'f1',
      fullName: 'Mclaren F1 LM🔑',
      nickName: 'F1',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'apolloevo',
      fullName: 'Apollo EVO',
      nickName: '菠萝EVO',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'm600',
      fullName: 'Noble M600 Speedster',
      nickName: 'M600',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'asfane',
      fullName: 'FV Frangivento Asfane🔑',
      nickName: 'Asfane',
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
      car_id: 'pursport',
      fullName: 'Bugatti Chiron Pur Sport',
      nickName: 'PS龙',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 30, reword: { type: 'seCard', count: 2 }  },
    { conditions: 75, reword: { type: 'seCard', count: 2 }  },
    { conditions: 175, reword: { type: 'token', count: 50 }  },
    { conditions: 200, reword: { type: 'credit', count: 100000 } },
    { conditions: 250, reword: { type: 'seCard', count: 3 }  },
    { conditions: 300, reword: { type: 'sePart', count: 1 } },
    { conditions: 350, reword: { type: 'credit', count: 200000 } },
    { conditions: 400, reword: { type: 'sePart', count: 2 } },
    { conditions: 450, reword: { type: 'seCard', count: 8 }  },
    { conditions: 475, reword: { type: 'token', count: 250 }  },
    { conditions: 490, reword: { type: 'sePart', count: 2 } },
    { conditions: 491, reword: { type: 'seSkin', count: 1 } },





    
    
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 2 },
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
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 25,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 45,
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
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 70,
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
          toolCars: [{ car_id: 'ep9', freeTry: false }],
          rewords: [
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ep9', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 100,
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
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 150 },
            
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 125,
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
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 240000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 150,
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
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 175,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        {
          conditions: 8,
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
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: false }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 2 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 200,
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
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 150 },
            
          ],
        },
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 225,
      clubRewords: [
        { type: 'credit', count: 25000 },
        
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
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'continentalgt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'credit', count: 300000 },
            { type: 'sePart', count: 1 },
          
            
          ],
        },


        
      ],
    },
    {
      stage: 12,
      unlockConditions: 250,
      clubRewords: [
        { type: 'token', count: 50 },
        
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ep9', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ep9', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ep9', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 300000 },
            { type: 'sePart', count: 1 },
          
            
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 275,
      clubRewords: [
        { type: 'credit', count: 25000 },
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 200000 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 300000 },
            { type: 'sePart', count: 1 },
          
            
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 280,
      clubRewords: [
        { type: 'credit', count: 25000 },
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'token', count: 225 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'elva', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 300000 },
            { type: 'sePart', count: 1 },
          
            
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 290,
      clubRewords: [
        { type: 'token', count: 50 },
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'token', count: 225 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 200000 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 300000 },
            // { type: 'sePart', count: 1 },
            // eb110钥匙？

          
            
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 300,
      clubRewords: [
        { type: 'token', count: 75 },
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: false }],
          rewords: [
            { type: 'token', count: 225 },
            
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
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 300000 },
            
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
            { type: 'sePart', count: 1 },
            
          
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt3', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 500000 },
            { type: 'sePart', count: 1 },
            
          
            
          ],
        },
        
        
      ],
    },
    
    {
      stage: 17,
      unlockConditions: 300,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: false }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
