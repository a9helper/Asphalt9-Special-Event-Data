import { SED } from '../type.d.ts'

const specialEventData: SED = {
  havePack: true,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 255,
  toolCars: [
    {
      car_id: '91150',
      fullName: 'Porsche 911 50 Years Porsche Design',
      nickName: '911 50周年',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'evo37',
      fullName: 'Kimera EVO37🔑',
      nickName: 'EVO37',
      isKeyCar: true,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'bohema',
      fullName: 'Praga Bohema',
      nickName: 'Bohema',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'citroengt',
      fullName: 'Citroen GT by Citroen ',
      nickName: '雪铁龙GT',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: '935',
      fullName: 'Porsche 935(2019)🔑',
      nickName: '935',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'valhalla',
      fullName: 'Aston Martin Valhalla Concept Car',
      nickName: '英灵殿',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'ssc',
      fullName: 'SSC Tuatara',
      nickName: '大蜥蜴',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    









    {
      car_id: 'htt',
      fullName: 'HTT Locus Plethore LC750',
      nickName: 'HTT',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  notes: [
    "注意阶段 18 不提供试驾。"
    
  ],
  processRewords: [
    { conditions: 15, reword: { type: 'seCard', count: 1 } },
    { conditions: 38, reword: { type: 'token', count: 58 } },
    { conditions: 58, reword: { type: 'seCard', count: 2 } },
    { conditions: 68, reword: { type: 'token', count: 88 } },
    { conditions: 98, reword: { type: 'seCard', count: 3 } },
    { conditions: 118, reword: { type: 'token', count: 188 } },
    { conditions: 138, reword: { type: 'seCard', count: 3 } },
    { conditions: 168, reword: { type: 'token', count: 288 } },
    { conditions: 188, reword: { type: 'sePart', count: 1 } },
    { conditions: 198, reword: { type: 'credit', count: 588888 } },
    { conditions: 258, reword: { type: 'sePart', count: 1 } },
    { conditions: 318, reword: { type: 'seCard', count: 10 } },
    { conditions: 338, reword: { type: 'sePart', count: 1 } },
    { conditions: 358, reword: { type: 'seSkin', count: 1 } },











  ],
  stages: [
    // stage 1 to 19
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [
        { type: 'seCard', count: 2 },
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: true }],
          rewords: [
            { type: 'token', count: 54 },
            { type: 'credit', count: 4 * 18888},
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
          toolCars: [{ car_id: '91150', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 28888},
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
        
      ],
      missions: [
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo37', freeTry: true }],
          rewords: [
            { type: 'token', count: 72 },
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
          toolCars: [{ car_id: 'bohema', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5*28888 },
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
        
      ],
      missions: [
        {
          conditions: 11,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: true }],
          rewords: [
            { type: 'token', count: 72 },
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
        { type: 'seCard', count: 2 },
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: true }],
          rewords: [
            { type: 'credit', count: 10 * 18888},
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
        
        
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '935', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 38888 },
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
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            
            
            { type: 'credit', count: 5 * 38888 },
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
        
      ],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            
            
            { type: 'credit', count: 5 * 38888 },
            { type: 'token', count: 112 },
            
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
        { type: 'seCard', count: 2 },
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: true }],
          rewords: [
            { type: 'credit', count: 5 * 38888},
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
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '91150', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '91150', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 48888 },
            { type: 'token', count: 92 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '91150', freeTry: true }],
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
          toolCars: [{ car_id: '91150', freeTry: true }],
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
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo37', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo37', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 58888 },
            { type: 'token', count: 36 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'evo37', freeTry: true }],
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
          toolCars: [{ car_id: 'evo37', freeTry: true }],
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
          toolCars: [{ car_id: 'evo37', freeTry: true }],
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
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'bohema', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'bohema', freeTry: true }],
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
          toolCars: [{ car_id: 'bohema', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'seCard', count: 3 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'bohema', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 114 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'bohema', freeTry: true }],
          rewords: [
            
            { type: 'sePack', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },


      ],
    },
    {
      stage: 14,
      unlockConditions: 210,
      clubRewords: [
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: true }],
          rewords: [
            
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
            
            { type: 'credit', count: 4 * 68888 },
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
            
            { type: 'token', count: 120 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: true }],
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
          toolCars: [{ car_id: 'citroengt', freeTry: true }],
          rewords: [
            { type: 'token', count: 112 },
            
            { type: 'sePack', count: 5 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'citroengt', freeTry: true }],
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
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '935', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '935', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 5 * 68888 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '935', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 236 },//=84+152
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '935', freeTry: true }],
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
          toolCars: [{ car_id: '935', freeTry: true }],
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
          toolCars: [{ car_id: '935', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 2 },
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
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 4 * 88888 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 264 },//=112+152
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
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
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
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
          toolCars: [{ car_id: 'valhalla', freeTry: true }],
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
        
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            
            { type: 'credit', count: 6 * 88888 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 112 },
            { type: 'sePack', count: 2 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
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
          toolCars: [{ car_id: 'ssc', freeTry: true }],
          rewords: [
            { type: 'token', count: 152 },
            
            { type: 'sePack', count: 5 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'ssc', freeTry: true }],
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
        { type: 'seCard', count: 2 },
        
        
      ],
      missions: [
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: false }],
          rewords: [
            
            { type: 'token', count: 152 },
            { type: 'credit', count: 5*28888 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: false }],
          rewords: [
            
            { type: 'token', count: 272 },
            { type: 'credit', count: 4*98888 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: false }],
          rewords: [
            { type: 'token', count: 564 },
            { type: 'credit', count: 4*998888 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'htt', freeTry: false }],
          rewords: [
            { type: 'token', count: 1388 },
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
          toolCars: [{ car_id: 'htt', freeTry: true }],
          rewords: [],
        },
      ],
    },
  ],
}

export default specialEventData
