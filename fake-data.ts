const sed2:SED={
  "havePack": true,
  "haveClubRewords": true,
  "haveSkin": true,
  "havePackConditions": true,
  "haveEventKey": true,
  "packConditions": 60,
  "dataTableImage": "https://s3.bmp.ovh/imgs/2022/06/28/b6bc33ae95b28661.jpg",
  "toolCars": [{
    "car_id": "f5",
    "fullName": "Venom F5",
    "nickName": "f5",
    "isKeyCar": true,
    "rankLimits": [],
    "star": 6,
  }, {
    "car_id": "lancer",
    "fullName": "Mitsubishi Lancer Evolution",
    "nickName": "三菱",
    "isKeyCar": false,
    "rankLimits": [1000, 1381],
    "star": 3,
  }, {
    "car_id": "chiron",
    "fullName": "Bugatti Chiron",
    "nickName": "肥龙",
    "isKeyCar": false,
    "rankLimits": [4000, 4755],
    "star": 6
  }, {
    "car_id": "jesko",
    "fullName": "Koenisegg Jesko🔑",
    "nickName": "杰哥",
    "isKeyCar": true,
    "rankLimits": [4000, 4826],
    "star": 6
  }],
  "notes": ["俱乐部赛季可获取3张图纸", "通行证可获取1张图纸，", "高级通行证可再获取3张图纸，1张金卡"],
  "processRewords": [{
    "conditions": 5,
    "reword": {
      "type": "seCard",
      "count": 1
    }
  }, {
    "conditions": 25,
    "reword": {
      "type": "seCard",
      "count": 1
    }
  }, {
    "conditions": 45,
    "reword": {
      "type": "seCard",
      "count": 1
    }
  }, {
    "conditions": 65,
    "reword": {
      "type": "seCard",
      "count": 1
    }
  }, {
    "conditions": 85,
    "reword": {
      "type": "seCard",
      "count": 1
    }
  }, {
    "conditions": 90,
    "reword": {
      "type": "seKey",
      "count": 1
    }
  }],
  "stages": [{
    "clubRewords": [{
      "type": "token",
      "count": 100
    }, {
      "type": "credit",
      "count": 10000
    }, {
      "type": "seCard",
      "count": 5
    }, {
      "type": "sePack",
      "count": 5
    }],
    "unlockConditions": 0,
    "missions": [{
      "toolCars": [{
        "car_id": "lancer",
        "freeTry": true
      }, {
        "car_id": "chiron",
        "freeTry": true
      }],
      "join": {
        "star": 1,
        "rank": -1
      },
      "conditions": 5,
      "rewords": [{
        "type": "token",
        "count": 100
      }, {
        "type": "credit",
        "count": 10000
      }, {
        "type": "seCard",
        "count": 5
      }, {
        "type": "sePack",
        "count": 5
      }]
    }, {
      "toolCars": [{
        "car_id": "lancer",
        "freeTry": false
      }],
      "join": {
        "star": 2,
        "rank": -1
      },
      "conditions": 10,
      "rewords": [{
        "type": "token",
        "count": 100
      }, {
        "type": "credit",
        "count": 10000
      }, {
        "type": "seCard",
        "count": 5
      }, {
        "type": "sePack",
        "count": 5
      }]
    }, {
      "toolCars": [{
        "car_id": "lancer",
        "freeTry": false
      }],
      "join": {
        "star": 3,
        "rank": -1
      },
      "conditions": 15,
      "rewords": [{
        "type": "token",
        "count": 100
      }, {
        "type": "credit",
        "count": 10000
      }, {
        "type": "seCard",
        "count": 5
      }, {
        "type": "sePack",
        "count": 5
      }]
    }]
  }, {
    "clubRewords": [{
      "type": "token",
      "count": 100
    }, {
      "type": "credit",
      "count": 10000
    }, {
      "type": "seCard",
      "count": 5
    }, {
      "type": "sePack",
      "count": 5
    }],
    "unlockConditions": 20,
    "missions": [{
      "toolCars": [{
        "car_id": "chiron",
        "freeTry": false
      }],
      "join": {
        "star": 1,
        "rank": -1
      },
      "conditions": 5,
      "rewords": [{
        "type": "token",
        "count": 100
      }, {
        "type": "credit",
        "count": 10000
      }, {
        "type": "seCard",
        "count": 5
      }, {
        "type": "sePack",
        "count": 5
      }]
    }, {
      "toolCars": [{
        "car_id": "chiron",
        "freeTry": false
      }],
      "join": {
        "star": 2,
        "rank": -1
      },
      "conditions": 10,
      "rewords": [{
        "type": "token",
        "count": 100
      }, {
        "type": "credit",
        "count": 10000
      }, {
        "type": "seCard",
        "count": 5
      }, {
        "type": "sePack",
        "count": 5
      }]
    }, {
      "toolCars": [{
        "car_id": "chiron",
        "freeTry": false
      }],
      "join": {
        "star": 3,
        "rank": -1
      },
      "conditions": 15,
      "rewords": [{
        "type": "token",
        "count": 100
      }, {
        "type": "credit",
        "count": 10000
      }, {
        "type": "seCard",
        "count": 5
      }, {
        "type": "sePack",
        "count": 5
      }]
    }]
  }, {
    "clubRewords": [{
      "type": "token",
      "count": 100
    }, {
      "type": "credit",
      "count": 10000
    }, {
      "type": "seCard",
      "count": 5
    }, {
      "type": "sePack",
      "count": 5
    }],
    "unlockConditions": 50,
    "missions": [{
      "toolCars": [{
        "car_id": "jesko",
        "freeTry": true
      }],
      "join": {
        "star": 1,
        "rank": -1
      },
      "conditions": 5,
      "rewords": [{
        "type": "token",
        "count": 100
      }, {
        "type": "credit",
        "count": 10000
      }, {
        "type": "seCard",
        "count": 5
      }, {
        "type": "sePack",
        "count": 5
      }]
    }, {
      "toolCars": [{
        "car_id": "jesko",
        "freeTry": true
      }],
      "join": {
        "star": 2,
        "rank": -1
      },
      "conditions": 10,
      "rewords": [{
        "type": "token",
        "count": 100
      }, {
        "type": "credit",
        "count": 10000
      }, {
        "type": "seCard",
        "count": 5
      }, {
        "type": "sePack",
        "count": 5
      }]
    }, {
      "toolCars": [{
        "car_id": "jesko",
        "freeTry": false
      }],
      "join": {
        "star": 3,
        "rank": 4826
      },
      "conditions": 15,
      "rewords": [{
        "type": "token",
        "count": 100
      }, {
        "type": "credit",
        "count": 10000
      }, {
        "type": "seCard",
        "count": 5
      }, {
        "type": "sePack",
        "count": 5
      }, {
        "type": "sePart",
        "count": 16
      }, {
        "type": "seSkin",
        "count": 1
      }]
    }]
  }]
}
