import { SED } from '../type.d.ts'
// 周三结束
const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 240,
  toolCars: [
    {
      car_id: 'trezor',
      fullName: 'Renault TreZor',
      nickName: 'TreZor',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'ie',
      fullName: 'Apollo IE',
      nickName: 'IE',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'xjr-15',
      fullName: 'Jaguar XJR-15',
      nickName: 'XJR15',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: '765lt',
      fullName: 'McLaren 765LT',
      nickName: '765LT',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'sennagtr',
      fullName: 'McLaren Senna GTR',
      nickName: 'Senna GTR',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'c7r',
      fullName: 'Chevrolet Corvette C7.R🔑',
      nickName: 'C7R',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'citroengt',
      fullName: 'Citroen GT by Citroen',
      nickName: '雪铁龙GT',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'one77',
      fullName: 'Aston Martin One77',
      nickName: 'One77',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },







    
    {
      car_id: 'valhalla',
      fullName: 'Aston Martin Valhalla Concept Car',
      nickName: '英灵殿',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 } },
    { conditions: 50, reword: { type: 'seCard', count: 2 } },
    { conditions: 75, reword: { type: 'credit', count: 10000 } },
    { conditions: 120, reword: { type: 'seCard', count: 3 } },
    { conditions: 180, reword: { type: 'token', count: 50 } },
    { conditions: 250, reword: { type: 'seCard', count: 3 } },
    { conditions: 300, reword: { type: 'seCard', count: 4 } },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 385, reword: { type: 'sePart', count: 1 } },
    { conditions: 440, reword: { type: 'sePart', count: 2 } },
    { conditions: 455, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'trezor', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 75 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'trezor', freeTry: false }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'credit', count: 40000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'trezor', freeTry: false }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'seasonToken', count: 150 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'trezor', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 5,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 150 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: false }],
          rewords: [
            { type: 'credit', count: 40000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: false }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seasonToken', count: 300 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: false }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ie', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 13,
      clubRewords: [],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            { type: 'credit', count: 90000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 4,
      unlockConditions: 15,
      clubRewords: [],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
            { type: 'token', count: 45 },
            { type: 'seasonToken', count: 225 },
          ],
        },
        
      ],
    },
    {
      stage: 5,
      unlockConditions: 30,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 180 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seasonToken', count: 300 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '765lt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 40,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 225 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seasonToken', count: 375 },
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
            { type: 'token', count: 50 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 75000 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [],
      missions: [
        
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 60,
      clubRewords: [],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'token', count: 60 },
            { type: 'seasonToken', count: 300 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 90,
      clubRewords: [],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 300 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type: 'credit', count: 80000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type: 'token', count: 30 },
            { type: 'seasonToken', count: 525 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type: 'token', count: 70 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 120,
      clubRewords: [],
      missions: [
        
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 120,
      clubRewords: [],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'credit', count: 160000 },
            { type: 'token', count: 90 },
            { type: 'seasonToken', count: 450 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 140,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 600 },
          ],
        },
        {
          conditions: 14,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 60 },
            { type: 'seasonToken', count: 900 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: false }],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 190,
      clubRewords: [],
      missions: [
               
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 190,
      clubRewords: [],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 150 },
            { type: 'seasonToken', count: 600 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 250,
      clubRewords: [],
      missions: [
               
        
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 750 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seasonToken', count: 1200 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 120 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: false }],
          rewords: [
            { type: 'credit', count: 180000 },
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 300,
      clubRewords: [],
      missions: [
                       
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr-15', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 225 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 300,
      clubRewords: [],
      missions: [
        
                
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 900 },
            { type: 'credit', count: 75000 },
            
          ],
        },        
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
            
          ],
        },
        {
          conditions: 10,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: false }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'token', count: 100 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: false }],
          rewords: [
            { type: 'credit', count: 600000 },
            { type: 'seasonToken', count: 1500 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1200000 },
            { type: 'token', count: 300 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 300,
      clubRewords: [],
      missions: [
        
                
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
    
  ],
}

export default template
