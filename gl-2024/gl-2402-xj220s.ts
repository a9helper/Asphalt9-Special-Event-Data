import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: true,
  packConditions:0,
  toolCars: [
    {
      car_id: "eb110",
      fullName: "Bugatti EB110🔑",
      nickName: "EB110",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "huracanste",
      fullName: "Lamborghini Huracan Super Trofeo Evo🔑",
      nickName: "D飓风",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "r390",
      fullName: "Nissan R390 GT1🔑",
      nickName: "R390",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "9x8",
      fullName: "Peugeot 9x8",
      nickName: "9x8",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    



    {
      car_id: "xj220",
      fullName: "Jaguar XJ220 TWR🔑",
      nickName: "XJ220",
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'seCard', count: 1 } },
    { conditions: 30, reword: { type: 'seasonToken', count: 2500 } },
    { conditions: 60, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 2} },
    { conditions: 160, reword: { type: 'sePart', count: 1 } },
    { conditions: 200, reword: { type: 'sePart', count: 1 } },
    { conditions: 244, reword: { type: 'seKey', count: 1 } },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 200000 },
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
            { type: 'seCard', count: 3 },
            { type: 'seasonToken', count: 3200 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'eb110', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'token', count: 15 },
            { type: 'credit', count: 100000 },
            { type: 'seasonToken', count: 800 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 35,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'seasonToken', count: 3200 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'huracanste', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
            { type: 'credit', count: 300000 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 45,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'token', count: 15 },
            { type: 'credit', count: 100000 },
            { type: 'seasonToken', count: 800 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 70,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'seasonToken', count: 4000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
            { type: 'credit', count: 400000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 90,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'token', count: 15 },
            { type: 'credit', count: 100000 },
            { type: 'seasonToken', count: 800 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 120,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'seasonToken', count: 4000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 6 },
            { type: 'credit', count: 400000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '9x8', freeTry: true }],
          rewords: [
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
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'sePart', count:1 },
            { type: 'seasonToken', count: 2000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 1000000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'xj220', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'seasonToken', count: 6000 },
          ],
        },
      ],
    },
    
    
  ],
}

export default template
