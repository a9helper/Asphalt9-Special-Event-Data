import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 255,
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
      car_id: 'valour',
      fullName: 'Aston Martin Valour🔑',
      nickName: 'Valour',
      isKeyCar: true,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'visionamg',
      fullName: 'Mercedes-Benz 2022 Showcar Vision AMG',
      nickName: 'VisionAMG',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: '21c',
      fullName: 'Czinger 21C',
      nickName: '21C',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
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
      car_id: 'bc',
      fullName: 'Pagani Huayra BC',
      nickName: 'BC',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'mc20',
      fullName: 'Maserati MC20🔑',
      nickName: 'MC20',
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
      car_id: 'vision111',
      fullName: 'Mercedes-Benz Vision One-Eleven',
      nickName: 'Vision 111',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "注意阶段 20 不提供试驾。"
    
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 1 } },
    { conditions: 48, reword: { type: 'token', count: 18 } },
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 68, reword: { type: 'token', count: 48 } },
    { conditions: 88, reword: { type: 'seCard', count: 2 } },
    { conditions: 118, reword: { type: 'credit', count: 88888 } },
    { conditions: 128, reword: { type: 'token', count: 88 } },
    { conditions: 178, reword: { type: 'seCard', count: 3 } },
    { conditions: 238, reword: { type: 'token', count: 188 } },
    { conditions: 258, reword: { type: 'sePart', count: 1 } },
    { conditions: 298, reword: { type: 'token', count: 288 } },
    { conditions: 328, reword: { type: 'seKey', count: 1 } },
    { conditions: 358, reword: { type: 'sePart', count: 1 } },








  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 18888 },
        { type: 'token', count: 18 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: true }],
          rewords: [
            { type: 'token', count: 54 },
            { type: 'credit', count: 3 * 8888},
            { type: 'seCard', count: 1 },
            { type: 'sePack', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sagaris', freeTry: true }],
          rewords: [
            { type: 'credit', count: 4 * 28888},
            { type: 'seCard', count: 1 },
            { type: 'sePack', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'sePack', count: 1 },
        { type: 'credit', count: 28888 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valour', freeTry: true }],
          rewords: [
            { type: 'credit', count: 4*28888 },
            { type: 'seCard', count: 1 },
            { type: 'sePack', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
          rewords: [
            { type: 'token', count: 72 },
            { type: 'seCard', count: 1 },
            { type: 'sePack', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 28888 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '21c', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5*28888 },
            { type: 'seCard', count: 1 },
            { type: 'sePack', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        { type: 'sePack', count: 1 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 72 },
            { type: 'seCard', count: 1 },
            { type: 'sePack', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 60,
      clubRewords: [
        { type: 'sePack', count: 1 },
        { type: 'credit', count: 18888 },
        
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 3 * 18888 + 4 * 28888 },
            
            { type: 'seCard', count: 1 },
            { type: 'sePack', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 75,
      clubRewords: [
        { type: 'credit', count: 28888 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 28888 },
            { type: 'token', count: 76 },
            { type: 'seCard', count: 2 },
            { type: 'sePack', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 28888 },
        { type: 'token', count: 38 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 28888 },
            { type: 'token', count: 76 },
            { type: 'seCard', count: 2 },
            { type: 'sePack', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 105,
      clubRewords: [
        { type: 'token', count: 18 },
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 28888 },
            { type: 'token', count: 72 },
            { type: 'seCard', count: 2 },
            { type: 'sePack', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 125,
      clubRewords: [
        { type: 'credit', count: 38888 },
        { type: 'token', count: 18 },
        
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 38888 },
            { type: 'token', count: 122 },
            { type: 'sePack', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 145,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sagaris', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'sagaris', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 38888 },
            { type: 'token', count: 92 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'sagaris', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 114 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'sagaris', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
            { type: 'sePack', count: 4 },
          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 165,
      clubRewords: [
        { type: 'credit', count: 48888 },
        { type: 'token', count: 18 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valour', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'valour', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 48888 },
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'valour', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 114 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'valour', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
            { type: 'sePack', count: 4 },
          ],
        },


      ],
    },
    {
      stage: 14,
      unlockConditions: 180,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 9,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 48888 },
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 114 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'visionamg', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
            { type: 'sePack', count: 4 },
          ],
        },

      ],
    },
    {
      stage: 15,
      unlockConditions: 195,
      clubRewords: [
        { type: 'credit', count: 48888 },
        { type: 'token', count: 46 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '21c', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '21c', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 48888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '21c', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '21c', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '21c', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 114 },
            { type: 'sePack', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '21c', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },

      ],
    },
    {
      stage: 16,
      unlockConditions: 210,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 3,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 48888 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [
            { type: 'token', count: 114 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'one77', freeTry: true }],
          rewords: [
            
            { type: 'sePack', count: 4 },
            { type: 'sePart', count: 1 },
          ],
        },

      ],
    },
    {
      stage: 17,
      unlockConditions: 225,
      clubRewords: [
        { type: 'token', count: 18 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 48888 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 166 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 2 },
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            
            
            { type: 'sePack', count: 4 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'bc', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 240,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 68888 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 184 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            
            
            { type: 'sePack', count: 6 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'mc20', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 19,
      
      unlockConditions: 255,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'token', count: 18 },

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
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 6 * 68888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 54 },
            { type: 'sePack', count: 2 },
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
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            
            
            { type: 'sePack', count: 4 },
            { type: 'token', count: 112 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'evija', freeTry: true }],
          rewords: [
            
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 20,
      
      unlockConditions: 270,
      clubRewords: [
        { type: 'token', count: 68 },
        { type: 'credit', count: 28888 },

      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'token', count: 152 },
            { type: 'credit', count: 5 * 28888 },

          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'token', count: 272 },
            { type: 'credit', count: 4 * 98888 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'token', count: 564 },
            { type: 'credit', count: 4 * 998888 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: false }],
          rewords: [
            { type: 'token', count: 1388 },
            
          ],
        },
      ],
    },
    {
      stage: 21,
      
      unlockConditions: 270,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vision111', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
