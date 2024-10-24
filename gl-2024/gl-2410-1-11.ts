import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: true,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'bacalar',
      fullName: 'Bentley Mulliner Bacalar',
      nickName: 'Bacalar',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'panamera',
      fullName: 'Porsche Panamera Turbo S🔑',
      nickName: '帕拉梅拉',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'sagaris',
      fullName: 'TVR Sagaris',
      nickName: 'Sagaris',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'drakogte',
      fullName: 'Drako GTE',
      nickName: '德拉科GTE',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
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
      car_id: 'evija',
      fullName: 'Lotus Evija',
      nickName: 'Evija',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'bc',
      fullName: 'Pagani Huayra BC',
      nickName: 'BC',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'valhalla',
      fullName: 'Aston Martin Valhalla Concept Car',
      nickName: '英灵殿',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    



    {
      car_id: 'vision111',
      fullName: 'Mercedes-Benz Vision One-Eleven🔑',
      nickName: 'Vision 111',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'seCard', count: 1 }  },
    { conditions: 50, reword: { type: 'seCard', count: 2 }  },
    { conditions: 75, reword: { type: 'credit', count: 100000 }  },
    { conditions: 120, reword: { type: 'seCard', count: 3 }  },
    { conditions: 180, reword: { type: 'token', count: 200 }  },
    { conditions: 220, reword: { type: 'seCard', count: 3 }  },
    { conditions: 270, reword: { type: 'seCard', count: 4 }  },
    { conditions: 320, reword: { type: 'sePart', count: 1 } },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 380, reword: { type: 'sePart', count: 1 } },
    { conditions: 404, reword: { type: 'seKey', count: 1 } },

    



    
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
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bacalar', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 40000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bacalar', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bacalar', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bacalar', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bacalar', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 5,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 40000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'panamera', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
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
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 18,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vision111', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 45 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'drakogte', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'drakogte', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 60000 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'drakogte', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
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
            { car_id: 'drakogte', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'one77', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'one77', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'one77', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'one77', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 75 },
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
            { car_id: 'one77', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
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
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
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
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vision111', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 60 },
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 85,
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
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 60000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 160000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evija', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
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
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'vision111', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'token', count: 90 },
            { type: 'seCard', count: 1 },
          ],
        },


        
      ],
    },
    {
      stage: 12,
      unlockConditions: 140,
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
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'bc', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 180,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
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
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 180,
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
          toolCars: [
            { car_id: 'vision111', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 150 },
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 220,
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
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 90000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 240000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'valhalla', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 280,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sagaris', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 225 },
            { type: 'seCard', count: 1 },
          ],
        },
        
        
        
        
      ],
    },
    
    
    {
      stage: 17,
      unlockConditions: 280,
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
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'credit', count: 75000 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'credit', count: 450000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'credit', count: 600000 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1200000 },
            { type: 'token', count: 300 },
            { type: 'sePart', count: 2 },
            
          ],
        },
        
      ],
    },
    {
      stage: 18,
      unlockConditions: 280,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: true }],
          rewords: [
            
            
          ],
        },
        
      ],
    },

    
    
    

  
  
  
],
}

export default template
