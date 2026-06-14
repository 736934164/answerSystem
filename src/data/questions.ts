export interface Question {
  id: number
  content: string
  type: 'single' | 'multi' | 'judge'
  options: { key: string; content: string }[]
  answer: string[]
  explanation?: string
}

export interface Category {
  id: string
  name: string
  description: string
  questionCount: number
  icon: string
}

export interface QuizSession {
  id: string
  categoryId: string
  questions: number[]
  answers: Record<number, string[]>
  startTime: number
  endTime?: number
  score?: number
}

export const categories: Category[] = [
  {
    id: 'safety-management',
    name: '安全管理',
    description: '安全生产管理相关知识',
    questionCount: 73,
    icon: 'shield'
  },
  {
    id: 'laws',
    name: '法律法规',
    description: '安全生产法律法规知识',
    questionCount: 78,
    icon: 'book'
  },
  {
    id: 'civil-engineering',
    name: '土建综合安全技术',
    description: '土建工程安全技术知识',
    questionCount: 100,
    icon: 'building'
  },
  {
    id: 'mechanical',
    name: '机械设备安全技术',
    description: '机械设备安全操作知识',
    questionCount: 100,
    icon: 'cog'
  },
  {
    id: 'all',
    name: '综合题库',
    description: '包含所有类型题目',
    questionCount: 351,
    icon: 'layers'
  }
]

// 按分类获取题目ID列表
export function getQuestionIdsByCategory(categoryId: string): number[] {
  if (categoryId === 'all') {
    return questions.map(q => q.id)
  }
  // 目前所有题目都属于安全管理分类
  // 后续可以根据题目来源扩展
  return questions.map(q => q.id)
}

