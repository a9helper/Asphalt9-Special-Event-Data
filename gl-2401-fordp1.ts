import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 200,
  toolCars: [
    {
      car_id: "invencible",
      fullName: "Lamborghini Invencible",
      nickName: "无敌牛",
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "004c",
      fullName: "Glickenhaus 004C🔑",
      nickName: "004C",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "zondar",
      fullName: "Pagani Zonda R🔑",
      nickName: "风之子",
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: "tsr-s",
      fullName: "Zenvo TSR-S🔑",
      nickName: "TSR-S",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "gallardo",
      fullName: "Lamborghini Gallardo LP 560-4",
      nickName: "盖拉多",
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "tachyon",
      fullName: "Raesr Tachyon Speed🔑",
      nickName: "超光速",
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: "296",
      fullName: "Ferrari 296 GTB🔑",
      nickName: "296",
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: "citroengt",
      fullName: "Citroen GT by Citroen",
      nickName: "雪铁龙GT",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: "spano",
      fullName: "Spania GTA 2015 GTA Spano",
      nickName: "Spano",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    


    {
      car_id: "fordp1",
      fullName: "Ford Team Fordzilla P1",
      nickName: "福特P1",
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 20, reword: { type: 'credit', count: 10000 } },
    { conditions: 40, reword: { type: 'seasonToken', count: 1000 } },
    { conditions: 60, reword: { type: 'seCard', count: 1 } },
    
    { conditions: 120, reword: { type: 'credit', count: 20000 } },
    { conditions: 160, reword: { type: 'seCard', count: 2 } },
    { conditions: 200, reword: { type: 'seasonToken', count: 2000 } },
    
    { conditions: 300, reword: { type: 'seCard', count: 3 } },
    { conditions: 350, reword: { type: 'credit', count: 50000 } },
    { conditions: 390, reword: { type: 'sePart', count: 1 } },
    { conditions: 410, reword: { type: 'seasonToken', count: 3000 } },
    { conditions: 425, reword: { type: 'sePart', count: 1 } },
  ],
  notes: [
    '阶段 1 可获得 004C Phonk 贴纸 1 份。',
    '阶段 15 使用 5 星小自燃，可获得小自燃钥匙 1 份。',
    '阶段 17 使用 6 星风之子，可获得风之子钥匙 1 份。',
    '什么你说蓝币太少了？你不玩有的是帕鲁玩'

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
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            // Phonk 贴纸 *1
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 600 },
            { type: 'seCard', count: 2 },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 600 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 600 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 30 },
            { type: 'seasonToken', count: 750 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 50,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: false }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 600 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 65,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 600 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 80,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
            { type: 'token', count: 30 },
            { type: 'seasonToken', count: 750 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 100,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 900 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 900 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },

    {
      stage: 10,
      unlockConditions: 130,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 30000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 900 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'credit', count: 400000 },
            { type: 'token', count: 30 },
            { type: 'seasonToken', count: 1500 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 170,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'credit', count: 440000 },
            { type: 'token', count: 40 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '004c', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 185,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: false }],
          rewords: [
            { type: 'credit', count: 440000 },
            { type: 'token', count: 40 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'credit', count: 560000 },
            { type: 'token', count: 40 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '296', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
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
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 560000 },
            { type: 'token', count: 40 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tsr-s', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            // key tsr-s
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 245,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'credit', count: 560000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'tachyon', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 270,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'credit', count: 640000 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'zondar', freeTry: true }],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            // key zonda r
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 300,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: false }],
          rewords: [
            { type: 'credit', count: 640000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: false }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },

      ],
    },

    {
      stage: 19,
      unlockConditions: 340,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'invencible', freeTry: false }],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'credit', count: 640000 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 1800 },
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 20,
      unlockConditions: 380,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 375000 },
            { type: 'token', count: 80 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 450000 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 750 },
            { type: 'credit', count: 600000 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'seasonToken', count: 1500 },
            { type: 'credit', count: 750000 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    
    
  ],
}

export default template
