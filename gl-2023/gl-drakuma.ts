import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 150,
  toolCars: [
    {
      car_id: 'sr1',
      fullName: 'Peugeot SR1',
      nickName: 'SR1',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'cx75',
      fullName: 'Jaguar C-X75',
      nickName: 'C-X75',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'sennagtr',
      fullName: 'McLaren Senna GTR',
      nickName: '塞纳GTR',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'r390',
      fullName: 'Nissan R390 GT1',
      nickName: 'R390',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'gtr50',
      fullName: 'Nissan GTR-50 ItalDesign',
      nickName: 'GTR-50',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'rts',
      fullName: 'Raesr Tachyon Speed',
      nickName: '超光速',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'c7r',
      fullName: 'Chevrolet Corvette C7.R',
      nickName: 'C7.R',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'drakuma',
      fullName: 'Ajlani Drakuma',
      nickName: 'Drakuma',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 2 } },
    { conditions: 300, reword: { type: 'seCard', count: 2 } },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 375, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    '阶段8使用6星超光速，可获得超光速车钥匙一把。'
  ],
  stages: [
    
    {
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
        { type: 'token', count: 10 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: false }],
          rewords: [{ type: 'credit', count: 125000 }],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sr1', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    {
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 10000 },
        { type: 'token', count: 10 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'cx75', freeTry: false }],
          rewords: [{ type: 'credit', count: 125000 }],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'cx75', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'cx75', freeTry: false }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'cx75', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'cx75', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    {
      unlockConditions:30,
      clubRewords:[

        { type: 'credit', count: 25000 },
        { type: 'token', count: 25 },
      ],
      missions:[

        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 250 },
          ],
        },
      ],
    },
    {
      unlockConditions:50,
      clubRewords:[

        { type: 'credit', count: 10000 },
        { type: 'token', count: 10 },
      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [{ type: 'credit', count: 125000 }],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sennagtr', freeTry: false }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 3 },
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
            { type: 'token', count: 150 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions:65,
      clubRewords:[

        { type: 'credit', count: 10000 },
        { type: 'token', count: 10 },
      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [{ type: 'credit', count: 175000 }],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
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
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'r390', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions:80,
      clubRewords:[
        { type: 'credit', count: 25000 },
        { type: 'token', count: 25 },
      ],
      missions:[

        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: true }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 250 },
          ],
        },
      ],
    },
    {
      unlockConditions:100,
      clubRewords:[

        { type: 'credit', count: 20000 },
        { type: 'token', count: 20 },
      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr50', freeTry: false }],
          rewords: [{ type: 'credit', count: 250000 }],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr50', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr50', freeTry: false }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr50', freeTry: false }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'gtr50', freeTry: false }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions:115,
      clubRewords:[

        { type: 'credit', count: 20000 },
        { type: 'token', count: 20 },
      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'rts', freeTry: true }],
          rewords: [{ type: 'credit', count: 250000 }],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'rts', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'rts', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'rts', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'rts', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'rts', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions:130,
      clubRewords:[

        { type: 'credit', count: 20000 },
        { type: 'token', count: 20 },
      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [{ type: 'credit', count: 125000 }],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type: 'token', count: 50 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'c7r', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions:145,
      clubRewords:[

        { type: 'credit', count: 25000 },
        { type: 'token', count: 25 },
      ],
      missions:[
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            { type: 'credit', count: 600000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            { type: 'token', count: 250 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            { type: 'credit', count: 1500000 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            { type: 'token', count: 375 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            { type: 'token', count: 500 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions:250,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'drakuma', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
