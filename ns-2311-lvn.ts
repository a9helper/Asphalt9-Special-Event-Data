import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: false,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'trezor',
      fullName: 'Renault TreZor',
      nickName: 'TreZor',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'countach',
      fullName: 'Lamborghini Countach 25th Anniversary',
      nickName: '康塔什',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'onyx',
      fullName: 'Peugeot Onyx',
      nickName: '标致',
      isKeyCar: false,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'n',
      fullName: 'Apollo N',
      nickName: '菠萝',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'continental',
      fullName: 'Bentley Continental GT3🔑',
      nickName: '欧陆GT3',
      isKeyCar: true,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'furai',
      fullName: 'Mazda Furai',
      nickName: '风籁',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'elva',
      fullName: 'McLaren Elva',
      nickName: 'Elva',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
    },
    {
      car_id: 'evo',
      fullName: 'Lamborghini Huracan EVO Spyder',
      nickName: 'EVO',
      isKeyCar: false,
      rankLimits: [],
      star: 5,
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
      car_id: 'asterion',
      fullName: 'Lamborghini Asterion',
      nickName: '牛A',
      isKeyCar: false,
      rankLimits: [],
      star: 4,
    },
    {
      car_id: 'w12',
      fullName: 'Volkswagen W12 Coupe🔑',
      nickName: 'W12',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'lpi800',
      fullName: 'Lamborghini Countach LPI 800-4🔑',
      nickName: '新康塔什',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    



    {
      car_id: 'c2',
      fullName: 'Rimac Nevera🔑',
      nickName: 'C2',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
    {
      car_id: 'lvn',
      fullName: 'Bugatti LA Voiture Noire🔑',
      nickName: '黑龙',
      isKeyCar: true,
      rankLimits: [],
      star: 6,
    },
  ],
  processRewords: [
    
    { conditions: 50, reword: { type: 'token', count: 50 } },
    { conditions: 205, reword: { type: 'sePart', count: 1 } },
    
  ],
  notes: [
    "阶段 1 使用 2 星黑龙，可获得黑龙钥匙 1 把。"
  ],
  stages: [
    
    {
      stage: 1,
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: true },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
            { type: 'token', count: 150 },
            
          ],
        },
      ],
    },

    
    {
      stage: 2,
      unlockConditions: 15,
      clubRewords: [],
      missions: [
        
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'trezor', freeTry: false },
            { car_id: 'countach', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'trezor', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 35000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'countach', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 35000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'trezor', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'countach', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'trezor', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'countach', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
      ],
    },
    
    {
      stage: 3,
      unlockConditions: 36,
      clubRewords: [],
      missions: [
        
        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'onyx', freeTry: false },
            { car_id: 'n', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'onyx', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 35000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'n', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 35000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'onyx', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'n', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'onyx', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'n', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 4,
      unlockConditions: 57,
      clubRewords: [],
      missions: [
       
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'continental', freeTry: false },
            { car_id: 'furai', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'furai', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'continental', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'furai', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'continental', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 5,
      unlockConditions: 68,
      clubRewords: [],
      missions: [
       
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'elva', freeTry: false },
            { car_id: 'evo', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'elva', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'evo', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'elva', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 6,
      unlockConditions: 81,
      clubRewords: [],
      missions: [

        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'monza', freeTry: false },
            { car_id: 'asterion', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'asterion', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'monza', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 50000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'asterion', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'monza', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 50 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'asterion', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'monza', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 7,
      unlockConditions: 99,
      clubRewords: [],
      missions: [
     
        {
          conditions: 8,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: false },
            { car_id: 'c2', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 1,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        
        {
          conditions: 1,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'c2', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
      ],
    },
    
    {
      stage: 8,
      unlockConditions: 118,
      clubRewords: [],
      missions: [
       
        
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'w12', freeTry: false },
            { car_id: 'lpi800', freeTry: false },
          ],
          rewords: [
            
            
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'w12', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: false },
          ],
          rewords: [
            { type: 'credit', count: 150000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'w12', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: false },
          ],
          rewords: [
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'w12', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lpi800', freeTry: false },
          ],
          rewords: [
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 1,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [
            { car_id: 'w12', freeTry: false },
          ],
          rewords: [
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    
    
    {
      stage: 9,
      unlockConditions:138,
      clubRewords:[

      ],
      missions:[

        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [
            { car_id: 'lvn', freeTry: false },
          ],
          rewords: [
          ],
        },
        
      ],
    },
    
  ],
}

export default template
