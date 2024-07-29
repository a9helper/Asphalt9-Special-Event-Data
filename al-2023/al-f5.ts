const alF5: SED = {

  "havePack": true,
  "haveClubRewords": false,
  "haveSkin": true,
  "havePackConditions": true,
  "haveEventKey": false,
  "packConditions": 280,

  "toolCars": [
    {
      "car_id": "elva",
      "fullName": "McLaren Elva",
      "nickName": "Elva",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 5,
    },
    {
      "car_id": "lp640",
      "fullName": "Lamborghini Murcielago LP 640 Roadster",
      "nickName": "蝙蝠",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 5,
    },
    {
      "car_id": "hp",
      "fullName": "Pagani Zonda HP Barchetta🔑",
      "nickName": "Zonda HP",
      "isKeyCar": true,
      "rankLimits": [],
      "star": 5,
    },
    {
      "car_id": "c-x75",
      "fullName": "Jaguar C-X75",
      "nickName": "大捷豹",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 5,
    },
    {
      "car_id": "onyx",
      "fullName": "Peugeot Onyx",
      "nickName": "标致",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 6,
    },
    {
      "car_id": "mk2",
      "fullName": "Ford GT MK II",
      "nickName": "MK2",
      "isKeyCar": true,
      "rankLimits": [],
      "star": 4,
    },
    {
      "car_id": "svj",
      "fullName": "Lamborghini Aventador SVJ Roadster",
      "nickName": "SVJ",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 6,
    },
    {
      "car_id": "f5",
      "fullName": "Hennessey Venom F5",
      "nickName": "F5",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 6,
    },
  ],
  "notes": [],
  "processRewords": [
    { conditions: 100, reword: { type: 'seCard', count: 1 } },
    { conditions: 150, reword: { type: 'seCard', count: 1 } },
    { conditions: 200, reword: { type: 'seCard', count: 1 } },
    { conditions: 250, reword: { type: 'seCard', count: 1 } },
    { conditions: 300, reword: { type: 'seCard', count: 1 } },
    { conditions: 400, reword: { type: 'sePart', count: 1 } },
    { conditions: 450, reword: { type: 'sePart', count: 1 } },
    { conditions: 480, reword: { type: 'sePart', count: 1 } },
  ],
  "stages": [
    {
      unlockConditions: 0,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'elva', freeTry: true, }
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
            { car_id: 'elva', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,

          },
          toolCars: [
            { car_id: 'elva', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: 'elva', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ]
    },
    {
      unlockConditions: 15,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lp640', freeTry: true, }
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
            { car_id: 'lp640', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lp640', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lp640', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 20,
      clubRewords: [],
      missions: [

        {
          conditions: 25,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'f5', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 250 },
          ],
        },
      ],
    },
    {
      unlockConditions: 50,
      clubRewords: [],
      missions: [

        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'hp', freeTry: true, }
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
            { car_id: 'hp', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,

          },
          toolCars: [
            { car_id: 'hp', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: 'hp', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 75,
      clubRewords: [],
      missions: [

        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'cx-75', freeTry: true, }
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
            { car_id: 'cx-75', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,

          },
          toolCars: [
            { car_id: 'cx-75', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: 'cx-75', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 100,
      clubRewords: [],
      missions: [

        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'onyx', freeTry: true, }
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
            { car_id: 'onyx', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,

          },
          toolCars: [
            { car_id: 'onyx', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: 'onyx', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,

          },
          toolCars: [
            { car_id: 'onyx', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 120,
      clubRewords: [],
      missions: [

        {
          conditions: 25,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'f5', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 250 },
          ],
        },
      ],
    },
    {
      unlockConditions: 150,
      clubRewords: [],
      missions: [


        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'mk2', freeTry: true, }
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
            { car_id: 'mk2', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,

          },
          toolCars: [
            { car_id: 'mk2', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: 'mk2', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 180,
      clubRewords: [],
      missions: [
        {
          conditions: 15,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'svj', freeTry: true, }
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
            { car_id: 'svj', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 75000 },
          ],
        },
        {
          conditions: 8,
          join: {
            star: 3,
            rank: 0,

          },
          toolCars: [
            { car_id: 'svj', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 90000 },
            { type: 'token', count: 150 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: 'svj', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 150000 },
            { type: 'seCard', count: 1 },
          ],
        },
        {
          conditions: 5,
          join: {
            star: 5,
            rank: 0,

          },
          toolCars: [
            { car_id: 'svj', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 225000 },
            { type: 'seCard', count: 2 },
          ],
        },
      ],
    },
    {
      unlockConditions: 200,
      clubRewords: [],
      missions: [

        {
          conditions: 25,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'f5', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 250 },
          ],
        },
      ],
    },
    {
      unlockConditions: 210,
      clubRewords: [],
      missions: [

        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'mk2', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 500 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 220,
      clubRewords: [],
      missions: [
        {
          conditions: 16,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'lp640', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 500 },
            { type: 'seCard', count: 5 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 250,
      clubRewords: [],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'cx-75', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 500 },
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 275,
      clubRewords: [],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'elva', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 500 },
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 280,
      clubRewords: [],
      missions: [
        {
          conditions: 26,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'hp', freeTry: true, }
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 500 },
            { type: 'seCard', count: 15 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 300,
      clubRewords: [],
      missions: [
        {
          conditions: 19,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'onyx', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 500 },
            { type: 'seCard', count: 8 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 300,
      clubRewords: [],
      missions: [
        {
          conditions: 26,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'svj', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'token', count: 500 },
            { type: 'seCard', count: 15 },
            { type: 'sePart', count: 1 },
          ],
        },
      ],
    },
    {
      unlockConditions: 350,
      clubRewords: [],
      missions: [

        {
          conditions: 10,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: 'f5', freeTry: false, }
          ],
          rewords: [
          ],
        },
        {
          conditions: 3,
          join: {
            star: 2,
            rank: 0,

          },
          toolCars: [
            { car_id: 'f5', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 450000 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 3,
            rank: 0,

          },
          toolCars: [
            { car_id: 'f5', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 250000 },
            { type: 'token', count: 2000 },
          ],
        },
        {
          conditions: 2,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: 'f5', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 750000 },
            { type: 'seSkin', count: 1 },
          ],
        },
        {
          conditions: 3,
          join: {
            star: 5,
            rank: 0,

          },
          toolCars: [
            { car_id: 'f5', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 1000000 },
            { type: 'sePart', count: 2 },
          ],
        },
        {
          conditions: 4,
          join: {
            star: 6,
            rank: 0,

          },
          toolCars: [
            { car_id: 'f5', freeTry: false, }
          ],
          rewords: [
            { type: 'credit', count: 3000000 },
            { type: 'sePart', count: 3 },
          ],
        },
      ],
    },
    {
      unlockConditions: 350,
      clubRewords: [],
      missions: [
        {
          join: { rank: 0, star: 1, },
          conditions: 0,
          toolCars: [{ car_id: 'f5', freeTry: false }],
          rewords: []
        }
      ],
    },
  ],
}