import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 185,
  toolCars: [
    {
      car_id: 'stingray',
      fullName: 'Chevrolet Corvette Stingray',
      nickName: 'C8',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'saleens1',
      fullName: 'Saleen S1',
      nickName: '萨林S1',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'gallardo',
      fullName: 'Lamborghini Gallardo LP 560-4',
      nickName: '盖拉多',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'berlinetta',
      fullName: 'Puritalia Berlinetta',
      nickName: '巴林塔',
      star: 5,
      isKeyCar: false,
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
      car_id: '007s',
      fullName: 'Glickenhaus 007S',
      nickName: '007S',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: '1789',
      fullName: 'Vision 1789',
      nickName: '1789',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    
    
    

    {
      car_id: 'spano',
      fullName: 'Spania GTA 2015 GTA Spano',
      nickName: 'Spano',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 50, reword: { type: 'seCard', count: 1 } },
    { conditions: 100, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 1 } },
    { conditions: 250, reword: { type: 'seCard', count: 1 } },
    { conditions: 300, reword: { type: 'seCard', count: 1 } },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 400, reword: { type: 'sePart', count: 1 } },
    { conditions: 450, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    '阶段16使用6星 007S 参赛，可获得 007S 钥匙1把。',
    '从阶段11的C8开始举步维艰，因为此后阶段解锁条件非常高，特别是16阶段，6星007S占用高达12条件，若只有5星007S则只能到达385-12=373条件，不足以开启375条件解锁的第17阶段',
    '进入最终阶段有2种车库，第1种是：5星毒药、5星1789，其他工具车全部满星。',
    '第2种是：四辆车（C8、萨林S1、盖拉多、巴林塔）中有一辆少一星满星，其他工具车全部满星'
  ],
  stages: [
    
    {
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'stingray', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'stingray', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },

    
    {
      unlockConditions: 15,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 30,
      clubRewords: [
        { type: 'token', count: 15 },
      ],
      missions: [
        
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 120000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 45,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 60,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 100000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 75,
      clubRewords: [
        { type: 'token', count: 20 },
      ],
      missions: [
        
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 120000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 95,
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
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 115,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
              
        {
          conditions:14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 30 },
            
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
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 140,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: false }],
          rewords: [
            
            { type: 'seCard', count: 1 },
            { type: 'token', count: 30 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 60 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 165,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 120 },
            { type: 'credit', count: 120000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 195,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'stingray', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'stingray', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'stingray', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 300000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'stingray', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 225,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens1', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 10,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 45 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'saleens1', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 250,
      clubRewords: [
        { type: 'credit', count: 20000 },
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
            { type: 'seCard', count: 2 },
            { type: 'token', count: 45 },
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
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 350000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'gallardo', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 280,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
                
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 4,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 350000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'berlinetta', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 310,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'token', count: 45 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 400000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'veneno', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 90 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 340,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 12,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '007s', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 2 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 375,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: '1789', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 2 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 400,
      clubRewords: [
        { type: 'credit', count: 25000 },
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
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 75 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            
            { type: 'credit', count: 300000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            
            { type: 'credit', count: 600000 },
            { type: 'token', count: 225 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            
            { type: 'credit', count: 1200000 },
            { type: 'sePart', count: 1 },
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            
            { type: 'token', count: 375 },
            
            { type: 'sePart', count: 2 },
          ],
        },
      ],
    },
    

    {
      unlockConditions:400,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'spano', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
