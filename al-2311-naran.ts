import { SED } from './type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 160,
  toolCars: [
    {
      car_id: 'arashaf10',
      fullName: 'Arash AF10',
      nickName: 'AF10',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'furai',
      fullName: 'Mazda Furai',
      nickName: '风籁',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'huracanste',
      fullName: 'Lamborghini Huracan Super Trofeo Evo🔑',
      nickName: '小小牛',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'victor',
      fullName: 'Aston Martin Victor',
      nickName: 'Victor',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '007s',
      fullName: 'Glickenhaus 007S🔑',
      nickName: '007S',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sc18',
      fullName: 'Lamborghini SC18🔑',
      nickName: 'SC18',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },



    {
      car_id: 'naran',
      fullName: 'Naran Hyper Coupe',
      nickName: '纳兰',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    
  ],
  notes: [
    
  ],
  processRewords: [
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 138, reword: { type: 'seCard', count: 2 } },
    { conditions: 220, reword: { type: 'seCard', count: 5 } },
    { conditions: 240, reword: { type: 'seSkin', count: 1 } },
  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 100000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 80000 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 25,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 150000 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 30,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 225000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 40,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 10000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 20000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 75000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 50,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 10000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 20000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 75000 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 60,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        
        {
          conditions: 7,
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
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 10000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 20000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sc18', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 75000 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 70,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'token', count: 75 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 80,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 128 },
            { type: 'credit', count: 175000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 90,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'furai', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 153 },
            { type: 'credit', count: 75000 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 100,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 318 },
            { type: 'credit', count: 200000 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 110,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 2 },
            { type: 'token', count: 153 },
            { type: 'credit', count: 200000 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 120,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 2 },
            { type: 'token', count: 153 },
            { type: 'credit', count: 250000 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 140,
      clubRewords: [
        { type: 'token', count: 288 },
        { type: 'sePart', count: 1 },
      ],
      missions: [
        
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 3*88888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 2*248888 },
            { type: 'token', count: 3*488 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 388888 },
            { type: 'token', count: 500 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 588888 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: false }],
          rewords: [
            { type: 'credit', count: 888888 },
          ],
        },
      ],
    },
    
    {
      stage: 16,
      unlockConditions: 225,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