export const questions: Question[] = [
  {
    id: 1,
    content: '（ ）即为达到既定的目的而故意造成的事故。对已确定为破坏性事故的，应由公安机关和企业保卫部门认真追查破案、依法处理。',
    type: 'single',
    options: [
      { key: 'A', content: '破坏性事故' },
      { key: 'B', content: '责任事故' },
      { key: 'C', content: '非破坏性事故' },
      { key: 'D', content: '非责任事故' }
    ],
    answer: ['A']
  },
  {
    id: 2,
    content: '（ ）必须按照国家有关规定经过专门的安全作业培训，并取得特种作业操作资格证书后，方可上岗作业。',
    type: 'single',
    options: [
      { key: 'A', content: '混凝土工' },
      { key: 'B', content: '登高架设作业人员' },
      { key: 'C', content: '抹灰工' },
      { key: 'D', content: '木工' }
    ],
    answer: ['B']
  },
  {
    id: 3,
    content: '（ ）的基本含义是提醒人们对周围环境引起注意，以避免发生危险的图形标志。',
    type: 'single',
    options: [
      { key: 'A', content: '禁止标志' },
      { key: 'B', content: '警示标志' },
      { key: 'C', content: '指示标志' },
      { key: 'D', content: '警告标志' }
    ],
    answer: ['B']
  },
  {
    id: 4,
    content: '（ ）的进步从根本上改善着劳动条件，但不能排除新的重要的危险因素的出现，或者有扩大其有害影响的可能性。',
    type: 'single',
    options: [
      { key: 'A', content: '科学技术' },
      { key: 'B', content: '管理技术' },
      { key: 'C', content: '生产环境' },
      { key: 'D', content: '生产工具' }
    ],
    answer: ['A']
  },
  {
    id: 5,
    content: '（ ）负责施工现场标牌、警示标识的保护和实施落实工作。',
    type: 'single',
    options: [
      { key: 'A', content: '设计单位' },
      { key: 'B', content: '施工单位' },
      { key: 'C', content: '监理单位' },
      { key: 'D', content: '建设单位' }
    ],
    answer: ['B']
  },
  {
    id: 6,
    content: '（ ）是企业计划的重要组成部分，是有计划地改善劳动条件的重要手段，也是做好劳动保护工作、防止工伤事故和职业病的重要措施。',
    type: 'single',
    options: [
      { key: 'A', content: '安全管理计划' },
      { key: 'B', content: '劳动力使用计划' },
      { key: 'C', content: '安全技术措施计划' },
      { key: 'D', content: '资金筹措及使用计划' }
    ],
    answer: ['C']
  },
  {
    id: 7,
    content: '（ ）是实现安全生产的前提和重要保证。',
    type: 'single',
    options: [
      { key: 'A', content: '国家监察' },
      { key: 'B', content: '劳动者的遵纪守法' },
      { key: 'C', content: '行政管理' },
      { key: 'D', content: '群众监督' }
    ],
    answer: ['B']
  },
  {
    id: 8,
    content: '（ ）是一项具有方针政策性、专业技术性和广泛群众性的工作，是一项综合性的安全生产管理措施。',
    type: 'single',
    options: [
      { key: 'A', content: '安全技术措施计划的制定' },
      { key: 'B', content: '安全评价' },
      { key: 'C', content: '安全检查' },
      { key: 'D', content: '安全生产监督' }
    ],
    answer: ['C']
  },
  {
    id: 9,
    content: '（ ）为黄绿双色线。',
    type: 'single',
    options: [
      { key: 'A', content: '工作零线' },
      { key: 'B', content: '保护零线' },
      { key: 'C', content: '一般相线' },
      { key: 'D', content: '火线' }
    ],
    answer: ['B']
  },
  {
    id: 10,
    content: '（ ）主要是指建筑实体在施工或使用的过程中，由于使用环境或周边环境原因而导致的安全事故。',
    type: 'single',
    options: [
      { key: 'A', content: '生产事故' },
      { key: 'B', content: '质量事故' },
      { key: 'C', content: '技术事故' },
      { key: 'D', content: '环境事故' }
    ],
    answer: ['D']
  },
  {
    id: 11,
    content: '安全平网宽度不应小于（ ）m。',
    type: 'single',
    options: [
      { key: 'A', content: '3' },
      { key: 'B', content: '4' },
      { key: 'C', content: '5' },
      { key: 'D', content: '6' }
    ],
    answer: ['A']
  },
  {
    id: 12,
    content: '安全生产第三方评价前，施工企业应先完成自我评价工作，并向委托的评价机构提供（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '政府评估报告' },
      { key: 'B', content: '第二方评价报告' },
      { key: 'C', content: '第三方评价报告' },
      { key: 'D', content: '自我评价报告' }
    ],
    answer: ['D']
  },
  {
    id: 13,
    content: '按照不同作业条件，合理配备灭火器材。如电气设备附件应设置（ ）的灭火器材。',
    type: 'single',
    options: [
      { key: 'A', content: '干粉类不导电' },
      { key: 'B', content: '卤代烷' },
      { key: 'C', content: '水型' },
      { key: 'D', content: '二氧化碳' }
    ],
    answer: ['A']
  },
  {
    id: 14,
    content: '编制安全技术措施计划的目的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '为保证合理使用资金' },
      { key: 'B', content: '为保证有效投入安全资金' },
      { key: 'C', content: '为提高生产的安全性' },
      { key: 'D', content: '合理规制安全措施的开展' }
    ],
    answer: ['B']
  },
  {
    id: 15,
    content: '第二方评价由政府建设行政主管部门对（ ）实施的安全生产评价。',
    type: 'single',
    options: [
      { key: 'A', content: '建设单位' },
      { key: 'B', content: '施工企业' },
      { key: 'C', content: '监理单位' },
      { key: 'D', content: '设计单位' }
    ],
    answer: ['B']
  },
  {
    id: 16,
    content: '对搭设高度在5m及以上的混凝土模板支撑工程需编制（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '专项组织设计' },
      { key: 'B', content: '专项施工设计' },
      { key: 'C', content: '安全专项施工方案' },
      { key: 'D', content: '安全施工措施' }
    ],
    answer: ['C']
  },
  {
    id: 17,
    content: '对于按照规定需要验收的危险性较大的分部分项工程，施工单位、监理单位应当组织相关人员进行验收。验收合格的，经施工单位项目（ ）及总监理工程师签字确认后，方可进入下一道工序。',
    type: 'single',
    options: [
      { key: 'A', content: '技术负责人' },
      { key: 'B', content: '管理人员' },
      { key: 'C', content: '项目负责人' },
      { key: 'D', content: '施工人员' }
    ],
    answer: ['A']
  },
  {
    id: 18,
    content: '各行业的管理部门根据（ ）的原则，在各自的工作职责范围内，行使行业管理的职能。',
    type: 'single',
    options: [
      { key: 'A', content: '管生产必须管安全' },
      { key: 'B', content: '安全第一' },
      { key: 'C', content: '生产安全两手抓' },
      { key: 'D', content: '预防为主；综合治理' }
    ],
    answer: ['A']
  },
  {
    id: 19,
    content: '根据（ ）原则，分包单位在施工期间发生各类事故，应及时组织抢救伤员、保护现场，并立即向总包方和自己的上级单位以及有关部门汇报。',
    type: 'single',
    options: [
      { key: 'A', content: '"谁施工谁负责安全、防火"' },
      { key: 'B', content: '施工总承包负全责' },
      { key: 'C', content: '管生产必管安全' },
      { key: 'D', content: '分包单位有限责任' }
    ],
    answer: ['A']
  },
  {
    id: 20,
    content: '根据《广东省房屋市政工程文明施工工作导则（试行）》，建筑施工企业应当对工地泥浆进行（ ）沉淀后再予以排放。',
    type: 'single',
    options: [
      { key: 'A', content: '一级' },
      { key: 'B', content: '二级' },
      { key: 'C', content: '三级' },
      { key: 'D', content: '四级' }
    ],
    answer: ['C']
  },
  {
    id: 21,
    content: '根据《广东省房屋市政工程文明施工工作导则（试行）》，在建的高层建筑施工超过8层以后，（ ）宜设置临时厕所，并采取保洁措施。',
    type: 'single',
    options: [
      { key: 'A', content: '每隔四层' },
      { key: 'B', content: '每层' },
      { key: 'C', content: '每隔两层' },
      { key: 'D', content: '每隔三层' }
    ],
    answer: ['A']
  },
  {
    id: 22,
    content: '根据《广东省房屋市政工程文明施工工作导则（试行）》规定，工地施工车辆出入口内侧应当按要求设置车辆冲洗设施以及配套的排水、泥浆沉淀设施，并安排专人管理，（ ）方可拆除。',
    type: 'single',
    options: [
      { key: 'A', content: '土方工程完成后' },
      { key: 'B', content: '主体完工后' },
      { key: 'C', content: '工程竣工后' },
      { key: 'D', content: '工程施工时' }
    ],
    answer: ['C']
  },
  {
    id: 23,
    content: '根据《广东省房屋市政工程文明施工工作导则（试行）》规定，临近机动车道的围挡应设置防撞杆，按交通相关管理规定设置（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '安全提示标志' },
      { key: 'B', content: '夜间反光警示标志' },
      { key: 'C', content: '安全标志' },
      { key: 'D', content: '安全警示标志' }
    ],
    answer: ['B']
  },
  {
    id: 24,
    content: '根据《广东省在建房屋市政工程防御台风、暴雨灾害工作指引（试行）》规定，台风橙色或红色预警时，下列做法正确的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '检查外墙脚手架、模板支撑体系等是否采取了防风防雨加固措施' },
      { key: 'B', content: '停止所有高空施工作业' },
      { key: 'C', content: '停止所有露天作业；切断施工电源；撤离危险地带人员' },
      { key: 'D', content: '停止一切施工作业；关闭施工现场临时用电总闸' }
    ],
    answer: ['D']
  },
  {
    id: 25,
    content: '根据《建筑业企业职工安全培训教育暂行规定》，企业法人代表、项目经理每年不少于（ ）学时。',
    type: 'single',
    options: [
      { key: 'A', content: '15' },
      { key: 'B', content: '30' },
      { key: 'C', content: '40' },
      { key: 'D', content: '60' }
    ],
    answer: ['B']
  },
  {
    id: 26,
    content: '根据《住房城乡建设部关于进一步加强和完善建筑劳务管理工作的指导意见》，按照（ ）的原则，施工总承包企业应对所承包工程的劳务管理全面负责。',
    type: 'single',
    options: [
      { key: 'A', content: '"谁承包、谁负责"' },
      { key: 'B', content: '"谁用工、谁负责"' },
      { key: 'C', content: '"谁施工、谁负责"' },
      { key: 'D', content: '总承包单位负责' }
    ],
    answer: ['A']
  },
  {
    id: 27,
    content: '工程项目开工前，由施工组织设计编制人、审批人向参加施工的（ ）进行施工组织设计及安全技术措施交底。',
    type: 'single',
    options: [
      { key: 'A', content: '安全管理人员' },
      { key: 'B', content: '施工管理人员' },
      { key: 'C', content: '技术负责人' },
      { key: 'D', content: '项目负责人' }
    ],
    answer: ['B']
  },
  {
    id: 28,
    content: '工伤保险制度应规范和简化工伤认定和（ ）程序。',
    type: 'single',
    options: [
      { key: 'A', content: '生活能力鉴定' },
      { key: 'B', content: '劳动能力鉴定' },
      { key: 'C', content: '劳动技能鉴定' },
      { key: 'D', content: '劳动体力鉴定' }
    ],
    answer: ['B']
  },
  {
    id: 29,
    content: '国家标准《安全色》GB2893中规定，红色代表的含义是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '禁止' },
      { key: 'B', content: '警告' },
      { key: 'C', content: '注意' },
      { key: 'D', content: '提示安全' }
    ],
    answer: ['A']
  },
  {
    id: 30,
    content: '机械设备在安装、使用、拆除前，应由（ ）对机械设备操作人员进行安全技术交底。',
    type: 'single',
    options: [
      { key: 'A', content: '项目施工技术人员' },
      { key: 'B', content: '安全员' },
      { key: 'C', content: '监理人员' },
      { key: 'D', content: '项目负责人' }
    ],
    answer: ['A']
  },
  {
    id: 31,
    content: '建筑工程安全生产信用监督和失信惩戒制度。将建筑工程安全生产各方责任主体和从业人员安全生产不良行为记录在案，并利用网络、媒体等向全社会公示，加大安全生产社会（ ）力度。',
    type: 'single',
    options: [
      { key: 'A', content: '监察' },
      { key: 'B', content: '管理' },
      { key: 'C', content: '监督' },
      { key: 'D', content: '治理' }
    ],
    answer: ['C']
  },
  {
    id: 32,
    content: '建筑企业安全生产工作的目标归根结底就是预防伤亡事故，把伤亡事故频率和经济损失降到低于社会容许的范围以及国际同行业先进水平，同时不断改善生产条件和作业环境，达到（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '最佳安全状态' },
      { key: 'B', content: '最安全工作环境' },
      { key: 'C', content: '最好安全状态' },
      { key: 'D', content: '最佳工作环境' }
    ],
    answer: ['A']
  },
  {
    id: 33,
    content: '危大工程验收合格的，经施工单位（ ）及总监理工程师签字确认后，方可进入下一道工序。',
    type: 'single',
    options: [
      { key: 'A', content: '企业技术负责人' },
      { key: 'B', content: '项目经理' },
      { key: 'C', content: '项目技术负责人' },
      { key: 'D', content: '项目专职安全生产管理人员' }
    ],
    answer: ['C']
  },
  {
    id: 34,
    content: '扣件式钢管脚手架剪刀撑的设置宽度（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '不应小于4跨且不应小于6米' },
      { key: 'B', content: '不应小于3跨且不应小于5米' },
      { key: 'C', content: '不应大于4跨且不应大于6米' },
      { key: 'D', content: '不应大于3跨且不应大于5米' }
    ],
    answer: ['A']
  },
  {
    id: 35,
    content: '教育和培训按等级、层次和工种性质分别进行，（ ）的重点是安全生产意识和安全管理水平。',
    type: 'single',
    options: [
      { key: 'A', content: '技术人员' },
      { key: 'B', content: '管理人员' },
      { key: 'C', content: '安全管理人员' },
      { key: 'D', content: '监理人员' }
    ],
    answer: ['B']
  },
  {
    id: 36,
    content: '教育和培训按等级、层次和工种性质分别进行，管理人员的重点是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '自我管理的能力' },
      { key: 'B', content: '安全生产意识和安全管理水平' },
      { key: 'C', content: '遵章守纪的能力' },
      { key: 'D', content: '提高防范事故的能力' }
    ],
    answer: ['B']
  },
  {
    id: 37,
    content: '禁止标志的几何图形是带斜杠的圆环，其中圆环与斜杠相连，用红色；图形符号用（ ）色，背景用白色。',
    type: 'single',
    options: [
      { key: 'A', content: '黑' },
      { key: 'B', content: '红' },
      { key: 'C', content: '蓝' },
      { key: 'D', content: '灰' }
    ],
    answer: ['A']
  },
  {
    id: 38,
    content: '危大工程专项施工方案实施前，编制人员或者（ ）应当向施工现场管理人员进行方案交底。',
    type: 'single',
    options: [
      { key: 'A', content: '项目副经理' },
      { key: 'B', content: '项目技术负责人' },
      { key: 'C', content: '班组长' },
      { key: 'D', content: '项目经理' }
    ],
    answer: ['B']
  },
  {
    id: 39,
    content: '起重吊装及安装拆除工程，采用非常规起重设备、方法的，且（ ），需要编制安全专项施工方案。',
    type: 'single',
    options: [
      { key: 'A', content: '遇到雨雪天气' },
      { key: 'B', content: '单件起吊重量在100kN及以上的起重吊装工程' },
      { key: 'C', content: '脚手架的安拆' },
      { key: 'D', content: '基坑开挖、支护及降水工程' }
    ],
    answer: ['B']
  },
  {
    id: 40,
    content: '为保证施工现场交叉作业安全，下层作业位置应处于上层作业的坠落半径之外。在高度24m的楼层作业面施工时，其坠落半径是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '3m' },
      { key: 'B', content: '4m' },
      { key: 'C', content: '5m' },
      { key: 'D', content: '6m' }
    ],
    answer: ['C']
  },
  {
    id: 41,
    content: '施工现场必须配备足够的消防器材，做到布局合理，要害部位应配备不少于（ ）灭火器，要有明显的防火标志。',
    type: 'single',
    options: [
      { key: 'A', content: '两个' },
      { key: 'B', content: '三个' },
      { key: 'C', content: '四个' },
      { key: 'D', content: '五个' }
    ],
    answer: ['C']
  },
  {
    id: 42,
    content: '施工现场的宿舍应实行单人单床，每房间居住人数不得超过（ ）人,严禁睡通铺。',
    type: 'single',
    options: [
      { key: 'A', content: '12' },
      { key: 'B', content: '14' },
      { key: 'C', content: '16' },
      { key: 'D', content: '18' }
    ],
    answer: ['C']
  },
  {
    id: 43,
    content: '施工现场食堂必须有（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '营业执照' },
      { key: 'B', content: '卫生许可证' },
      { key: 'C', content: '环保合格证' },
      { key: 'D', content: '税务登记证' }
    ],
    answer: ['B']
  },
  {
    id: 44,
    content: '通过教学、讲座、讲演、经验介绍、现身说法、演讲比赛的安全教育形式属于（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '广告宣传式' },
      { key: 'B', content: '声像式' },
      { key: 'C', content: '演讲式' },
      { key: 'D', content: '文艺演出式' }
    ],
    answer: ['C']
  },
  {
    id: 45,
    content: '完善安全生产管理体制，建立健全安全管理制度、安全管理机构和安全生产责任制是实现安全生产目标管理的组织（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '作用' },
      { key: 'B', content: '保证' },
      { key: 'C', content: '依据' },
      { key: 'D', content: '措施' }
    ],
    answer: ['B']
  },
  {
    id: 46,
    content: '为保证有效投入安全资金，企业应编制（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '资金使用计划' },
      { key: 'B', content: '安全技术措施计划' },
      { key: 'C', content: '施工组织计划' },
      { key: 'D', content: '资金审查计划' }
    ],
    answer: ['B']
  },
  {
    id: 47,
    content: '下列不需要要组织专家论证的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '开挖深度超过5m（含5m）的基坑（槽）的土方开挖、支护、降水工程' },
      { key: 'B', content: '开挖深度虽未超过5m；但地质条件、周围环境和地下管线复杂' },
      { key: 'C', content: '开挖深度虽未超过5m；但影响毗邻建筑（构筑）物安全的基坑（槽）的土方开挖、支护、降水工程' },
      { key: 'D', content: '采用非常规起重设备、方法；且单件起吊重量在10KN及以上的起重吊装工程' }
    ],
    answer: ['D']
  },
  {
    id: 48,
    content: '下列关于安全施工技术交底说法正确的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '施工单位负责项目管理的技术人员向专职安全生产管理人员交底' },
      { key: 'B', content: '专职安全生产管理人员向施工作业人员交底' },
      { key: 'C', content: '施工单位负责项目管理的技术人员向施工作业人员的交底' },
      { key: 'D', content: '施工作业人员向施工单位负责人交底' }
    ],
    answer: ['C']
  },
  {
    id: 49,
    content: '下列哪个选项不是燃烧的基本条件（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '火源' },
      { key: 'B', content: '风力' },
      { key: 'C', content: '可燃物' },
      { key: 'D', content: '助燃物' }
    ],
    answer: ['B']
  },
  {
    id: 50,
    content: '下列哪一个是施工现场水污染防治措施的内容（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '路面及其余场地地面要硬化' },
      { key: 'B', content: '禁止将有毒有害废弃物用作土方回填' },
      { key: 'C', content: '施工现场办公室、仓库等；保持清洁卫生；建立卫生区域经常打扫' },
      { key: 'D', content: '严禁在工程室内用有机溶剂清洗施工用具' }
    ],
    answer: ['B']
  },
  {
    id: 51,
    content: '下列施工平面布置原则说法错误的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '现场布置全面；增加施工用地' },
      { key: 'B', content: '材料尽量靠近使用地点；减少二次搬运' },
      { key: 'C', content: '临时设施的布置；应便于工人生产和生活；办公用房靠近施工现场；福利设施应在生活区范围之内' },
      { key: 'D', content: '平面图布置应符合安全、消防、环境保护的要求' }
    ],
    answer: ['A']
  },
  {
    id: 52,
    content: '下面关于"十不吊"原则说法错误的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '信号指挥不明不准吊' },
      { key: 'B', content: '斜牵斜挂不准吊' },
      { key: 'C', content: '埋在地下物不准吊' },
      { key: 'D', content: '五级以上强风不准吊' }
    ],
    answer: ['D']
  },
  {
    id: 53,
    content: '项目经理部在项目施工管理总策划时必须对施工现场的危险源进行识别评价和控制策划,评价出（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '危险源因素' },
      { key: 'B', content: '重大危险因素' },
      { key: 'C', content: '危险源' },
      { key: 'D', content: '重大危险源' }
    ],
    answer: ['D']
  },
  {
    id: 54,
    content: '严禁在高压电下方搭设临建、堆放材料和进行施工作业。在高压线一侧作业时，必须保持至少6m的水平距离，达不到上述距离时，必须（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '做好安全应急设施及方案' },
      { key: 'B', content: '提高高压电垂直高度' },
      { key: 'C', content: '设置警示牌' },
      { key: 'D', content: '采取隔离防护措施' }
    ],
    answer: ['D']
  },
  {
    id: 55,
    content: '一级动火作业应由所在单位行政负责人填写动火申请表，编制安全技术措施方案，报公司安全部门审查批准后，方可动火。动火期限为（ ）天。',
    type: 'single',
    options: [
      { key: 'A', content: '3' },
      { key: 'B', content: '2' },
      { key: 'C', content: '1' },
      { key: 'D', content: '7' }
    ],
    answer: ['C']
  },
  {
    id: 56,
    content: '由政府建设行政主管部门对施工企业实施的安全生产评价，称为（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '第一方评价' },
      { key: 'B', content: '第二方评价' },
      { key: 'C', content: '第三方评价' },
      { key: 'D', content: '上级督查' }
    ],
    answer: ['B']
  },
  {
    id: 57,
    content: '生产经营项目、场所发包或者出租给其他单位的，生产经营单位应当与承包单位、承租单位签订专门的（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '责任分工协议' },
      { key: 'B', content: '现场管理协议' },
      { key: 'C', content: '安全生产管理协议' },
      { key: 'D', content: '安全生产分工协议' }
    ],
    answer: ['C']
  },
  {
    id: 58,
    content: '增加或调换的人员按新入场人员进行（ ）安全教育。',
    type: 'single',
    options: [
      { key: 'A', content: '企业' },
      { key: 'B', content: '三级' },
      { key: 'C', content: '项目' },
      { key: 'D', content: '班组' }
    ],
    answer: ['B']
  },
  {
    id: 59,
    content: '重大危险源是指长期地或临时地生产、加工、搬运、使用或贮存危险物质，且危险物质的（ ）等于或超过临界量的单元。',
    type: 'single',
    options: [
      { key: 'A', content: '重量' },
      { key: 'B', content: '数量' },
      { key: 'C', content: '质量' },
      { key: 'D', content: '数目' }
    ],
    answer: ['B']
  },
  {
    id: 60,
    content: '根据《施工企业安全生产评价标准》（JGJ/T77-2010），施工企业安全生产考核评定分为（ ）个等级。',
    type: 'single',
    options: [
      { key: 'A', content: '一' },
      { key: 'B', content: '二' },
      { key: 'C', content: '三' },
      { key: 'D', content: '四' }
    ],
    answer: ['C']
  },
  {
    id: 61,
    content: '根据《建筑施工扣件式钢管脚手架安全技术规范》（JGJ130-2013），扣件在螺栓拧紧力矩达到（ ）N·m时，不得发生破坏。',
    type: 'single',
    options: [
      { key: 'A', content: '50' },
      { key: 'B', content: '55' },
      { key: 'C', content: '60' },
      { key: 'D', content: '65' }
    ],
    answer: ['D']
  },
  {
    id: 62,
    content: '根据《建筑施工扣件式钢管脚手架安全技术规范》（JGJ130-2013）单、双排脚手架剪刀撑的设置应符合下列规定：每道剪刀撑宽度不应小于（ ）跨。',
    type: 'single',
    options: [
      { key: 'A', content: '3；5' },
      { key: 'B', content: '3；6' },
      { key: 'C', content: '4；5' },
      { key: 'D', content: '4；6' }
    ],
    answer: ['D']
  },
  {
    id: 63,
    content: '下列（ ）不属于特种作业人员。',
    type: 'single',
    options: [
      { key: 'A', content: '锅炉司炉工' },
      { key: 'B', content: '厂内机车驾驶人员' },
      { key: 'C', content: '钳工' },
      { key: 'D', content: '起重司索作业人员' }
    ],
    answer: ['C']
  },
  {
    id: 64,
    content: '下列关于建设工程分包的说法，正确的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '总承包单位可以将全部建设工程拆分成若干部分后全部分包给其他施工企业' },
      { key: 'B', content: '总承包单位可以按照合同约定将建设工程部分非主体、非关键性工作分包给其他企业' },
      { key: 'C', content: '总承包单位可以将建设工程主体结构中技术较为复杂的部分分包给其他企业' },
      { key: 'D', content: '总承包单位经建设单位同意后，可以将建设工程的关键性工作分包给其他企业' }
    ],
    answer: ['B']
  },
  {
    id: 65,
    content: '气瓶的瓶体有肉眼可见的突起(鼓包)缺陷的，应如何处理？（ ）',
    type: 'single',
    options: [
      { key: 'A', content: '维修处理' },
      { key: 'B', content: '送有资质的单位进行检测维修' },
      { key: 'C', content: '报废处理' },
      { key: 'D', content: '改造使用' }
    ],
    answer: ['C']
  },
  {
    id: 66,
    content: '安全"3E原则"指的是利用（ ）防止事故的发生。',
    type: 'single',
    options: [
      { key: 'A', content: '技术对策、教育对策、管理对策' },
      { key: 'B', content: '技术对策、教育对策、预防对策' },
      { key: 'C', content: '管理对策、预防对策、技术对策' },
      { key: 'D', content: '管理对策、预防对策、教育对策' }
    ],
    answer: ['A']
  },
  {
    id: 67,
    content: '安全生产"四不伤害"是指（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '不伤害自己，不伤害他人，不被他人伤害，保护他人不受伤害' },
      { key: 'B', content: '不伤害自己，不伤害他人，不伤害公共财产，保护他人不受伤害' },
      { key: 'C', content: '不伤害他人，不被他人伤害，不被物体伤害，保护他人不受伤害' },
      { key: 'D', content: '不伤害自己，不伤害他人，不被物体伤害，保护他人不受伤害' }
    ],
    answer: ['A']
  },
  {
    id: 68,
    content: '施工现场发生生产安全事故后，以下哪项处理措施是错误的（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '事故现场有关人员应当立即报告本单位负责人' },
      { key: 'B', content: '单位负责人接到事故报告后，应当首先向当地负有安全生产监督管理职责的部门报告' },
      { key: 'C', content: '单位负责人接到事故报告后，应当迅速采取有效措施，组织抢救.防止事故扩大，减少人员伤亡和财产损失' },
      { key: 'D', content: '单位负责人应当按照国家有关规定立即如实报告当地负有安全生产监督管理职责的' }
    ],
    answer: ['B']
  },
  {
    id: 69,
    content: '施工单位在组织施工现场高处坠落事故应急演练活动前，编制了《高处坠落事故应急演练工作方案》。根据《生产安全事故应急演练指南》（AQ/T9007），不属于应急演练工作方案内容的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '建筑施工现场高处坠落事故情景设计' },
      { key: 'B', content: '参加演练单位和人员主要任务及职责' },
      { key: 'C', content: '应急演练中止条件和程序' },
      { key: 'D', content: '应急演练技术支撑及保障条件' }
    ],
    answer: ['C']
  },
  {
    id: 70,
    content: '习近平总书记在中国共产党第十九次全国代表大会报告中指出，健全公共安全体系，完善安全生产责任制，坚决遏制重特大安全事故。关于习近平总书记安全发展观的思想，正确的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '树立安全发展理念，弘扬安全第一、以人为本的思想' },
      { key: 'B', content: '树立以人为本理念，弘扬预防为主、安全第一的思想' },
      { key: 'C', content: '树立安全发展理念，弘扬生命至上、安全第一的思想' },
      { key: 'D', content: '树立以人为本理念，弘扬安全第一、协调发展的思想' }
    ],
    answer: ['C']
  },
  {
    id: 71,
    content: '某交通运输股份有限公司的组织机构包括董事会，监事会、工会、总工办、调度室、安全处、财务处等。公司设总经理、安全总监等管理岗位。根据有关规定，该公司安全生产投入资金予以决策的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '董事会' },
      { key: 'B', content: '董事长' },
      { key: 'C', content: '总经理' },
      { key: 'D', content: '安全总监' }
    ],
    answer: ['A']
  },
  {
    id: 72,
    content: '甲公司拟投资建设一大型商业综合体项目，由乙公司总承包，乙公司将土石方工程发包给丙公司，结构和给排水机电工程发包给丁公司。施工过程中，实施该建设项目的安全生产工作统一协调、管理的单位是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '乙' },
      { key: 'B', content: '甲' },
      { key: 'C', content: '丙' },
      { key: 'D', content: '丁' }
    ],
    answer: ['B']
  },
  {
    id: 73,
    content: '甲公司实施一项大型技改项目，拟将与该项目配套的办公楼、工艺楼建设项目等发包给乙公司。按照相关要求，甲公司安全管理部门对乙公司进行了安全资质审查。下列乙公司提供的安全资质审查资料中，符合要求的是（ ）。',
    type: 'single',
    options: [
      { key: 'A', content: '法定代表人证明书、安全生产许可证、主要负责人安全生产考核合格证书、近两年的安全业绩' },
      { key: 'B', content: '法定代表人证明书、安全生产许可证、安全管理体系程序文件及有效评审报告、近两年的安全业绩' },
      { key: 'C', content: '特种作业证书、安全生产许可证、主要负责人安全生产考核合格证书、近两年的安全业绩' },
      { key: 'D', content: '安全生产许可证、主要负责人安全资格证书、安全管理体系有效评审报告、近两年的安全业绩' }
    ],
    answer: ['D']
  }
]
