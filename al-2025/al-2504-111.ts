import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 255,
  toolCars: [
    {
      car_id: 'rtr',
      fullName: 'Ford Mustang RTR Spec 5 10th Anniv.',
      nickName: '野马RTR',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'autentica',
      fullName: 'Lamborghini Autentica🔑',
      nickName: 'Autentica',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'centodieci',
      fullName: 'Bugatti Centodieci🔑',
      nickName: '白龙',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'vanda',
      fullName: 'Vanda Electrics Dendrobium',
      nickName: '万达',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'terzo',
      fullName: 'Lamborghini Terzo Millennio',
      nickName: '电牛',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'revuelto',
      fullName: 'Lamborghini Revuelto',
      nickName: 'R牛',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'saleens7',
      fullName: 'Saleen S7 twin Turbo',
      nickName: '萨林S7',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    


    {
      car_id: 'pursport',
      fullName: 'Bugatti Chiron Pur Sport🔑',
      nickName: 'PS龙',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "注意阶段 18 不提供试驾。"
    
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 1 } },
    { conditions: 38, reword: { type: 'token', count: 18 } },
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 68, reword: { type: 'token', count: 48 } },
    { conditions: 98, reword: { type: 'seCard', count: 2 } },
    { conditions: 118, reword: { type: 'credit', count: 88888 } },
    { conditions: 128, reword: { type: 'token', count: 88 } },
    { conditions: 148, reword: { type: 'seCard', count: 3 } },
    { conditions: 238, reword: { type: 'sePart', count: 1 } },
    { conditions: 258, reword: { type: 'token', count: 88 } },
    { conditions: 298, reword: { type: 'sePart', count: 1 } },
    { conditions: 330, reword: { type: 'seKey', count: 1 } },
    { conditions: 350, reword: { type: 'seSkin', count: 1 } },




  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 8888 },
        { type: 'token', count: 18 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: true }],
          rewords: [
            { type: 'token', count: 54 },
            { type: 'credit', count: 4 * 8888},
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
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'rtr', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 18888},
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
        { type: 'token', count: 18 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            { type: 'token', count: 72},
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
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 28888},
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
        { type: 'token', count: 18 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'vanda', freeTry: true }],
          rewords: [
            { type: 'token', count: 72},
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
        { type: 'credit', count: 14888 },
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * (14888+8888)},
            { type: 'seCard', count: 2 },
            { type: 'sePack', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 70,
      clubRewords: [
        { type: 'credit', count: 28888 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: true }],
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
      stage: 8,
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 28888 },
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
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
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 28888 },
        { type: 'token', count: 18 },
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
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
      stage: 10,
      unlockConditions: 130,
      clubRewords: [
        { type: 'token', count: 8 },
      ],
      missions: [
        {
          conditions: 22,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 18888 },
            { type: 'token', count: 122 },
            { type: 'sePack', count: 4 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 38888 },
        { type: 'token', count: 28 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'rtr', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'rtr', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 38888 },
            { type: 'token', count: 92 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'rtr', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 114 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'rtr', freeTry: true }],
          rewords: [
            
            { type: 'sePack', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 170,
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
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 48888 },
            { type: 'token', count: 36 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 84 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 114 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            
            { type: 'sePack', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 190,
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
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
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
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
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
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
          rewords: [
            
            { type: 'sePack', count: 5 },
            { type: 'token', count: 114 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'centodieci', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },


      ],
    },
    {
      stage: 14,
      unlockConditions: 210,
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
          toolCars: [{ car_id: 'vanda', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'vanda', freeTry: true }],
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
          toolCars: [{ car_id: 'vanda', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'vanda', freeTry: true }],
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
          toolCars: [{ car_id: 'vanda', freeTry: true }],
          rewords: [
            
            { type: 'sePack', count: 5 },
            { type: 'token', count: 114 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'vanda', freeTry: true }],
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
          toolCars: [{ car_id: 'terzo', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: true }],
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
          toolCars: [{ car_id: 'terzo', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 166 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 3 },
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: true }],
          rewords: [
            
            { type: 'sePack', count: 5 },
            { type: 'sePart', count: 2 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'terzo', freeTry: true }],
          rewords: [
            
          ],
        },

      ],
    },
    {
      stage: 16,
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
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
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
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 184 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
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
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            
            { type: 'sePack', count: 7 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'revuelto', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
          ],
        },

      ],
    },
    {
      stage: 17,
      unlockConditions: 255,
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
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
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
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 54 },
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [
            
            { type: 'seCard', count: 4 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [
            
            { type: 'sePack', count: 5 },
            { type: 'token', count: 112 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens7', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 270,
      clubRewords: [
        { type: 'credit', count: 28888 },
        { type: 'token', count: 68 },
        
      ],
      missions: [
        
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: false }],
          rewords: [
            { type: 'credit', count: 5 * 28888 },
            { type: 'token', count: 152 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: false }],
          rewords: [
            { type: 'credit', count: 4 * 98888 },
            { type: 'token', count: 272 },
            
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: false }],
          rewords: [
            { type: 'credit', count: 4 * 998888 },
            { type: 'token', count: 564 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: false }],
          rewords: [
            { type: 'token', count: 1388 }
            
          ],
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
          toolCars: [{ car_id: 'pursport', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
