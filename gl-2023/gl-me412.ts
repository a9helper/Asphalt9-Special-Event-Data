import { SED } from '../type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: true,
  haveEventKey: false,
  packConditions: 150,
  toolCars: [
    {
      car_id: 'boxster',
      fullName: 'Porsche Boxster 25th',
      nickName: 'Boxster',
      star: 3,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'arashaf10',
      fullName: 'Arash AF10',
      nickName: 'AF10',
      star: 4,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'ares',
      fullName: 'Ares S1',
      nickName: 'Ares S1',
      star: 5,
      isKeyCar: true,
      rankLimits: [],
    },
    {
      car_id: 'ap-0',
      fullName: 'Apex AP-0',
      nickName: 'Apex',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'carrera',
      fullName: 'Porsche Carrera GT',
      nickName: '卡雷拉',
      star: 5,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'victor',
      fullName: 'Aston Martin Victor',
      nickName: '维克多',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
    {
      car_id: 'at96',
      fullName: 'Techrules AT96 Track Version',
      nickName: '腾风',
      star: 6,
      isKeyCar: true,
      rankLimits: [],
    },
    

    {
      car_id: 'me412',
      fullName: 'Chrysler ME412',
      nickName: 'ME412',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 75, reword: { type: 'seCard', count: 1 } },
    { conditions: 150, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 1 } },
    { conditions: 250, reword: { type: 'seCard', count: 1 } },
    { conditions: 300, reword: { type: 'seCard', count: 1 } },
    { conditions: 350, reword: { type: 'sePart', count: 1 } },
    { conditions: 375, reword: { type: 'sePart', count: 1 } },
    { conditions: 400, reword: { type: 'seSkin', count: 1 } },
  ],
  notes: [
    '阶段17使用6星腾风参赛，可获得腾风钥匙一把。',
    '大奖赛Ares S1是很重要的工具车，即使4星也最多走到阶段14。'
  ],
  stages: [
    
    {
      unlockConditions: 0,
      clubRewords: [
        { type: 'credit', count: 10000 },
      ],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'boxster', freeTry: false }],
          rewords: [{ type: 'credit', count: 100000 }],
        },
        {
          conditions: 12,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'boxster', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'token', count: 75 },
            { type: 'credit', count: 200000 },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 75 },
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
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 50,
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
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 75,
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
          toolCars: [{ car_id: 'ap-0', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap-0', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap-0', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 90,
      clubRewords: [
        { type: 'token', count: 20 },
      ],
      missions: [
        
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
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
          conditions: 10,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 135,
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
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 150,
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
          toolCars: [{ car_id: 'at96', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 250000 },
          ],
        },
        {
          conditions: 6,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'token', count: 75 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 175,
      clubRewords: [
        { type: 'token', count: 25 },
      ],
      missions: [
        
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: true }],
          rewords: [
            
            { type: 'token', count: 150 },
            { type: 'credit', count: 250000 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 200,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'boxster', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 8,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'boxster', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'boxster', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
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
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 7,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'arashaf10', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 4 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 240,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [

          ],
        },
        {
          conditions: 8,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ares', freeTry: true }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 260,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap-0', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap-0', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 625000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'ap-0', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 290,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 5,
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
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 625000 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'carrera', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 315,
      clubRewords: [
        { type: 'credit', count: 20000 },
      ],
      missions: [
        
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 6,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 1 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 7,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'victor', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
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
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: false }],
          rewords: [

          ],
        },
        {
          conditions: 7,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 2 },
            { type: 'credit', count: 200000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 3 },
            { type: 'credit', count: 500000 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'at96', freeTry: false }],
          rewords: [
            { type: 'seCard', count: 6 },
            { type: 'sePart', count: 1 },
            { type: 'token', count: 150 },
          ],
        },
      ],
    },
    
    {
      unlockConditions: 370,
      clubRewords: [
        { type: 'credit', count: 25000 },
      ],
      missions: [
        
        {
          conditions: 5,
          join: {
            star: 1,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            
          ],
        },
        {
          conditions: 7,
          join: {
            star: 2,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'token', count: 100 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            
            { type: 'credit', count: 225000 },
            { type: 'token', count: 250 },
          ],
        },
        {
          conditions: 9,
          join: {
            star: 4,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            
            { type: 'credit', count: 300000 },
            { type: 'token', count: 500 },
            { type: 'sePart', count: 1 },
          ],
        },
        {
          conditions: 11,
          join: {
            star: 5,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            
            { type: 'credit', count: 800000 },
            { type: 'token', count: 750 },
            { type: 'sePart', count: 2 },
            
          ],
        },
        {
          conditions: 6,
          join: {
            star: 6,
            rank: 0,
          },
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            
            { type: 'credit', count: 1200000 },
            
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
          toolCars: [{ car_id: 'me412', freeTry: false }],
          rewords: [
            
          ],
        },
      ],
    },
  ],
}

export default template
