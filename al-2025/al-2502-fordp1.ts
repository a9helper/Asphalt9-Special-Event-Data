import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 210,
  toolCars: [
    {
      car_id: 'solus',
      fullName: 'Mclaren Solus GT🔑',
      nickName: 'Solus GT',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'sf90xx',
      fullName: 'Ferrari SF90 XX Stradale',
      nickName: 'SF90XX',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
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
      car_id: 'huayrar',
      fullName: 'Pagani Huayra R',
      nickName: 'Huayra R',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'veyron',
      fullName: 'Bugatti Veyron 16.4 Grand Sport Vitesse',
      nickName: '威龙',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'senna',
      fullName: 'McLaren Senna',
      nickName: '塞纳',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'monza',
      fullName: 'Ferrari Monza SP1',
      nickName: 'Monza',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'mistral',
      fullName: 'Bugatti Mistral🔑',
      nickName: 'Mistral',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },




    {
      car_id: 'fordp1',
      fullName: 'Ford Team FordZilla P1',
      nickName: '福特P1',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "注意阶段 18 不提供试驾。"
    
  ],
  processRewords: [
    { conditions: 8, reword: { type: 'credit', count: 18888 } },
    { conditions: 18, reword: { type: 'token', count: 18 } },
    { conditions: 58, reword: { type: 'seCard', count: 1 } },
    { conditions: 78, reword: { type: 'token', count: 28 } },
    { conditions: 88, reword: { type: 'credit', count: 128888 } },
    { conditions: 128, reword: { type: 'seCard', count: 2 } },
    { conditions: 228, reword: { type: 'seCard', count: 3 } },
    { conditions: 238, reword: { type: 'seSkin', count: 1 } },
    { conditions: 308, reword: { type: 'sePart', count: 1 } },









  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 48888 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'token', count: 84 },
            { type: 'credit', count: 3*18888},
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 10,
      clubRewords: [
        { type: 'token', count: 28 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'solus', freeTry: true }],
          rewords: [
            { type: 'token', count: 48+56 },
            { type: 'credit', count: 3*18888},
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 3,
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 48888 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'sf90xx', freeTry: true }],
          rewords: [
            { type: 'token', count: 48+56 },
            { type: 'credit', count: 3*18888},
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 30,
      clubRewords: [
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            { type: 'token', count: 48+56 },
            { type: 'credit', count: 3*18888},
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 48888 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 48+56 },
            { type: 'credit', count: 3*18888},
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 50,
      clubRewords: [
        { type: 'token', count: 28 },
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'token', count: 56 },
            { type: 'credit', count: 5*18888},
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 62,
      clubRewords: [
        { type: 'credit', count: 48888 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'token', count: 48+56 },
            { type: 'credit', count: 2*18888},
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 75,
      clubRewords: [
        { type: 'token', count: 28 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'token', count: 48+50 },
            { type: 'credit', count: 40000},
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 85,
      clubRewords: [
        { type: 'credit', count: 58888 },
        { type: 'seCard', count: 1 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'token', count: 48+56 },
            { type: 'credit', count: 2 * 18888},
            { type: 'seCard', count: 3 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 95,
      clubRewords: [
        { type: 'token', count: 48 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [
            { type: 'token', count: 56 },
            { type: 'credit', count: 5*28888},
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 108,
      clubRewords: [
        { type: 'credit', count: 58888 },
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
            { type: 'token', count: 16 },
            { type: 'credit', count: 6*28888},
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            { type: 'token', count: 114 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'autentica', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 125,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'token', count: 16 },
            { type: 'credit', count: 6*28888},
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*98888},
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'token', count: 96 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'senna', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },

      ],
    },
    {
      stage: 13,
      unlockConditions: 140,
      clubRewords: [
        { type: 'credit', count: 78888 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'token', count: 16 },
            { type: 'credit', count: 6*28888},
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'credit', count: 2*148888},
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'token', count: 116 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'monza', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },


      ],
    },
    {
      stage: 14,
      unlockConditions: 155,
      clubRewords: [
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'token', count: 16 },
            { type: 'credit', count: 6*28888},
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*128888},
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'token', count: 76 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            
          ],
        },

      ],
    },
    {
      stage: 15,
      unlockConditions: 170,
      clubRewords: [
        { type: 'seCard', count: 1 },
        { type: 'credit', count: 78888 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 16 },
            { type: 'credit', count: 6*28888},
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'token', count: 114 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 144 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'huayrar', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },

      ],
    },
    {
      stage: 16,
      unlockConditions: 185,
      clubRewords: [
        { type: 'token', count: 78 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'token', count: 16 },
            { type: 'credit', count: 6*28888},
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'token', count: 114 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 4 },
            
          ],
        },
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'token', count: 156 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'veyron', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 98888 },
        { type: 'seCard', count: 1 },
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'token', count: 16 },
            { type: 'credit', count: 6*28888},
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'credit', count: 3*128888 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'token', count: 114 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'token', count: 156 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'mistral', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            
          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 220,
      clubRewords: [
        { type: 'sePart', count: 1 },
        { type: 'token', count: 288 },
        
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
            { type: 'credit', count: 6*48888 },
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
            { type: 'token', count: 204 },
          ],
        },
        
        
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 748888 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'credit', count: 988888 },
            { type: 'token', count: 688 },
            
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: false }],
          rewords: [
            { type: 'token', count: 1776 },
            { type: 'credit', count: 1758888 },
            
          ],
        },
      ],
    },
    {
      stage: 19,
      
      unlockConditions: 222,
      clubRewords: [],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'fordp1', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
