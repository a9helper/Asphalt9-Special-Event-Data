import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: false,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'lancer',
      fullName: 'Mitsubishi Lancer Evolution',
      nickName: '三菱',
      isKeyCar: false,
      rankLimits: [],
      star: 3,
    },
    {
      car_id: 'alfieri',
      fullName: 'Maserati Alfieri',
      nickName: '玛莎',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'diablo',
      fullName: 'Lamborghini Diablo GT',
      nickName: 'Diablo',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'carrera',
      fullName: 'Porsche Carrera GT',
      nickName: '卡雷拉',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: '007s',
      fullName: 'SCG 007S🔑',
      nickName: '007S',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'xjr',
      fullName: 'Jaguar XJR-9🔑',
      nickName: 'XJR',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'chiron',
      fullName: 'Bugatti Chiron',
      nickName: '布加迪',
      isKeyCar: false,
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
  ],
  processRewords: [
    { conditions: 10, reword: { type: 'credit', count: 50000 } },
    { conditions: 180, reword: { type: 'seCard', count: 3 } },
    { conditions: 250, reword: { type: 'token', count: 200 } },
    { conditions: 300, reword: { type: 'seCard', count: 5 } },
    { conditions: 350, reword: { type: 'sePart', count: 2 } },
    { conditions: 400, reword: { type: 'sePart', count: 3 } },
    

  ],
  notes: [
    
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
          conditions: 19,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'credit', count: 120000 },
            { type: 'token', count: 40 },
          ],
        },
      ],
    },
    {
      stage: 2,
      unlockConditions: 18,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lancer', freeTry: true }],
          rewords: [
            { type: 'credit', count: 32000 },
            { type: 'seCard', count: 1 },
            
          ],
        },
        {
          conditions: 11,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'lancer', freeTry: true }],
          rewords: [
            { type: 'token', count: 20 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 40,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'alfieri', freeTry: true }],
          rewords: [
            { type: 'credit', count: 40000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'alfieri', freeTry: true }],
          rewords: [
            { type: 'token', count: 40 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 55,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: true }],
          rewords: [
            { type: 'credit', count: 108000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: true }],
          rewords: [
            { type: 'token', count: 60 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 70,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'credit', count: 132000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'token', count: 80 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'credit', count: 84000 + 72000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'token', count: 100 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 7,
      unlockConditions: 105,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'credit', count: 170000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 125,
      clubRewords: [
        { type: 'credit', count: 5000 },
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'chiron', freeTry: true }],
          rewords: [
            { type: 'credit', count: 205000 },
            { type: 'seCard', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'chiron', freeTry: true }],
          rewords: [
            { type: 'token', count: 140 },
            { type: 'seCard', count: 2 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'chiron', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 140,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 24,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'credit', count: 272000 },
            { type: 'token', count: 160 },
          ],
        },
      ],
    },
    {
      stage: 10,
      unlockConditions: 160,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'credit', count: 240000 },
            { type: 'token', count: 80 },
          ],
        },
      ],
    },
    {
      stage: 11,
      unlockConditions: 195,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 4,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lancer', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'lancer', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 320000 },

          ],
        },
      ],
    },
    {
      stage: 12,
      unlockConditions: 205,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'alfieri', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'alfieri', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 340000 },

          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'alfieri', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 180 },

          ],
        },
      ],
    },
    {
      stage: 13,
      unlockConditions: 230,
      clubRewords: [
        { type: 'credit', count: 5000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 200 },

          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'diablo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 360000 },

          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 250,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 220 },

          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'credit', count: 380000 },

          ],
        },
        
      ],
    },
    {
      stage: 15,
      unlockConditions: 280,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 240 },

          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 400000 },

          ],
        },
        {
          conditions: 2,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },

          ],
        },
        
      ],
    },
    {
      stage: 16,
      unlockConditions: 300,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 260 },

          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 420000 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'xjr', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 2 },

          ],
        },
      ],
    },
    {
      stage: 17,
      unlockConditions: 325,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'chiron', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'chiron', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 280 },

          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'chiron', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 440000 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'chiron', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 2 },

          ],
        },
      ],
    },
    {
      stage: 18,
      unlockConditions: 340,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            

          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'token', count: 160 },

          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'credit', count: 200000 },

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
            { type: 'token', count: 300 },

          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'credit', count: 460000 },

          ],
        },
        {
          conditions: 3,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'owl', freeTry: true }],
          rewords: [
            { type: 'sePart', count: 3 },

          ],
        },
      ],
    },
    {
      stage: 19,
      unlockConditions: 340,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'lancer', freeTry: true }],
          rewords: [
            
          ],
        },
      ],
    },

    
    
    
  ],
}

export default template
