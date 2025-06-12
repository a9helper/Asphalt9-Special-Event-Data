import { SED } from '../type.d.ts'

const template: SED = {
  havePack: true,
  haveClubRewords: false,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'ds',
      fullName: 'DS Automobiles DS E-Tense',
      nickName: 'DS',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: 'd8',
      fullName: 'Donkervoort D8 GTO Individual Series',
      nickName: 'D8 GTO',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'ap-0',
      fullName: 'Apex AP-0',
      nickName: 'AP-0',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '911gt2',
      fullName: 'Porsche 911 GT2 RS ClubSport🔑',
      nickName: '911GT2',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'revuelto',
      fullName: 'Lamborghini Revuelto🔑',
      nickName: 'Revuelto',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'gtrneon',
      fullName: 'Nissan GT-R Neon Edition',
      nickName: '霓虹GTR',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },




    {
      car_id: 'aero',
      fullName: 'SSC Ultimate Aero TT ',
      nickName: 'Aero',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 0, reword: { type: 'seCard', count: 6 } },
    { conditions: 0, reword: { type: 'sePart', count: 1 } },
    { conditions: 0, reword: { type: 'token', count: 200 } },
    { conditions: 0, reword: { type: 'credit', count: 150000 } },


















    
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aero', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'seasonToken', count: 2500 },
            { type: 'credit', count: 150000 },
            { type: 'sePack', count: 25 },
            
          ],
        },
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 0,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aero', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            { type: 'credit', count: 150000 },
            { type: 'sePack', count: 25 },
            
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 0,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ds', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            
            { type: 'sePack', count: 9 },
            
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 0,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aero', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            { type: 'credit', count: 150000 },
            { type: 'sePack', count: 15 },
            
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 0,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'd8', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1250 },
            
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'd8', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            
            { type: 'credit', count: 90000 },
            
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 0,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aero', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            { type: 'credit', count: 150000 },
            { type: 'sePack', count: 15 },
            
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 0,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ap-0', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1250 },
            
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ap-0', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            
            { type: 'credit', count: 120000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ap-0', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 105 },
            
            { type: 'seasonToken', count: 3750 },
            
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 0,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aero', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            { type: 'credit', count: 150000 },
            { type: 'sePack', count: 15 },
            
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 0,
      clubRewords: [
        
        
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '911gt2', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1250 },
            
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '911gt2', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '911gt2', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 105 },
            
            { type: 'seasonToken', count: 3750 },
            
          ],
        },
        
        
        
      ],
    }, 
    
    
    
    {
      stage: 10,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aero', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            { type: 'credit', count: 150000 },
            { type: 'sePack', count: 15 },
            
          ],
        },
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'revuelto', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1250 },
            
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'revuelto', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            
            { type: 'credit', count: 180000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'revuelto', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 105 },
            
            { type: 'seasonToken', count: 3750 },
            
          ],
        },
        
      ],
    },
    {
      stage: 12,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aero', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            { type: 'credit', count: 150000 },
            { type: 'sePack', count: 15 },
            
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 1250 },
            
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
          ],
          rewords: [
            { type: 'seasonToken', count: 2500 },
            
            { type: 'credit', count: 210000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 105 },
            
            { type: 'seasonToken', count: 3750 },
            
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aero', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'seasonToken', count: 2500 },
            { type: 'credit', count: 150000 },
            { type: 'sePack', count: 15 },
            
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ds', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ds', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 225000 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ds', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'd8', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'd8', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 105 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'd8', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 255000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 17,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ap-0', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ap-0', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 285000 },
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'ap-0', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 18,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '911gt2', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '911gt2', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
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
            { car_id: '911gt2', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: '911gt2', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 19,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'revuelto', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'revuelto', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 360000 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'revuelto', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'revuelto', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 20,
      unlockConditions: 0,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
          ],
          rewords: [
            { type: 'sePack', count: 9 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
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
            { car_id: 'gtrneon', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'gtrneon', freeTry: true },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        
      ],
    },
    {
      stage: 21,
      unlockConditions: 0,
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
            { car_id: 'aero', freeTry: true },
          ],
          rewords: [
            
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
