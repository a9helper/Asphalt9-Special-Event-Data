import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 235,
  toolCars: [
    {
      car_id: 'artura',
      fullName: 'McLaren Artura',
      nickName: 'Artura',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'p72',
      fullName: 'De Tomaso P72🔑',
      nickName: 'P72',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'evija',
      fullName: 'Lotus Evija',
      nickName: '电莲',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'naran',
      fullName: 'Naran Hyper Coupe',
      nickName: '纳兰',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'ff01',
      fullName: 'Faraday Future FFZero1',
      nickName: 'FF01',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'torino',
      fullName: 'Torino Design Super Sport🔑',
      nickName: '都灵',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'owl',
      fullName: 'Aspark Owl',
      nickName: '猫头鹰',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    



    {
      car_id: 'vayanne',
      fullName: 'Deus Vayanne',
      nickName: 'Vayanne',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "显而易见，想要参与后半程赛事必须拥有 3 星 Artura。",
    "提示：登录奖励包含2张Artura，2张Vayanne。",
    "提示：俱乐部送2张Artura，2张Vayanne。",
    "提示：多人下里程碑有3张Vayanne，多人通行证可再获得5张，助力解锁豪车！",
    "你说得对，但是 P72 钥匙呢？？？"
  ],
  processRewords: [
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 138, reword: { type: 'seCard', count: 2 } },
    { conditions: 190, reword: { type: 'seCard', count: 5 } },
    { conditions: 250, reword: { type: 'sePart', count: 1 } },
    { conditions: 300, reword: { type: 'seSkin', count: 1 } },
  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 125000 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'artura', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'token', count: 50 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 125000 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 70,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 50000 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ff01', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 80 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 90,
      clubRewords: [{ type: 'token', count: 25 }],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 80 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 110,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 80 },
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 130,
      clubRewords: [{ type: 'token', count: 50 }],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 150 },
            { type: 'credit', count: 125000 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 150,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 60000 },
      ],
      missions: [
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'artura', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'artura', freeTry: true }],
          rewords: [
            { type: 'credit', count: 100000 },
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'artura', freeTry: true }],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'artura', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'artura', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            { type: 'seCard', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 170,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'token', count: 220 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'p72', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 190,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'token', count: 165 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 14,
      unlockConditions: 210,
      clubRewords: [{ type: 'seCard', count: 1 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'naran', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 225,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 80000 },
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ff01', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ff01', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ff01', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ff01', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ff01', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ff01', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 16,
      unlockConditions: 240,
      clubRewords: [{ type: 'token', count: 75 }],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'torino', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 255,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 100000 },
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'token', count: 180 },
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 270,
      clubRewords: [
        { type: 'token', count: 288 },
        { type: 'sePart', count: 1 },
      ],
      missions: [
        
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: false }],
          rewords: [
            { type: 'credit', count: 200000 },
            { type: 'token', count: 200 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: false }],
          rewords: [
            { type: 'credit', count: 800000 },
            { type: 'token', count: 400 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: false }],
          rewords: [
            { type: 'credit', count: 6000000 },
            { type: 'token', count: 750 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: false }],
          rewords: [{ type: 'token', count: 1500 }],
        },
      ],
    },

    {
      stage: 19,
      unlockConditions: 270,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vayanne', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
