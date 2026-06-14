export interface Question {
  id: number;
  content: string;
  type: 'single' | 'multi' | 'judge';
  options: { key: string; content: string }[];
  answer: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  icon: string;
}

export interface QuizSession {
  id: string;
  categoryId: string;
  questions: number[];
  answers: Record<number, string[]>;
  startTime: number;
  endTime?: number;
  score?: number;
}

export const categories: Category[] = [
  { id: 'safety-management', name: '安全管理', description: '安全生产管理相关知识', questionCount: 167, icon: 'shield' },
  { id: 'laws', name: '法律法规', description: '安全生产法律法规知识', questionCount: 102, icon: 'book' },
  { id: 'civil-engineering', name: '土建综合安全技术', description: '土建工程安全技术知识', questionCount: 141, icon: 'building' },
  { id: 'mechanical', name: '机械设备安全技术', description: '机械设备安全操作知识', questionCount: 134, icon: 'cog' },
  { id: 'all', name: '综合题库', description: '包含所有类型题目', questionCount: 544, icon: 'layers' }
];

export const categoryQuestionMap = {
  "safety-management": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    124,
    125,
    126,
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167
  ],
  "laws": [
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    190,
    191,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    240,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250,
    251,
    252,
    253,
    254,
    255,
    256,
    257,
    258,
    259,
    260,
    261,
    262,
    263,
    264,
    265,
    266,
    267,
    268,
    269
  ],
  "civil-engineering": [
    270,
    271,
    272,
    273,
    274,
    275,
    276,
    277,
    278,
    279,
    280,
    281,
    282,
    283,
    284,
    285,
    286,
    287,
    288,
    289,
    290,
    291,
    292,
    293,
    294,
    295,
    296,
    297,
    298,
    299,
    300,
    301,
    302,
    303,
    304,
    305,
    306,
    307,
    308,
    309,
    310,
    311,
    312,
    313,
    314,
    315,
    316,
    317,
    318,
    319,
    320,
    321,
    322,
    323,
    324,
    325,
    326,
    327,
    328,
    329,
    330,
    331,
    332,
    333,
    334,
    335,
    336,
    337,
    338,
    339,
    340,
    341,
    342,
    343,
    344,
    345,
    346,
    347,
    348,
    349,
    350,
    351,
    352,
    353,
    354,
    355,
    356,
    357,
    358,
    359,
    360,
    361,
    362,
    363,
    364,
    365,
    366,
    367,
    368,
    369,
    370,
    371,
    372,
    373,
    374,
    375,
    376,
    377,
    378,
    379,
    380,
    381,
    382,
    383,
    384,
    385,
    386,
    387,
    388,
    389,
    390,
    391,
    392,
    393,
    394,
    395,
    396,
    397,
    398,
    399,
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    409,
    410
  ],
  "mechanical": [
    411,
    412,
    413,
    414,
    415,
    416,
    417,
    418,
    419,
    420,
    421,
    422,
    423,
    424,
    425,
    426,
    427,
    428,
    429,
    430,
    431,
    432,
    433,
    434,
    435,
    436,
    437,
    438,
    439,
    440,
    441,
    442,
    443,
    444,
    445,
    446,
    447,
    448,
    449,
    450,
    451,
    452,
    453,
    454,
    455,
    456,
    457,
    458,
    459,
    460,
    461,
    462,
    463,
    464,
    465,
    466,
    467,
    468,
    469,
    470,
    471,
    472,
    473,
    474,
    475,
    476,
    477,
    478,
    479,
    480,
    481,
    482,
    483,
    484,
    485,
    486,
    487,
    488,
    489,
    490,
    491,
    492,
    493,
    494,
    495,
    496,
    497,
    498,
    499,
    500,
    501,
    502,
    503,
    504,
    505,
    506,
    507,
    508,
    509,
    510,
    511,
    512,
    513,
    514,
    515,
    516,
    517,
    518,
    519,
    520,
    521,
    522,
    523,
    524,
    525,
    526,
    527,
    528,
    529,
    530,
    531,
    532,
    533,
    534,
    535,
    536,
    537,
    538,
    539,
    540,
    541,
    542,
    543,
    544
  ]
};

