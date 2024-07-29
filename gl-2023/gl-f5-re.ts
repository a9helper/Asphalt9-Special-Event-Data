import { SED } from "./type.d.";

const glF5Re: SED = {

  "havePack": false,
  "haveClubRewords": true,
  "haveSkin": false,
  "havePackConditions": false,
  "haveEventKey": false,
  "packConditions": 280,
  toolCars: [
    {
      "car_id": "911",
      "fullName": "Porsche 911 GTS Coupe",
      "nickName": "911GTS",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 3,
    },
    {
      "car_id": "vulcan",
      "fullName": "Aston Martin Vulcan",
      "nickName": "火神",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 4,
    },
    {
      "car_id": "gtr",
      "fullName": "Nissan GT-R Nismo",
      "nickName": "GTR",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 4,
    },
    {
      "car_id": "centenario",
      "fullName": "Lamborghini Centenario",
      "nickName": "百年牛",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 5,
    },
    {
      "car_id": "fxxk",
      "fullName": "Ferrari FXX K",
      "nickName": "FXXK",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 5,
    },
    {
      "car_id": "vulcano",
      "fullName": "Icona Vulcano Titanium",
      "nickName": "火山",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 5,
    },
    {
      "car_id": "lycan",
      "fullName": "W Motors Lykan Hypersport",
      "nickName": "狼崽",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 5,
    },
    {
      "car_id": "w12",
      "fullName": "VolskWagen W12 Coupe🔑",
      "nickName": "W12",
      "isKeyCar": true,
      "rankLimits": [],
      "star": 6,
    },
    {
      "car_id": "c1",
      "fullName": "Rimac Concept One",
      "nickName": "C1",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 6,
    },
    {
      "car_id": "valhalla",
      "fullName": "Aston Martin Valhalla Concept Car",
      "nickName": "英灵殿",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 6,
    },
    {
      "car_id": "valkyrie",
      "fullName": "Aston Martin Valkyrie",
      "nickName": "女武神",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 6,
    },
    {
      "car_id": "naran",
      "fullName": "Naran Hyper Coupe",
      "nickName": "纳兰",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 6,
    },
    {
      "car_id": "evantra",
      "fullName": "Mazzanti Evantra Millecavalli",
      "nickName": "皇后",
      "isKeyCar": false,
      "rankLimits": [],
      "star": 6,
    },
    {
      "car_id": "owl",
      "fullName": "Aspark Owl",
      "nickName": "猫头鹰",
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
  notes: [],
  processRewords: [
    {
      conditions: 325,
      reword: {
        type: "seCard",
        count: 3,
      }
    },
    {
      conditions: 350,
      reword: {
        type: "sePart",
        count: 1,
      }
    },
  ],
  stages: [
    {
      unlockConditions: 0,
      clubRewords: [
        { type: "token", count: 5 },
        { type: "credit", count: 5000 }
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "911", freeTry: false, },
            { car_id: "w12", freeTry: false, }
          ],
          rewords: [
            { type: "credit", count: 125000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "w12", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 125 },
            { type: "seCard", count: 2 },
          ],
        },
      ]
    },
    {
      unlockConditions: 10,
      clubRewords: [

        { type: "token", count: 5 },
        { type: "credit", count: 5000 }
      ],
      missions: [

        {
          conditions: 25,
          join: {
            star: 0,
            rank: 0,

          },
          toolCars: [
            { car_id: "f5", freeTry: true, },
          ],
          rewords: [
            { type: "credit", count: 250000 },

            { type: "token", count: 250 },
          ],
        },
      ]
    },
    {
      unlockConditions: 20,
      clubRewords: [
        { type: "token", count: 5 },
        { type: "credit", count: 5000 }
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "vulcan", freeTry: false, },
            { car_id: "c1", freeTry: false, }
          ],
          rewords: [
            { type: "credit", count: 125000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "c1", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 125 },
            { type: "seCard", count: 2 },
          ],
        },
      ]
    },
    {
      unlockConditions: 30,
      clubRewords: [
        { type: "token", count: 10 },
        { type: "credit", count: 10000 }
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "gtr", freeTry: false, },
            { car_id: "valhalla", freeTry: false, }
          ],
          rewords: [
            { type: "credit", count: 125000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "valhalla", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 125 },
            { type: "seCard", count: 2 },
          ],
        },
      ]
    },
    {
      unlockConditions: 50,
      clubRewords: [

        { type: "token", count: 10 },
        { type: "credit", count: 10000 }
      ],
      missions: [

        {
          conditions: 25,
          join: {
            star: 0,
            rank: 0,

          },
          toolCars: [
            { car_id: "f5", freeTry: true, },
          ],
          rewords: [
            { type: "credit", count: 250000 },

            { type: "token", count: 250 },
          ],
        },
      ]
    },
    {
      unlockConditions: 65,
      clubRewords: [
        { type: "token", count: 10 },
        { type: "credit", count: 10000 }
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "centenario", freeTry: false, },
            { car_id: "valkyrie", freeTry: false, }
          ],
          rewords: [
            { type: "credit", count: 125000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "valkyrie", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 125 },
            { type: "seCard", count: 2 },
          ],
        },
      ]
    },
    {
      unlockConditions: 80,
      clubRewords: [
        { type: "token", count: 15 },
        { type: "credit", count: 15000 }
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "fxxk", freeTry: false, },
            { car_id: "naran", freeTry: false, }
          ],
          rewords: [
            { type: "credit", count: 125000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "naran", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 125 },
            { type: "seCard", count: 2 },
          ],
        },
      ]
    },
    {
      unlockConditions: 100,
      clubRewords: [

        { type: "token", count: 15 },
        { type: "credit", count: 15000 }
      ],
      missions: [

        {
          conditions: 25,
          join: {
            star: 0,
            rank: 0,

          },
          toolCars: [
            { car_id: "f5", freeTry: true, },
          ],
          rewords: [
            { type: "credit", count: 250000 },

            { type: "token", count: 250 },
          ],
        },
      ]
    },
    {
      unlockConditions: 120,
      clubRewords: [
        { type: "token", count: 15 },
        { type: "credit", count: 15000 }
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "vulcano", freeTry: false, },
            { car_id: "evantra", freeTry: false, }
          ],
          rewords: [
            { type: "credit", count: 125000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "evantra", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 125 },
            { type: "seCard", count: 2 },
          ],
        },
      ]
    },
    {
      unlockConditions: 130,
      clubRewords: [
        { type: "token", count: 15 },
        { type: "credit", count: 15000 }
      ],
      missions: [
        {
          conditions: 14,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "lycan", freeTry: false, },
            { car_id: "owl", freeTry: false, }
          ],
          rewords: [
            { type: "credit", count: 125000 },

          ],
        },
        {
          conditions: 7,
          join: {
            star: 1,
            rank: 0,

          },
          toolCars: [
            { car_id: "owl", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 125 },
            { type: "seCard", count: 2 },
          ],
        },
      ]
    },
    {
      unlockConditions: 150,
      clubRewords: [

        { type: "token", count: 20 },
        { type: "credit", count: 20000 }
      ],
      missions: [

        {
          conditions: 25,
          join: {
            star: 0,
            rank: 0,

          },
          toolCars: [
            { car_id: "f5", freeTry: true, },
          ],
          rewords: [
            { type: "credit", count: 250000 },

            { type: "token", count: 250 },
          ],
        },
      ]
    },
    {
      unlockConditions: 175,
      clubRewords: [
        { type: "token", count: 20 },
        { type: "credit", count: 20000 }
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 3,
            rank: 0,

          },
          toolCars: [
            { car_id: "911", freeTry: false, },
            { car_id: "w12", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 375 },
            { type: "credit", count: 750000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,

          },
          toolCars: [
            { car_id: "w12", freeTry: false, }
          ],
          rewords: [
            { type: "seCard", count: 5 },
            { type: "sePart", count: 1 },

          ],
        },
      ]
    },
    {
      unlockConditions: 200,
      clubRewords: [
        { type: "token", count: 25 },
        { type: "credit", count: 25000 }
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: "vulcan", freeTry: false, },
            { car_id: "c1", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 375 },
            { type: "credit", count: 750000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,

          },
          toolCars: [
            { car_id: "c1", freeTry: false, }
          ],
          rewords: [
            { type: "seCard", count: 5 },
            { type: "sePart", count: 1 },

          ],
        },
      ]
    },
    {
      unlockConditions: 210,
      clubRewords: [
        { type: "token", count: 25 },
        { type: "credit", count: 25000 }
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 4,
            rank: 0,

          },
          toolCars: [
            { car_id: "gtr", freeTry: false, },
            { car_id: "valhalla", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 375 },
            { type: "credit", count: 750000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,

          },
          toolCars: [
            { car_id: "valhalla", freeTry: false, }
          ],
          rewords: [
            { type: "seCard", count: 5 },
            { type: "sePart", count: 1 },

          ],
        },
      ]
    },
    {
      unlockConditions: 220,
      clubRewords: [
        { type: "token", count: 25 },
        { type: "credit", count: 25000 }
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,

          },
          toolCars: [
            { car_id: "centenario", freeTry: false, },
            { car_id: "valkyrie", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 375 },
            { type: "credit", count: 750000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,

          },
          toolCars: [
            { car_id: "valkyrie", freeTry: false, }
          ],
          rewords: [
            { type: "seCard", count: 5 },
            { type: "sePart", count: 1 },

          ],
        },
      ]
    },
    {
      unlockConditions: 230,
      clubRewords: [
        { type: "token", count: 30 },
        { type: "credit", count: 30000 }
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,

          },
          toolCars: [
            { car_id: "fxxk", freeTry: false, },
            { car_id: "naran", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 375 },
            { type: "credit", count: 750000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,

          },
          toolCars: [
            { car_id: "naran", freeTry: false, }
          ],
          rewords: [
            { type: "seCard", count: 5 },
            { type: "sePart", count: 1 },

          ],
        },
      ]
    },
    {
      unlockConditions: 240,
      clubRewords: [
        { type: "token", count: 30 },
        { type: "credit", count: 30000 }
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,

          },
          toolCars: [
            { car_id: "vulcano", freeTry: false, },
            { car_id: "evantra", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 375 },
            { type: "credit", count: 750000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,

          },
          toolCars: [
            { car_id: "evantra", freeTry: false, }
          ],
          rewords: [
            { type: "seCard", count: 5 },
            { type: "sePart", count: 1 },

          ],
        },
      ]
    },
    {
      unlockConditions: 250,
      clubRewords: [
        { type: "token", count: 30 },
        { type: "credit", count: 30000 }
      ],
      missions: [
        {
          conditions: 10,
          join: {
            star: 5,
            rank: 0,

          },
          toolCars: [
            { car_id: "lycan", freeTry: false, },
            { car_id: "owl", freeTry: false, }
          ],
          rewords: [
            { type: "token", count: 375 },
            { type: "credit", count: 750000 },

          ],
        },
        {
          conditions: 9,
          join: {
            star: 6,
            rank: 0,

          },
          toolCars: [
            { car_id: "owl", freeTry: false, }
          ],
          rewords: [
            { type: "seCard", count: 5 },
            { type: "sePart", count: 1 },

          ],
        },
      ]
    },
    {
      unlockConditions: 300,
      clubRewords: [

      ],
      missions: [
        {
          conditions: 0,
          join: {
            star: 1,
            rank: 0
          },
          toolCars: [
            { car_id: "f5", freeTry: false, }

          ],
          rewords: []
        }
      ]
    },
  ]
}