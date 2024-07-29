import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions:180,
  toolCars: [
    {
      car_id: "f50",
      fullName: "Ferrari F50",
      nickName: "F50",
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: "911gt2",
      fullName: "Porsche 911 GT2 RS ClubSport🔑",
      nickName: "911GT2",
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: "mbbs",
      fullName: "Mercedes-Benz Mercedes-AMG GT Black Series🔑",
      nickName: "梅奔BS",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "f1",
      fullName: "Mclaren F1 LM🔑",
      nickName: "F1",
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: "revuelto",
      fullName: "Lamborghini Revuelto🔑",
      nickName: "Revuelto",
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },






    {
      car_id: "torino",
      fullName: "Torino Design Super Sport🔑",
      nickName: "都林",
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 40, reword: { type: 'seCard', count: 1 } },
    { conditions: 80, reword: { type: 'seCard', count: 1 } },
    { conditions: 140, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 1 } },
    { conditions: 270, reword: { type: 'sePart', count: 1 } },
    { conditions: 300, reword: { type: 'sePart', count: 1 } },
    { conditions: 340, reword: { type: 'seSkin', count: 1 } },
    { conditions: 380, reword: { type: 'seKey', count: 1 } },
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
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 35,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 50,
      clubRewords: [
        { type: 'token', count: 20 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'credit', count: 200000 },
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
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 85,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 375000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 100,
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
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'token', count: 160 },
            { type: 'credit', count: 200000 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 120,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 500000 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'f50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 150 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 145,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '911gt2', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 150 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },

    {
      stage: 10,
      unlockConditions: 170,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mbbs', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 150 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 750000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'f1', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 150 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 230,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'credit', count: 750000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'token', count: 150 },
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 270,
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
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'credit', count: 200000 },
            
          ],
        },
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'token', count: 175 },
            { type: 'credit', count: 300000 },
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'token', count: 375 },
            { type: 'credit', count: 500000 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 12,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'token', count: 500 },
            { type: 'credit', count: 750000 },
            { type: 'sePart', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'credit', count: 1500000 },
            { type: 'sePart', count: 2 },
            
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 270,
      clubRewords: [

      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: false }],
          rewords: [

          ],
        },
      ],
    },
    
    
  ],
}

export default template