export function getQuestionIdsByCategory(categoryId: string): number[] {
  if (categoryId === 'all') {
    return questions.map(q => q.id)
  }
  return (categoryQuestionMap as Record<string, number[]>)[categoryId] || []
}
export const questions: Question[] = [
  {
    "id": 1,
    "content": "（ ），即为达到既定的目的而故意造成的事故。对已确定为破坏性事故的，应由公安机关和企业保卫部门认真追查破案、依法处理。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "破坏性事故"
      },
      {
        "key": "B",
        "content": "责任事故"
      },
      {
        "key": "C",
        "content": "非破坏性事故"
      },
      {
        "key": "D",
        "content": "非责任事故"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 2,
    "content": "（ ）必须按照国家有关规定经过专门的安全作业培训，并取得特种作业操作资格证书后，方可上岗作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "混凝土工"
      },
      {
        "key": "B",
        "content": "登高架设作业人员"
      },
      {
        "key": "C",
        "content": "抹灰工"
      },
      {
        "key": "D",
        "content": "木工"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 3,
    "content": "（ ）的基本含义是提醒人们对周围环境引起注意，以避免发生危险的图形标志。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "禁止标志"
      },
      {
        "key": "B",
        "content": "警示标志"
      },
      {
        "key": "C",
        "content": "指示标志"
      },
      {
        "key": "D",
        "content": "警告标志"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 4,
    "content": "（ ）的进步从根本上改善着劳动条件，但不能排除新的重要的危险因素的出现，或者有扩大其有害影响的可能性，如不重视这一规律将导致新技术效果的下降。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "科学技术"
      },
      {
        "key": "B",
        "content": "管理技术"
      },
      {
        "key": "C",
        "content": "生产环境"
      },
      {
        "key": "D",
        "content": "生产工具"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 5,
    "content": "（ ）负责施工现场标牌、警示标识的保护和实施落实工作。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "设计单位"
      },
      {
        "key": "B",
        "content": "施工单位"
      },
      {
        "key": "C",
        "content": "监理单位"
      },
      {
        "key": "D",
        "content": "建设单位"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 6,
    "content": "（ ）是企业计划的重要组成部分，是有计划地改善劳动条件的重要手段，也是做好劳动保护工作、防止工伤事故和职业病的重要措施。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全管理计划"
      },
      {
        "key": "B",
        "content": "劳动力使用计划"
      },
      {
        "key": "C",
        "content": "安全技术措施计划"
      },
      {
        "key": "D",
        "content": "资金筹措及使用计划"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 7,
    "content": "（ ）是实现安全生产的前提和重要保证。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "国家监察"
      },
      {
        "key": "B",
        "content": "劳动者的遵纪守法"
      },
      {
        "key": "C",
        "content": "行政管理"
      },
      {
        "key": "D",
        "content": "群众监督"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 8,
    "content": "（ ）是一项具有方针政策性、专业技术性和广泛群众性的工作，是一项综合性的安全生产管理措施，是建立良好的安全生产环境、做好安全生产工作的重要手段之一。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全技术措施计划的制定"
      },
      {
        "key": "B",
        "content": "安全评价"
      },
      {
        "key": "C",
        "content": "安全检查"
      },
      {
        "key": "D",
        "content": "安全生产监督"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 9,
    "content": "（ ）为黄绿双色线。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "工作零线"
      },
      {
        "key": "B",
        "content": "保护零线"
      },
      {
        "key": "C",
        "content": "一般相线"
      },
      {
        "key": "D",
        "content": "火线"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 10,
    "content": "（ ）主要是指建筑实体在施工或使用的过程中，由于使用环境或周边环境原因而导致的安全事故。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "生产事故"
      },
      {
        "key": "B",
        "content": "质量事故"
      },
      {
        "key": "C",
        "content": "技术事故"
      },
      {
        "key": "D",
        "content": "环境事故"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 11,
    "content": "安全平网宽度不应小于（ ）m。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3"
      },
      {
        "key": "B",
        "content": "4"
      },
      {
        "key": "C",
        "content": "5"
      },
      {
        "key": "D",
        "content": "6"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 12,
    "content": "安全生产第三方评价前，施工企业应先完成自我评价工作，并向委托的评价机构提供（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "政府评估报告"
      },
      {
        "key": "B",
        "content": "第二方评价报告"
      },
      {
        "key": "C",
        "content": "第三方评价报告"
      },
      {
        "key": "D",
        "content": "自我评价报告"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 13,
    "content": "按照不同作业条件，合理配备灭火器材。如电气设备附件应设置（ ）的灭火器材。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "干粉类不导电"
      },
      {
        "key": "B",
        "content": "卤代烷"
      },
      {
        "key": "C",
        "content": "水型"
      },
      {
        "key": "D",
        "content": "二氧化碳"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 14,
    "content": "编制安全技术措施计划的目的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "为保证合理使用资金"
      },
      {
        "key": "B",
        "content": "为保证有效投入安全资金"
      },
      {
        "key": "C",
        "content": "为提高生产的安全性"
      },
      {
        "key": "D",
        "content": "合理规制安全措施的开展"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 15,
    "content": "第二方评价由政府建设行政主管部门对（ ）实施的安全生产评价。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "建设单位"
      },
      {
        "key": "B",
        "content": "施工企业"
      },
      {
        "key": "C",
        "content": "监理单位"
      },
      {
        "key": "D",
        "content": "设计单位"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 16,
    "content": "对搭设高度在 5m 及以上的混凝土模板支撑工程需编制（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "专项组织设计"
      },
      {
        "key": "B",
        "content": "专项施工设计"
      },
      {
        "key": "C",
        "content": "安全专项施工方案"
      },
      {
        "key": "D",
        "content": "安全施工措施"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 17,
    "content": "对于按照规定需要验收的危险性较大的分部分项工程，施工单位、监理单位应当组织相关人员进行验收。验收合格的，经施工单位项目（ ）及总监理工程师签字确认后，方可进入下一道工序。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "技术负责人"
      },
      {
        "key": "B",
        "content": "管理人员"
      },
      {
        "key": "C",
        "content": "项目负责人"
      },
      {
        "key": "D",
        "content": "施工人员"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 18,
    "content": "各行业的管理部门根据（ ）的原则，在各自的工作职责范围内，行使行业管理的职能，贯彻执行国家安全生产方针、政策、法律法规及规范规章。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "管生产必须管安全"
      },
      {
        "key": "B",
        "content": "安全第一"
      },
      {
        "key": "C",
        "content": "生产安全两手抓"
      },
      {
        "key": "D",
        "content": "预防为主；综合治理"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 19,
    "content": "根据（ ）原则，分包单位在施工期间发生各类事故，应及时组织抢救伤员、保护现场，并立即向总包方和自己的上级单位以及有关部门汇报。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "“谁施工谁负责安全、防火”"
      },
      {
        "key": "B",
        "content": "施工总承包负全责"
      },
      {
        "key": "C",
        "content": "管生产必管安全"
      },
      {
        "key": "D",
        "content": "分包单位有限责任"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 20,
    "content": "根据《广东省房屋市政工程文明施工工作导则（试行）》，建筑施工企业应当对工地泥浆（包括车辆清洗产生的泥浆）进行（ ）沉淀后再予以排放，对废弃油料、化学溶剂实行集中处理，禁止直接将工地泥浆、废弃油料、化学溶剂排入城市排水管网或者河道。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一级"
      },
      {
        "key": "B",
        "content": "二级"
      },
      {
        "key": "C",
        "content": "三级"
      },
      {
        "key": "D",
        "content": "四级"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 21,
    "content": "根据《广东省房屋市政工程文明施工工作导则（试行）》，在建的高层建筑施工超过 8 层以后，（ ）宜设置临时厕所，并采取保洁措施，由专人负责冲洗和消毒。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "每隔四层"
      },
      {
        "key": "B",
        "content": "每层"
      },
      {
        "key": "C",
        "content": "每隔两层"
      },
      {
        "key": "D",
        "content": "每隔三层"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 22,
    "content": "根据《广东省房屋市政工程文明施工工作导则（试行）》规定，工地施工车辆出入口内侧应当按要求设置车辆冲洗设施以及配套的排水、泥浆沉淀设施，并安排专人管理，（ ）方可拆除。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "土方工程完成后"
      },
      {
        "key": "B",
        "content": "主体完工后"
      },
      {
        "key": "C",
        "content": "工程竣工后"
      },
      {
        "key": "D",
        "content": "工程施工时"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 23,
    "content": "根据《广东省房屋市政工程文明施工工作导则（试行）》规定，临近机动车道的围挡应设置防撞杆，按交通相关管理规定设置（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全提示标志"
      },
      {
        "key": "B",
        "content": "夜间反光警示标志"
      },
      {
        "key": "C",
        "content": "安全标志"
      },
      {
        "key": "D",
        "content": "安全警示标志"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 24,
    "content": "根据《广东省在建房屋市政工程防御台风、暴雨灾害工作指引（试行）》规定，台风橙色或红色预警时，下列做法正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "检查外墙脚手架、模板支撑体系、卸料平台、防护棚、临时用电设施等；是否采取了防风防雨加固措施"
      },
      {
        "key": "B",
        "content": "停止所有高空施工作业；如排查隐患所需的；应釆取合理、可靠的防护措施后方可作业"
      },
      {
        "key": "C",
        "content": "停止所有露天作业；切断施工电源；撤离危险地带人员"
      },
      {
        "key": "D",
        "content": "停止一切施工作业；关闭施工现场临时用电总闸"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 25,
    "content": "根据《建筑业企业职工安全培训教育暂行规定》，企业法人代表、项目经理每年不少于（ ）学时。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "15"
      },
      {
        "key": "B",
        "content": "30"
      },
      {
        "key": "C",
        "content": "40"
      },
      {
        "key": "D",
        "content": "60"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 26,
    "content": "根据《住房城乡建设部关于进一步加强和完善建筑劳务管理工作的指导意见》，按照（ ）的原则，施工总承包企业应对所承包工程的劳务管理全面负责。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "“谁承包、谁负责”"
      },
      {
        "key": "B",
        "content": "“谁用工、谁负责”"
      },
      {
        "key": "C",
        "content": "“谁施工、谁负责”"
      },
      {
        "key": "D",
        "content": "总承包单位负责"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 27,
    "content": "工程项目开工前，由施工组织设计编制人、审批人向参加施工的（ ）、班组长进行施工组织设计及安全技术措施交底。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全管理人员"
      },
      {
        "key": "B",
        "content": "施工管理人员"
      },
      {
        "key": "C",
        "content": "技术负责人"
      },
      {
        "key": "D",
        "content": "项目负责人"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 28,
    "content": "工伤保险制度应规范和简化工伤认定和（ ）程序。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "生活能力鉴定"
      },
      {
        "key": "B",
        "content": "劳动能力鉴定"
      },
      {
        "key": "C",
        "content": "劳动技能鉴定"
      },
      {
        "key": "D",
        "content": "劳动体力鉴定"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 29,
    "content": "国家标准《安全色》GB2893 中规定，红色代表的含义是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "禁止"
      },
      {
        "key": "B",
        "content": "警告"
      },
      {
        "key": "C",
        "content": "注意"
      },
      {
        "key": "D",
        "content": "提示安全"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 30,
    "content": "机械设备在安装、使用、拆除前，应由（ ）对机械设备操作人员进行安全技术交底，形成安全技术交底记录，经双方签字确认后方可实施，并及时存档。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "项目施工技术人员"
      },
      {
        "key": "B",
        "content": "安全员"
      },
      {
        "key": "C",
        "content": "监理人员"
      },
      {
        "key": "D",
        "content": "项目负责人"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 31,
    "content": "建筑工程安全生产信用监督和失信惩戒制度。将建筑工程安全生 产各方责任主体和从业人员安全生产不良行为记录在案，并利用网络、媒体等向全社会公示，加大安全生产社会（ ）力度。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "监察"
      },
      {
        "key": "B",
        "content": "管理"
      },
      {
        "key": "C",
        "content": "监督"
      },
      {
        "key": "D",
        "content": "治理"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 32,
    "content": "建筑企业安全生产工作的目标归根结底就是预防伤亡事故，把伤亡事故频率和经济损失降到低于社会容许的范围以及国际同行业先进水平，同时不断改善生产条件和作业环境，达到（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "最佳安全状态"
      },
      {
        "key": "B",
        "content": "最安全工作环境"
      },
      {
        "key": "C",
        "content": "最好安全状态"
      },
      {
        "key": "D",
        "content": "最佳工作环境"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 33,
    "content": "危大工程验收合格的，经施工单位（ ）及总监理工程师签字确认后，方可进入下一道工序。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "企业技术负责人"
      },
      {
        "key": "B",
        "content": "项目经理"
      },
      {
        "key": "C",
        "content": "项目技术负责人"
      },
      {
        "key": "D",
        "content": "项目专职安全生产管理人员"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 34,
    "content": "扣件式钢管脚手架剪刀撑的设置宽度（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "不应小于 4 跨且不应小于 6 米"
      },
      {
        "key": "B",
        "content": "不应小于 3 跨且不应小于 5 米"
      },
      {
        "key": "C",
        "content": "不应大于 4 跨且不应大于 6 米"
      },
      {
        "key": "D",
        "content": "不应大于 3 跨且不应大于 5 米"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 35,
    "content": "教育和培训按等级、层次和工种性质分别进行，（ ）的重点是安全生产意识和安全管理水平。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "技术人员"
      },
      {
        "key": "B",
        "content": "管理人员"
      },
      {
        "key": "C",
        "content": "安全管理人员"
      },
      {
        "key": "D",
        "content": "监理人员"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 36,
    "content": "教育和培训按等级、层次和工种性质分别进行，管理人员的重点是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "自我管理的能力"
      },
      {
        "key": "B",
        "content": "安全生产意识和安全管理水平"
      },
      {
        "key": "C",
        "content": "遵章守纪的能力"
      },
      {
        "key": "D",
        "content": "提高防范事故的能力"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 37,
    "content": "禁止标志的几何图形是带斜杠的圆环，其中圆环与斜杠相连，用红色；图形符号用（ ）色，背景用白色。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "黑"
      },
      {
        "key": "B",
        "content": "红"
      },
      {
        "key": "C",
        "content": "蓝"
      },
      {
        "key": "D",
        "content": "灰"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 38,
    "content": "危大工程专项施工方案实施前，编制人员或者（ ）应当向施工 现场管理人员进行方案交底。施工现场管理人员应当向作业人员进行安全技术交底，并由双方和项目专职安全生产管理人员共同签字确认。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "项目副经理"
      },
      {
        "key": "B",
        "content": "项目技术负责人"
      },
      {
        "key": "C",
        "content": "班组长"
      },
      {
        "key": "D",
        "content": "项目经理"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 39,
    "content": "起重吊装及安装拆除工程，采用非常规起重设备、方法的，且（ ），需要编制安全专项施工方案。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "遇到雨雪天气"
      },
      {
        "key": "B",
        "content": "单件起吊重量在 100kN 及以上的起重吊装工程"
      },
      {
        "key": "C",
        "content": "脚手架的安拆"
      },
      {
        "key": "D",
        "content": "基坑开挖、支护及降水工程"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 40,
    "content": "为保证施工现场交叉作业安全，下层作业位置应处于上层作业的坠落半径之外。在高度 24m 的楼层作业面施工时，其坠落半径是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3m"
      },
      {
        "key": "B",
        "content": "4m"
      },
      {
        "key": "C",
        "content": "5m"
      },
      {
        "key": "D",
        "content": "6m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 41,
    "content": "施工现场必须配备足够的消防器材，做到布局合理，要害部位应配备不少于（ ）灭火器，要有明显的防火标志。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "两个"
      },
      {
        "key": "B",
        "content": "三个"
      },
      {
        "key": "C",
        "content": "四个"
      },
      {
        "key": "D",
        "content": "五个"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 42,
    "content": "施工现场的宿舍应实行单人单床，每房间居住人数不得超过（ ）人,严禁睡通铺。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "12"
      },
      {
        "key": "B",
        "content": "14"
      },
      {
        "key": "C",
        "content": "16"
      },
      {
        "key": "D",
        "content": "18"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 43,
    "content": "施工现场食堂必须有（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "营业执照"
      },
      {
        "key": "B",
        "content": "卫生许可证"
      },
      {
        "key": "C",
        "content": "环保合格证"
      },
      {
        "key": "D",
        "content": "税务登记证"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 44,
    "content": "通过教学、讲座、讲演、经验介绍、现身说法、演讲比赛的安全教育形式属于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "广告宣传式"
      },
      {
        "key": "B",
        "content": "声像式"
      },
      {
        "key": "C",
        "content": "演讲式"
      },
      {
        "key": "D",
        "content": "文艺演出式"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 45,
    "content": "完善安全生产管理体制，建立健全安全管理制度、安全管理机构和安全生产责任制是实现安全生产目标管理的组织（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "作用"
      },
      {
        "key": "B",
        "content": "保证"
      },
      {
        "key": "C",
        "content": "依据"
      },
      {
        "key": "D",
        "content": "措施"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 46,
    "content": "为保证有效投入安全资金，企业应编制（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "资金使用计划"
      },
      {
        "key": "B",
        "content": "安全技术措施计划"
      },
      {
        "key": "C",
        "content": "施工组织计划"
      },
      {
        "key": "D",
        "content": "资金审查计划"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 47,
    "content": "下列不需要要组织专家论证的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "开挖深度超过 5m（含 5m）的基坑（槽）的土方开挖、支护、降水工程"
      },
      {
        "key": "B",
        "content": "开挖深度虽未超过 5m；但地质条件、周围环境和地下管线复杂"
      },
      {
        "key": "C",
        "content": "开挖深度虽未超过 5m；但影响毗邻建筑（构筑）物安全的基坑（槽）的土方开挖、支护、降水工程"
      },
      {
        "key": "D",
        "content": "采用非常规起重设备、方法；且单件起吊重量在 10KN 及以上的起重吊装工程"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 48,
    "content": "下列关于安全施工技术交底说法正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "施工单位负责项目管理的技术人员向专职安全生产管理人员交底"
      },
      {
        "key": "B",
        "content": "专职安全生产管理人员向施工作业人员交底"
      },
      {
        "key": "C",
        "content": "施工单位负责项目管理的技术人员向施工作业人员的交底"
      },
      {
        "key": "D",
        "content": "施工作业人员向施工单位负责人交底"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 49,
    "content": "下列哪个选项不是燃烧的基本条件（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "火源"
      },
      {
        "key": "B",
        "content": "风力"
      },
      {
        "key": "C",
        "content": "可燃物"
      },
      {
        "key": "D",
        "content": "助燃物"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 50,
    "content": "下列哪一个是施工现场水污染防治措施的内容（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "路面及其余场地地面要硬化"
      },
      {
        "key": "B",
        "content": "禁止将有毒有害废弃物用作土方回填"
      },
      {
        "key": "C",
        "content": "施工现场办公室、仓库等；保持清洁卫生；建立卫生区域经常打扫"
      },
      {
        "key": "D",
        "content": "严禁在工程室内用有机溶剂清洗施工用具"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 51,
    "content": "下列施工平面布置原则说法错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "现场布置全面；增加施工用地"
      },
      {
        "key": "B",
        "content": "材料尽量靠近使用地点；减少二次搬运"
      },
      {
        "key": "C",
        "content": "临时设施的布置；应便于工人生产和生活；办公用房靠近施工现场；福利设施应在生活区范围之内"
      },
      {
        "key": "D",
        "content": "平面图布置应符合安全、消防、环境保护的要求"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 52,
    "content": "下面关于“十不吊”原则说法错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "信号指挥不明不准吊"
      },
      {
        "key": "B",
        "content": "斜牵斜挂不准吊"
      },
      {
        "key": "C",
        "content": "埋在地下物不准吊"
      },
      {
        "key": "D",
        "content": "五级以上强风不准吊"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 53,
    "content": "项目经理部在项目施工管理总策划时必须对施工现场的危险源进行识别评价和控制策划,识别与施工现场相关的所有危险源,评价出（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "危险源因素"
      },
      {
        "key": "B",
        "content": "重大危险因素"
      },
      {
        "key": "C",
        "content": "危险源"
      },
      {
        "key": "D",
        "content": "重大危险源"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 54,
    "content": "严禁在高压电下方搭设临建、堆放材料和进行施工作业。在高压线一侧作业时，必须保持至少 6m 的水平距离，达不到上述距离时，必须（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "做好安全应急设施及方案"
      },
      {
        "key": "B",
        "content": "提高高压电垂直高度"
      },
      {
        "key": "C",
        "content": "设置警示牌"
      },
      {
        "key": "D",
        "content": "采取隔离防护措施"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 55,
    "content": "一级动火作业应由所在单位行政负责人填写动火申请表，编制安全技术措施方案，报公司安全部门审查批准后，方可动火。动火期限为（ ）天。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3"
      },
      {
        "key": "B",
        "content": "2"
      },
      {
        "key": "C",
        "content": "1"
      },
      {
        "key": "D",
        "content": "7"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 56,
    "content": "由政府建设行政主管部门对施工企业实施的安全生产评价，称为（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "第一方评价"
      },
      {
        "key": "B",
        "content": "第二方评价"
      },
      {
        "key": "C",
        "content": "第三方评价"
      },
      {
        "key": "D",
        "content": "上级督查"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 57,
    "content": "生产经营项目、场所发包或者出租给其他单位的，生产经营单位应当与承包单位、承租单位签订专门的（ ），或者在承包合同、租赁合同中约定各自的安全生产管理职责。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "责任分工协议"
      },
      {
        "key": "B",
        "content": "现场管理协议"
      },
      {
        "key": "C",
        "content": "安全生产管理协议"
      },
      {
        "key": "D",
        "content": "安全生产分工协议"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 58,
    "content": "增加或调换的人员按新入场人员进行（ ）安全教育。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "企业"
      },
      {
        "key": "B",
        "content": "三级"
      },
      {
        "key": "C",
        "content": "项目"
      },
      {
        "key": "D",
        "content": "班组"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 59,
    "content": "重大危险源是指长期地或临时地生产、加工、搬运、使用或贮存危险物质，且危险物质的（ ）等于或超过临界量的单元。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "重量"
      },
      {
        "key": "B",
        "content": "数量"
      },
      {
        "key": "C",
        "content": "质量"
      },
      {
        "key": "D",
        "content": "数目"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 60,
    "content": "根据《施工企业安全生产评价标准》（JGJ/T77-2010），施工企业安全生产考核评定分为（ ）个等级。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一"
      },
      {
        "key": "B",
        "content": "二"
      },
      {
        "key": "C",
        "content": "三"
      },
      {
        "key": "D",
        "content": "四"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 61,
    "content": "根据《建筑施工扣件式钢管脚手架安全技术规范》（JGJ130-2013），扣件在螺栓拧紧力矩达到（ ）N·m 时，不得发生破坏。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "50"
      },
      {
        "key": "B",
        "content": "55"
      },
      {
        "key": "C",
        "content": "60"
      },
      {
        "key": "D",
        "content": "65"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 62,
    "content": "根据《建筑施工扣件式钢管脚手架安全技术规范》（JGJ130-2013）单、双排脚手架剪刀撑的设置应符合下列规定：每道剪刀撑宽度不应小于（ ）跨，且不应小于（ ）m，斜杆与地面的倾角应在 45°～60°。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3；5"
      },
      {
        "key": "B",
        "content": "3；6"
      },
      {
        "key": "C",
        "content": "4；5"
      },
      {
        "key": "D",
        "content": "4；6"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 63,
    "content": "下列（ ）不属于特种作业人员。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "锅炉司炉工"
      },
      {
        "key": "B",
        "content": "厂内机车驾驶人员"
      },
      {
        "key": "C",
        "content": "钳工"
      },
      {
        "key": "D",
        "content": "起重司索作业人员"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 64,
    "content": "下列关于建设工程分包的说法，正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "总承包单位可以将全部建设工程拆分成若干部分后全部分包给其他施工企业"
      },
      {
        "key": "B",
        "content": "总承包单位可以按照合同约定将建设工程部分非主体、非关键性工作分包给其他企业"
      },
      {
        "key": "C",
        "content": "总承包单位可以将建设工程主体结构中技术较为复杂的部分分包给其他企业"
      },
      {
        "key": "D",
        "content": "总承包单位经建设单位同意后，可以将建设工程的关键性工作分包给其他企业"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 65,
    "content": "气瓶的瓶体有肉眼可见的突起(鼓包)缺陷的，应如何处理？（ ）",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "维修处理"
      },
      {
        "key": "B",
        "content": "送有资质的单位进行检测维修"
      },
      {
        "key": "C",
        "content": "报废处理"
      },
      {
        "key": "D",
        "content": "改造使用"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 66,
    "content": "安全“3E 原则”指的是利用（ ）防止事故的发生。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "技术对策、教育对策、管理对策"
      },
      {
        "key": "B",
        "content": "技术对策、教育对策、预防对策"
      },
      {
        "key": "C",
        "content": "管理对策、预防对策、技术对策"
      },
      {
        "key": "D",
        "content": "管理对策、预防对策、教育对策"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 67,
    "content": "安全生产“四不伤害”是指（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "不伤害自己，不伤害他人，不被他人伤害，保护他人不受伤害"
      },
      {
        "key": "B",
        "content": "不伤害自己，不伤害他人，不伤害公共财产，保护他人不受伤害"
      },
      {
        "key": "C",
        "content": "不伤害他人，不被他人伤害，不被物体伤害，保护他人不受伤害"
      },
      {
        "key": "D",
        "content": "不伤害自己，不伤害他人，不被物体伤害，保护他人不受伤害"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 68,
    "content": "施工现场发生生产安全事故后，以下哪项处理措施是错误的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "事故现场有关人员应当立即报告本单位负责人"
      },
      {
        "key": "B",
        "content": "单位负责人接到事故报告后，应当首先向当地负有安全生产监督管理职责的部门报告，根据负有安全生产监督管理职责的部门的指令组织抢救"
      },
      {
        "key": "C",
        "content": "单位负责人接到事故报告后，应当迅速采取有效措施，组织抢救.防止事故扩大，减少人员伤亡和财产损失"
      },
      {
        "key": "D",
        "content": "单位负责人应当按照国家有关规定立即如实报告当地负有安全生产监督管理职责的"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 69,
    "content": "习近平总书记在中国共产党第十九次全国代表大会报告中指出，健全公共安全体系，完善安全生产责任制，坚决遏制重特大安全事故，提升防灾减灾救灾能力，打造共建共治共享的社会治理格局。关于习近平总书记安全发展观的思想，正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "树立安全发展理念，弘扬安全第一、以人为本的思想"
      },
      {
        "key": "B",
        "content": "树立以人为本理念，弘扬预防为主、安全第一的思想"
      },
      {
        "key": "C",
        "content": "树立安全发展理念，弘扬生命至上、安全第一的思想"
      },
      {
        "key": "D",
        "content": "树立以人为本理念，弘扬安全第一、协调发展的思想"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 70,
    "content": "某交通运输股份有限公司的组织机构包括董事会，监事会、工会、总工办、调度室、安全处、财务处等。公司设总经理、安全总监等管理岗位。根据有关规定，该公司安全生产投入资金予以决策的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "董事会"
      },
      {
        "key": "B",
        "content": "董事长"
      },
      {
        "key": "C",
        "content": "总经理"
      },
      {
        "key": "D",
        "content": "安全总监"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 71,
    "content": "甲公司拟投资建设一大型商业综合体项目，由乙公司总承包，乙公司将土石方工程发包给丙公司，结构和给排水机电工程发包给丁公司。施工过程中，实施该建设项目的安全生产工作统一协调、管理的单位是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "乙"
      },
      {
        "key": "B",
        "content": "甲"
      },
      {
        "key": "C",
        "content": "丙"
      },
      {
        "key": "D",
        "content": "丁"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 72,
    "content": "甲公司实施一项大型技改项目，拟将与该项目配套的办公楼、工艺楼建设项目等发包给乙公司。按照相关要求，甲公司安全管理部门对乙公司进行了安全资质审查。下列乙公司提供的安全资质审查资料中，符合要求的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "法定代表人证明书、安全生产许可证、主要负责人安全生产考核合格证书、近两年的安全业绩"
      },
      {
        "key": "B",
        "content": "法定代表人证明书、安全生产许可证、安全管理体系程序文件及有效评审报告、近两年的安全业绩"
      },
      {
        "key": "C",
        "content": "特种作业证书、安全生产许可证、主要负责人安全生产考核合格证书、近两年的安全业绩"
      },
      {
        "key": "D",
        "content": "安全生产许可证、主要负责人安全资格证书、安全管理体系有效评审报告、近两年的安全业绩"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 73,
    "content": "某企业在推动安全文化建设过程中，首先从人员的行为规范入手，在厂区内实行人车分流管理模式，指定人车行走轨迹路线，倡导员工 “两人成行，三人成列”。按照指定的人行路线出入厂区，形成了浓厚的安全文化氛围。2019 年 9 月，企业从学校和社会分别招聘了 5名员工。一周后，这 10 名员工也按照指定行走路线，自觉做到出入厂区时“两人成行，三人成列”。新员工的这种行为，体现了安全文化功能中的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "导向功能"
      },
      {
        "key": "B",
        "content": "激励功能"
      },
      {
        "key": "C",
        "content": "辐射和同化功能"
      },
      {
        "key": "D",
        "content": "凝聚功能"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 74,
    "content": "（ ）的含义是强制人们必须做出某种动作或采用防范措施的图形标志。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "指令标志"
      },
      {
        "key": "B",
        "content": "辅助标志"
      },
      {
        "key": "C",
        "content": "说明标志"
      },
      {
        "key": "D",
        "content": "警告标志"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 75,
    "content": "（ ）应当在施工现场采取维护安全、防范危险、预防火灾等措施，有条件的，应当对施工现场实行封闭管理。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "各级人民政府"
      },
      {
        "key": "B",
        "content": "监理单位"
      },
      {
        "key": "C",
        "content": "建筑施工企业"
      },
      {
        "key": "D",
        "content": "建设单位"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 76,
    "content": "安全标志按其用途可分为（ ）、警告标志、指令标志和提示标志四大类型。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "禁令标志"
      },
      {
        "key": "B",
        "content": "危险标志"
      },
      {
        "key": "C",
        "content": "提醒标志"
      },
      {
        "key": "D",
        "content": "禁止标志"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 77,
    "content": "安全带在使用（ ）后应抽验一次，使用频繁的绳要经常进行外观检查，发现异常必须立即更换。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一年"
      },
      {
        "key": "B",
        "content": "两年"
      },
      {
        "key": "C",
        "content": "三年"
      },
      {
        "key": "D",
        "content": "四年"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 78,
    "content": "安全教育的目的是提高全员安全素质、（ ）和防止事故，从而实现安全生产。安全生产水平 B.安全施工水平 C.安全管理水平D.提高防范事故的能力答案：C80、安全生产监督管理部门和负有安全生产监督管理职责的有关部门逐级上报事故情况，每级上报的时间不得超过（ ）。小时B.2 小时C.3 小时D.4 小时答案：B81、安全生产目标的设定是安全生产目标管理的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "根本"
      },
      {
        "key": "B",
        "content": "基础"
      },
      {
        "key": "C",
        "content": "前提"
      },
      {
        "key": "D",
        "content": "核心"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 79,
    "content": "安装单位、使用单位拒不整改生产安全事故隐患的，（ ）接到监理单位报告后，应当责令安装单位、使用单位立即停工整改。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "建设单位"
      },
      {
        "key": "B",
        "content": "安装单位"
      },
      {
        "key": "C",
        "content": "监理单位"
      },
      {
        "key": "D",
        "content": "总承包单位"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 80,
    "content": "超过一定规模的危险性较大的分部分项工程专项方案应当由（ ）组织召开专家论证会。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "建设单位"
      },
      {
        "key": "B",
        "content": "监理单位"
      },
      {
        "key": "C",
        "content": "施工单位"
      },
      {
        "key": "D",
        "content": "施工总承包单位"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 81,
    "content": "对搭设高度在（ ）m 及以上的混凝土模板支撑工程需编制安全专项施工方案。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3"
      },
      {
        "key": "B",
        "content": "4"
      },
      {
        "key": "C",
        "content": "5"
      },
      {
        "key": "D",
        "content": "6"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 82,
    "content": "对于建筑施工企业的分公司、区域公司等较大的分支机构应依据实际生产情况配置不少于（ ）的专职安全生产管理人员。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5 人"
      },
      {
        "key": "B",
        "content": "4 人"
      },
      {
        "key": "C",
        "content": "3 人"
      },
      {
        "key": "D",
        "content": "2 人"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 83,
    "content": "根据《特种作业人员安全技术培训考核管理规定》，特种作业是指容易发生事故，对操作者本人、（ ）及设备、设施的安全可能造成重大危害的作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "劳动者的安全"
      },
      {
        "key": "B",
        "content": "其他劳动者"
      },
      {
        "key": "C",
        "content": "项目安全"
      },
      {
        "key": "D",
        "content": "他人的安全健康"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 84,
    "content": "工程项目安全技术交底必须实行（ ）交底制度。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "二级"
      },
      {
        "key": "B",
        "content": "三级"
      },
      {
        "key": "C",
        "content": "四级"
      },
      {
        "key": "D",
        "content": "五级"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 85,
    "content": "海因里希法则指出了事故与伤害结果之间存在着偶然性的（ ）原则。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "概率"
      },
      {
        "key": "B",
        "content": "随机"
      },
      {
        "key": "C",
        "content": "因果关系"
      },
      {
        "key": "D",
        "content": "本质化"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 86,
    "content": "国务院《生产安全事故应急管理条例》的有关规定，建设主管部门每 2 年至少组织一次生产安全事故应急救援演练。建筑施工单位应当有针对性地经常组织开展应急演练，每年至少组织（ ），视情况可加大演练频次。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一次"
      },
      {
        "key": "B",
        "content": "两次"
      },
      {
        "key": "C",
        "content": "三次"
      },
      {
        "key": "D",
        "content": "四次"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 87,
    "content": "盘扣式支撑架可调托撑伸出顶层水平杆或双槽托梁中心线的悬臂长度，不应超过（ ）mm，且丝杆外露长度不应超过（ ）mm。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "650；300"
      },
      {
        "key": "B",
        "content": "500；400"
      },
      {
        "key": "C",
        "content": "650；400"
      },
      {
        "key": "D",
        "content": "500；300"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 88,
    "content": "临时消防车道，其宽度不得小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "4m"
      },
      {
        "key": "B",
        "content": "6m"
      },
      {
        "key": "C",
        "content": "8m"
      },
      {
        "key": "D",
        "content": "10m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 89,
    "content": "生产经营单位的（ ）、主要负责人或者个人经营的投资人不依照本法规定保证安全生产所必需的资金投入，致使生产经营单位不具备安全生产条件的，责令限期改正，提供必需的资金。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "控制机构"
      },
      {
        "key": "B",
        "content": "执行机构"
      },
      {
        "key": "C",
        "content": "决策机构"
      },
      {
        "key": "D",
        "content": "行政机构"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 90,
    "content": "生产经营单位对重大危险源应当登记建档，进行（ ）、评估、监控，并制定应急预案，告知从业人员和相关人员在紧急情况下应当采取的应急措施。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "定期检查"
      },
      {
        "key": "B",
        "content": "定期检验"
      },
      {
        "key": "C",
        "content": "定期检测"
      },
      {
        "key": "D",
        "content": "定期收集"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 91,
    "content": "生产经营单位进行爆破、吊装等危险作业，应当安排（ ）进行现场安全管理，确保操作规程的遵守和安全措施的落实。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "专门人员"
      },
      {
        "key": "B",
        "content": "领导"
      },
      {
        "key": "C",
        "content": "技术工人"
      },
      {
        "key": "D",
        "content": "负责人"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 92,
    "content": "施工单位应当在（ ）处、施工起重机械、临时用电设施、脚手架、出入通道口、楼梯口、电梯井口、孔洞口、桥粱口、隧道口、基坑边沿、爆破物及有害危险气体和液体存放处等危险部位，设置明显的安全警示标志。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "模板堆场"
      },
      {
        "key": "B",
        "content": "围档"
      },
      {
        "key": "C",
        "content": "施工现场入口"
      },
      {
        "key": "D",
        "content": "临时建筑"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 93,
    "content": "施工企业安全生产考核评价中，各评分表得（ ）时，为合格等级。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "不小于 60 分"
      },
      {
        "key": "B",
        "content": "不小于 70 分"
      },
      {
        "key": "C",
        "content": "不小于 80 分"
      },
      {
        "key": "D",
        "content": "不小于 90 分"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 94,
    "content": "施工现场堆有大量可燃和易燃物质的场所，属于（ ）动火区域。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一级"
      },
      {
        "key": "B",
        "content": "二级"
      },
      {
        "key": "C",
        "content": "三级"
      },
      {
        "key": "D",
        "content": "四级"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 95,
    "content": "室内灯具离地面低于 2.5m，手持照明灯具，一般潮湿作业场所的照明，电源电压应不大于（ ）V。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "6"
      },
      {
        "key": "B",
        "content": "12"
      },
      {
        "key": "C",
        "content": "24"
      },
      {
        "key": "D",
        "content": "36"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 96,
    "content": "室外灯具距地面（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "不得低于 3m"
      },
      {
        "key": "B",
        "content": "不得高于 3m"
      },
      {
        "key": "C",
        "content": "不得低于 4m"
      },
      {
        "key": "D",
        "content": "不得高于 4m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 97,
    "content": "危险源由三个要素构成：潜在危险性、（ ）和触发因素。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "必要条件"
      },
      {
        "key": "B",
        "content": "存在基础"
      },
      {
        "key": "C",
        "content": "存在条件"
      },
      {
        "key": "D",
        "content": "必要基础"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 98,
    "content": "物料提升机进料口必须加装（ ），并按高处作业规范搭设防护棚，并设安全通道，防止从棚外进入架体中。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "操作平台"
      },
      {
        "key": "B",
        "content": "防护栏杆"
      },
      {
        "key": "C",
        "content": "安全防护门"
      },
      {
        "key": "D",
        "content": "安全网"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 99,
    "content": "下列哪项不属于消除物的不安全状态，实现作业条件安全化的主要措施（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "采取新工艺、新技术、新设备，改善劳动条件"
      },
      {
        "key": "B",
        "content": "加强安全技术研究，采用安全防护装置，隔离危险部位"
      },
      {
        "key": "C",
        "content": "推行安全知识岗位培训，提高职工的安全技术素质"
      },
      {
        "key": "D",
        "content": "采用安全适用的个人防护用具"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 100,
    "content": "下面不属于安全生产管理“四不放过”原则的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "事故原因分析不清不放过"
      },
      {
        "key": "B",
        "content": "事故不处理不放过"
      },
      {
        "key": "C",
        "content": "事故责任者和群众没受到教育不放过"
      },
      {
        "key": "D",
        "content": "事故隐患不整改不放过"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 101,
    "content": "下面关于安全技术措施交底说法正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "专职安全生产管理人员向施工作业人员交底"
      },
      {
        "key": "B",
        "content": "施工作业人员向施工单位负责人交底"
      },
      {
        "key": "C",
        "content": "施工班组长向专职安全生产管理人员交底"
      },
      {
        "key": "D",
        "content": "施工班组长向施工作业人员的交底"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 102,
    "content": "县级以上人民政府在履行安全监督检查职责时，对于发现的重大安全事故隐患在排除前或者排除过程中无法保证安全的，（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "继续施工"
      },
      {
        "key": "B",
        "content": "更换施工队伍"
      },
      {
        "key": "C",
        "content": "责令从危险区域内撤出作业人员或者暂时停止施工"
      },
      {
        "key": "D",
        "content": "责令施工单位主要负责人作出检查"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 103,
    "content": "项目经理部对危险源安全风险的控制主要包括识别、评价、（ ）三个基本环节。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "控制调节"
      },
      {
        "key": "B",
        "content": "风险规避"
      },
      {
        "key": "C",
        "content": "控制策划"
      },
      {
        "key": "D",
        "content": "风险应对"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 104,
    "content": "依据《中华人民共和国建筑法》，（ ）负责建筑安全生产的管理，并依法接受劳动行政主管部门对建筑安全生产的指导和监督。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "建筑业协会"
      },
      {
        "key": "B",
        "content": "建设行政主管部门"
      },
      {
        "key": "C",
        "content": "劳动行政主管部门"
      },
      {
        "key": "D",
        "content": "国务院"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 105,
    "content": "预防原理是指安全管理工作应当以预防为主，即通过有效的管理和技术手段，防止人的不安全行为和物的不安全状态出现，尽最大的力量减小事故发生的概率。下列哪项不是预防原理的运用原则（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "偶然损失原则"
      },
      {
        "key": "B",
        "content": "因果关系原则"
      },
      {
        "key": "C",
        "content": "监督原则"
      },
      {
        "key": "D",
        "content": "3E 原则"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 106,
    "content": "专职安全生产管理人员分为（ ）、土建、综合三类。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "道路"
      },
      {
        "key": "B",
        "content": "桥梁"
      },
      {
        "key": "C",
        "content": "机器"
      },
      {
        "key": "D",
        "content": "机械"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 107,
    "content": "（ ）应当签署工程质量终身责任承诺书。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "项目负责人"
      },
      {
        "key": "B",
        "content": "法人代表"
      },
      {
        "key": "C",
        "content": "技术负责人"
      },
      {
        "key": "D",
        "content": "总监理工程师"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 108,
    "content": "新从业人员安全教育培训时间不得少于（ ）学时。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "12"
      },
      {
        "key": "B",
        "content": "24"
      },
      {
        "key": "C",
        "content": "36"
      },
      {
        "key": "D",
        "content": "48"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 109,
    "content": "对于危险性较大的分部分项工程依法编制专项施工方案，并附具安全验算结果，经（ ）签字后实施。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "施工单位项目负责人；专业监理工程师"
      },
      {
        "key": "B",
        "content": "施工单位项目负责人；总监理工程师"
      },
      {
        "key": "C",
        "content": "施工单位技术负责人；专业监理工程师"
      },
      {
        "key": "D",
        "content": "施工单位技术负责人；总监理工程师"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 110,
    "content": "特种设备使用单位应当按照安全技术规范的要求，在检验合格有效期届满前（ ）向特种设备检验机构提出定期检验的要求，并将定期检验标志置于该特种设备的显著位置。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一个月"
      },
      {
        "key": "B",
        "content": "三个月"
      },
      {
        "key": "C",
        "content": "15 天"
      },
      {
        "key": "D",
        "content": "45 天"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 111,
    "content": "特殊动火作业和一级动火作业的动火证的有效期不超过（ ）；二级动火作业的动火证有效期不超过（ ），每日动火前应进行动火分析。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "8h；48h"
      },
      {
        "key": "B",
        "content": "8h；72h"
      },
      {
        "key": "C",
        "content": "12h；48h"
      },
      {
        "key": "D",
        "content": "12h；72h"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 112,
    "content": "较大事故的事故调查报告由负责事故调查的有关（ ）批复。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "国务院"
      },
      {
        "key": "B",
        "content": "省级人民政府"
      },
      {
        "key": "C",
        "content": "设区的市级人民政府"
      },
      {
        "key": "D",
        "content": "县级人民政府"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 113,
    "content": "如果多个安全标志在一起设置。应按（ ）的顺序，先左后右、先上后下排列。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "警告、禁止、指令、提示"
      },
      {
        "key": "B",
        "content": "禁止、警告、指令、提示"
      },
      {
        "key": "C",
        "content": "警告、指令、禁止、提示"
      },
      {
        "key": "D",
        "content": "禁止、指令、警告、提示"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 114,
    "content": "卸料平台搭设完毕后，由（ ）组织工程、技术、安全、材料等各部门以及设计单位、搭设单位和使用单位进行验收，合格后方可挂牌并投入使用。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "项目负责人"
      },
      {
        "key": "B",
        "content": "项目技术负责人"
      },
      {
        "key": "C",
        "content": "施工单位技术负责人"
      },
      {
        "key": "D",
        "content": "安全总监"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 115,
    "content": "下列属于超过一定规模的危险性较大的分部分项工程的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "开挖深度超过 3m（含 3m）的基坑（槽）的土方开挖、支护、降水工程"
      },
      {
        "key": "B",
        "content": "搭设高度 24m 及以上的落地式钢管脚手架工程（包括采光井、电梯井脚手架）。"
      },
      {
        "key": "C",
        "content": "悬挑式脚手架工程"
      },
      {
        "key": "D",
        "content": "开挖深度超过 16m 的人工挖孔桩工程"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 116,
    "content": "某企业针对重大安全隐患编制了安全技术措施计划，在下达前由企业有关领导召集，按规定程序对安全技术措施计划进行了审查、核定。下列人员中，负责审查、核定安全技术措施计划的召集人是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "总工程师"
      },
      {
        "key": "B",
        "content": "主管安全生产领导"
      },
      {
        "key": "C",
        "content": "单位主要负责人"
      },
      {
        "key": "D",
        "content": "主管财务领导"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 117,
    "content": "某施工总承包单位承建学校建设工程，总建筑面积 53125m²，包括教学楼、宿舍楼、体育馆及配套附属设施四项单体工程。在体育馆单体工程施工前，施工总承包单位应首先编制（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "临时用电组织设计"
      },
      {
        "key": "B",
        "content": "单位工程施工组织设计"
      },
      {
        "key": "C",
        "content": "专项施工方案"
      },
      {
        "key": "D",
        "content": "技术措施"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 118,
    "content": "安全色标以形象而醒目的方式向人们提供表达（ ）等安全信息。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "禁止"
      },
      {
        "key": "B",
        "content": "指引"
      },
      {
        "key": "C",
        "content": "警告"
      },
      {
        "key": "D",
        "content": "指令 E.提示"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 119,
    "content": "每个刚进企业的新员工必须接受的首次安全生产方面的基本教育包括（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "公司"
      },
      {
        "key": "B",
        "content": "项目"
      },
      {
        "key": "C",
        "content": "政府"
      },
      {
        "key": "D",
        "content": "班组E.行业"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ]
  },
  {
    "id": 120,
    "content": "头部防护类的劳动防护用品包括（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "安全帽"
      },
      {
        "key": "B",
        "content": "电焊面罩"
      },
      {
        "key": "C",
        "content": "工作帽"
      },
      {
        "key": "D",
        "content": "长管面具 E.防寒帽"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ]
  },
  {
    "id": 121,
    "content": "稳定的管理能级结构一般分为（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "决策层"
      },
      {
        "key": "B",
        "content": "管理层"
      },
      {
        "key": "C",
        "content": "执行层"
      },
      {
        "key": "D",
        "content": "操作层 E.监督层"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": 122,
    "content": "下列不属于施工现场消火栓给水系统常见问题的是（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "供水压力不足，不能满足水枪充实水柱的要求，影响火灾火场施救"
      },
      {
        "key": "B",
        "content": "水泵接合器故障、失效"
      },
      {
        "key": "C",
        "content": "灭火器材上锁不方便使用"
      },
      {
        "key": "D",
        "content": "消火栓箱内器材锈蚀，水带发霉、阀门锈蚀无法开启 E.夏季酷热时消火栓在阳光下曝晒"
      }
    ],
    "answer": [
      "C",
      "E"
    ]
  },
  {
    "id": 123,
    "content": "下列关于颜色特性说法正确的是（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "红色：醒目，使人在心理上会产生兴奋感和刺激性"
      },
      {
        "key": "B",
        "content": "蓝色：与白色相配合使用效果不错，特别是在背光的情况下效果更明显"
      },
      {
        "key": "C",
        "content": "黄色对人眼能产生比红色更高的明度"
      },
      {
        "key": "D",
        "content": "黄色被选用为警告色E.绿色的视认性和注目性都不高"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 124,
    "content": "下列属于编制安全技术措施计划的依据有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "在安全生产检查中发现而尚未解决的问题"
      },
      {
        "key": "B",
        "content": "针对新技术、新工艺、新设备等应采取的安全技术措施"
      },
      {
        "key": "C",
        "content": "安全技术革新项目和职工提出的合理化建议等"
      },
      {
        "key": "D",
        "content": "相关工种的安全技术操作规程E.建设单位或监理单位提出额特殊要求"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": 125,
    "content": "在使用（ ）的同时，必须研究应用相应的安全技术措施。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "新技术"
      },
      {
        "key": "B",
        "content": "新工艺"
      },
      {
        "key": "C",
        "content": "新设备"
      },
      {
        "key": "D",
        "content": "新材料 E.新机械"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": 126,
    "content": "转场教育的内容有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "本工程项目安全生产状况及施工条件"
      },
      {
        "key": "B",
        "content": "施工现场中危险部位的防护措施及典型事故案例"
      },
      {
        "key": "C",
        "content": "本工程项目的安全管理体系、规定及制度"
      },
      {
        "key": "D",
        "content": "预防事故的基本知识，急救措施 E.各级管理部门有关安全生产的标准"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": 127,
    "content": "根据《施工企业安全生产评价标准》（JGJ/T77-2010），施工现场安全管理评价应为对企业所属施工现场安全状况的考核，其内容包括（ ）等评定项目。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "施工现场安全达标"
      },
      {
        "key": "B",
        "content": "安全文明资金保障"
      },
      {
        "key": "C",
        "content": "资质和资格管理"
      },
      {
        "key": "D",
        "content": "生产安全事故控制E.设备设施工艺选用、保险"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 128,
    "content": "根据《建筑施工安全检查标准》（JGJ59-2011），安全管理检查评定保证项目应包括安全生产责任制、施工组设计及专项施工方案和（ ）等 6 个。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "安全技术交底"
      },
      {
        "key": "B",
        "content": "安全检查"
      },
      {
        "key": "C",
        "content": "教育"
      },
      {
        "key": "D",
        "content": "分包单位安全管理 E.应急救援"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ]
  },
  {
    "id": 129,
    "content": "下列哪些情况属于违章作业?（ ）",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "高处作业穿硬底鞋"
      },
      {
        "key": "B",
        "content": "任意拆除设备上的照明设施"
      },
      {
        "key": "C",
        "content": "特种作业持证者独立进行操作"
      },
      {
        "key": "D",
        "content": "非岗位人员任意在危险区域内逗留 E.搭拆脚手架系挂安全带"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ]
  },
  {
    "id": 130,
    "content": "Ⅱ类手持式电动工具适用的场所为（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "潮湿场所"
      },
      {
        "key": "B",
        "content": "金属构件上"
      },
      {
        "key": "C",
        "content": "锅炉内"
      },
      {
        "key": "D",
        "content": "地沟内 E.管道内"
      }
    ],
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": 131,
    "content": "对施工现场临边、洞口的防护一般就是指对施工现场（ ）的防护。“一高处”“三宝”“四口”“五临边”“四临边”答案：CD22、工程开工前，应将（ ）等情况，向工地负责人、工长进行详细交底。必要时直至向参加施工的全体人员进行交底。安全管理目标 B.施工方法C.安全技术措施 D.施工组织设计 E.工程概况答案：BCE23、混凝土振动器操作人员应该掌握一定的安全用电知识，作业时应该穿戴好作业的（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "绝缘胶鞋"
      },
      {
        "key": "B",
        "content": "防滑鞋"
      },
      {
        "key": "C",
        "content": "绝缘手套"
      },
      {
        "key": "D",
        "content": "安全帽 E.防护服"
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": 132,
    "content": "建筑工程安全生产的特点主要体现在以下几个方面：（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "产品的固定性导致作业环境局限性"
      },
      {
        "key": "B",
        "content": "露天作业多导致作业条件恶劣性"
      },
      {
        "key": "C",
        "content": "体积庞大带来了施工作业高空性"
      },
      {
        "key": "D",
        "content": "手工操作多、体积消耗大、强度高带来了个体劳动保护艰巨性 E.拆除工程潜在危险带来作业的不安全性"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 133,
    "content": "使用者在选用安全帽时，要注意检查“三证”，即（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "生产许可证"
      },
      {
        "key": "B",
        "content": "使用许可证"
      },
      {
        "key": "C",
        "content": "产品合格证"
      },
      {
        "key": "D",
        "content": "质量等级证 E.安全鉴定证"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ]
  },
  {
    "id": 134,
    "content": "使用者在选择安全帽时要注意（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "检查“三证”"
      },
      {
        "key": "B",
        "content": "检查标识"
      },
      {
        "key": "C",
        "content": "检查产品做工"
      },
      {
        "key": "D",
        "content": "进行撞击测试E.目测佩戴高度、垂直距离、水平距离等指标"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ]
  },
  {
    "id": 135,
    "content": "下列选项中不属于班组教育的主要内容的是（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "本工种的安全操作规程"
      },
      {
        "key": "B",
        "content": "班组安全活动制度及纪律"
      },
      {
        "key": "C",
        "content": "本班组施工生产工作概况"
      },
      {
        "key": "D",
        "content": "本单位安全生产制度、规定和安全注意事项E.本工程项目施工的基本情况，施工中应当注意的安全事项"
      }
    ],
    "answer": [
      "D",
      "E"
    ]
  },
  {
    "id": 136,
    "content": "项目经理部在项目施工管理总策划时必须对施工现场的危险源进行（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "识别"
      },
      {
        "key": "B",
        "content": "检测"
      },
      {
        "key": "C",
        "content": "评价"
      },
      {
        "key": "D",
        "content": "控制策划 E.测试"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ]
  },
  {
    "id": 137,
    "content": "硬器刺伤是指（ ）造成的刺伤。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "刀具、碎玻璃"
      },
      {
        "key": "B",
        "content": "铁丝、铁钉"
      },
      {
        "key": "C",
        "content": "铁棍"
      },
      {
        "key": "D",
        "content": "钢筋 E.木刺"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 138,
    "content": "有下列情形之一的，建设单位应当按照国家有关规定办理申请批准手续（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "需要临时占用规划批准范围以外场地的"
      },
      {
        "key": "B",
        "content": "可能损坏道路、管线、电力、邮电通讯等公共设施的"
      },
      {
        "key": "C",
        "content": "需要临时停水、停电、中断道路交通的"
      },
      {
        "key": "D",
        "content": "需要进行爆破作业的E.法律、法规规定需要办理报批手续的其他情形"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 139,
    "content": "建筑企业安全生产工作的目标归根结底就是避免伤亡事故和经济损失。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 140,
    "content": "建筑施工安全检查评分汇总表中的高处作业是指坠落高度基准面 3 米及 3 米以上有可能坠落的高处进行的作业。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 141,
    "content": "建筑施工企业应当定期对兼职安全员进行安全教育培训。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 142,
    "content": "生产经营单位应当安排用于配备劳动防护用品、进行安全生产培训的经费。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 143,
    "content": "生产经营单位应当在有较大危险因素的生产经营场所和有关设施、设备上，设置明显的安全警示标志。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 144,
    "content": "施工单位视情况决定是否设立安全生产管理机构，配备专职安全生产管理人员。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 145,
    "content": "施工单位应当结合危大工程专项施工方案编制监理实施细则，并对危大工程施工实施专项巡视检查。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 146,
    "content": "施工单位在承建工程项目签订的“工程合同”中，必须有防火安全的内容，会同建设单位做好防火工作。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 147,
    "content": "电梯井口必须设置防护栏杆，电梯井内应每隔 15m 设一道安全平网。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 148,
    "content": "施工现场洞口的防护是指通道口、门窗口、楼梯口、电梯口的防护。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 149,
    "content": "施工项目必须根据项目的特点，建立以技术负责人为首的安全生产领导小组。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 150,
    "content": "事故调查报告提交后，事故调查工作即告结束。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 151,
    "content": "四级风力及其以上应停止一切吊运作业。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 152,
    "content": "特种作业操作证有效期为 5 年，在全国范围内有效。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 153,
    "content": "体外心脏按压法操作方法中，抢救者以一手掌根部置于伤员胸骨下 2/3 段，即中指对准其颈部凹陷的下缘，另一手掌交叉重叠于该手背上，肘关节伸直，依靠体重和臂、肩部肌肉的力量，垂直用力，向脊柱方向冲击性地用力施压胸骨下段，使胸骨下段与其相连的肋骨下陷 3~4cm，间接压迫心脏，使心脏内血液搏出。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 154,
    "content": "通过安全检查，可以相互学习、取长补短、交流经验、吸取教训，进一步促进安全生产工作。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 155,
    "content": "为使安全色更加醒目,使用对比色为其反衬色。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 156,
    "content": "五牌是工程概况牌、管理人员名单及监督电话牌、消防保卫牌、安全生产牌、文明施工牌，一图是施工现场总平面图。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 157,
    "content": "现场处置方案应当规定应急工作职责、应急处置措施和注意事项等内容。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 158,
    "content": "项目经理部应根据现场施工进度及内外环境因素的变化，继续辨识新出现的危险源，并及时对项目部危险源识别清单进行更新。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 159,
    "content": "要加大生产安全事故问责力度，严格按照“四不放过”原则，对责任单位和责任人员资质资格实施处罚，并对查处情况予以公开曝光。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 160,
    "content": "专项安全技术方案实施过程中的危险性较大的作业行为必须列入危险作业管理范围，作业前，必须办理作业申请，明确安全监控人员实施监控，并有监控记录。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 161,
    "content": "《建设工程安全生产管理条例》中规定，县级以上地方人民政府建设行政主管部门对本行政区域内的建设工程安全生产实施监督管理。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 162,
    "content": "安全带不够长时，可以自行接长使用。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 163,
    "content": "安全色标是特定的表达安全信息含义的颜色和标志。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 164,
    "content": "安全生产就是在生产过程中不发生工伤事故、职业病、设备或财产损失的状况。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 165,
    "content": "安全生产资料档案是安全管理基础工作之一，是检查考核落实安全责任制及各项规章制度的资料依据，也是现代化安全管理的基础。。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 166,
    "content": "安全网按功能分为安全平网、安全立网、密目式安全立网。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 167,
    "content": "被确定为重大危险源,则可由项目经理部相关责任部门或人员，运行现有技术措施或控制措施，加强管理。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 168,
    "content": "（ ）的征缴按照《社会保险费征缴暂行条例》关于基本养老保险费、基本医疗保险费、失业保险费的征缴规定执行。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "工伤保险费"
      },
      {
        "key": "B",
        "content": "意外保险费"
      },
      {
        "key": "C",
        "content": "医疗保险费"
      },
      {
        "key": "D",
        "content": "人身保险费"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 169,
    "content": "（ ）对建筑工程安全防护、文明施工措施费用的使用负总责。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "分包单位"
      },
      {
        "key": "B",
        "content": "转包单位"
      },
      {
        "key": "C",
        "content": "发包单位"
      },
      {
        "key": "D",
        "content": "工程总承包单位"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 170,
    "content": "（ ）是指建筑施工企业设置的负责安全生产管理工作的独立职能部门。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全生产管理机构"
      },
      {
        "key": "B",
        "content": "项目经理部"
      },
      {
        "key": "C",
        "content": "专家组"
      },
      {
        "key": "D",
        "content": "安全生产委员会"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 171,
    "content": "（ ）应当自事故发生之日起 60 日内提交事故调查报告；特殊情况下，经负责事故调查的人民政府批准，提交事故调查报告的期限可以适当延长，但延长的期限最长不超过 60 日。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全管理机构"
      },
      {
        "key": "B",
        "content": "施工单位"
      },
      {
        "key": "C",
        "content": "建设单位"
      },
      {
        "key": "D",
        "content": "事故调查组"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 172,
    "content": "（ ）由国务院有关行政主管部门制定，并报国务院标准化行政主管部门备案，在公布国家标准之后，该项行业标准即行废止。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "规范性文件"
      },
      {
        "key": "B",
        "content": "强制性标准"
      },
      {
        "key": "C",
        "content": "行业标准"
      },
      {
        "key": "D",
        "content": "国家标准"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 173,
    "content": "（ ）在编制资格预审文件和招标文件时，应当明确要求建筑施工企业提供安全生产许可证，以及企业主要负责人、拟担任该项目负责人和专职安全生产管理人员相应的安全生产考核合格证书。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "建设单位或其委托的工程招标代理机构"
      },
      {
        "key": "B",
        "content": "施工总承包单位"
      },
      {
        "key": "C",
        "content": "专业承包单位"
      },
      {
        "key": "D",
        "content": "监理单位"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 174,
    "content": "（ ）住房城乡建设主管部门负责本行政区域内建筑施工安全生产标准化考评工作。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "县级以上地方人民政府"
      },
      {
        "key": "B",
        "content": "市级以上地方人民政府"
      },
      {
        "key": "C",
        "content": "省级以上地方人民政府"
      },
      {
        "key": "D",
        "content": "当地人民政府"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 175,
    "content": "《安全生产法》提供的监督途径不包括（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "工会民主监督"
      },
      {
        "key": "B",
        "content": "社会舆论监督"
      },
      {
        "key": "C",
        "content": "上级部门监督"
      },
      {
        "key": "D",
        "content": "社区服务监督"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 176,
    "content": "《安全生产许可证条例》是根据（ ）的有关规定制定的，为了严格规范安全生产条件，进一步加强安全生产监督管理，防止和减少生产安全事故。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "《中华人民共和国安全生产法》"
      },
      {
        "key": "B",
        "content": "《建设工程安全生产管理条例》"
      },
      {
        "key": "C",
        "content": "《实施工程建设强制性标准监督规定》"
      },
      {
        "key": "D",
        "content": "《中华人民共和国建筑法》"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 177,
    "content": "《工伤保险条例》中规定，生活自理障碍分为哪几个等级（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "生活完全不能自理和生活部分不能自理"
      },
      {
        "key": "B",
        "content": "生活完全不能自理和生活大部分不能自理"
      },
      {
        "key": "C",
        "content": "生活完全不能自理、生活大部分不能自理和生活部分不能自理"
      },
      {
        "key": "D",
        "content": "生活不能自理、生活大部分不能自理和生活部分不能自理"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 178,
    "content": "《安全生产法》规定我国安全生产工作方针是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全第一、预防为主"
      },
      {
        "key": "B",
        "content": "安全第一、预防为主、综合治理"
      },
      {
        "key": "C",
        "content": "生产必须安全、安全促进生产"
      },
      {
        "key": "D",
        "content": "以人为本、安全第一"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 179,
    "content": "《建筑法》规定，建筑工程实行直接发包的，发包单位应当将建筑工程发包给（ ）的承包单位。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "在相关部门备案"
      },
      {
        "key": "B",
        "content": "具有相应资质条件"
      },
      {
        "key": "C",
        "content": "具有相关施工经验"
      },
      {
        "key": "D",
        "content": "具有相关施工条件"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 180,
    "content": "《建筑法》规定，建筑施工企业转让、出借资质证书或者以其他方式允许他人以本企业的名义承揽工程的，对因该项承揽工程不符合规定的质量标准造成的损失，（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "由建筑施工企业独自负责"
      },
      {
        "key": "B",
        "content": "承包单位与接受转包或者分包的单位各自独立承担相应责任"
      },
      {
        "key": "C",
        "content": "由建筑施工企业与使用本企业名义的单位或者个人各自独立承担赔偿责任"
      },
      {
        "key": "D",
        "content": "由建筑施工企业与使用本企业名义的单位或者个人承担连带赔偿责任"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 181,
    "content": "《建筑法》规定，建筑物在合理使用寿命内，必须确保（ ）和主体结构的质量。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "地下结构"
      },
      {
        "key": "B",
        "content": "地基基础工程"
      },
      {
        "key": "C",
        "content": "设备安装工程"
      },
      {
        "key": "D",
        "content": "地下工程"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 182,
    "content": "《建筑工程安全防护、文明施工措施费用及使用管理规定》规定，建设单位与施工单位在施工合同中对安全防护、文明施工措施费用预付、支付计划未作约定或约定不明的，合同工期在一年以上的（含一年），预付安全防护、文明施工措施费用不得低于该费用总额的（ ），其余费用应当按照施工进度支付。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "30%"
      },
      {
        "key": "B",
        "content": "40%"
      },
      {
        "key": "C",
        "content": "50%"
      },
      {
        "key": "D",
        "content": "70%"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 183,
    "content": "《生产安全事故报告和调查处理条例》规定，（ ），对主要负责人、直接负责的主管人员和其他直接责任人员处上一年年收入 60%至 100%的罚款。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "在事故调查处理期间擅离职守的"
      },
      {
        "key": "B",
        "content": "迟报或者漏报事故的"
      },
      {
        "key": "C",
        "content": "不立即组织事故抢救的"
      },
      {
        "key": "D",
        "content": "谎报或者瞒报事故的"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 184,
    "content": "《生产安全事故报告和调查处理条例》中规定，事故发生单位对事故发生负有责任的，由有关部门依法暂扣或者吊销其有关证照；对事故发生单位负有事故责任的有关人员，依法暂停或者撤销其与安全生产有关的执业资格、岗位证书；事故发生单位主要负责人受到刑事处罚或者撤职处分的，自刑罚执行完毕或者受处分之日起，（ ）内不得担任任何生产经营单位的主要负责人。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2 年"
      },
      {
        "key": "B",
        "content": "3 年"
      },
      {
        "key": "C",
        "content": "5 年"
      },
      {
        "key": "D",
        "content": "7 年"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 185,
    "content": "《生产安全事故报告和调查处理条例》中规定，事故发生单位主要负责人有下列哪种行为的，需处上一年年收入 40%至 80%的罚款；属于国家工作人员的，并依法给予处分；构成犯罪的，依法追究刑事责任。（ ）",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "组织事故抢救不力的"
      },
      {
        "key": "B",
        "content": "迟报或漏报事故的"
      },
      {
        "key": "C",
        "content": "在事故调查中作伪证的"
      },
      {
        "key": "D",
        "content": "阻碍、干涉事故调查工作的"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 186,
    "content": "《施工企业安全生产评价标准》（JGJ/T77-2010）是一部（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "推荐性行业标准"
      },
      {
        "key": "B",
        "content": "强制性行业标准"
      },
      {
        "key": "C",
        "content": "推荐性国家标准"
      },
      {
        "key": "D",
        "content": "强制性国家标准"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 187,
    "content": "《中华人民共和国安全生产法》规定：国家实行生产安全事故（ ），依照本法和有关法律、法规的规定，追究生产安全事故责任人员的法律责任。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "民事补偿制度"
      },
      {
        "key": "B",
        "content": "法律追究制度"
      },
      {
        "key": "C",
        "content": "责任连带制度"
      },
      {
        "key": "D",
        "content": "责任追究制度"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 188,
    "content": "《中华人民共和国建筑法》规定，建筑工程开工前，建设单位应当按照国家有关规定向工程所在地县级以上人民政府建设行政主管部门申请领取（ ）；但是，国务院建设行政主管部门确定的限额以下的小型工程除外。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全生产许可证"
      },
      {
        "key": "B",
        "content": "规划许可证"
      },
      {
        "key": "C",
        "content": "施工许可证"
      },
      {
        "key": "D",
        "content": "排污许可证"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 189,
    "content": "《中华人民共和国特种设备安全法》规定，国家按照分类监督管理的原则对特种设备生产实行（ ）制度。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "行政处罚"
      },
      {
        "key": "B",
        "content": "许可"
      },
      {
        "key": "C",
        "content": "行政审批"
      },
      {
        "key": "D",
        "content": "分类监管"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 190,
    "content": "《中华人民共和国职业病防治法》规定，职业病防治工作坚持预防为主、防治结合的方针，建立（ ）负责、行政机关监管、行业自律、职工参与和社会监督的机制，实行分类管理、综合治理。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "总承包单位"
      },
      {
        "key": "B",
        "content": "劳务单位"
      },
      {
        "key": "C",
        "content": "用人单位"
      },
      {
        "key": "D",
        "content": "包工头"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 191,
    "content": "安全生产管理机构专职安全生产管理人员的配备应满足相关要求，并应根据企业经营规模、设备管理和生产需要予以增加。建筑施工总 承包资质序列企业：一级资质不少于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3 人"
      },
      {
        "key": "B",
        "content": "4 人"
      },
      {
        "key": "C",
        "content": "6 人"
      },
      {
        "key": "D",
        "content": "10 人"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 192,
    "content": "安全生产考核包括安全生产知识考核和（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全生产技术"
      },
      {
        "key": "B",
        "content": "安全生产技能"
      },
      {
        "key": "C",
        "content": "管理能力考核"
      },
      {
        "key": "D",
        "content": "安全意识"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 193,
    "content": "安全生产考核合格证书有效期为（ ）年，证书在全国范围内有效。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2"
      },
      {
        "key": "B",
        "content": "3"
      },
      {
        "key": "C",
        "content": "4"
      },
      {
        "key": "D",
        "content": "5"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 194,
    "content": "颁发管理机关应将建筑施工企业安全生产许可证审批、延期、暂扣、吊销情况，于作出有关行政决定之日起（ ）内录入全国建筑施工企业安全生产许可证管理信息系统。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5 个工作日"
      },
      {
        "key": "B",
        "content": "10 个工作日"
      },
      {
        "key": "C",
        "content": "15 个工作日"
      },
      {
        "key": "D",
        "content": "20 个工作日"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 195,
    "content": "产生职业病危害的用人单位，应当在（ ）设置公告栏，公布有关职业病防治的规章制度、操作规程、职业病危害事故应急救援措施和工作场所职业病危害因素检测结果。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "显著位置"
      },
      {
        "key": "B",
        "content": "醒目位置"
      },
      {
        "key": "C",
        "content": "明显位置"
      },
      {
        "key": "D",
        "content": "空旷位置"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 196,
    "content": "出租的机械设备和施工机具及配件，应当具有（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全检查合格证、质量检查合格证"
      },
      {
        "key": "B",
        "content": "生产（制造）许可证、安全检查合格证"
      },
      {
        "key": "C",
        "content": "生产（制造）许可证、质量检查合格证"
      },
      {
        "key": "D",
        "content": "生产（制造）许可证、产品合格证"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 197,
    "content": "垂直运输机械作业人员、安装拆卸工、爆破作业人员、起重信号工、登高架设作业人员等特种作业人员，必须按照国家有关规定经过（ ），并取得特种作业操作资格证书后，方可上岗作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "三级教育"
      },
      {
        "key": "B",
        "content": "专门的安全作业培训"
      },
      {
        "key": "C",
        "content": "安全常识培训"
      },
      {
        "key": "D",
        "content": "安全技术交底"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 198,
    "content": "从业人员在本生产经营单位内调整工作岗位或离岗（ ）以上重新上岗时，应当重新接受车间（工段、区、队）和班组级的安全培训。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1 年"
      },
      {
        "key": "B",
        "content": "2 年"
      },
      {
        "key": "C",
        "content": "3 年"
      },
      {
        "key": "D",
        "content": "4 年"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 199,
    "content": "依据《特种设备安全监察条例》的规定，电梯应当至少每（ ）日进行一次清洁、润滑、调整和检查。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "15"
      },
      {
        "key": "B",
        "content": "20"
      },
      {
        "key": "C",
        "content": "30"
      },
      {
        "key": "D",
        "content": "60"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 200,
    "content": "对安全生产考核合格的，考核机关应当在（ ）个工作日内核发安全生产考核合格证书，并予以公告；对不合格的，应当通过“安管人员”所在企业通知本人并说明理由。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "10"
      },
      {
        "key": "B",
        "content": "15"
      },
      {
        "key": "C",
        "content": "20"
      },
      {
        "key": "D",
        "content": "30"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 201,
    "content": "对于高大模板支撑体系，其高度与宽度相比大于（ ）的独立支撑系统，应加设保证整体稳定的构造措施。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一倍"
      },
      {
        "key": "B",
        "content": "两倍"
      },
      {
        "key": "C",
        "content": "三倍"
      },
      {
        "key": "D",
        "content": "四倍"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 202,
    "content": "对证书有效期内未因生产安全事故或者违反本规定受到行政处罚，信用档案中无不良行为记录，且已按规定参加企业和县级以上人民政 府住房城乡建设主管部门组织的安全生产教育培训的，考核机关应当在受理延续申请之日起（ ）个工作日内，准予证书延续。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3"
      },
      {
        "key": "B",
        "content": "5"
      },
      {
        "key": "C",
        "content": "15"
      },
      {
        "key": "D",
        "content": "20"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 203,
    "content": "高大模板支撑系统搭设前，（ ）应当根据专项施工方案和有关规范、标准的要求，对现场管理人员、操作班组、作业人员进行安全技术交底，并履行签字手续。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "企业负责人"
      },
      {
        "key": "B",
        "content": "施工负责人"
      },
      {
        "key": "C",
        "content": "项目工程技术负责人或方案编制人员"
      },
      {
        "key": "D",
        "content": "单位负责人"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 204,
    "content": "根据《安全生产法》，生产经营单位的安全生产管理人员在检查中发现重大事故隐患，依规定向本单位有关负责人报告，有关负责人不及时处理的，安全生产管理人员可以（ ），接到报告的部门应当依法及时处理。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "不予处理"
      },
      {
        "key": "B",
        "content": "自行处理"
      },
      {
        "key": "C",
        "content": "向主管的负有安全生产监督管理职责的部门报告"
      },
      {
        "key": "D",
        "content": "向纪律监察部门报告"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 205,
    "content": "根据《安全生产法》规定，发生较大生产安全事故，对负有责任的生产经营单位除要求其依法承担相应的赔偿等责任外，由应急管理部门依照规定处（ ）的罚款。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "30 万以上 100 万以下"
      },
      {
        "key": "B",
        "content": "50 万以上 100 万以下"
      },
      {
        "key": "C",
        "content": "100 万以上 200 万以下"
      },
      {
        "key": "D",
        "content": "200 万以上 1000 万以下"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 206,
    "content": "根据《安全生产法》规定，生产经营单位的主要负责人和安全生产管理人员必须具备与本单位所从事的生产经营活动相应的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全生产管理能力"
      },
      {
        "key": "B",
        "content": "安全生产知识"
      },
      {
        "key": "C",
        "content": "安全作业培训"
      },
      {
        "key": "D",
        "content": "安全生产知识和管理能力"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 207,
    "content": "根据《工伤保险条例》，下列描述不正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "职工发生工伤；经治疗伤情相对稳定后存在残疾、影响劳动能力的；应当进行劳动能力鉴定"
      },
      {
        "key": "B",
        "content": "劳动能力鉴定是指劳动功能障碍程度和生活自理障碍程度的等级鉴定"
      },
      {
        "key": "C",
        "content": "劳动功能障碍分为十个伤残等级；最重的为十级；最轻的为一级"
      },
      {
        "key": "D",
        "content": "劳动能力鉴定标准由国务院社会保险行政部门会同国务院卫生行政部门等部门制定"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 208,
    "content": "根据《广东省房屋市政工程施工安全生产问题突出地区挂牌督办制度（暂行）》，挂牌督办部门应当向被挂牌督办部门发出《挂牌督办通知书》，同时抄送被挂牌督办部门的（ ），并在 7 个工作日内，通过本部门门户网站向社会公布挂牌督办信息。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "市级人民政府"
      },
      {
        "key": "B",
        "content": "上级人民政府"
      },
      {
        "key": "C",
        "content": "省级人民政府"
      },
      {
        "key": "D",
        "content": "同级人民政府"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 209,
    "content": "根据《广东省房屋市政工程施工安全生产问题突出地区挂牌督办制度（暂行）》附件——《广东省台风、暴雨突发气象灾害预警信号含义说明》，暴雨橙色预警信号是指（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "在过去的 3 小时；本地降雨量已达 150 毫米以上；且降雨可能持续"
      },
      {
        "key": "B",
        "content": "在过去的 3 小时；本地降雨量已达 100 毫米以上；且降雨可能持续"
      },
      {
        "key": "C",
        "content": "在过去的 3 小时；本地降雨量已达 50 毫米以上；且雨势可能持续"
      },
      {
        "key": "D",
        "content": "6 小时内本地将可能有暴雨发生；或者强降水将可能持续"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 210,
    "content": "根据《广东省建设厅建筑工程安全防护、文明施工措施费用管理办法》规定，建设单位与施工单位在施工合同中对安全措施费预付、支付计划未作约定或约定不明的，合同工期在一年以内的，建设单位预付安全措施费不得低于该费用总额的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "30%"
      },
      {
        "key": "B",
        "content": "40%"
      },
      {
        "key": "C",
        "content": "50%"
      },
      {
        "key": "D",
        "content": "60%"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 211,
    "content": "根据《广东省住房和城乡建设厅关于〈危险性较大的分部分项工程安全管理办法〉的实施细则》规定，专项方案应当由施工企业技术部门组织本单位施工技术、安全、质量等部门的专业技术人员进行审核，经审核通过的，由施工企业（ ）签字并加盖（ ）后报监理企业，由项目总监理工程师审核签字并加盖执业资格注册章。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "项目负责人；项目公章"
      },
      {
        "key": "B",
        "content": "项目技术负责人；企业公章"
      },
      {
        "key": "C",
        "content": "技术负责人；单位法人公章"
      },
      {
        "key": "D",
        "content": "法人代表；单位法人公章"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 212,
    "content": "根据《广东省住房和城乡建设厅关于建筑施工安全生产标准化评定工作实施细则》规定，建筑施工企业具有下列哪种情形（ ），经企业评定主体评审确认，且公示无异议的，安全生产标准化评定结论为不合格。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "住房城乡建设行政主管部门或建设工程安全监督机构对项目存在安全生产违法违规行为发出的局部（暂时）停工或全面停工整改通知；建筑施工企业无正当理由逾期未落实整改的"
      },
      {
        "key": "B",
        "content": "企业近三年所承建的工程项目发生较大及以上或发生 2 起及以上一般生产安全事故的"
      },
      {
        "key": "C",
        "content": "企业负责人未对所承建项目实行带班检查"
      },
      {
        "key": "D",
        "content": "因施工现场管理混乱；被省级及以上住房城乡建设行政主管部门安全生产督查发现存在重大安全隐患；责令停工整改的"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 213,
    "content": "根据《建设工程安全生产管理条例》，安装、拆卸施工起重机和整体提升脚手架、模板等自升式架设设施，应当编制拆装方案、制定（ ），并由专业技术人员现场监督。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全预防措施"
      },
      {
        "key": "B",
        "content": "安全监理措施"
      },
      {
        "key": "C",
        "content": "安全施工措施"
      },
      {
        "key": "D",
        "content": "安全防护措施"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 214,
    "content": "根据《建设工程安全生产管理条例》，发生安全生产事故后，（ ）应当采取措施防止事故扩大，保护事故现场。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "总承包单位"
      },
      {
        "key": "B",
        "content": "施工总承包单位"
      },
      {
        "key": "C",
        "content": "项目承包单位"
      },
      {
        "key": "D",
        "content": "施工单位"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 215,
    "content": "根据《建设工程安全生产管理条例》，分包单位应当服从总承包单位的安全生产管理，分包单位不服从管理导致生产安全事故的，由分包单位承担（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "主要责任"
      },
      {
        "key": "B",
        "content": "次要责任"
      },
      {
        "key": "C",
        "content": "连带责任"
      },
      {
        "key": "D",
        "content": "相关责任"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 216,
    "content": "根据《建设工程安全生产管理条例》，建设单位应当向施工单位提供施工现场及毗邻区域内供水、排水、供电、供气、供热、通信、广播电视等地下管线资料，气象和水文观测资料，相邻建筑物和构筑物、地下工程的有关资料，并保证资料的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "及时、真实、完备"
      },
      {
        "key": "B",
        "content": "真实、完整、实时"
      },
      {
        "key": "C",
        "content": "真实、准确、完整"
      },
      {
        "key": "D",
        "content": "及时、准确、完整"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 217,
    "content": "根据《建设工程安全生产管理条例》，建设行政主管部门对建设工程是否有安全措施进行审查时，（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "可以收取必要的现场检查费用"
      },
      {
        "key": "B",
        "content": "不得收取任何费用"
      },
      {
        "key": "C",
        "content": "可根据工作量的大小收取一定费用"
      },
      {
        "key": "D",
        "content": "可收取批准的费用"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 218,
    "content": "根据《建设工程安全生产管理条例》，施工单位采购、租赁的安全防护用具、机械设备、施工机具及配件，应当具有生产（制造）许可证、产品合格证，并在进入施工现场前进行（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "检测"
      },
      {
        "key": "B",
        "content": "检查"
      },
      {
        "key": "C",
        "content": "查验"
      },
      {
        "key": "D",
        "content": "测试"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 219,
    "content": "根据《建设工程安全生产管理条例》，施工单位的主要负责人、项目负责人有前款违法行为，尚不够刑事处罚的，处（ ）万元以上（ ）万元以下的罚款或者按照管理权限给予撤职处分；自刑罚执行完毕或者受处分之日起，5 年内不得担任任何施工单位的主要负责人、项目负责人。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2；20"
      },
      {
        "key": "B",
        "content": "10；20"
      },
      {
        "key": "C",
        "content": "10；50"
      },
      {
        "key": "D",
        "content": "2；10"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 220,
    "content": "根据《建设工程安全生产管理条例》，施工单位应当向作业人员提供安全防护用具和安全防护服装，并（ ）危险岗位的操作规程和违章操作的危害。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "告知"
      },
      {
        "key": "B",
        "content": "书面告知"
      },
      {
        "key": "C",
        "content": "口头告知"
      },
      {
        "key": "D",
        "content": "口头或书面告知"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 221,
    "content": "根据《建设工程安全生产管理条例》，特种作业人员必须按照国家有关规定经过专门的安全作业培训，并取得（ ）后，方可上岗作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "特种作业操作资格证书"
      },
      {
        "key": "B",
        "content": "培训合格证书"
      },
      {
        "key": "C",
        "content": "相应资格"
      },
      {
        "key": "D",
        "content": "特种作业操作合格证书"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 222,
    "content": "根据《建设工程安全生产管理条例》，注册执业人员未执行法律、法规和工程建设强制性标准的，责令停止执业（ ）个月以上（ ）年以下；情节严重的，吊销执业资格证书，（ ）年内不予注册；造成重大安全事故的，终身不予注册；构成犯罪的，依照刑法有关规定追究刑事责任。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3；1；5"
      },
      {
        "key": "B",
        "content": "3；1；3"
      },
      {
        "key": "C",
        "content": "3；2；5"
      },
      {
        "key": "D",
        "content": "5；1；3"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 223,
    "content": "根据《建设工程安全生产管理条例》规定，施工单位在使用施工起重机械和整体提升脚手架、模板等自升式架设设施前，应当组织有关单位进行（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "检查"
      },
      {
        "key": "B",
        "content": "验收"
      },
      {
        "key": "C",
        "content": "审定"
      },
      {
        "key": "D",
        "content": "核实"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 224,
    "content": "根据《建筑起重机械安全监督管理规定》，（ ）机构对检测合格的施工起重机和整体提升脚手架、模板等自升式架设设施，应当出具安全合格证明文件，并对检测结果负责。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "质量检测"
      },
      {
        "key": "B",
        "content": "检验检测"
      },
      {
        "key": "C",
        "content": "安全检测"
      },
      {
        "key": "D",
        "content": "质量监督"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 225,
    "content": "根据《建筑施工企业安全生产管理机构设置及专职安全生产管理人员配备办法》，下列说法错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "建筑施工总承包资质序列企业：特级资质不少于 6 人；一级资质不少于 4 人；二级和二级以下资质企业不少于 3 人"
      },
      {
        "key": "B",
        "content": "建筑施工专业承包资质序列企业：一级资质不少于 4 人；二级和二级以下资质企业不少于 3 人"
      },
      {
        "key": "C",
        "content": "建筑施工劳务分包资质序列企业：不少于 2 人"
      },
      {
        "key": "D",
        "content": "建筑施工企业的分公司、区域公司等较大的分支机构应依据实际生产情况配备不少于 2 人的专职安全生产管理人员"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 226,
    "content": "根据《生产安全事故报告和调查处理条例》，自事故发生之日起（ ）日内，事故造成的伤亡人数发生变化的，应当及时补报。道路交通事故、火灾事故自发生之日起（ ）日内，事故造成的伤亡人数发生变化的，应当及时补报。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "30；15"
      },
      {
        "key": "B",
        "content": "15；7"
      },
      {
        "key": "C",
        "content": "30；7"
      },
      {
        "key": "D",
        "content": "7；30"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 227,
    "content": "根据《危险性较大的分部分项工程安全管理办法》，对于涉及深基坑等工程，建筑施工企业应当组织不少于（ ）人的专家组，对已编制的安全专项施工方案进行论证审查。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3"
      },
      {
        "key": "B",
        "content": "10"
      },
      {
        "key": "C",
        "content": "8"
      },
      {
        "key": "D",
        "content": "5"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 228,
    "content": "根据《中华人民共和国安全生产法》，发生（ ），对负有责任的生产经营单位除要求其依法承担相应的赔偿等责任外，由应急管理部门处三十万元以上一百万元以下罚款。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一般事故"
      },
      {
        "key": "B",
        "content": "较大事故"
      },
      {
        "key": "C",
        "content": "重大事故"
      },
      {
        "key": "D",
        "content": "重大伤亡事故"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 229,
    "content": "根据《中华人民共和国建筑法》，有关建筑工程安全的国家标准不能适应确保建筑安全的要求时，应当（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "及时废除"
      },
      {
        "key": "B",
        "content": "及时修订"
      },
      {
        "key": "C",
        "content": "立即修订"
      },
      {
        "key": "D",
        "content": "及时解释"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 230,
    "content": "根据建设部《建筑施工企业安全生产管理机构设置及专职安全生产管理人员配备办法》（建质[2008]91 号）的规定，总承包二级及以下资质企业安全生产管理机构专职安全生产管理人员不得少于（ ）人。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2"
      },
      {
        "key": "B",
        "content": "3"
      },
      {
        "key": "C",
        "content": "4"
      },
      {
        "key": "D",
        "content": "5"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 231,
    "content": "根据生产安全事故造成的人员伤亡或者直接经济损失，下列对事故划分等级错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "特别重大事故；是指造成 30 人以上死亡；或者 100 人以上重伤（包括急性工业中毒；下同）；或者 1 亿元以上直接经济损失的事故"
      },
      {
        "key": "B",
        "content": "重大事故；是指造成 10 人以上 30 人以下死亡；或者 50 人以上 100人以下重伤；或者 5000 万元以上 1 亿元以下直接经济损失的事故"
      },
      {
        "key": "C",
        "content": "较大事故；是指造成 3 人以上 10 人以下死亡；或者 11 人以上 50人以下重伤；或者 1000 万元以上 5000 万元以下直接经济损失的事故"
      },
      {
        "key": "D",
        "content": "一般事故；是指造成 3 人以下死亡；或者 10 人以下重伤；或者 1000万元以下直接经济损失的事故"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 232,
    "content": "工程建设强制性标准是指直接涉及工程（ ）等方面的工程建设标准强制性条文。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "质量、安全、卫生、环境保护"
      },
      {
        "key": "B",
        "content": "质量、安全、环境保护"
      },
      {
        "key": "C",
        "content": "质量、安全、施工、环境保护"
      },
      {
        "key": "D",
        "content": "质量、安全、施工、环境规划"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 233,
    "content": "工程项目发生一般及以上生产安全事故的，工程所在地市、县级人民政府建设主管部门应当（ ）按照事故报告要求向本地区颁发管理机关报告。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "可以"
      },
      {
        "key": "B",
        "content": "有权"
      },
      {
        "key": "C",
        "content": "立即"
      },
      {
        "key": "D",
        "content": "请示后"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 234,
    "content": "工会依法对安全生产工作进行（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "监督"
      },
      {
        "key": "B",
        "content": "检查"
      },
      {
        "key": "C",
        "content": "管理"
      },
      {
        "key": "D",
        "content": "考核"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 235,
    "content": "国家对环境噪音污染严重的落后设备实行（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "淘汰制度"
      },
      {
        "key": "B",
        "content": "召回制度"
      },
      {
        "key": "C",
        "content": "更新制度"
      },
      {
        "key": "D",
        "content": "监控制度"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 236,
    "content": "国家建立伤亡事故和职业病统计报告和处理制度。（ ）以上各级人民政府劳动行政部门、有关部门和用人单位应当依法对劳动者在劳动过程中发生的伤亡事故和劳动者的职业病状况,进行统计、报告和处理。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "市级"
      },
      {
        "key": "B",
        "content": "县级"
      },
      {
        "key": "C",
        "content": "省级"
      },
      {
        "key": "D",
        "content": "国务院"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 237,
    "content": "根据《建筑业企业资质管理规定》，由国务院住房城乡建设主管部门许可的资质申请，国务院住房城乡建设主管部门应当自省、自治区、直辖市人民政府住房城乡建设主管部门受理申请材料之日起（ ）个工作日内完成审查，公示审查意见，公示时间为（ ）个工作。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "30；5"
      },
      {
        "key": "B",
        "content": "60；10"
      },
      {
        "key": "C",
        "content": "90；15"
      },
      {
        "key": "D",
        "content": "180；30"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 238,
    "content": "监察机关依照行政监察法的规定，对负有安全生产监督管理职责的部门及其工作人员履行（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全生产监督管理职责实施监察"
      },
      {
        "key": "B",
        "content": "安全生产管理职责实施监督"
      },
      {
        "key": "C",
        "content": "安全监督管理工作实施监察"
      },
      {
        "key": "D",
        "content": "安全管理工作实施监管"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 239,
    "content": "检验检测机构和（ ）对检测结构、鉴定结论依法承担法律责任。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "专业监理工程师"
      },
      {
        "key": "B",
        "content": "安全监理员"
      },
      {
        "key": "C",
        "content": "检验检测人员"
      },
      {
        "key": "D",
        "content": "总监理工程师"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 240,
    "content": "建设单位、施工总承包单位或具有用工主体资格的分包单位将工程（业务）发包给不具备用工主体资格的组织或个人，该组织或个人招用的劳动者发生工伤的，发包单位与不具备用工主体资格的组织或个人承担（ ）责任。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "部分赔偿"
      },
      {
        "key": "B",
        "content": "全部赔偿"
      },
      {
        "key": "C",
        "content": "连带赔偿"
      },
      {
        "key": "D",
        "content": "直接赔偿"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 241,
    "content": "建设单位未按照规定协调组织制定防止多台塔式起重机相互碰撞 的安全措施的，由县级以上地方人民政府建设主管部门责令限期改正，予以警告，并处以（ ）以上（ ）以下的罚款；逾期未改的，责令停止施工。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3000；1 万"
      },
      {
        "key": "B",
        "content": "3000；3 万"
      },
      {
        "key": "C",
        "content": "5000；1 万"
      },
      {
        "key": "D",
        "content": "5000；3 万"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 242,
    "content": "建设单位应当在拆除工程施工（ ）前，将相关资料报送建设工程所在地的县级以上地方人民政府建设行政主管部门或者其他有关部门备案。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "30 日"
      },
      {
        "key": "B",
        "content": "25 日"
      },
      {
        "key": "C",
        "content": "20 日"
      },
      {
        "key": "D",
        "content": "15 日"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 243,
    "content": "建设项目的环境影响评价文件自批准之日起超过（ ），方决定该项目开工建设的，其环境影响评价文件应当报原审批部门重新审核;原审批部门应当自收到建设项目环境影响评价文件之日起（ ）内，将审核意见书面通知建设单位。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "五年；七日"
      },
      {
        "key": "B",
        "content": "五年；十日"
      },
      {
        "key": "C",
        "content": "四年；七日"
      },
      {
        "key": "D",
        "content": "四年；十日"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 244,
    "content": "建筑起重机械在使用过程中需要（ ）的，使用单位委托原安装单位或者具有相应资质的安装单位按照专项施工方案实施后，即可投入使用。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "加节"
      },
      {
        "key": "B",
        "content": "附着"
      },
      {
        "key": "C",
        "content": "顶升"
      },
      {
        "key": "D",
        "content": "爬升"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 245,
    "content": "建筑施工企业（ ）按照工程设计图纸和施工技术标准施工，不得偷工减料。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "必须"
      },
      {
        "key": "B",
        "content": "可以"
      },
      {
        "key": "C",
        "content": "不得不"
      },
      {
        "key": "D",
        "content": "应该"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 246,
    "content": "根据《安全生产许可证条例》规定，企业不得（ ）安全生产许可证。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "转让"
      },
      {
        "key": "B",
        "content": "出借"
      },
      {
        "key": "C",
        "content": "冒用"
      },
      {
        "key": "D",
        "content": "伪造E.使用伪造"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ]
  },
  {
    "id": 247,
    "content": "根据《环境保护法》，国家机关和使用财政资金的其他组织应当优先采购和使用（ ）等有利于保护环境的产品、设备和设施。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "节能"
      },
      {
        "key": "B",
        "content": "节地"
      },
      {
        "key": "C",
        "content": "节材"
      },
      {
        "key": "D",
        "content": "环保 E.节水"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ]
  },
  {
    "id": 248,
    "content": "根据《中华人民共和国消防法》规定，建设单位要求建筑设计单位或者建筑施工企业降低消防技术标准设计、施工的，（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "责令改正或者停止施工"
      },
      {
        "key": "B",
        "content": "并处三万元以上十万元以下罚款"
      },
      {
        "key": "C",
        "content": "暂扣营业执照，停产停建"
      },
      {
        "key": "D",
        "content": "并处一万元以上十万元以下罚款E.吊销排污许可证，责令停产停建，撤离现场"
      }
    ],
    "answer": [
      "A",
      "D"
    ]
  },
  {
    "id": 249,
    "content": "行政处分的种类包括（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "警告"
      },
      {
        "key": "B",
        "content": "记过"
      },
      {
        "key": "C",
        "content": "降级"
      },
      {
        "key": "D",
        "content": "开除 E.划罚款"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": 250,
    "content": "《建设工程安全生产管理条例》适用于抢险救灾和农民自建低层住宅的安全生产管理。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 251,
    "content": "《建设工程高大模板支撑系统施工安全监督管理导则》所称高大模板支撑系统是指建设工程施工现场混凝土构件模板支撑高度超过 8m，或搭设跨度超过 18m，或施工总荷载大于 15kN/㎡，或集中线荷载大于 20kN/m 的模板支撑系统。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 252,
    "content": "《中华人民共和国安全生产法》规定，生产经营单位发生生产安全事故后，事故现场有关人员应当采取相应的处理措施后，向本单位负责人报告。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 253,
    "content": "《中华人民共和国特种设备安全法》规定，发生重大事故，由当地政府负责特种设备安全监督管理的部门会同有关部门组织事故调查组进行调查。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 254,
    "content": "12 个月内同一企业连续发生 2 次生产安全事故的，吊销安全生产许可证。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 255,
    "content": "1 万平方米以下的建筑工程，总承包单位配备项目专职安全生产管理人员不少于 1 人。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 256,
    "content": "负有安全生产监督管理的有关政府部门应当建立事故隐患排查治理监督检查制度，定期组织对生产经营单位事故隐患排查治理情况开展监督检查。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 257,
    "content": "不具备安全培训条件的生产经营单位，应当委托具有安全培训条件的机构对从业人员进行安全培训。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 258,
    "content": "出租单位应当对出租的机械设备和施工机具及配件的安全性能进行检测，在签订租赁协议时，不必出具检测合格证明。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 259,
    "content": "从业人员发现直接危及人身安全的紧急情况时，有权停止作业或者在采取可能的应急措施后撤离作业场所。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 260,
    "content": "对于发现的重大安全隐患，项目专职安全生产管理人员有权向企业安全生产管理机构报告。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 261,
    "content": "高大模板支撑系统应优先选用高新技术的定型化、工具式支撑体系。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 262,
    "content": "根据《安全生产法》规定，建设项目安全设施的设计人、设计单位应当对安全设施设计负责。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 263,
    "content": "根据《建筑起重机械安全监督管理规定》，使用单位可以在建筑起重机械上安装非原制造厂制造的标准节和附着装置。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 264,
    "content": "根据《建筑起重机械安全监督管理规定》，特种作业人员的特种作业操作资格证书由国务院建设主管部门规定统一样式。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 265,
    "content": "公民、法人或者其他组织因违法受到行政处罚，其违法行为对他人造成损害的，应当依法承担刑事责任。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 266,
    "content": "核设施事故适用《生产安全事故报告和调査处理条例》。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 267,
    "content": "建设单位未按《广东省建设厅建筑工程安全防护、文明施工措 施费用管理办法》规定及时审批支付安全措施费的，责令限期改正；逾期未改正的，依照有关法律、法规给予处罚。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 268,
    "content": "建设行政主管部门应当自收到申请之日起十五日内，对符合条件的申请颁发施工许可证。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 269,
    "content": "建筑施工企业安全生产许可证被吊销后，自吊销决定作出之日起两年内不得重新申请。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 270,
    "content": "操作平台四周必须按临边作业要求设置防护栏杆，并应布置（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "攀高扶梯"
      },
      {
        "key": "B",
        "content": "登高扶梯"
      },
      {
        "key": "C",
        "content": "攀高爬梯"
      },
      {
        "key": "D",
        "content": "登高楼梯"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 271,
    "content": "单、双排脚手架必须配合施工进度搭设，应遵守（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一次搭设高度不应超过相邻连墙件以上两步"
      },
      {
        "key": "B",
        "content": "一次搭设高度可以在相邻连墙件以上一步"
      },
      {
        "key": "C",
        "content": "一次搭设高度可以不考虑连墙件的位置"
      },
      {
        "key": "D",
        "content": "一次搭设高度可以在相邻连墙件以上三步"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 272,
    "content": "当钢筋混凝土梁、板施工中，模板要求起拱又无具体设计要求时，起拱高度应为跨度的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1/1000～3/1000"
      },
      {
        "key": "B",
        "content": "2/1000～3/1000"
      },
      {
        "key": "C",
        "content": "3/1000～4/1000"
      },
      {
        "key": "D",
        "content": "4/1000～5/1000"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 273,
    "content": "当门式脚手架搭设高度在（ ）m 及以下时，在脚手架的转角处、两端及中间间隔不超过 15m 的外侧立面必须设置一道剪刀撑，并应由底至顶连续设置。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "12"
      },
      {
        "key": "B",
        "content": "15"
      },
      {
        "key": "C",
        "content": "24"
      },
      {
        "key": "D",
        "content": "32"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 274,
    "content": "使用行灯电源电压不大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "36V"
      },
      {
        "key": "B",
        "content": "24V"
      },
      {
        "key": "C",
        "content": "12V"
      },
      {
        "key": "D",
        "content": "6V"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 275,
    "content": "高度超过（ ）的层次上交叉作业，应设双层防护棚。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "20m"
      },
      {
        "key": "B",
        "content": "22m"
      },
      {
        "key": "C",
        "content": "24m"
      },
      {
        "key": "D",
        "content": "26m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 276,
    "content": "可燃材料及易燃易爆危险品应按计划限量进场。进场后，可燃材料宜存放于库房内，如露天存放时，应分类成垛堆放，垛高不应超过（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1.0m"
      },
      {
        "key": "B",
        "content": "1.5m"
      },
      {
        "key": "C",
        "content": "2.0m"
      },
      {
        "key": "D",
        "content": "2.5m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 277,
    "content": "梁板结构的拆模顺序是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "楼板底模-柱模板-梁侧模-梁底模"
      },
      {
        "key": "B",
        "content": "柱模板-楼板底模-梁底模-梁侧模"
      },
      {
        "key": "C",
        "content": "柱模板-楼板底模-梁侧模-梁底模"
      },
      {
        "key": "D",
        "content": "楼板底模-柱模板-梁底模-梁侧模"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 278,
    "content": "临边作业是指在施工现场中，工作面沿无围护设施或者设施高度低于（ ）时的高处作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "60cm"
      },
      {
        "key": "B",
        "content": "80cm"
      },
      {
        "key": "C",
        "content": "100cm"
      },
      {
        "key": "D",
        "content": "120cm"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 279,
    "content": "临时消防车道的净宽度和净空高度均不小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1m"
      },
      {
        "key": "B",
        "content": "2m"
      },
      {
        "key": "C",
        "content": "3m"
      },
      {
        "key": "D",
        "content": "4m"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 280,
    "content": "临时用房建筑面积之和大于（ ）㎡时，应设置临时室外消防给水系统。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "500"
      },
      {
        "key": "B",
        "content": "1000"
      },
      {
        "key": "C",
        "content": "2000"
      },
      {
        "key": "D",
        "content": "5000"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 281,
    "content": "开关箱与其控制的固定式用电设备的水平距离不宜超过（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3 米"
      },
      {
        "key": "B",
        "content": "4 米"
      },
      {
        "key": "C",
        "content": "5 米"
      },
      {
        "key": "D",
        "content": "6 米"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 282,
    "content": "盘扣式钢管脚手架立杆应定位准确，并应配合施工进度搭设，双排外作业架一次搭设高度不应超过最上层连墙件两步，且自由高度不应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1m"
      },
      {
        "key": "B",
        "content": "2m"
      },
      {
        "key": "C",
        "content": "3m"
      },
      {
        "key": "D",
        "content": "4m"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 283,
    "content": "墙面等处的竖向洞口，凡落地的洞口应设置开关式、工具式或固定式的防护门，门栅网格的间距不应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "13cm"
      },
      {
        "key": "B",
        "content": "14cm"
      },
      {
        "key": "C",
        "content": "15cm"
      },
      {
        "key": "D",
        "content": "16cm"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 284,
    "content": "施工现场用电系统中，N 线的绝缘色应是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "黑色"
      },
      {
        "key": "B",
        "content": "白色"
      },
      {
        "key": "C",
        "content": "淡蓝色"
      },
      {
        "key": "D",
        "content": "棕色"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 285,
    "content": "碗扣式钢管脚手架全高的垂直度应小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "L/100"
      },
      {
        "key": "B",
        "content": "L/300"
      },
      {
        "key": "C",
        "content": "L/400"
      },
      {
        "key": "D",
        "content": "L/500"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 286,
    "content": "下列（ ）不属于脚手架横向水平杆的构造要求。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "脚手架主节点处必须设置一根横向水平杆，用直角扣件扣接且严禁拆除"
      },
      {
        "key": "B",
        "content": "作业层非主节点处的横向水平杆最大间距不应大于纵距的 1/2"
      },
      {
        "key": "C",
        "content": "双排脚手架的横向水平杆两端均应采用直角扣件固定在纵向水平杆上"
      },
      {
        "key": "D",
        "content": "搭接长度不应小于 1m，应等间距设置 3 个旋转扣件固定"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 287,
    "content": "下列关于脚手架安全作业的说法错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "搭拆脚手架时，操作人员必须戴安全帽、系安全带，穿防滑鞋"
      },
      {
        "key": "B",
        "content": "脚下应铺设必要数量的脚手板，并应铺设平稳，且不得有探头板"
      },
      {
        "key": "C",
        "content": "未搭设完的脚手架，非架子工一律不准上架"
      },
      {
        "key": "D",
        "content": "5 级以上大风时，不得进行脚手架上的高空作业"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 288,
    "content": "下面关于模板拆除说法错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "当设计无规定时，可采取先支后拆、后支先拆，先拆非承重模板、后拆承重模板的顺序，从上而下进行拆除"
      },
      {
        "key": "B",
        "content": "拆模作业人员必须站在平稳牢固可靠的地方，保持自身平衡，猛撬时，下方应铺设安全平网"
      },
      {
        "key": "C",
        "content": "拆模高处作业，应配置登高用具或搭设支架，必要时应戴安全带"
      },
      {
        "key": "D",
        "content": "拆模作业时，必须设置警戒区域，并派人监护，严禁下方有人进入"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 289,
    "content": "斜腹杆宜采用旋转扣件固定在与之相关的横向水平杆的伸出端上，旋转扣件中心线至主节点的距离不宜大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "100mm"
      },
      {
        "key": "B",
        "content": "150mm"
      },
      {
        "key": "C",
        "content": "200mm"
      },
      {
        "key": "D",
        "content": "250mm"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 290,
    "content": "一块跨度为 1m 的板，其混凝土强度达到设计的混凝土立方体抗压强度标准值的（ ）方可拆除底模。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "100%"
      },
      {
        "key": "B",
        "content": "50%"
      },
      {
        "key": "C",
        "content": "75%"
      },
      {
        "key": "D",
        "content": "25%"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 291,
    "content": "遇有（ ）以上强风、浓雾等恶劣气候，不得进行露天攀登与悬空高处作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "4 级"
      },
      {
        "key": "B",
        "content": "5 级"
      },
      {
        "key": "C",
        "content": "6 级"
      },
      {
        "key": "D",
        "content": "7 级"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 292,
    "content": "在断电时，配电箱、开关箱之间应遵守的操作顺序是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "总配电箱→分配电箱→开关箱"
      },
      {
        "key": "B",
        "content": "开关箱→分配电箱→总配电箱"
      },
      {
        "key": "C",
        "content": "分配电箱→总配电箱→开关箱"
      },
      {
        "key": "D",
        "content": "开关箱→总配电箱→分配电箱"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 293,
    "content": "在墙上，高度（ ）75cm，宽度（ ）45cm 的孔洞，即为“洞”。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "≥；≥"
      },
      {
        "key": "B",
        "content": "≥；≤"
      },
      {
        "key": "C",
        "content": "≤；≤"
      },
      {
        "key": "D",
        "content": "≥；＞"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 294,
    "content": "某工程施工期间，施工单位在施工现场显著位置对危险性较大的分部分项工程进行公告。下列分部分项工程中，属于超过一定规模的危险性较大的分部分项工程的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "施工高度 40m 的建筑幕墙安装工程"
      },
      {
        "key": "B",
        "content": "跨度 30m 的网架和索膜结构安装工程"
      },
      {
        "key": "C",
        "content": "开挖深度 18m 的人工挖孔桩工程"
      },
      {
        "key": "D",
        "content": "提升高度 90m 的附着式升降脚手架工程"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 295,
    "content": "（ ），是以亚音速传播的爆炸。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "闪燃"
      },
      {
        "key": "B",
        "content": "阴燃"
      },
      {
        "key": "C",
        "content": "爆燃"
      },
      {
        "key": "D",
        "content": "自燃"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 296,
    "content": "（ ）带有行走装置的脚手架或操作平台架。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "落地式脚手架"
      },
      {
        "key": "B",
        "content": "悬挑脚手架"
      },
      {
        "key": "C",
        "content": "水平移动脚手架"
      },
      {
        "key": "D",
        "content": "附着升降脚手架"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 297,
    "content": "（ ）是保障管道上方建筑物安全与顶管质量的关键。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "管前挖土"
      },
      {
        "key": "B",
        "content": "管后挖土"
      },
      {
        "key": "C",
        "content": "管中挖土"
      },
      {
        "key": "D",
        "content": "余土外运"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 298,
    "content": "（ ）是目前应用最广泛的一种降水方法。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "喷射井点"
      },
      {
        "key": "B",
        "content": "电渗井点"
      },
      {
        "key": "C",
        "content": "管井井点"
      },
      {
        "key": "D",
        "content": "轻型井点"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 299,
    "content": "2 C.30；0.1 D.50；0.1答案：C32、（ ）适用于抽水量大、较深的砂类土层，降水深度可达 50m。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "轻型井点降水"
      },
      {
        "key": "B",
        "content": "集水井降水"
      },
      {
        "key": "C",
        "content": "深井井点降水"
      },
      {
        "key": "D",
        "content": "截水"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 300,
    "content": "安全带使用时要（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "同一水平"
      },
      {
        "key": "B",
        "content": "低挂高用"
      },
      {
        "key": "C",
        "content": "高挂低用"
      },
      {
        "key": "D",
        "content": "均不正确"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 301,
    "content": "安全绳（包括未展开的缓冲器）有效长度不应大于（ ），有两根安全绳（包括未展开的缓冲器）的安全带，其单根有效长度不应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2.0m；1.2m"
      },
      {
        "key": "B",
        "content": "2.0m；1.5m"
      },
      {
        "key": "C",
        "content": "1.8m；1.2m"
      },
      {
        "key": "D",
        "content": "1.8m；1.5m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 302,
    "content": "在坠落基准面（ ）及以上高处绑扎柱钢筋和进行预应力张拉时，应搭设操作平台。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "4m"
      },
      {
        "key": "B",
        "content": "3m"
      },
      {
        "key": "C",
        "content": "2m"
      },
      {
        "key": "D",
        "content": "1m"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 303,
    "content": "搭设高度（ ）及以上落地式钢管脚手架工程、提升高度（ ）及以上附着式整体和分片提升脚手架工程、以及架体高度（ ）及以上悬挑式脚手架工程专项方案应当按照相关规定召开专家论证会。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "30m，150m，20m"
      },
      {
        "key": "B",
        "content": "50m，150m，20m"
      },
      {
        "key": "C",
        "content": "50m，120m，20m"
      },
      {
        "key": "D",
        "content": "50m，120m，18m"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 304,
    "content": "当地下含水层渗透性较强，厚度较大时，可采用（ ）的方案。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "悬挂式横向截水与坑内井点截水相结合"
      },
      {
        "key": "B",
        "content": "悬挂式横向截水与水平封底相结合"
      },
      {
        "key": "C",
        "content": "悬挂式竖向截水与坑内回灌相结合"
      },
      {
        "key": "D",
        "content": "悬挂式竖向截水与坑内井点截水相结合"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 305,
    "content": "登高焊割作业时，一般认为在地面周围（ ）m 范围内为危险区。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3"
      },
      {
        "key": "B",
        "content": "5"
      },
      {
        "key": "C",
        "content": "10"
      },
      {
        "key": "D",
        "content": "20"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 306,
    "content": "登高作业时，在高处接近 10kV 高压线或裸导线排时，水平、垂直距离不得小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1m"
      },
      {
        "key": "B",
        "content": "2m"
      },
      {
        "key": "C",
        "content": "3m"
      },
      {
        "key": "D",
        "content": "4m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 307,
    "content": "冬季施工前（ ）做好冬期施工材料、专用设备、能源、暂设工种等施工准备工作。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "20 天"
      },
      {
        "key": "B",
        "content": "1 个月"
      },
      {
        "key": "C",
        "content": "2 个月"
      },
      {
        "key": "D",
        "content": "3 个月"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 308,
    "content": "钢筋混凝土灌注桩，按一定间隔疏排，每桩间隔净距不大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1m"
      },
      {
        "key": "B",
        "content": "2m"
      },
      {
        "key": "C",
        "content": "3m"
      },
      {
        "key": "D",
        "content": "4m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 309,
    "content": "高大模板支撑系统的拆除作业必须自上而下逐层进行，严禁上下同时拆除作业，分段拆除的高度不应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一层"
      },
      {
        "key": "B",
        "content": "两层"
      },
      {
        "key": "C",
        "content": "三层"
      },
      {
        "key": "D",
        "content": "四层"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 310,
    "content": "根据《建设工程施工现场消防安全技术规范》（GB50720）规定，易燃易爆危险品库房与在建工程的防火间距不应小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "6m"
      },
      {
        "key": "B",
        "content": "10m"
      },
      {
        "key": "C",
        "content": "15m"
      },
      {
        "key": "D",
        "content": "20m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 311,
    "content": "关于高大模板的拆除作业说法错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "必须自上而下逐层进行"
      },
      {
        "key": "B",
        "content": "将拆卸的杆件向地面抛掷时，应有专人在下方指挥"
      },
      {
        "key": "C",
        "content": "严禁上下同时拆除作业"
      },
      {
        "key": "D",
        "content": "分段拆除的高度不应大于两层"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 312,
    "content": "焊接工作点周围（ ）内的，必须清除一切可燃易爆物品。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5m"
      },
      {
        "key": "B",
        "content": "10m"
      },
      {
        "key": "C",
        "content": "15m"
      },
      {
        "key": "D",
        "content": "20m"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 313,
    "content": "火焰矫正法，即将变形构件局部加热到（ ），然后让其自然冷却或强制冷却。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "200～400℃"
      },
      {
        "key": "B",
        "content": "400～600℃"
      },
      {
        "key": "C",
        "content": "600～800℃"
      },
      {
        "key": "D",
        "content": "800～1000℃"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 314,
    "content": "火灾统计表明，火灾中死亡人数中大约（ ）是由于吸入有毒烟气致死的。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "80%"
      },
      {
        "key": "B",
        "content": "60%"
      },
      {
        "key": "C",
        "content": "40%"
      },
      {
        "key": "D",
        "content": "20%"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 315,
    "content": "基坑监测点水平间距不宜大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "20m"
      },
      {
        "key": "B",
        "content": "15m"
      },
      {
        "key": "C",
        "content": "10m"
      },
      {
        "key": "D",
        "content": "5m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 316,
    "content": "交流电焊机二次线应采用（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "防水型橡皮护套铜芯软电缆"
      },
      {
        "key": "B",
        "content": "绝缘铜线"
      },
      {
        "key": "C",
        "content": "绝缘铝线"
      },
      {
        "key": "D",
        "content": "裸铜线"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 317,
    "content": "脚手架搭设时，应遵守（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一次搭设高度不应超过相邻连墙件以上两步"
      },
      {
        "key": "B",
        "content": "一次搭设高度可以在相邻连墙件以上一步"
      },
      {
        "key": "C",
        "content": "一次搭设高度可以不考虑连墙件的位置"
      },
      {
        "key": "D",
        "content": "一次搭设高度可以在相邻连墙件以上三步"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 318,
    "content": "脚手架立杆顶端栏杆宜高出女儿墙上端（ ）m，宜高出檐口上端（ ）m。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1.0；2.0"
      },
      {
        "key": "B",
        "content": "1.0；1.5"
      },
      {
        "key": "C",
        "content": "1.5；1.0"
      },
      {
        "key": "D",
        "content": "1.5；2.0"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 319,
    "content": "扣件式钢管脚手架的脚手板搭接铺设时，接头必须支在横向水平杆上，搭接长度不应小于（ ），其伸出横向水平杆的长度不应小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "100mm；100mm"
      },
      {
        "key": "B",
        "content": "150mm；100mm"
      },
      {
        "key": "C",
        "content": "200mm；150mm"
      },
      {
        "key": "D",
        "content": "200mm；100mm"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 320,
    "content": "链式滑车具有结构紧凑、手拉力（ ）、携带方便、操作（ ）等优点。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "大；繁琐"
      },
      {
        "key": "B",
        "content": "大；简单"
      },
      {
        "key": "C",
        "content": "小；简单"
      },
      {
        "key": "D",
        "content": "小；繁琐"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 321,
    "content": "满堂脚手架的高宽比不应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1"
      },
      {
        "key": "B",
        "content": "2"
      },
      {
        "key": "C",
        "content": "3"
      },
      {
        "key": "D",
        "content": "4"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 322,
    "content": "每台电焊机须设专用断路开关，并有与焊机相匹配的过流保护装置。一次线与电源接点不宜用插销连接，其长度不得大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3m"
      },
      {
        "key": "B",
        "content": "5m"
      },
      {
        "key": "C",
        "content": "10m"
      },
      {
        "key": "D",
        "content": "15m"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 323,
    "content": "灭火器的最低配置数量应按国家有关规定经计算确定，且每个场所的灭火器数量不应少于（ ）个。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2"
      },
      {
        "key": "B",
        "content": "3"
      },
      {
        "key": "C",
        "content": "4"
      },
      {
        "key": "D",
        "content": "5"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 324,
    "content": "模板工程作业高度在（ ）时，应根据高处作业安全技术规范的要求进行操作和防护，要有安全可靠的操作架子。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2m 和 2m 以上"
      },
      {
        "key": "B",
        "content": "3m 和 3m 以上"
      },
      {
        "key": "C",
        "content": "4m 和 4m 以上"
      },
      {
        "key": "D",
        "content": "5m 和 5m 以上"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 325,
    "content": "搭拆脚手架时，地面应设（ ），并应派专人看守，严禁非操作人员人内。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全牌"
      },
      {
        "key": "B",
        "content": "围栏和警戒标志"
      },
      {
        "key": "C",
        "content": "警示牌"
      },
      {
        "key": "D",
        "content": "标示牌"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 326,
    "content": "当柱模板高度超过（ ）时，应群体或成列同时支模，并应将支撑连成一体，形成整体框架体系。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "4m"
      },
      {
        "key": "B",
        "content": "5m"
      },
      {
        "key": "C",
        "content": "6m"
      },
      {
        "key": "D",
        "content": "7m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 327,
    "content": "起重机械带载行走时，道路应平坦坚实，载荷应符合使用说明书的规定，重物离地面不得超过（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "300mm"
      },
      {
        "key": "B",
        "content": "400mm"
      },
      {
        "key": "C",
        "content": "500mm"
      },
      {
        "key": "D",
        "content": "600mm"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 328,
    "content": "潜水电机的负荷线应采用防水橡皮护套铜芯软电缆，长度不应小于（ ），且不得承受外力。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1.5m"
      },
      {
        "key": "B",
        "content": "1m"
      },
      {
        "key": "C",
        "content": "0.5m"
      },
      {
        "key": "D",
        "content": "2m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 329,
    "content": "施工现场出入口的设置应满足消防车通行的要求，并宜布置在不同方向，其数量不宜少于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1 个"
      },
      {
        "key": "B",
        "content": "2 个"
      },
      {
        "key": "C",
        "content": "3 个"
      },
      {
        "key": "D",
        "content": "4 个"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 330,
    "content": "施工现场临时用电中，专用保护零线应为（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "绿色"
      },
      {
        "key": "B",
        "content": "黄色"
      },
      {
        "key": "C",
        "content": "淡蓝色"
      },
      {
        "key": "D",
        "content": "黄绿双色"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 331,
    "content": "施工现场明火作业时必须开具（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "动火证"
      },
      {
        "key": "B",
        "content": "出入证"
      },
      {
        "key": "C",
        "content": "证明信"
      },
      {
        "key": "D",
        "content": "动工证"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 332,
    "content": "施工现场内所有防雷装置的冲击接地电阻值不得大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "25Ω"
      },
      {
        "key": "B",
        "content": "30Ω"
      },
      {
        "key": "C",
        "content": "35Ω"
      },
      {
        "key": "D",
        "content": "40Ω"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 333,
    "content": "施工现场室内 220V 灯具距地面不得低于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2.5m"
      },
      {
        "key": "B",
        "content": "3m"
      },
      {
        "key": "C",
        "content": "2m"
      },
      {
        "key": "D",
        "content": "1.8m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 334,
    "content": "1s。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "10"
      },
      {
        "key": "B",
        "content": "15"
      },
      {
        "key": "C",
        "content": "30"
      },
      {
        "key": "D",
        "content": "50"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 335,
    "content": "适用于基坑开挖深度不大的粗粒土层及渗水量小的黏性土层的施工的降水方法是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "集水井降水"
      },
      {
        "key": "B",
        "content": "轻型井点降水"
      },
      {
        "key": "C",
        "content": "喷射井点降水"
      },
      {
        "key": "D",
        "content": "管井井点降水"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 336,
    "content": "室内灯具离地面低于（ ）m，必须采用安全电压照明供电。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2"
      },
      {
        "key": "B",
        "content": "2.1"
      },
      {
        "key": "C",
        "content": "2.4"
      },
      {
        "key": "D",
        "content": "2.5"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 337,
    "content": "双排脚手架应设剪刀撑与横向斜撑，单排脚手架（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "应设剪刀撑"
      },
      {
        "key": "B",
        "content": "应设横向斜撑"
      },
      {
        "key": "C",
        "content": "应设剪刀撑和横向斜撑"
      },
      {
        "key": "D",
        "content": "可以不设任何斜撑"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 338,
    "content": "塔式起重机遇有风速在（ ）及以上的大风或大雨、大雪、大雾等恶劣天气时，应停止作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "6m/s"
      },
      {
        "key": "B",
        "content": "8m/s"
      },
      {
        "key": "C",
        "content": "10m/s"
      },
      {
        "key": "D",
        "content": "12m/s"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 339,
    "content": "土的密度越大，土越（ ），压缩变形越小，挖掘就越困难。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "稀松"
      },
      {
        "key": "B",
        "content": "密实"
      },
      {
        "key": "C",
        "content": "稀疏"
      },
      {
        "key": "D",
        "content": "松软"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 340,
    "content": "土方开挖前，必须保证一定的预抽水时间，喷射井点或真空深井井点不少于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "10h"
      },
      {
        "key": "B",
        "content": "15h"
      },
      {
        "key": "C",
        "content": "20h"
      },
      {
        "key": "D",
        "content": "25h"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 341,
    "content": "土方开挖前，必须保证一定的预抽水时间，一般真空井点不少于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "7h"
      },
      {
        "key": "B",
        "content": "7～10h"
      },
      {
        "key": "C",
        "content": "10h"
      },
      {
        "key": "D",
        "content": "8～12h"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 342,
    "content": "物料提升机平台门的高度不宜小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1.2m"
      },
      {
        "key": "B",
        "content": "1.5m"
      },
      {
        "key": "C",
        "content": "1.8m"
      },
      {
        "key": "D",
        "content": "2.1m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 343,
    "content": "下边沿至楼板或底面低于（ ）的窗台等竖向洞口，如侧边落差大于 2m 时，应加设 1.2m 高的临时护栏。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1200mm"
      },
      {
        "key": "B",
        "content": "1000mm"
      },
      {
        "key": "C",
        "content": "800mm"
      },
      {
        "key": "D",
        "content": "600mm"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 344,
    "content": "下列高处作业高度属于Ⅲ级高处作业的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5m"
      },
      {
        "key": "B",
        "content": "10m"
      },
      {
        "key": "C",
        "content": "15m"
      },
      {
        "key": "D",
        "content": "20m"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 345,
    "content": "下面哪种基坑工程支护体系，称为桩板式支护结构，适用于土质较好，不需要抗渗止水或地下水位低的基坑。（ ）",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "H 型钢（工字钢）桩加横挡板"
      },
      {
        "key": "B",
        "content": "挡土灌注桩支护"
      },
      {
        "key": "C",
        "content": "土钉墙支护结构"
      },
      {
        "key": "D",
        "content": "钢板桩支护"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 346,
    "content": "悬挑式操作平台的悬挑长度不宜大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5m"
      },
      {
        "key": "B",
        "content": "7m"
      },
      {
        "key": "C",
        "content": "9m"
      },
      {
        "key": "D",
        "content": "10m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 347,
    "content": "易燃露天仓库四周内，应有宽度不小于（ ）的平坦空地作为消防通道，通道上禁止堆放障碍物。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "4m"
      },
      {
        "key": "B",
        "content": "5m"
      },
      {
        "key": "C",
        "content": "6m"
      },
      {
        "key": "D",
        "content": "7m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 348,
    "content": "易燃易爆危险品库房与在建工程的防火间距不应小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "10m"
      },
      {
        "key": "B",
        "content": "25m"
      },
      {
        "key": "C",
        "content": "20m"
      },
      {
        "key": "D",
        "content": "15m"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 349,
    "content": "在滑坡地段挖土方时、不宜在（ ）季节施工。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "冬季"
      },
      {
        "key": "B",
        "content": "春季"
      },
      {
        "key": "C",
        "content": "风季"
      },
      {
        "key": "D",
        "content": "雨季"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 350,
    "content": "支设高度在（ ）以上的柱模板，四周应设斜撑，并应设立操作平台。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2m"
      },
      {
        "key": "B",
        "content": "2.5m"
      },
      {
        "key": "C",
        "content": "3m"
      },
      {
        "key": "D",
        "content": "3.5m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 351,
    "content": "高处作业中，吊篮内作业人员不应超过（ ）人。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2"
      },
      {
        "key": "B",
        "content": "3"
      },
      {
        "key": "C",
        "content": "4"
      },
      {
        "key": "D",
        "content": "5"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 352,
    "content": "属于防止间接接触电击的安全措施的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "绝缘"
      },
      {
        "key": "B",
        "content": "屏护"
      },
      {
        "key": "C",
        "content": "间距"
      },
      {
        "key": "D",
        "content": "等电位连接"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 353,
    "content": "具有双重绝缘的电气设备属于（ ）设备。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "I 类"
      },
      {
        "key": "B",
        "content": "II 类"
      },
      {
        "key": "C",
        "content": "III 类"
      },
      {
        "key": "D",
        "content": "Ⅳ类"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 354,
    "content": "具有依靠安全电压供电的设备属于（ ）设备。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "Ⅰ类"
      },
      {
        "key": "B",
        "content": "Ⅱ类"
      },
      {
        "key": "C",
        "content": "Ⅲ类"
      },
      {
        "key": "D",
        "content": "Ⅳ类"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 355,
    "content": "在潮湿和易触及带电体场所的照明电源电压不得大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "12V"
      },
      {
        "key": "B",
        "content": "24V"
      },
      {
        "key": "C",
        "content": "36V"
      },
      {
        "key": "D",
        "content": "220V"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 356,
    "content": "交流弧焊机变压器的一次侧电源线长度不应大于（ ），其电源进线处必须设置防护罩。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5m"
      },
      {
        "key": "B",
        "content": "10m"
      },
      {
        "key": "C",
        "content": "20m"
      },
      {
        "key": "D",
        "content": "30m"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 357,
    "content": "当高度h 为 15m 以上至 30m 时，称为三级高处作业，坠落半径R 为（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3m"
      },
      {
        "key": "B",
        "content": "4m"
      },
      {
        "key": "C",
        "content": "5m"
      },
      {
        "key": "D",
        "content": "6m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 358,
    "content": "电梯井口设置高度不低于（ ）的工具式定型防护栏杆。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1000mm"
      },
      {
        "key": "B",
        "content": "1200mm"
      },
      {
        "key": "C",
        "content": "1500mm"
      },
      {
        "key": "D",
        "content": "1800mm"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 359,
    "content": "当基坑采用降水时，应在降水后开挖地下水位以下的土方，且地下水位应保持在开挖面（ ）以下。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "50cm"
      },
      {
        "key": "B",
        "content": "100cm"
      },
      {
        "key": "C",
        "content": "150cm"
      },
      {
        "key": "D",
        "content": "200cm"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 360,
    "content": "基坑周边距基坑边（ ）范围内严禁堆放土石方、料具等荷载较重的物料。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "0.5m"
      },
      {
        "key": "B",
        "content": "1m"
      },
      {
        "key": "C",
        "content": "1.5m"
      },
      {
        "key": "D",
        "content": "2m"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 361,
    "content": "移动式操作平台的面积不应超过（ ），高度不应超过（ ），高宽比不应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "10m²；10m；3：1"
      },
      {
        "key": "B",
        "content": "20m²；5m；2：1"
      },
      {
        "key": "C",
        "content": "10m²；5m；2：1"
      },
      {
        "key": "D",
        "content": "15m²；10m；3：1"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 362,
    "content": "当通过人体的电流超过（ ）时，就会使人的呼吸和心脏停止而死亡。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "30mA"
      },
      {
        "key": "B",
        "content": "50mA"
      },
      {
        "key": "C",
        "content": "60mA"
      },
      {
        "key": "D",
        "content": "80mA"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 363,
    "content": "脚手架作业层的脚手板铺设规定为（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "应铺满、铺稳"
      },
      {
        "key": "B",
        "content": "可以不铺满"
      },
      {
        "key": "C",
        "content": "应铺满、铺实"
      },
      {
        "key": "D",
        "content": "应铺满、铺稳、铺实，作业层端部脚手板探头长度应取 150mm，其板的两端均应固定于支承杆件上"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 364,
    "content": "高处作业的安全技术措施及其所需料具，必须列入工程的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "验收单"
      },
      {
        "key": "B",
        "content": "结算单"
      },
      {
        "key": "C",
        "content": "预算单"
      },
      {
        "key": "D",
        "content": "施工组织设计"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 365,
    "content": "立杆盘扣节点间距宜按（ ）m 模数设置，横杆长度宜按（ ）m模数设置。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "0.5；0.3"
      },
      {
        "key": "B",
        "content": "0.3；0.5"
      },
      {
        "key": "C",
        "content": "1.0；0.6"
      },
      {
        "key": "D",
        "content": "0.6；1.0"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 366,
    "content": "当搭设双层安全防护棚时，两层防护层的间距不应小于（ ）mm。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "500"
      },
      {
        "key": "B",
        "content": "600"
      },
      {
        "key": "C",
        "content": "700"
      },
      {
        "key": "D",
        "content": "800"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 367,
    "content": "根据《建筑施工门式钢管脚手架安全技术标准》（JGJ/T128-2019），门式钢管脚手架基本结构包括（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "门架"
      },
      {
        "key": "B",
        "content": "交叉支撑"
      },
      {
        "key": "C",
        "content": "连接棒"
      },
      {
        "key": "D",
        "content": "水平架E.底座"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 368,
    "content": "下列关于特殊场所应使用安全特低电压照明器的描述，符合《施工现场临时用电安全技术规范》（JGJ46-2005）规定的有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "人防工程场所的照明电源电压 36V"
      },
      {
        "key": "B",
        "content": "潮湿场所的照明电源电压 36V"
      },
      {
        "key": "C",
        "content": "特别潮湿场所的照明电源电压 24V"
      },
      {
        "key": "D",
        "content": "金属容器内的照明电源电压 12V E.高温场所的照明电源电压 36V"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ]
  },
  {
    "id": 369,
    "content": "相线、N 线、PE 线的颜色标记必须符合《施工现场临时用电安全技术规范》（JGJ46-2005）规定，下列叙述正确的是（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "L1（A）相序的绝缘颜色为绿色"
      },
      {
        "key": "B",
        "content": "L2（B）相序的绝缘颜色为黄色"
      },
      {
        "key": "C",
        "content": "L3（C）相序的绝缘颜色为红色"
      },
      {
        "key": "D",
        "content": "N 线的绝缘颜色为淡蓝色 E.PE 线的绝缘颜色为绿/黄双色"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 370,
    "content": "根据《施工现场临时用电安全技术规范》（JGJ46-2005），施工现场临时用电必须监理安全技术档案，并应包括下列内容（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "用电技术交底资料"
      },
      {
        "key": "B",
        "content": "用电工程检查验收表"
      },
      {
        "key": "C",
        "content": "定期检（复）查表"
      },
      {
        "key": "D",
        "content": "用电组织设计的全部资料E.电工安装、巡检、维修、拆除工作记录"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 371,
    "content": "根据《建筑施工扣件式钢管脚手架安全技术规范》（JGJ130-2013），下列关于扣件式钢管脚手架有关规定的说法正确的是（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "扣件在螺栓拧紧扭力矩达到 65N·m 时，不得发生破坏"
      },
      {
        "key": "B",
        "content": "脚手架应设置纵、横向扫地杆"
      },
      {
        "key": "C",
        "content": "确保安全前提下，卸料时各配件可以抛掷地面"
      },
      {
        "key": "D",
        "content": "脚手架使用期间，严禁拆除连墙件E.开口型双排脚手架的两端均必须设置横向斜撑"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ]
  },
  {
    "id": 372,
    "content": "根据《龙门架及井架物料提升机安全技术规范》（JGJ88-2010），关于物料提升机使用管理的说法正确的有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "物料提升机必须由取得特种作业操作证的人员操作"
      },
      {
        "key": "B",
        "content": "物料应在吊笼内均匀分布，不应过度偏载"
      },
      {
        "key": "C",
        "content": "物料提升机夜间施工应有足够照明"
      },
      {
        "key": "D",
        "content": "物料提升机在大雨、大雾、风速 13m/s 及以上大风等恶劣天气时，必须停止运行E.作业结束后，吊笼应返回最底层停放"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 373,
    "content": "安全防护设施的验收，主要包括哪些内容（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "所有临边、洞口等各类技术措施的设置状况"
      },
      {
        "key": "B",
        "content": "技术措施所用的配件、材料和工具的规格和材质"
      },
      {
        "key": "C",
        "content": "技术措施的节点构造及其与建筑物的固定情况"
      },
      {
        "key": "D",
        "content": "扣件和连接件的紧固程度E.安全防护措施的用品及设备的性能与质量是否合格的验证"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 374,
    "content": "某建筑企业在 2017-2019 年期间先后发生了 4 起生产安全事故，分别是：①汽车吊吊运时模板坠落砸伤 2 人②员工不慎从光滑的洞口 滑落，撞击到脚手架，造成胫骨骨折③塔吊在起重过程中由于钢丝绳断裂发生倾覆，将员工砸伤④从脚手架坠落的角磨机击中一员工肩部，导致其肩部受伤。根据《企业职工伤亡事故分类》（GB6441），以上生产安全事故情形中包含的类型有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "坍塌"
      },
      {
        "key": "B",
        "content": "物体打击"
      },
      {
        "key": "C",
        "content": "起重伤害"
      },
      {
        "key": "D",
        "content": "高处坠落 E.机械伤害"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ]
  },
  {
    "id": 375,
    "content": "采用集水井（坑）降水时，基坑开挖过程中如何排水（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "在坑底设集水井"
      },
      {
        "key": "B",
        "content": "沿坑底的周围或中央开挖排水沟"
      },
      {
        "key": "C",
        "content": "把水引入集水井"
      },
      {
        "key": "D",
        "content": "然后用水泵抽走E.抽出的水应予以引开，严防倒流"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 376,
    "content": "采用集水井（坑）降水时，应符合下列要求（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "根据现场地质条件，应能保持开挖边坡的稳定"
      },
      {
        "key": "B",
        "content": "集水井（坑）应比排水沟、基坑地面深一些，以利于集排水"
      },
      {
        "key": "C",
        "content": "排泄从集水井（坑）抽出的泥水时，应符合环境保护要求"
      },
      {
        "key": "D",
        "content": "土层中如有局部流砂现象，应采用防止措施E.边坡坡面上如有局部渗出地下水时，应在渗水处设置过滤层，防止土粒流失，并应设置排水沟，将水引出坡面"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 377,
    "content": "钢管脚手架采用外径 48.3mm，壁厚 3.6mm，无（ ）的钢管。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "不符设计要求"
      },
      {
        "key": "B",
        "content": "严重锈蚀"
      },
      {
        "key": "C",
        "content": "严重弯曲"
      },
      {
        "key": "D",
        "content": "压扁E.裂纹"
      }
    ],
    "answer": [
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 378,
    "content": "高处作业中的（ ）必须在施工前进行检查，确认其完好，方可投入使用。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "安全标志"
      },
      {
        "key": "B",
        "content": "工具"
      },
      {
        "key": "C",
        "content": "仪表"
      },
      {
        "key": "D",
        "content": "电气设施 E.电气设备"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 379,
    "content": "基坑支护结构设计的主要内容是（ ）等。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "支护结构的方案比较和选型"
      },
      {
        "key": "B",
        "content": "支护结构的承载力计算"
      },
      {
        "key": "C",
        "content": "支护结构的变形计算"
      },
      {
        "key": "D",
        "content": "围护墙的抗渗验算E.支护结构的整体稳定性验算"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 380,
    "content": "基坑支护结构设计应具备的图纸资料有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "用地退界线及红线范围图"
      },
      {
        "key": "B",
        "content": "场地周围地下管线图"
      },
      {
        "key": "C",
        "content": "建筑总平面图"
      },
      {
        "key": "D",
        "content": "地下结构平面图 E.剖面图"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 381,
    "content": "脚手架、满堂脚手架和模板支撑架验收时，应具备下列技术文件（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "专项施工方案及变更文件"
      },
      {
        "key": "B",
        "content": "安全技术交底文件"
      },
      {
        "key": "C",
        "content": "构配件质量检验记录"
      },
      {
        "key": "D",
        "content": "周转使用的脚手架构配件使用前的复验合格记录 E.搭设的施工记录和质量安全检查记录"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 382,
    "content": "深井井点降水的优点是（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "排水量大"
      },
      {
        "key": "B",
        "content": "不受吸程限制，排水效果好"
      },
      {
        "key": "C",
        "content": "设备简单"
      },
      {
        "key": "D",
        "content": "井距大，对平面布置的干扰小 E.可用于各种情况，不受土层限制"
      }
    ],
    "answer": [
      "B",
      "D",
      "E"
    ]
  },
  {
    "id": 383,
    "content": "下列触电危害的因素中，（ ）属于辅助因素。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "电流和时间"
      },
      {
        "key": "B",
        "content": "电流频率"
      },
      {
        "key": "C",
        "content": "触电电压"
      },
      {
        "key": "D",
        "content": "电流途径E.触电者性别、年龄和身体状况"
      }
    ],
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "id": 384,
    "content": "下列对施工照明描述正确的是（ ）。暂设工程的照明灯具宜采用拉线开关控制，拉线开关距地面高度为 1～2 米施工现场的一般场所宜选用额定电压为 110V 的照明器行灯电源电压不大于 36V照明线路不得拴在金属脚手架、龙门架上，严禁在地面上乱拉、乱拖施工现场的照明灯具应采用分组控制或单灯控制答案：CDE22、装设（ ）是直击雷防护的主要措施。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "避雷针"
      },
      {
        "key": "B",
        "content": "避雷线"
      },
      {
        "key": "C",
        "content": "避雷网"
      },
      {
        "key": "D",
        "content": "壁雷箱 E.警告标志"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": 385,
    "content": "井点降水的方法有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "轻型井点降水"
      },
      {
        "key": "B",
        "content": "喷射井点降水"
      },
      {
        "key": "C",
        "content": "电渗井点降水"
      },
      {
        "key": "D",
        "content": "管井井点降水 E.深井井点降水"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 386,
    "content": "基坑支护一般分为两种：无支护和有支护，属于无支护基坑特点的有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "基础埋置不深"
      },
      {
        "key": "B",
        "content": "施工期较短"
      },
      {
        "key": "C",
        "content": "基坑壁土质不稳定，并且有地下水的影响"
      },
      {
        "key": "D",
        "content": "挖基坑时不影响邻近建筑物的安全E.地下水位低于基底或者渗透量小"
      }
    ],
    "answer": [
      "A",
      "B",
      "D",
      "E"
    ]
  },
  {
    "id": 387,
    "content": "模板的拆除顺序和安装顺序相同，即先安装的模板先拆除，后安装的后拆除。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 388,
    "content": "施工现场临时用电必须采用 TN-S 系统，不要采用 TN-C 系统。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 389,
    "content": "乙炔瓶可以卧放。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 390,
    "content": "遇有五级以上强风、浓雾等恶劣气候，不得进行露天攀登与悬空高处作业。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 391,
    "content": "在脚手架上拉设缆风绳、泵送混凝土和砂浆的输送管及起重设备时应符合设计要求。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 392,
    "content": "安全带在使用两年后应抽检一次，使用频繁的绳要经常进行外观检查，发现异常必须立即更换。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 393,
    "content": "板与墙的洞口必须设置牢固的盖板、防护栏杆、安全网或者其他防坠落的防护设施。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 394,
    "content": "保护零线禁止作重复接地，工作零线必须作重复接地。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 395,
    "content": "暴雨等危险性来临之前，施工现场临时用电应全部切断。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 396,
    "content": "采用真空泵抽水时，管路系统应严密，确保无漏水或漏气现象，经试运转后，方可正式使用。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 397,
    "content": "拆除脚手架作业必须由上而下逐层进行，严禁上下同时作业；连墙件必须随脚手架逐层拆除，严禁先将连墙件整层或数层拆除后再拆除脚手架；分段拆除高差大于两步时，应增设连墙件加固。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 398,
    "content": "搭设高度 2m 以上的支撑架体应设置作业人员登高措施。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 399,
    "content": "大雪过后，必须清理脚手架和施工现场的雪。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 400,
    "content": "电缆线路必须有短路保护和过载保护，短路保护和过载保护电器与电缆的选配应符合规范要求。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 401,
    "content": "盾构进出洞是集起重吊装、焊接作业、设备调试为一体的综合性分部工程。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 402,
    "content": "分配电箱与开关箱的距离与手持电动工具的距离可以为 3m。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 403,
    "content": "高大模板支撑系统应在搭设完成并验收合格后，经施工单位项目负责人及项目总监理工程师签字后，方可进入后续工序的施工。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 404,
    "content": "焊接、切割、烘烤或加热等动火作业前，应对作业现场的易燃、可燃物进行清理。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 405,
    "content": "机械不得靠经架空输电线作业，并无需按照相关规定留出安全距离。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 406,
    "content": "脚手架对接扣件开口应朝上或朝内。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 407,
    "content": "开挖深度大于等于 5m 或开挖深度小于 5m、现场地质情况和周围环境较复杂的基坑工程以及其他需要监测的基坑工程应实施基坑工程监测。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 408,
    "content": "可燃材料库房不应使用高热灯具，易燃易爆危险品库房内应使用防爆灯具。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 409,
    "content": "可以在脚手架基础及邻近处进行挖掘作业。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 410,
    "content": "扣件螺栓拧紧力矩为 40~65N·m。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 411,
    "content": "（ ）是为防止吊笼到达预先设定位置，上限位器和上极限限位器因各种原因不能及时动作、吊笼继续向上运动，将导致吊笼冲击导轨架顶部而发生倾翻坠落事故而设置的。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "安全钩"
      },
      {
        "key": "B",
        "content": "急停开关"
      },
      {
        "key": "C",
        "content": "缓冲弹簧"
      },
      {
        "key": "D",
        "content": "防坠安全器"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 412,
    "content": "若按回转方式划分，塔式起重机可以分为（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "动臂式、运行小车式"
      },
      {
        "key": "B",
        "content": "轻型式、中型式、重型式"
      },
      {
        "key": "C",
        "content": "上回转式、下回转式"
      },
      {
        "key": "D",
        "content": "自行式、全回转式"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 413,
    "content": "为了提高钢丝绳的使用寿命，滑轮直径最小不得小于钢丝绳直径的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "4 倍"
      },
      {
        "key": "B",
        "content": "8 倍"
      },
      {
        "key": "C",
        "content": "16 倍"
      },
      {
        "key": "D",
        "content": "20 倍"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 414,
    "content": "物料提升机地面进料口应设置防护围栏；围栏高度不应小于（ ），围栏立面可采用网板结构，强度符合规定。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1m"
      },
      {
        "key": "B",
        "content": "1.5m"
      },
      {
        "key": "C",
        "content": "1.8m"
      },
      {
        "key": "D",
        "content": "2m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 415,
    "content": "下列对物料提升机说法错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "架设高度在 30 米（含 30 米）以下的物料提升机为低架物料提升机"
      },
      {
        "key": "B",
        "content": "卷筒节径与钢丝绳直径的比值不应小于 20"
      },
      {
        "key": "C",
        "content": "卷扬机应设置防止钢丝绳脱出卷筒的保护装置"
      },
      {
        "key": "D",
        "content": "当荷载达到额定重量的 90%时，起重量限制器应发出警示信号"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 416,
    "content": "采用（ ）起重设备、方法，且单件起吊重量在（ ）及以上的起重吊装工程属于超过一定规模的危险性较大的分部分项工程。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "常规；100kN"
      },
      {
        "key": "B",
        "content": "非常规；300kN"
      },
      {
        "key": "C",
        "content": "常规；300kN"
      },
      {
        "key": "D",
        "content": "非常规；100kN"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 417,
    "content": "某施工项目部采购了一批劳动防护用品，下发给作业人员使用，下列关于该项目部劳动防护用品管理的办法，错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "检查劳动防护用品的生产日期"
      },
      {
        "key": "B",
        "content": "检查劳动防护用品的合格证"
      },
      {
        "key": "C",
        "content": "检查劳动防护用品的检验标志"
      },
      {
        "key": "D",
        "content": "将采购物品清单作为发放台账。"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 418,
    "content": "当安装屋架时，应在屋脊处设置扶梯。扶梯踏步间距不应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "400mm"
      },
      {
        "key": "B",
        "content": "500mm"
      },
      {
        "key": "C",
        "content": "600mm"
      },
      {
        "key": "D",
        "content": "700mm"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 419,
    "content": "当最高机械设备上避雷针的保护范围能覆盖其他设备，且又最后退出于现场时，其他设备可（ ）防雷装置。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "必须设置"
      },
      {
        "key": "B",
        "content": "不设置"
      },
      {
        "key": "C",
        "content": "选择性设置"
      },
      {
        "key": "D",
        "content": "以上都对"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 420,
    "content": "多台机械开挖，挖掘机间距应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5m"
      },
      {
        "key": "B",
        "content": "10m"
      },
      {
        "key": "C",
        "content": "15m"
      },
      {
        "key": "D",
        "content": "20m"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 421,
    "content": "钢丝绳的丝数越多，钢筋直径越细，柔软性越（ ），强度也越（ ），但没有较粗的钢丝耐磨损。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "差；低"
      },
      {
        "key": "B",
        "content": "差；高"
      },
      {
        "key": "C",
        "content": "好；低"
      },
      {
        "key": "D",
        "content": "好；高"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 422,
    "content": "钢丝绳与物件的夹角宜为 45°～60°，且不得小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "20°"
      },
      {
        "key": "B",
        "content": "30°"
      },
      {
        "key": "C",
        "content": "40°"
      },
      {
        "key": "D",
        "content": "50°"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 423,
    "content": "钢丝绳在卷筒上应整齐排列，端部应与卷筒压紧装置连接牢固。当吊笼处于最低位置时，卷筒上的钢丝绳不应少于（ ）圈。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2"
      },
      {
        "key": "B",
        "content": "3"
      },
      {
        "key": "C",
        "content": "4"
      },
      {
        "key": "D",
        "content": "5"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 424,
    "content": "镐头机可拆除高度不超过（ ）的建筑物。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "20m"
      },
      {
        "key": "B",
        "content": "15m"
      },
      {
        "key": "C",
        "content": "12m"
      },
      {
        "key": "D",
        "content": "10m"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 425,
    "content": "根据《建筑起重机械安全监督管理规定》，属国家明令淘汰或者禁止使用的（ ），不得出租、使用。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "塔式起重机"
      },
      {
        "key": "B",
        "content": "施工电梯"
      },
      {
        "key": "C",
        "content": "建筑起重机械"
      },
      {
        "key": "D",
        "content": "建筑施工机械"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 426,
    "content": "焊接变形的矫正方法中，（ ）是利用机械力来矫正。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "机械矫正法"
      },
      {
        "key": "B",
        "content": "压力矫正法"
      },
      {
        "key": "C",
        "content": "火焰矫正法"
      },
      {
        "key": "D",
        "content": "引力矫正法"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 427,
    "content": "滑轮平衡梁一般用于安装（ ）重的柱子。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "小于 8t"
      },
      {
        "key": "B",
        "content": "小于 12t"
      },
      {
        "key": "C",
        "content": "小于 20t"
      },
      {
        "key": "D",
        "content": "小于 25t"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 428,
    "content": "建筑施工中主要使用的是离心式水泵，离心式水泵中又以（ ）离心水泵为最多。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "单级单吸式"
      },
      {
        "key": "B",
        "content": "单级多吸式"
      },
      {
        "key": "C",
        "content": "多级单吸式"
      },
      {
        "key": "D",
        "content": "多级多吸式"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 429,
    "content": "缆风绳宜设在物料提升机导轨架的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "顶部"
      },
      {
        "key": "B",
        "content": "中间"
      },
      {
        "key": "C",
        "content": "底部"
      },
      {
        "key": "D",
        "content": "以上皆可"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 430,
    "content": "配合机械挖土清理槽底作业时，（ ）进入铲斗回转半径范围。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "可以"
      },
      {
        "key": "B",
        "content": "严禁"
      },
      {
        "key": "C",
        "content": "必须"
      },
      {
        "key": "D",
        "content": "不必"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 431,
    "content": "汽车式起重机的特点是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "牵引系数高、爬坡度大，可在崎岖不平的场地上行驶"
      },
      {
        "key": "B",
        "content": "机动性好，转移方便，支腿及起重臂都采用液压式，可大大减轻工人的劳动强度"
      },
      {
        "key": "C",
        "content": "由于行驶与起重操作同在一室，结构简化，使用方便"
      },
      {
        "key": "D",
        "content": "具有操作灵活、使用方便，在一般平整坚实的场地上可以载荷行驶和作业"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 432,
    "content": "施工升降机的拆卸中，吊笼未拆除之前，（ ）不得在地面防护围栏内、施工升降机运行通道内、导轨架内以及附墙架上等区域活动。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "非拆卸作业人员"
      },
      {
        "key": "B",
        "content": "任何人"
      },
      {
        "key": "C",
        "content": "非施工员"
      },
      {
        "key": "D",
        "content": "非安全员"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 433,
    "content": "施工升降机在使用期间，（ ）应每月组织专业技术人员对施工升降机进行检查，并对检查结果进行记录。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "建设单位"
      },
      {
        "key": "B",
        "content": "监理单位"
      },
      {
        "key": "C",
        "content": "使用单位"
      },
      {
        "key": "D",
        "content": "安装单位"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 434,
    "content": "物料提升机承重构件的截面尺寸应经计算确定，钢管壁厚不应小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3.5mm"
      },
      {
        "key": "B",
        "content": "4mm"
      },
      {
        "key": "C",
        "content": "5mm"
      },
      {
        "key": "D",
        "content": "6mm"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 435,
    "content": "物料提升机的基础混凝土强度等级不应低于 C20，厚度不应小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "150mm"
      },
      {
        "key": "B",
        "content": "200mm"
      },
      {
        "key": "C",
        "content": "250mm"
      },
      {
        "key": "D",
        "content": "300mm"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 436,
    "content": "物料提升机电气设备的绝缘电阻值不应小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "0.3MΩ"
      },
      {
        "key": "B",
        "content": "0.4MΩ"
      },
      {
        "key": "C",
        "content": "0.5MΩ"
      },
      {
        "key": "D",
        "content": "0.6MΩ"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 437,
    "content": "物料提升机缆风绳与水平面的夹角不应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "45°"
      },
      {
        "key": "B",
        "content": "50°"
      },
      {
        "key": "C",
        "content": "60°"
      },
      {
        "key": "D",
        "content": "65°"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 438,
    "content": "物料提升机中，滑轮直径与钢丝绳直径的比值不应小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "10"
      },
      {
        "key": "B",
        "content": "20"
      },
      {
        "key": "C",
        "content": "30"
      },
      {
        "key": "D",
        "content": "40"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 439,
    "content": "下列不属于塔式起重机的特点的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "工作高度高，有效起升高度大，特别有利于分层、分段安装作业，能满足建筑物垂直运输的全高度"
      },
      {
        "key": "B",
        "content": "起重臂较长，其水平覆盖面广"
      },
      {
        "key": "C",
        "content": "构造复杂，维修、保养困难"
      },
      {
        "key": "D",
        "content": "驾驶室一般设在与起重臂同等高度的位置，司机的视野开阔"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 440,
    "content": "下面不是塔式起重机的特点的有（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "工作高度低，有效起身高度小"
      },
      {
        "key": "B",
        "content": "起重臂较长，其水平覆盖面广"
      },
      {
        "key": "C",
        "content": "具有多种工作速度、多种作业性能，生产效率高"
      },
      {
        "key": "D",
        "content": "构造较为简单，维修、保养方便"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 441,
    "content": "在起重作业中，只起省力和承重作用的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "定滑车"
      },
      {
        "key": "B",
        "content": "动滑车"
      },
      {
        "key": "C",
        "content": "导向滑车"
      },
      {
        "key": "D",
        "content": "支持滑车"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 442,
    "content": "根据砂轮机的操作要求，无论是正常磨削作业、空转试验还是修整砂轮，操作者都应站在砂轮的（ ）位置，不得站在砂轮（ ）面。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "正前方；背"
      },
      {
        "key": "B",
        "content": "斜前方；正"
      },
      {
        "key": "C",
        "content": "斜前方；背"
      },
      {
        "key": "D",
        "content": "正后方；正"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 443,
    "content": "吊笼（吊篮）的两侧应设置高度不小于（ ）的安全挡板或挡网。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "80cm"
      },
      {
        "key": "B",
        "content": "100cm"
      },
      {
        "key": "C",
        "content": "120cm"
      },
      {
        "key": "D",
        "content": "150cm"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 444,
    "content": "第一次吊重物时，应在吊离地面（ ）时停止上升，检查电动葫芦制动情况，确认完好后再正式作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "100mm"
      },
      {
        "key": "B",
        "content": "200mm"
      },
      {
        "key": "C",
        "content": "300mm"
      },
      {
        "key": "D",
        "content": "400mm"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 445,
    "content": "施工升降机使用前，应进行坠落试验。施工升降机在使用中每隔（ ），应进行坠落试验。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3 个月"
      },
      {
        "key": "B",
        "content": "6 个月"
      },
      {
        "key": "C",
        "content": "9 个月"
      },
      {
        "key": "D",
        "content": "12 个月"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 446,
    "content": "吊篮的电气系统应可靠地接地，接地电阻不应大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1Ω"
      },
      {
        "key": "B",
        "content": "2Ω"
      },
      {
        "key": "C",
        "content": "3Ω"
      },
      {
        "key": "D",
        "content": "4Ω"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 447,
    "content": "自行式铲运机作业前，应检查铲运机的（ ）和制动系统，并确认灵敏可靠。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "液压系统"
      },
      {
        "key": "B",
        "content": "转向"
      },
      {
        "key": "C",
        "content": "电气系统"
      },
      {
        "key": "D",
        "content": "发动机底盘"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 448,
    "content": "（ ）由于接地比压小、通过性好、重心低、稳定性好、附着性能好、牵引力大、单位插入力大；速度低、机动灵活性差、制造成本高、行走时易损路面、转移场地时需拖运。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "轮胎式装载机"
      },
      {
        "key": "B",
        "content": "履带式装载机"
      },
      {
        "key": "C",
        "content": "特大型装载机"
      },
      {
        "key": "D",
        "content": "大型装载机"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 449,
    "content": "风速仪应安装在起重机顶部至吊具的（ ）位置。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "中间部位"
      },
      {
        "key": "B",
        "content": "最高的位置间的不挡风处"
      },
      {
        "key": "C",
        "content": "最高的位置间的挡风处"
      },
      {
        "key": "D",
        "content": "最高位置"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 450,
    "content": "物料提升机以卷扬机为动力，以底架、立柱及天梁为架体，以（ ）为传动。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "木杆"
      },
      {
        "key": "B",
        "content": "竹杆"
      },
      {
        "key": "C",
        "content": "钢丝绳"
      },
      {
        "key": "D",
        "content": "钢管"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 451,
    "content": "（ ）的主要作用有过载限制，即过载时，限载器自动停止伸臂、下变幅、起升动作，允许缩臂、上变幅、落钩动作。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "力矩限位器"
      },
      {
        "key": "B",
        "content": "起升高度限位器"
      },
      {
        "key": "C",
        "content": "臂架角度指示器"
      },
      {
        "key": "D",
        "content": "防臂架后倾装置"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 452,
    "content": "附着式升降脚手架提升装置中，上吊环安装在（ ），用来连接电动葫芦上钩，使他们有效的链接在一起，下吊块安装在桁架底部用来连接电葫芦下钩，使整个提升装置跟底部桁架连接。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "支座底部"
      },
      {
        "key": "B",
        "content": "支座中部"
      },
      {
        "key": "C",
        "content": "支座上部"
      },
      {
        "key": "D",
        "content": "支座与吊环垂直处"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 453,
    "content": "中型塔式起重机的起重量一般为（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "0.3-3t"
      },
      {
        "key": "B",
        "content": "3-5t"
      },
      {
        "key": "C",
        "content": "5-20t"
      },
      {
        "key": "D",
        "content": "20-40t"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 454,
    "content": "塔式起重机安全管理是建筑施工现场安全管理的重要内容。关于塔式起重机安全管理的说法，正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "塔式起重机可以和其他用电设备共用一台开关箱"
      },
      {
        "key": "B",
        "content": "塔式起重机的使用单位应当对使用中的吊具、索具进行定期检验"
      },
      {
        "key": "C",
        "content": "塔式起重机按照专项施工方案完成顶升、附着后,即可投入使用"
      },
      {
        "key": "D",
        "content": "塔式起重机停止作业时应收起吊钩，将起重机回转机构锁死切断电源"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 455,
    "content": "施工升降机是施工现场常用的垂直运输设备。在下列使用情形中，有误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "定期对施工升降机进行坠落试验"
      },
      {
        "key": "B",
        "content": "每天作业前检查齿轮与齿条啮合是否正常"
      },
      {
        "key": "C",
        "content": "在最高层站的停靠处，使用上限位装置停机"
      },
      {
        "key": "D",
        "content": "每天作业结束后，将两个吊笼停放到底层并切断电源"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 456,
    "content": "钢筋冷拉机操作人员在作业时必须戴安全帽，穿胶鞋，不准赤脚或穿拖鞋，距被拉钢筋至少（ ）米。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1"
      },
      {
        "key": "B",
        "content": "2"
      },
      {
        "key": "C",
        "content": "3"
      },
      {
        "key": "D",
        "content": "5"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 457,
    "content": "使用叉车，必须按照出厂使用说明书中的技术性能、承载能力和使用条件进行操作和使用，严禁超载作业或任意扩大使用范围。下列针对叉车安全操作的要求中，正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "以内燃机为动力的叉车严禁进入易燃易爆仓库内部作业"
      },
      {
        "key": "B",
        "content": "不得使用两辆叉车同时装卸同一辆货车"
      },
      {
        "key": "C",
        "content": "叉运物件时，当物件提升离地后，将起落架放平后方可行驶"
      },
      {
        "key": "D",
        "content": "任何情况下叉车都不得叉装重量不明的物件"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 458,
    "content": "起重机的安全操作是防止起重伤害的重要保证，下列起重机的安全操作要求中，错误的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "开机作业前，确认所有控制器置于零位"
      },
      {
        "key": "B",
        "content": "正常作业时，可利用极限位置限制器停车"
      },
      {
        "key": "C",
        "content": "吊载接近或达到额定值，要利用小高度.短行程试吊"
      },
      {
        "key": "D",
        "content": "对于紧急停止信号，无论任何人发出，都必须立即执行"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 459,
    "content": "关于吊篮的安全技术措施正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "可以 2 人同时作业"
      },
      {
        "key": "B",
        "content": "安全钢丝绳设置在吊篮上"
      },
      {
        "key": "C",
        "content": "从建筑物顶部进入吊篮"
      },
      {
        "key": "D",
        "content": "用吊篮运送物料"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 460,
    "content": "塔式起重机的起升机构是为实现物料上升或下降运动而设置的机械装置。下列装置中，不属于塔式起重机起升机构的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "驱动装置"
      },
      {
        "key": "B",
        "content": "制动装置"
      },
      {
        "key": "C",
        "content": "传动装置"
      },
      {
        "key": "D",
        "content": "回转支承装置"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 461,
    "content": "防坠安全器是施工升降机重要的安全装置，应在有效的标定期限内使用。某防坠安全器本次标定日期为 2019 年 3 月 30 日，下次最晚标定日期是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2019 年 9 月 29 日"
      },
      {
        "key": "B",
        "content": "2020 年 3 月 29 日"
      },
      {
        "key": "C",
        "content": "2020 年 9 月 29 日"
      },
      {
        "key": "D",
        "content": "2021 年 3 月 29 日"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 462,
    "content": "施工单位选用 50t 汽车式起重机进行钢结构吊装作业，根据《建筑机械使用安全技术规程》（JGJ33），在吊装作业前制定了具体的安全措施。关于吊装作业安全措施的说法，正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "汽车式起重机无支腿吊装作业时，应进行专项安全技术交底"
      },
      {
        "key": "B",
        "content": "吊物在空中长时间停留时，司机锁住起升卷筒后离开操作室"
      },
      {
        "key": "C",
        "content": "在进行额定载荷试验时，通过调整机体使回转支撑面的倾斜度符合要求"
      },
      {
        "key": "D",
        "content": "汽车式起重机起吊作业时，汽车驾驶室内不得有人"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 463,
    "content": "高处作业吊篮悬吊平台下滑速度达到锁绳速度或悬吊平台倾斜角度达到锁绳角度时，能自动锁住安全钢丝绳并使悬吊平台停止下滑或倾斜的装置是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "限位器"
      },
      {
        "key": "B",
        "content": "安全锁"
      },
      {
        "key": "C",
        "content": "提升机"
      },
      {
        "key": "D",
        "content": "导向轮"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 464,
    "content": "砂浆搅拌机出料应用（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "圆盘式"
      },
      {
        "key": "B",
        "content": "复合式"
      },
      {
        "key": "C",
        "content": "尖嘴式"
      },
      {
        "key": "D",
        "content": "溜槽"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 465,
    "content": "进行机械维修保养时，必须先拉闸切断电源，拔去电源插头，锁好开关箱，挂上（ ）标志，方可检修。入筒内检修时外面必须派专人监护。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "“有人维修，严禁合闸”"
      },
      {
        "key": "B",
        "content": "“有人维修，切勿打扰”"
      },
      {
        "key": "C",
        "content": "“严禁靠近，有人维修”"
      },
      {
        "key": "D",
        "content": "“切勿惊扰，严禁合闸”"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 466,
    "content": "圆盘锯操作时，操作者应站在锯片（ ）位置，（ ）与锯片站在同一直线上，以防木料弹出伤人。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "左边；不应"
      },
      {
        "key": "B",
        "content": "左边；应"
      },
      {
        "key": "C",
        "content": "右边；应"
      },
      {
        "key": "D",
        "content": "右边；不应"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 467,
    "content": "圆盘锯夹持锯片的法兰盘直径应为锯片直径的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1/2"
      },
      {
        "key": "B",
        "content": "1/3"
      },
      {
        "key": "C",
        "content": "1/4"
      },
      {
        "key": "D",
        "content": "2/3"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 468,
    "content": "平刨操作两人同时作业时，须持料推过刨刃（ ）以外，下手方可接拖。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "100mm"
      },
      {
        "key": "B",
        "content": "150mm"
      },
      {
        "key": "C",
        "content": "200mm"
      },
      {
        "key": "D",
        "content": "300mm"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 469,
    "content": "平刨刀刃口量不得超过外径（ ），每次刨削量不得超过（ ），进料速度应均匀。严禁在刨刃上方回料。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1.1mm；1.5mm"
      },
      {
        "key": "B",
        "content": "1.2mm；1.5mm"
      },
      {
        "key": "C",
        "content": "1.0mm；1.1mm"
      },
      {
        "key": "D",
        "content": "1.1mm；3mm"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 470,
    "content": "电箱开关应严格按规定选用（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "熔丝"
      },
      {
        "key": "B",
        "content": "铜线"
      },
      {
        "key": "C",
        "content": "铁线"
      },
      {
        "key": "D",
        "content": "铝线"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 471,
    "content": "同一台刨机的刀片重量、厚度必须一致，刀架与刀必须匹配，严禁使用不合格的刀具，紧固刀片的螺钉应嵌入槽内，且距离刀背不得小于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "10mm"
      },
      {
        "key": "B",
        "content": "20mm"
      },
      {
        "key": "C",
        "content": "30mm"
      },
      {
        "key": "D",
        "content": "50mm"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 472,
    "content": "自动压刨操作每次吃刀深度不宜超过（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2mm"
      },
      {
        "key": "B",
        "content": "3mm"
      },
      {
        "key": "C",
        "content": "5mm"
      },
      {
        "key": "D",
        "content": "10mm"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 473,
    "content": "砂轮（锯片）在安装前必须进行静平衡检查试验，其最大不平衡度不得超过（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5～10mm"
      },
      {
        "key": "B",
        "content": "10～15mm"
      },
      {
        "key": "C",
        "content": "15～20mm"
      },
      {
        "key": "D",
        "content": "20～30mm"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 474,
    "content": "砂轮（锯片）应直接安装在主轴上，保持与主轴同心，法兰直径为砂轮直径的（ ），砂轮（锯片）与法兰之间必须有衬垫，用扳手扭紧螺母。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1/3～2/3"
      },
      {
        "key": "B",
        "content": "1/3～1/2"
      },
      {
        "key": "C",
        "content": "1/4～1/3"
      },
      {
        "key": "D",
        "content": "1/10～1/5"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 475,
    "content": "砂轮侧面应装牢防护罩，且与罩内壁间隙应保持（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5～10mm"
      },
      {
        "key": "B",
        "content": "10～15mm"
      },
      {
        "key": "C",
        "content": "15～20mm"
      },
      {
        "key": "D",
        "content": "20～30mm"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 476,
    "content": "砂轮（锯片）安装后，启动不能过急，先经点动检查，经过（ ）的空车运转，确认正常，并经验收合格后，方可使用。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5～10min"
      },
      {
        "key": "B",
        "content": "10～15min"
      },
      {
        "key": "C",
        "content": "15～20min"
      },
      {
        "key": "D",
        "content": "20～30min"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 477,
    "content": "空气压缩机作业环境应保持清洁和干燥，储气罐须放在通风良好处，且半径（ ）以内不得进行焊接或热加工作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5m"
      },
      {
        "key": "B",
        "content": "10m"
      },
      {
        "key": "C",
        "content": "15m"
      },
      {
        "key": "D",
        "content": "20m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 478,
    "content": "储气罐和输气管路每（ ）应作水压试验一次，试验压力为额定工作压力的（ ）。压力表和安全阀每年至少应校验一次。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "三年；120%"
      },
      {
        "key": "B",
        "content": "三年；150%"
      },
      {
        "key": "C",
        "content": "一年；120%"
      },
      {
        "key": "D",
        "content": "一年；150%"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 479,
    "content": "空气压缩机每工作（ ）需将油水分离器、中间冷却器、后冷却器内的油水排放一次。小时B.2 小时C.3 小时D.4 小时答案：B72、水磨石机宜在混凝土达到设计强度（ ）时进行磨削作业。作业前，应检查并确认各连接件是否紧固，当用木槌轻击磨石发出无裂纹的清脆声音时，方可作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "50%-60%"
      },
      {
        "key": "B",
        "content": "60%-70%"
      },
      {
        "key": "C",
        "content": "70%-80%"
      },
      {
        "key": "D",
        "content": "80%-90%"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 480,
    "content": "水磨石机作业中，当发现磨盘跳动或异响，应（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "立即停机检修"
      },
      {
        "key": "B",
        "content": "继续作业"
      },
      {
        "key": "C",
        "content": "先继续作业，再检修"
      },
      {
        "key": "D",
        "content": "开机检修"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 481,
    "content": "使用水磨石机时，应戴绝缘手套、穿胶鞋，电源须经过（ ）并用橡皮套电缆线，不准有接头。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "一级漏电保护"
      },
      {
        "key": "B",
        "content": "二级漏电保护"
      },
      {
        "key": "C",
        "content": "三级漏电保护"
      },
      {
        "key": "D",
        "content": "断路器"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 482,
    "content": "更换新磨石后，应先在废水磨石地坪上或废水泥制品表面磨（ ），待磨出金刚石切削刃后，再投入工作面作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "20min～30min"
      },
      {
        "key": "B",
        "content": "30min～40min"
      },
      {
        "key": "C",
        "content": "40min～50min"
      },
      {
        "key": "D",
        "content": "1～2h"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 483,
    "content": "手持电动工具转动时，不得（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "撒手不管"
      },
      {
        "key": "B",
        "content": "继续作业"
      },
      {
        "key": "C",
        "content": "停机检修"
      },
      {
        "key": "D",
        "content": "切断电源"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 484,
    "content": "手持电动工具作业时间过长，机具温升超过（ ）时，应停机，等自然冷却后再进行作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "50℃"
      },
      {
        "key": "B",
        "content": "60℃"
      },
      {
        "key": "C",
        "content": "70℃"
      },
      {
        "key": "D",
        "content": "80℃"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 485,
    "content": "喷射机应采用（ ）作业，应按出厂说明书规定的配合比配料，风源应是符合要求的稳压源，电源、水源、加料设备等均应配套。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "干喷"
      },
      {
        "key": "B",
        "content": "湿喷"
      },
      {
        "key": "C",
        "content": "初喷"
      },
      {
        "key": "D",
        "content": "复喷"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 486,
    "content": "混凝土喷射机在喷嘴的前方或左右（ ）范围内不得站人或通行，不准喷向高低压电线，工作停歇肘，喷嘴不准对向有人的方向。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "2m"
      },
      {
        "key": "B",
        "content": "3m"
      },
      {
        "key": "C",
        "content": "5m"
      },
      {
        "key": "D",
        "content": "10m"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 487,
    "content": "混凝土喷射机作业中，必须检查气压表、安全阀等仪表是否正常，需暂停时间超过（ ）的，必须将喷枪内扩储料管内的干混合料（不加水）全部喷出。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "30min"
      },
      {
        "key": "B",
        "content": "1h"
      },
      {
        "key": "C",
        "content": "2h"
      },
      {
        "key": "D",
        "content": "3h"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 488,
    "content": "混凝土喷射机启动前，应先接通风、水、电，开启进气阀至逐步达到（ ），再启动电动机空载运转，确认一切正常后，方可投料作业。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "额定压力"
      },
      {
        "key": "B",
        "content": "标准压力"
      },
      {
        "key": "C",
        "content": "工作压力"
      },
      {
        "key": "D",
        "content": "最高压力"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 489,
    "content": "禁止使用（ ）操作搅拌机。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "倒顺开关"
      },
      {
        "key": "B",
        "content": "三角开关"
      },
      {
        "key": "C",
        "content": "变频开关"
      },
      {
        "key": "D",
        "content": "按钮开关"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 490,
    "content": "砂轮转机操作人员不得站在和面对与砂轮或锯片旋转的（ ）方向。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "向心力"
      },
      {
        "key": "B",
        "content": "离心力"
      },
      {
        "key": "C",
        "content": "张力"
      },
      {
        "key": "D",
        "content": "拉力"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 491,
    "content": "砂轮转机操作人员必须配戴防护眼镜，穿（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "防滑鞋"
      },
      {
        "key": "B",
        "content": "胶鞋"
      },
      {
        "key": "C",
        "content": "胶底绝缘鞋"
      },
      {
        "key": "D",
        "content": "胶面防砸安全鞋"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 492,
    "content": "建筑起重信号司索工的吊运指挥人员需要年满（ ）周岁以上。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "16"
      },
      {
        "key": "B",
        "content": "18"
      },
      {
        "key": "C",
        "content": "19"
      },
      {
        "key": "D",
        "content": "20"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 493,
    "content": "起重信号司索工的特种作业操作证是由（ ）颁发的。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "国家安全管理总局"
      },
      {
        "key": "B",
        "content": "省级建设主管部门"
      },
      {
        "key": "C",
        "content": "省级安全生产监督管理部门"
      },
      {
        "key": "D",
        "content": "国家应急管理部"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 494,
    "content": "两台吊机同时对某一大型设备起吊时，指挥人员应该有（ ）人。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1"
      },
      {
        "key": "B",
        "content": "2"
      },
      {
        "key": "C",
        "content": "3"
      },
      {
        "key": "D",
        "content": "看具体情况"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 495,
    "content": "下列关于起重机起吊作业中的注意事项描述正确的是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "禁止起吊载荷悬挂停留较长时间"
      },
      {
        "key": "B",
        "content": "禁止从驾驶室的前方吊货"
      },
      {
        "key": "C",
        "content": "在起重机作业范围内，除司索工外其他人不得进入"
      },
      {
        "key": "D",
        "content": "禁止吊物自由下落"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 496,
    "content": "两台起重机共同起吊一货物时，其重物的重量不得超过两机起重量总和的（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "60%"
      },
      {
        "key": "B",
        "content": "70%"
      },
      {
        "key": "C",
        "content": "80%"
      },
      {
        "key": "D",
        "content": "90%"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 497,
    "content": "挖掘机上坡时,驱动轮应在后面，臂杆应在上面；挖掘机下坡时，驱动轮应在前面，臂杆应在后面。上下坡度不得超过（ ）度。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "10"
      },
      {
        "key": "B",
        "content": "20"
      },
      {
        "key": "C",
        "content": "30"
      },
      {
        "key": "D",
        "content": "40"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 498,
    "content": "起重机起吊时，负载试吊离地的最佳距离为（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "100-200mm"
      },
      {
        "key": "B",
        "content": "200-300mm"
      },
      {
        "key": "C",
        "content": "300-400mm"
      },
      {
        "key": "D",
        "content": "400-500mm"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 499,
    "content": "以下不属于起重吊装作业人员的行为有（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "负责载荷计算和索具的正确选择"
      },
      {
        "key": "B",
        "content": "对可能出现的事故采取必要的防范措施"
      },
      {
        "key": "C",
        "content": "佩戴鲜明的标志和特殊颜色的安全帽"
      },
      {
        "key": "D",
        "content": "建议起重司机对手柄的选择"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 500,
    "content": "静力压桩机安装前，应先进行场地处理，平整场地的坡度应不大于（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1%"
      },
      {
        "key": "B",
        "content": "2%"
      },
      {
        "key": "C",
        "content": "3%"
      },
      {
        "key": "D",
        "content": "4%"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 501,
    "content": "静力压桩机移动过程中必须与高压线保持不小于（ ）米的安全距离。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3"
      },
      {
        "key": "B",
        "content": "4"
      },
      {
        "key": "C",
        "content": "5"
      },
      {
        "key": "D",
        "content": "6"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 502,
    "content": "钻孔桩机对地面的平整度要求是（ ）。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1%"
      },
      {
        "key": "B",
        "content": "2%"
      },
      {
        "key": "C",
        "content": "3%"
      },
      {
        "key": "D",
        "content": "4%"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 503,
    "content": "钻孔桩机作业时，（ ）米以上的钻杆不得在地面上接好后一次吊起安装。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3"
      },
      {
        "key": "B",
        "content": "6"
      },
      {
        "key": "C",
        "content": "9"
      },
      {
        "key": "D",
        "content": "10"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": 504,
    "content": "冲孔桩机护筒顶端要高出地面（ ），护筒应上下正直并对准桩心。5cm0cm C.20cm D.35cm答案：C98、蒸汽打桩机卷扬机启动前，应先排出管路及汽缸内的冷凝水，并缓慢开启汽阀，让管路和汽缸预热（ ）分钟。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "1-3"
      },
      {
        "key": "B",
        "content": "2-4"
      },
      {
        "key": "C",
        "content": "3-5"
      },
      {
        "key": "D",
        "content": "4-6"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": 505,
    "content": "蒸汽打桩机在作业时，操作人员必须在离施锤地点（ ）外进行监护。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "5 米"
      },
      {
        "key": "B",
        "content": "8 米"
      },
      {
        "key": "C",
        "content": "10 米"
      },
      {
        "key": "D",
        "content": "12 米"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 506,
    "content": "蒸汽打桩机在起锤时，卷筒上的钢丝绳必须排列整齐，钢丝绳不能全部施完，在卷筒上至少保留（ ）圈。",
    "type": "single",
    "options": [
      {
        "key": "A",
        "content": "3"
      },
      {
        "key": "B",
        "content": "5"
      },
      {
        "key": "C",
        "content": "6"
      },
      {
        "key": "D",
        "content": "9"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 507,
    "content": "手持电动工具在潮湿地区或在金属构架、压力容器、管道等导电良好的场所作业时，必须使用（ ）的电动工具。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "单重绝缘"
      },
      {
        "key": "B",
        "content": "双重绝缘"
      },
      {
        "key": "C",
        "content": "三重绝缘"
      },
      {
        "key": "D",
        "content": "加强绝缘 E.带绝缘手套"
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": 508,
    "content": "起重吊装指挥作业人员对位置的要求有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "保证与起重机司机之间视线清楚"
      },
      {
        "key": "B",
        "content": "在所指定的区域内，能清楚地看到负载"
      },
      {
        "key": "C",
        "content": "与被吊运物体保持安全距离"
      },
      {
        "key": "D",
        "content": "当能看见起重机一侧时，可不需要增设中间信号传递 E.尽量站在起重机司机的视野范围"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": 509,
    "content": "钻孔桩机停止作业的条件有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "遇大雨"
      },
      {
        "key": "B",
        "content": "大雾天气"
      },
      {
        "key": "C",
        "content": "五级以上大风"
      },
      {
        "key": "D",
        "content": "高温天气E.多云天气"
      }
    ],
    "answer": [
      "A",
      "B"
    ]
  },
  {
    "id": 510,
    "content": "多功能桩机停止作业时，需要做好的工作有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "桩锤落到地面"
      },
      {
        "key": "B",
        "content": "合上电源闸刀"
      },
      {
        "key": "C",
        "content": "切断电源"
      },
      {
        "key": "D",
        "content": "锁好开关箱 E.放松夹轨器"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ]
  },
  {
    "id": 511,
    "content": "下列哪些是施工升降机运行作业前应重点检查项目（每天检查内容）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "各部件结构无变形，连接螺栓无松动"
      },
      {
        "key": "B",
        "content": "齿条与齿轮、导向轮与导轨均接合正常"
      },
      {
        "key": "C",
        "content": "运行范围内无障碍"
      },
      {
        "key": "D",
        "content": "在传动机械运转时无噪声以及无异常声响 E.各部件钢丝绳固定良好，无异常磨损"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 512,
    "content": "塔式起重机起动前重点检查项目应符合下列哪些要求。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "各安全装置和各指示仪表齐全完好"
      },
      {
        "key": "B",
        "content": "各齿轮箱、液压油箱的油位符合规定"
      },
      {
        "key": "C",
        "content": "齿条与齿轮、导向轮与导轨均接合正常"
      },
      {
        "key": "D",
        "content": "所有部位连接螺栓无松动E.供电电缆无破损"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ]
  },
  {
    "id": 513,
    "content": "塔式起重机，爬升工作前应检查爬升机构钢结构的焊缝、连接螺栓、轴销的完好性。检查（ ）的机械性能。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "钢丝绳"
      },
      {
        "key": "B",
        "content": "索具"
      },
      {
        "key": "C",
        "content": "导轮"
      },
      {
        "key": "D",
        "content": "导轨 E.导架"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ]
  },
  {
    "id": 514,
    "content": "塔吊爬升（降塔）作业过程，必须有（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "专人指挥"
      },
      {
        "key": "B",
        "content": "专人安装电源"
      },
      {
        "key": "C",
        "content": "专人操作液压系统"
      },
      {
        "key": "D",
        "content": "专人拆装螺栓E.专人照看电源"
      }
    ],
    "answer": [
      "A",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 515,
    "content": "物料提升机拆除作业前检查的内容一般包括（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "提升机与建筑物及脚手架的连接情况"
      },
      {
        "key": "B",
        "content": "提升机架体有无其他牵拉物"
      },
      {
        "key": "C",
        "content": "提升机垂直度"
      },
      {
        "key": "D",
        "content": "起重高度E.地梁和基础的连接情况"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "id": 516,
    "content": "起重机地面轨道基础、吊车梁和安装预埋件等的（ ）均应符合设计和安装的要求。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "位置"
      },
      {
        "key": "B",
        "content": "标高"
      },
      {
        "key": "C",
        "content": "跨度"
      },
      {
        "key": "D",
        "content": "表面的平面度坐标 E.稳定性"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": 517,
    "content": "下列关于塔式起重机作业时，描述正确的是（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "重物吊运时，严禁从建、构筑物上方通过"
      },
      {
        "key": "B",
        "content": "重物吊运时，严禁从人上方通过"
      },
      {
        "key": "C",
        "content": "起重臂和重物下方严禁有人停留、工作或通过"
      },
      {
        "key": "D",
        "content": "严禁用起重机载运人员E.严禁起重机起吊重物长时间悬停空中"
      }
    ],
    "answer": [
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 518,
    "content": "门式、桥式起重机作业前的重点检查项目应符合下列要求（ ）。轨道高度轨道接地电阻各安全限位装置齐全完好钢丝绳外表情况良好，绳卡牢固机械结构外观正常，各连接件无松动答案：CDE24、钢筋弯曲机作业过程中，严禁进行（ ）等作业。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "更换芯轴"
      },
      {
        "key": "B",
        "content": "变换角度"
      },
      {
        "key": "C",
        "content": "调整速度"
      },
      {
        "key": "D",
        "content": "加油E.清扫"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    "id": 519,
    "content": "潜水泵启动前应进行下列检查（ ）。",
    "type": "multi",
    "options": [
      {
        "key": "A",
        "content": "水管绑扎牢固"
      },
      {
        "key": "B",
        "content": "放气、放水、注油等螺塞均旋紧"
      },
      {
        "key": "C",
        "content": "叶轮和进水节无杂物"
      },
      {
        "key": "D",
        "content": "电气绝缘良好 E.确认旋转方向"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": 520,
    "content": "塔吊在雨雪天作业时，先进行试吊，确认制动器灵敏可靠后，方可进行作业。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 521,
    "content": "塔式起重机起吊前，应对安全装置进行检查，确认合格后方可起吊。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 522,
    "content": "物料提升机附墙架与架体及建筑之间，均应采用刚性件连接，并形成稳定结构，有外脚手架时牢固连接在脚手架上。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 523,
    "content": "用钢丝绳做物料提升机缆风绳时，直径不得小于 9.3mm。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 524,
    "content": "不得将吊篮作为垂直运输设备，不得采用吊篮运输物料。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 525,
    "content": "大型吊车数量多于两台时应采用平衡轮、平衡梁等调节措施来调整各吊车的受力分配。同时单机的起吊荷载不得超过额定载荷的 75%。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 526,
    "content": "当塔式起重机使用周期超过半年时，应进行一次全面检查，合格后方可继续使用。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 527,
    "content": "根据《建筑施工升降机安装、使用、拆卸安全技术规程》规定，当遇风速大于 10m/s 天气时，施工升降机应停止安装作业。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 528,
    "content": "吊篮严格按搭设程序作业，安全管理人员可以改变方案。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 529,
    "content": "吊笼内空净高度可以为 3m。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 530,
    "content": "对臂根铰点高度超过 50m 的塔式起重机，配有风速仪。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 531,
    "content": "对于塔式起重机，七级强风可以继续吊运物件。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 532,
    "content": "多次弯曲造成的弯曲疲劳是钢丝绳破坏的主要原因之一。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 533,
    "content": "多台起重机共同作业时，应分开指挥，动作应配合协调。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 534,
    "content": "钢丝绳的选择要合理，特殊情况下，容许超负荷使用。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 535,
    "content": "卷扬机是由电动机、卷筒、制动器和齿轮减速机等构成。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 536,
    "content": "可以从高处往下抛掷卸扣。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 537,
    "content": "施工升降机必须安装防坠安全器，防坠安全器应在 3 年有效标定期内使用。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 538,
    "content": "塔机路轨不得铺设在冻胀性土层上，防止土壤冻胀或春季融化，造成路基起伏不平，影响塔机的使用，甚至发生安全事故。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 539,
    "content": "塔式起重机起吊前，当吊物与地面或其他物件之间存在吸附力或摩擦力时，继续起吊，使之脱离。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 540,
    "content": "塔式起重机严禁在夜间进行安装作业。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 541,
    "content": "挖掘机作业时，当需制动时，应将变速阀置于高速档位置。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 542,
    "content": "为了大型吊车吊装安全，辅助吊车松钩时，立式设备的仰角不宜大于 80°。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": 543,
    "content": "无锚点吊推法适用于塔类设备和构筑物的整体吊装，特别适用于施工场地狭窄、地势复杂和现场障碍物多的场合。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": 544,
    "content": "物料提升机工作照明的开关，应与主电源开关相互独立。当主电源被切断时，工作照明不应断电，并应有明显标志。",
    "type": "judge",
    "options": [
      {
        "key": "A",
        "content": "正确"
      },
      {
        "key": "B",
        "content": "错误"
      }
    ],
    "answer": [
      "A"
    ]
  }
];