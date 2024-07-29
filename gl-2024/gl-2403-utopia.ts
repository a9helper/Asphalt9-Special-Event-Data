import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 200,
  toolCars: [
    {
      car_id: "solus",
      fullName: "McLaren Solus GT🔑",
      nickName: "Solus",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "daytonasp3",
      fullName: "Ferrari Daytona SP3🔑",
      nickName: "戴通纳SP3",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "650s",
      fullName: "McLaren 650S GT3",
      nickName: "650S",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: "f8",
      fullName: "Ferrari F8 Tributo",
      nickName: "F8",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: "me412",
      fullName: "Chrysler ME412",
      nickName: "ME412",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    
    

   
    {
      car_id: "utopia",
      fullName: "Pagani Utopia Coupe🔑",
      nickName: "乌托邦",
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'seCard', count: 1 } },
    { conditions: 30, reword: { type: 'token', count: 50 } },
    
    
    { conditions: 100, reword: { type: 'seCard', count: 2 }  },
    { conditions: 150, reword: { type: 'credit', count: 250000 } },
    
    
    { conditions: 250, reword: { type: 'token', count: 100 } },
    { conditions: 300, reword: { type: 'seCard', count: 3 } },
    { conditions: 350, reword: { type: 'seSkin', count: 1 } },
    { conditions: 350, reword: { type: 'seKey', count: 1 } },
  ],
  notes: [
    "除了阶段1和阶段5，其他阶段均需要一星超频车辆获得各 1 条件。计算器默认车手使用超频车辆，否则请自行扣除条件计算。"

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
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 125 },
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
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'daytonasp3', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
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
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 125000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 80,
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
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 125 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 120,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'f8', freeTry: false }],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 160,
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
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'token', count: 200 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'credit', count: 350000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'token', count: 125 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'credit', count: 600000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'token', count: 250 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'credit', count: 1000000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            { type: 'token', count: 500 },
            { type: 'sePart', count: 6 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 200,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'utopia', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },

    
    
    
  ],
}

export default template
