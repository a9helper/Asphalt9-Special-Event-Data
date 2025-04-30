import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 174,
  toolCars: [
    









    {
      car_id: 'bev',
      fullName: 'Lexus BEV Sport Concept',
      nickName: 'BEV',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    { conditions: 310, reword: { type: 'sePart', count: 1 } },
    { conditions: 344, reword: { type: 'sePart', count: 2 } },















    
  ],
  notes: [
    "显而易见，想要进入阶段 15，需要 4 星 M600 或者 4 星 SF90XX。 ",
    "多于280条件时，你将获得进度与试驾关卡中：",
    "卡雷拉 可获得图纸数量：15 + 30 + 50 = 95",
    "梅奔BS 可获得图纸数量：15 + 20 + 25 = 60",
    "黑拉法 可获得图纸数量：15 + 30 + 50 = 95",
    "M600 可获得图纸数量：15 + 50 + 50 = 115",
    "SF90XX 可获得图纸数量：15 + 50 + 50 = 115",
  ],
  stages: [
    {
      stage: 1,
      unlockConditions: 0,  
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 21,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        
      ],
    },
    {
      stage: 2,
      unlockConditions: 20,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'carrera', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'carrera', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'credit', count: 225000 },
          ],
        },
        
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'carrera', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    // generate stage 3 to 25 like stage 2
    {
      stage: 3,
      unlockConditions: 30,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mbbs', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mbbs', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'credit', count: 225000 },
          ],
        },
        
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mbbs', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    {
      stage: 4,
      unlockConditions: 40,
      clubRewords: [
        { type: 'token', count: 20 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aperta', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aperta', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'credit', count: 225000 },
          ],
        },
        
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aperta', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    {
      stage: 5,
      unlockConditions: 50,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: true },
          ],
          rewords: [
            
          ],
        },
      ],
    },
    {
      stage: 6,
      unlockConditions: 70,
      clubRewords: [
        { type: 'credit', count: 10000 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm600', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm600', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'credit', count: 225000 },
          ],
        },
        
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm600', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
        
      ],
    },
    {
      stage: 7,
      unlockConditions: 80,
      clubRewords: [
        { type: 'token', count: 25 },
        
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90xx', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90xx', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 120 },
            { type: 'credit', count: 225000 },
          ],
        },
        
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90xx', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 5 },
          ],
        },
      ],
    },
    {
      stage: 8,
      unlockConditions: 90,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 25,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: true },
          ],
          rewords: [
            
          ],
        },
      ],
    },
    {
      stage: 9,
      unlockConditions: 140,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'carrera', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 210 },
            { type: 'credit', count: 300000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'carrera', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 10 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        
        
      ],
    },
    {
      stage: 10,
      unlockConditions: 160,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mbbs', freeTry: true },
          ],
          rewords: [
            { type: 'token', count: 210 },
            { type: 'credit', count: 300000 },
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'mbbs', freeTry: true },
          ],
          rewords: [
            { type: 'seCard', count: 10 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        
        
      ],
    },
    {
      stage: 11,
      unlockConditions: 180,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aperta', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 360000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aperta', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'aperta', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 10 },
            { type: 'sePart', count: 1 },
          ],
        },
        
        


        
      ],
    },
    {
      stage: 12,
      unlockConditions: 210,
      clubRewords: [
        
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 20,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: true },
          ],
          rewords: [
            
          ],
        },
        
        
      ],
    },
    {
      stage: 13,
      unlockConditions: 240,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm600', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 360000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm600', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'm600', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 10 },
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    {
      stage: 14,
      unlockConditions: 250,
      clubRewords: [
        { type: 'credit', count: 20000 },
        
        
      ],
      missions: [
        {
          conditions: 13,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90xx', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 360000 },
            
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90xx', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 210 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: 'sf90xx', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 10 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      stage: 15,
      unlockConditions: 270,
      clubRewords: [
        { type: 'token', count: 25 },
        
        
      ],
      missions: [
        
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 6 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
            { type: 'credit', count: 375000 },
            { type: 'seCard', count: 10 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 20 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 300 },
            { type: 'credit', count: 1000000 },
            { type: 'seCard', count: 20 },
          ],
        },
        
        {
          conditions: 2,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 30 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [
            { car_id: '499p', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
        
      ],
    },
    
    
    
    {
      stage: 16,
      unlockConditions: 270,
      clubRewords: [
        
      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '499p', freeTry: true }],
          rewords: [
            
          ],
        },
        
      ],
    },

    
    
    
  ],
}

export default template
