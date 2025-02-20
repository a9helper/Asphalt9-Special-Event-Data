import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: true,
  packConditions: 255,
  toolCars: [
    


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
        { type: 'token', count: 18 },
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
        { type: 'token', count: 18 },
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
        { type: 'credit', count: 14888 },
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: true }],
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
      unlockConditions: 70,
      clubRewords: [
        { type: 'credit', count: 28888 },
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
      unlockConditions: 90,
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
      unlockConditions: 110,
      clubRewords: [
        { type: 'credit', count: 28888 },
        { type: 'token', count: 18 },
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
      unlockConditions: 130,
      clubRewords: [
        { type: 'token', count: 8 },
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: true }],
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
      unlockConditions: 150,
      clubRewords: [
        { type: 'credit', count: 38888 },
        { type: 'token', count: 28 },
        
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
      unlockConditions: 170,
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
      unlockConditions: 190,
      clubRewords: [
        { type: 'credit', count: 48888 },
        { type: 'token', count: 18 },
        
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
      unlockConditions: 210,
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
      unlockConditions: 225,
      clubRewords: [
        { type: 'credit', count: 48888 },
        { type: 'token', count: 46 },
        
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
      unlockConditions: 240,
      clubRewords: [
        
        
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
      unlockConditions: 255,
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
      unlockConditions: 270,
      clubRewords: [
        { type: 'credit', count: 28888 },
        { type: 'token', count: 68 },
        
      ],
      missions: [
        {
          conditions: 6,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'pursport', freeTry: false }],
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
          toolCars: [{ car_id: 'pursport', freeTry: false }],
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
          toolCars: [{ car_id: 'pursport', freeTry: false }],
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
          toolCars: [{ car_id: 'pursport', freeTry: false }],
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
          toolCars: [{ car_id: 'pursport', freeTry: false }],
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
          toolCars: [{ car_id: 'pursport', freeTry: false }],
          rewords: [
            { type: 'token', count: 1776 },
            { type: 'credit', count: 1758888 },
            
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
