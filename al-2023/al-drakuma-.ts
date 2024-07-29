import { SED } from '../type.d.ts'
const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 200,
  toolCars: [
    {
      car_id: 'diablo',
      fullName: 'Lamborghini Diablo GT',
      nickName: 'Diablo',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'reventon',
      fullName: 'Lamborghini Reventon Roadster',
      nickName: '雷文顿',
      star: 6,
      isKeyCar: true,
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
      car_id: 'scv12',
      fullName: 'Lamborghini SCV12',
      nickName: 'SCV12',
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
      car_id: 'sc20',
      fullName: 'Lamborghini SC20',
      nickName: 'SC20',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'sian',
      fullName: 'Lamborghini Sian FKP 37',
      nickName: '西安',
      star: 6,
      isKeyCar: true,
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
      car_id: 'asterion',
      fullName: 'Lamborghini Asterion',
      nickName: '蓝牛牛',
      star: 4,
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
      car_id: 'miura',
      fullName: 'Lamborghini Miura Concept',
      nickName: '缪拉',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'centenario',
      fullName: 'Lamborghini Centenario',
      nickName: '百年牛',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'gallardo',
      fullName: 'Lamborghini Gallardo LP 560-4',
      nickName: '盖拉多',
      star: 6,
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
      car_id: 'murcielago',
      fullName: 'Lamborghini Murcielago LP 640 Roadster',
      nickName: '蝙蝠',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'avj',
      fullName: 'Lamborghini Aventador J',
      nickName: 'AVJ',
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
      star: 6,
      isKeyCar: false,
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
      car_id: 'lpi800',
      fullName: 'Lamborghini Countach LPI 800-4',
      nickName: '新康塔什',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
  ],
  processRewords: [
    {
      conditions: 232,
      reword: {
        type: 'seKey',
        count: 1,
      },
    },
    {
      conditions: 280,
      reword: {
        type: 'sePart',
        count: 1,
      },
    },
    {
      conditions: 333,
      reword: {
        type: 'sePart',
        count: 1,
      },
    },
  ],
  notes: [
    '232条件即可领取钥匙，不要忘记勾选新康塔什的【钥匙】和【星级】噢！',
    '工具车为所有Lamborghini，计算器配合游戏内的车库筛选功能食用，风味更佳。',
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        {
          type: 'seCard',
          count: 1,
        },
        {
          type: 'credit',
          count: 50000,
        },
      ],
      missions: [
        {
          conditions: 19,
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
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 75,
            },
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 12,
      clubRewords: [
        {
          type: 'seCard',
          count: 1,
        },
        {
          type: 'token',
          count: 50,
        },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'countach',
              freeTry: false,
            },
            {
              car_id: 'asterion',
              freeTry: false,
            },
            {
              car_id: 'huracanste',
              freeTry: false,
            },
            {
              car_id: 'miura',
              freeTry: false,
            },
            {
              car_id: 'centenario',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 1,
            },
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'diablo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 70,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 22,
      clubRewords: [
        {
          type: 'credit',
          count: 50000,
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
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'countach',
              freeTry: false,
            },
            {
              car_id: 'asterion',
              freeTry: false,
            },
            {
              car_id: 'huracanste',
              freeTry: false,
            },
            {
              car_id: 'miura',
              freeTry: false,
            },
            {
              car_id: 'centenario',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'reventon',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 70,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 35,
      clubRewords: [
        {
          type: 'token',
          count: 50,
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
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'centenario',
              freeTry: false,
            },
            {
              car_id: 'gallardo',
              freeTry: false,
            },
            {
              car_id: 'sv',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'huracanste',
              freeTry: false,
            },
            {
              car_id: 'murcielago',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'veneno',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
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
      unlockConditions: 45,
      clubRewords: [
        {
          type: 'credit',
          count: 50000,
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
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'centenario',
              freeTry: false,
            },
            {
              car_id: 'gallardo',
              freeTry: false,
            },
            {
              car_id: 'sv',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'huracanste',
              freeTry: false,
            },
            {
              car_id: 'murcielago',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'scv12',
              freeTry: false,
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
      unlockConditions: 60,
      clubRewords: [
        {
          type: 'seCard',
          count: 2,
        },
      ],
      missions: [
        {
          conditions: 17,
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
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 100,
            },
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 78,
      clubRewords: [
        {
          type: 'credit',
          count: 50000,
        },
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'centenario',
              freeTry: false,
            },
            {
              car_id: 'gallardo',
              freeTry: false,
            },
            {
              car_id: 'sv',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'huracanste',
              freeTry: false,
            },
            {
              car_id: 'murcielago',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc18',
              freeTry: false,
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
      unlockConditions: 90,
      clubRewords: [
        {
          type: 'credit',
          count: 50000,
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
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'centenario',
              freeTry: false,
            },
            {
              car_id: 'gallardo',
              freeTry: false,
            },
            {
              car_id: 'sv',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'huracanste',
              freeTry: false,
            },
            {
              car_id: 'murcielago',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'egoista',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
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
      unlockConditions: 105,
      clubRewords: [
        {
          type: 'credit',
          count: 75000,
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
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
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
      unlockConditions: 120,
      clubRewords: [
        {
          type: 'seCard',
          count: 2,
        },
      ],
      missions: [
        {
          conditions: 18,
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
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 120,
            },
            {
              type: 'credit',
              count: 60000,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 130,
      clubRewords: [
        {
          type: 'seCard',
          count: 1,
        },
        {
          type: 'token',
          count: 150,
        },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 120000,
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
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
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
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 100,
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
              car_id: 'scv12',
              freeTry: false,
            },
          ],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'scv12',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 5,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'scv12',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 140,
      clubRewords: [
        {
          type: 'seCard',
          count: 2,
        },
        {
          type: 'credit',
          count: 100000,
        },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
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
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 150,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'reventon',
              freeTry: false,
            },
          ],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'reventon',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 5,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'reventon',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 150,
      clubRewords: [
        {
          type: 'seCard',
          count: 2,
        },
        {
          type: 'credit',
          count: 125000,
        },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
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
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 180,
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
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc18',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 5,
            },
            {
              type: 'token',
              count: 225,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc18',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 165,
      clubRewords: [
        {
          type: 'seCard',
          count: 2,
        },
        {
          type: 'credit',
          count: 125000,
        },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
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
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 150,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
            {
              type: 'token',
              count: 225,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: false,
            },
          ],
          rewords: [],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 5,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'terzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 180,
      clubRewords: [
        {
          type: 'seCard',
          count: 2,
        },
        {
          type: 'token',
          count: 150,
        },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
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
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 180,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
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
              car_id: 'veneno',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 225,
            },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'egoista',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 5,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'egoista',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 195,
      clubRewords: [
        {
          type: 'seCard',
          count: 3,
        },
        {
          type: 'token',
          count: 150,
        },
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 180,
            },
            {
              type: 'credit',
              count: 150000,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 2,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc20',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 225,
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
              car_id: 'sc20',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 5,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sc20',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 210,
      clubRewords: [
        {
          type: 'seCard',
          count: 3,
        },
        {
          type: 'token',
          count: 150,
        },
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sian',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 225,
            },
            {
              type: 'credit',
              count: 150000,
            },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sian',
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 3,
            },
            {
              type: 'token',
              count: 225,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 225,
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
              freeTry: false,
            },
            {
              car_id: 'diablo',
              freeTry: false,
            },
            {
              car_id: 'reventon',
              freeTry: false,
            },
            {
              car_id: 'avj',
              freeTry: false,
            },
            {
              car_id: 'scv12',
              freeTry: false,
            },
            {
              car_id: 'sc18',
              freeTry: false,
            },
            {
              car_id: 'svj',
              freeTry: false,
            },
            {
              car_id: 'evo',
              freeTry: false,
            },
            {
              car_id: 'veneno',
              freeTry: false,
            },
            {
              car_id: 'sesto',
              freeTry: false,
            },
            {
              car_id: 'egoista',
              freeTry: false,
            },
            {
              car_id: 'sc20',
              freeTry: false,
            },
            {
              car_id: 'terzo',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 3,
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
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'seCard',
              count: 5,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'sian',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 230,
      clubRewords: [
        {
          type: 'sePart',
          count: 1,
        },
        {
          type: 'token',
          count: 688,
        },
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'lpi800',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 400000,
            },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'lpi800',
              freeTry: false,
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
              car_id: 'lpi800',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 564000,
            },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'lpi800',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'token',
              count: 688,
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
              car_id: 'lpi800',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 1464000,
            },
            {
              type: 'sePart',
              count: 1,
            },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            {
              car_id: 'lpi800',
              freeTry: false,
            },
          ],
          rewords: [
            {
              type: 'credit',
              count: 1688888,
            },
            {
              type: 'token',
              count: 1888,
            },
          ],
        },
      ],
    },
    {
      unlockConditions: 232,
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
              car_id: 'lpi800',
              freeTry: true,
            },
          ],
          rewords: [],
        },
      ],
    },
  ],
}

export default template
