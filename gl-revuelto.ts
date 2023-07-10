import { SED } from './type.d.ts'

const template: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 260,
  toolCars: [
    {
      car_id: 'centenario',
      fullName: 'Lamborghini Centenario',
      nickName: '百年牛',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'asterion',
      fullName: 'Lamborghini Asterion',
      nickName: '蓝牛牛',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'veneno',
      fullName: 'Lamborghini Veneno',
      nickName: '毒药',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'countach',
      fullName: 'Lamborghini Countach 25th Anniversary',
      nickName: '康塔什',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'avj',
      fullName: 'Lamborghini Aventador J',
      nickName: 'AVJ',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'murcielago',
      fullName: 'Lamborghini Murcielago LP 640 Roadster',
      nickName: '蝙蝠',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'sv',
      fullName: 'Lamborghini Aventador SV Coupe',
      nickName: 'SV',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'diablo',
      fullName: 'Lamborghini Diablo GT',
      nickName: 'Diablo',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'scv12',
      fullName: 'Lamborghini Essenza SCV12',
      nickName: 'SCV12',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'miura',
      fullName: 'Lamborghini Miura Concept',
      nickName: '缪拉',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'sc20',
      fullName: 'Lamborghini SC20',
      nickName: 'SC20',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'reventon',
      fullName: 'Lamborghini Reventon Roadster',
      nickName: '雷文顿',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'sesto',
      fullName: 'Lamborghini Sesto Elemento',
      nickName: '第六元素',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'svj',
      fullName: 'Lamborghini Aventador SVJ Roadster',
      nickName: 'SVJ',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'evo',
      fullName: 'Lamborghini Huracan EVO Spyder',
      nickName: '飓风',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'gallardo',
      fullName: 'Lamborghini Gallardo LP 560-4',
      nickName: '盖拉多',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'huracanste',
      fullName: 'Lamborghini Huracan Super Trofeo EVO',
      nickName: 'D飓风',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'sc18',
      fullName: 'Lamborghini SC18',
      nickName: 'SC18',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'egoista',
      fullName: 'Lamborghini Egoista',
      nickName: '自私',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'terzo',
      fullName: 'Lamborghini Terzo Millennio',
      nickName: '千年牛',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'lpi800',
      fullName: 'Lamborghini Countach LPI 800-4',
      nickName: '新康塔什',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'sian',
      fullName: 'Lamborghini Sian FKP 37',
      nickName: 'Sian',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'revuelto',
      fullName: 'Lamborghini Revuelto',
      nickName: 'Revuelto',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
  ],
  processRewords: [
    {
      conditions: 20,
      reword: {
        type: 'credit',
        count: 10000,
      },
    },
    {
      conditions: 60,
      reword: {
        type: 'sePack',
        count: 1,
      },
    },
    {
      conditions: 100,
      reword: {
        type: 'token',
        count: 100,
      },
    },
    {
      conditions: 160,
      reword: {
        type: 'sePack',
        count: 1,
      },
    },
    {
      conditions: 220,
      reword: {
        type: 'seCard',
        count: 2,
      },
    },
    {
      conditions: 280,
      reword: {
        type: 'seCard',
        count: 2,
      },
    },
    {
      conditions: 350,
      reword: {
        type: 'sePart',
        count: 1,
      },
    },
    {
      conditions: 400,
      reword: {
        type: 'sePart',
        count: 1,
      },
    },
    {
      conditions: 450,
      reword: {
        type: 'sePart',
        count: 1,
      },
    },
  ],
  notes: [
    '6星Revuelto可在阶段27领取1号初音色车贴',
    '参与最后一阶段，可获得2号橘色条纹车贴',
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 75,
            },
            {
              type: 'seKey',
              count: 1,
            },
            {
              type: 'credit',
              count: 50000,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 5,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'centenario',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 15000,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'centenario',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 150000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'centenario',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
            {
              type: 'token',
              count: 40,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 10,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'asterion',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 15000,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'asterion',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 150000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'asterion',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
            {
              type: 'token',
              count: 30,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 15,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'veneno',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 15000,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'veneno',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 450000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'veneno',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
            {
              type: 'token',
              count: 30,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 20,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'countach',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 15000,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'countach',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 150000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'countach',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
            {
              type: 'token',
              count: 30,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 25,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'avj',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 15000,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'avj',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 450000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'avj',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
            {
              type: 'token',
              count: 60,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 30,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 50000,
            },
            {
              type: 'token',
              count: 75,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 35,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'murcielago',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 18000,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'murcielago',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 225000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'murcielago',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
            {
              type: 'token',
              count: 50,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 40,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sv',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 18000,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sv',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 225000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sv',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
            {
              type: 'token',
              count: 50,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 45,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'diablo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 18000,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'diablo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 600000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'diablo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 50,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 50,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'scv12',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 18000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'scv12',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 225000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 140,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'scv12',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 80,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 55,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'miura',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 18000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'miura',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 225000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 80,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'miura',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 40,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 60,
      clubRewords: [
        {
          type: 'credit',
          count: 5000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc20',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 18000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 80,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc20',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 600000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc20',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 40,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 65,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 150,
            },
            {
              type: 'credit',
              count: 75000,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 70,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'reventon',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 24000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'reventon',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 300000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 80,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'reventon',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 40,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 75,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sesto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 24000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sesto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 300000,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 80,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sesto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 3,
            },
            {
              type: 'token',
              count: 100,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 80,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'svj',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 24000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'svj',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 900000,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 160,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'svj',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 3,
            },
            {
              type: 'token',
              count: 60,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 85,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'evo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 24000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'evo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 300000,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 160,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'evo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 60,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 90,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'gallardo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 24000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'gallardo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 300000,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 160,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'gallardo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 60,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 95,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'huracanste',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 24000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'huracanste',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 900000,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 160,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'huracanste',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 60,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 100,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 300,
            },
            {
              type: 'credit',
              count: 100000,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 105,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc18',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 30000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc18',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 390000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc18',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 120,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 240,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 110,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'egoista',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 30000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'egoista',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 390000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'egoista',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 80,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 200,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 115,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 30000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 1500000,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 3,
            },
            {
              type: 'token',
              count: 80,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 200,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 120,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'lpi800',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 30000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'lpi800',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 390000,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'lpi800',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 4,
            },
            {
              type: 'token',
              count: 80,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 200,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 125,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sian',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'sePack',
              count: 1,
            },
            {
              type: 'credit',
              count: 30000,
            },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sian',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 1500000,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sian',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 4,
            },
            {
              type: 'token',
              count: 80,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 200,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 130,
      clubRewords: [
        {
          type: 'credit',
          count: 10000,
        },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: true,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 450,
            },
            {
              type: 'credit',
              count: 200000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 600000,
            },
            {
              type: 'seSkin',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 135,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'revuelto',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seSkin',
              count: 1,
            },
          ],
        },
      ],
    },
  ],
}

export default template
