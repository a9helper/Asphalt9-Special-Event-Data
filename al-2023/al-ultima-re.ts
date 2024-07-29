import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 175,
  toolCars: [
    {
      car_id: 'roma',
      fullName: 'Ferrari Roma',
      nickName: '罗马',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'boxster',
      fullName: 'Porsche Boxster 25th',
      nickName: 'Boxster',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'civic',
      fullName: 'Honda Civic Type-R',
      nickName: '思域',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'griffith',
      fullName: 'TVR Griffith',
      nickName: 'TVR',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: '650s',
      fullName: 'Mclaren 650S GT3',
      nickName: '650S',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'veneno',
      fullName: 'Lamborghini Veneno',
      nickName: '毒药',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'akylone',
      fullName: 'Genty Akylone',
      nickName: '阿卡龙',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },


    {
      car_id: 'ultimars',
      fullName: 'Ultima RS🔑',
      nickName: 'Ultima RS',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    
  ],
  processRewords: [
    { conditions: 48, reword: { type: 'seCard', count: 1 } },
    { conditions: 88, reword: { type: 'seCard', count: 2 } },
    { conditions: 138, reword: { type: 'seCard', count: 3 } },
    { conditions: 168, reword: { type: 'sePart', count: 1 } },
    { conditions: 200, reword: { type: 'seKey', count: 1 } },
    { conditions: 220, reword: { type: 'seSkin', count: 1 } },
  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 30000 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'boxster', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 50 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 25 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'civic', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'token', count: 35 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'griffith', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 80 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
        { type: 'token', count: 35 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 50 },
            { type: 'credit', count: 60000 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 75,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'roma', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 205 },
            { type: 'credit', count: 120000 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 90,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'civic', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 205 },
            { type: 'credit', count: 120000 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 105,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'griffith', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 30 },
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'griffith', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 175 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 120,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 175000 },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [{ type: 'token', count: 30 }],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '650s', freeTry: true }],
          rewords: [
            { type: 'token', count: 175 }, 
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 135,
      clubRewords: [{ type: 'token', count: 150 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 7 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: true }],
          rewords: [
            { type: 'token', count: 300 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 150,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 200 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'akylone', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'akylone', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'akylone', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'akylone', freeTry: true }],
          rewords: [
            { type: 'token', count: 90 },
            { type: 'seCard', count: 9 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'akylone', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 210 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 165,
      clubRewords: [
        { type: 'seCard', count: 3 },
        { type: 'credit', count: 100000 }
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 400 },

          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 1000000 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: false }],
          rewords: [
            
            { type: 'token', count: 1288 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 165,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ultimars', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
