import { SED } from './type.d.ts'

const template: SED = {
  havePack: false,
  haveClubRewords: true,
  haveSkin: true,
  havePackConditions: false,
  haveEventKey: false,
  packConditions: 0,
  toolCars: [
    {
      car_id: 'lancer',
      fullName: 'Mitsubishi Lancer Evolution',
      nickName: '有手就行',
      star: 3,
      isKeyCar: false,
      rankLimits: [],
    },

    {
      car_id: 'evija',
      fullName: 'Lotus Evija',
      nickName: '电莲花',
      star: 6,
      isKeyCar: false,
      rankLimits: [],
    },
  ],
  processRewords: [
    { conditions: 48, reword: { type: 'seSkin', count: 1 } },
    { conditions: 88, reword: { type: 'seCard', count: 2 } },
    { conditions: 140, reword: { type: 'seCard', count: 2 } },
    { conditions: 200, reword: { type: 'sePart', count: 1 } },
    { conditions: 222, reword: { type: 'sePart', count: 1 } },
  ],
  notes: [
    "不允许你们还有人没解锁电莲花！"
  ],
  stages: [
    {
      unlockConditions:0,
      clubRewords:[
        {type:'credit', count: 38888},
        {type:'seCard', count: 1},
      ],
      missions:[
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 1},
            {type:'token', count: 60},
            {type:'credit', count: 34440},

          ],
        }
      ]
    },
    {
      unlockConditions:10,
      clubRewords:[
        {type:'token', count: 50},
        {type:'seCard', count: 1},

      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 2},
            {type:'token', count: 75},
            {type:'credit', count: 34440},

          ],
        }

      ]
    },
    {
      unlockConditions:20,
      clubRewords:[
        {type:'credit', count: 38888},
        {type:'seCard', count: 1},

      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'evija', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 2},
            {type:'token', count: 90},
            {type:'credit', count: 34440},

          ],
        }

      ]
    },
    {
      unlockConditions:35,
      clubRewords:[
        {type:'seCard', count: 1},

      ],
      missions:[
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 3},
            {type:'token', count: 90},
            {type:'credit', count: 34440},

          ],
        }

      ]
    },
    {
      unlockConditions:45,
      clubRewords:[
        {type:'credit', count: 38888},
        {type:'seCard', count: 1},

      ],
      missions:[
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 3},
            {type:'token', count: 90},
            {type:'credit', count: 44440},

          ],
        }
      ]
    },
    {
      unlockConditions:55,
      clubRewords:[
        {type:'token', count: 50},
        {type:'seCard', count: 1},

      ],
      missions:[
        {
          conditions: 18,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 2},
            {type:'token', count: 90},
            {type:'credit', count: 38664},

          ],
        }

      ]
    },
    {
      unlockConditions:65,
      clubRewords:[
        {type:'credit', count: 48888},

      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'evija', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 2},
            {type:'token', count: 80},
            {type:'credit', count: 38664},

          ],
        }

      ]
    },
    {
      unlockConditions:80,
      clubRewords:[
        {type:'credit', count: 48888},
        {type:'token', count: 50},

      ],
      missions:[
        {
          conditions: 17,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 3},
            {type:'token', count: 120},
            {type:'credit', count: 3*(16888+12888)},

          ],
        }
      ]
    },
    {
      unlockConditions:90,
      clubRewords:[
        {type:'seCard', count: 2},

      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 4},
            {type:'token', count: 120},
            {type:'credit', count: 3*(12888)},

          ],
        }
      ]
    },
    {
      unlockConditions:100,
      clubRewords:[
        {type:'credit', count: 38888},
        {type:'token', count: 75},

      ],
      missions:[
        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 5},
            {type:'token', count: 150},
            {type:'credit', count: 3*(12888)},

          ],
        }
      ]
    },
    {
      unlockConditions:110,
      clubRewords:[
        {type:'credit', count: 88888},
        {type:'seCard', count: 2},

      ],
      missions:[

        {
          conditions: 13,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 6},
            {type:'token', count: 150},
            {type:'credit', count: 3*(12888)},
            {type:'sePart', count: 1},

          ],
        }
      ]
    },
    {
      unlockConditions:120,
      clubRewords:[
        {type:'credit', count: 88888},
        {type:'seCard', count: 2},

      ],
      missions:[
        {
          conditions: 12,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 5},
            {type:'token', count: 150},
            {type:'credit', count: 3*(12888)},
            {type:'sePart', count: 1},

          ],
        }

      ]
    },
    {
      unlockConditions:130,
      clubRewords:[
        {type:'credit', count: 88888},
        {type:'seCard', count: 2},

      ],
      missions:[
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lancer', freeTry: true, }
          ],
          rewords: [
            {type:'seCard', count: 7},
            {type:'token', count: 150},
            {type:'credit', count: 3*(12888)},
            {type:'sePart', count: 2},

          ],
        }

      ]
    },
    {
      unlockConditions:140,
      clubRewords:[
        {type:'token', count: 88},

      ],
      missions:[

        {
          conditions: 27,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'evija', freeTry: false, }
          ],
          rewords: [
            
            {type:'token', count: 3*(188+88)},
            {type:'sePart', count: 1},
            {type:'credit', count: 5*(48888+88888+22888)},

          ],
        }
      ]
    },
    {
      unlockConditions: 145,
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
            { car_id: 'evija', freeTry: false, }
          ],
          rewords: [

          ],
        }
      ]
    },
  ],
}

export default template
