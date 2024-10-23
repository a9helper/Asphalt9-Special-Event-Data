import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'sagaris',
      fullName: 'TVR Sagaris',
      nickName: 'Sagaris',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
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
      car_id: 'xj220',
      fullName: 'Jaguar XJ220 TWR🔑',
      nickName: 'XJ220',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'zagato',
      fullName: 'Aston Martin DBS GT Zagato',
      nickName: 'Zagato',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'berlinetta',
      fullName: 'Puritalia Berlinetta',
      nickName: 'Berlinetta',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'veyron',
      fullName: 'Bugatti Veyron 16.4 Grand Sport Vitesse',
      nickName: '威龙',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    



    {
      car_id: '21c',
      fullName: 'Czinger 21C',
      nickName: '21C',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 30, reword: { type: 'seCard', count: 1 }  },
    { conditions: 50, reword: { type: 'token', count: 100 }  },
    { conditions: 80, reword: { type: 'seCard', count: 2 }  },
    { conditions: 140, reword: { type: 'seCard', count: 3 }  },
    { conditions: 170, reword: { type: 'credit', count: 150000 }  },
    { conditions: 200, reword: { type: 'seCard', count: 4 }  },
    { conditions: 300, reword: { type: 'sePart', count: 1 } },
    { conditions: 410, reword: { type: 'seCard', count: 5 }  },
    { conditions: 475, reword: { type: 'token', count: 250 }  },
    { conditions: 490, reword: { type: 'sePart', count: 1 } },
    { conditions: 506, reword: { type: 'sePart', count: 3 } },


    



    
  ],
  notes: [
    
    "似乎一辆TVR就能完成所有 4 星及以下任务。"
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
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'seCard', count: 3 },
            { type: 'token', count: 45 },
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
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 140000 },
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 25,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '21c', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 50,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xj220', freeTry: true },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 105000 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xj220', freeTry: true },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 160000 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xj220', freeTry: true },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 75,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 160000 },
            { type: 'token', count: 75 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
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
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '21c', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 200 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 125,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'berlinetta', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 135000 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'berlinetta', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 105 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'berlinetta', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 220000 },
            { type: 'token', count: 120 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 175,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '21c', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 250 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 135 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 225,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 165000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 240000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 255000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'victor', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 150 },
            { type: 'sePart', count: 1 },
          ],
        },


        
      ],
    },
    {
      stage: 12,
      unlockConditions: 250,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xj220', freeTry: true },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 195000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xj220', freeTry: true },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 280000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xj220', freeTry: true },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 285000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'xj220', freeTry: true },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 165 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 275,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 320000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'zagato', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 180 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 300,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'berlinetta', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 255000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'berlinetta', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'berlinetta', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 360000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'berlinetta', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 195 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 325,
      clubRewords: [
        { type: 'credit', count: 15000 },
        
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 285000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 320000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 360000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'veyron', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 210 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 350,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '21c', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 700000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '21c', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 375 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '21c', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 600000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '21c', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '21c', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 525000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: '21c', freeTry: false },
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 2 },
          ],
        },
        
        
        
      ],
    },
    
    
    {
      stage: 17,
      unlockConditions: 350,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '21c', freeTry: false }],
          rewords: [
            { type: 'seSkin', count: 1 },
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
