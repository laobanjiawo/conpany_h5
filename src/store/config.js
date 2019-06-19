export default {
  state: {
    stateClass: {
      '成功': 'c_s',
      '赢': 'c_s',
      '半赢': 'c_s',
      '出款成功': 'c_s',
      '转帐成功': 'c_s',
      '投注成功': 'c_s',
      '中奖': 'c_s',
      '已中奖': 'c_s',
      '完成': 'c_s',
      '已完成': 'c_s',
      '已结算': 'c_s',
      '审核通过': 'c_s',
      '已充值': 'c_s',
      '已发放': 'c_s',
      '已签约': 'c_s',
      '已签订': 'c_s',
      '已领取': 'c_s',
      '已设置': 'c_s',

      '失败': 'c_e',
      '输': 'c_e',
      '半输': 'c_e',
      '出款失败': 'c_e',
      '转帐失败': 'c_e',
      '未中奖': 'c_g',
      '拒绝': 'c_e',
      '已拒绝': 'c_e',
      '撤单': 'c_e',
      '已撤单': 'c_e',
      '审核失败': 'c_e',
      '系统撤单': 'c_e',
      '未发放': 'c_e',
      '未领取': 'c_e',
      '未设置': 'c_e',

      '取消': 'c_g',
      '取消注单': 'c_g',
      '未结算': 'c_g',
      '未签约': 'c_g',
      '未签订': 'c_g',

      '进行中': 'c_p',
      '审核中': 'c_p',
      '待确认': 'c_p',
      '处理中': 'c_p',
      '待充值': 'c_p',
    },
    stateColor: {
      0: 'orange',
      1: 'red',
      2: 'blue',
      3: 'green',
    },
    orderState: {
      0: '未开奖',
      1: '已中奖',
      2: '未中奖',
      3: '已撤单',
    },
    orderStateFilters: [
      {id: '', n: '全部状态'},
      {id: 0, n: '未开奖'},
      {id: 1, n: '已中奖'},
      {id: 2, n: '未中奖'},
      {id: 3, n: '已撤单'},
    ],
    chaseState: {
      0: '进行中',
      1: '已取消',
      2: '已完成',
    },
    chaseStateFilters: [
      {id: '', n: '全部状态'},
      {id: 0, n: '进行中'},
      {id: 1, n: '已取消'},
      {id: 2, n: '已完成'},
    ],
    loadStateFilters: [
      {id: '', n: '全部状态'},
      {id: 1, n: '待充值'},
      {id: 2, n: '待确认'},
      {id: 3, n: '第三方已到账'},
      {id: 4, n: '充值成功'},
    ],
    transferStateFilters: [
      {id: '', n: '全部状态'},
      {id: 0, n: '失败'},
      {id: 1, n: '成功'},
      {id: 2, n: '处理中'},
    ],
    withdrawStateFilters: [
      {id: '', n: '全部状态'},
      {id: 1, n: '待审核'},
      {id: 2, n: '审核失败'},
      {id: 3, n: '出款中'},
      {id: 4, n: '出款成功'},
      {id: 5, n: '出款失败'},
    ],
    fhState: {
      0: '未发放',
      1: '已发放',
      2: '待确认',
    },
    fhStateFilters: [
      {id: '', n: '全部状态'},
      {id: 0, n: '未发放'},
      {id: 1, n: '已发放'},
      {id: 2, n: '待确认'},
    ],
    fhType: {
      0: '销售',
      1: '亏损'
    },
    qyState: {
      1: '已签约',
      0: '待确认',
      3: '已拒绝',
      2: '未签约',
    },
    qyStateFilters: [
      {id: '', n: '全部状态'},
      {id: 1, n: '已签约'},
      {id: 0, n: '待确认'},
      {id: 3, n: '已拒绝'},
      {id: 2, n: '未签约'},
    ],
    scopeFilters: [
      {id: 2, n: '我和下级'},
      {id: 1, n: '我自己'},
      {id: 3, n: '我的下级'},
    ],
    subScopeFilters: [
      {id: 0, n: '全部下级'},
      {id: 1, n: '直接下级'},
      {id: 2, n: '间接下级'},
    ],
    dsStateFilters: [
      {id: '', n: '全部状态'},
      {id: 0, n: '未领取'},
      {id: 1, n: '已领取'},
    ],
    dsState: {
      0: '未领取',
      1: '已领取',
    },
    dsSetStateFilters: [
      // {id: '', n: '全部状态'},
      {id: 0, n: '未设置'},
      {id: 1, n: '已设置'},
    ],
    dsSetState: {
      0: '未设置',
      1: '已设置',
    },
    sortStateFilters: [
      {id: 'buy', n: '投注从高到低'},
      {id: 'gameProfit', n: '游戏盈亏从高到低'},
      {id: 'totalProfit', n: '总盈亏从高到低'},
    ],
    wallets: [
      {n: '主帐户', key: 'availableBalance', pid: 0},
      {n: '特殊帐户', key: 'specialBalance', pid: 1},
      {n: 'BG帐户', key: '$bg', pid: 2},
      {n: 'IBC帐户', key: '$tcg', pid: 3},
      {n: '棋牌帐户', key: '$ky', pid: 7},
      {n: 'PT帐户', key: '$pt', pid: 5},
      {n: 'AG帐户', key: '$ag', pid: 4},
      {n: '沙巴帐户', key: '$sb', pid: 9},
      {n: '乐游帐户', key: '$ly', pid: 15},
      {n: 'U赢帐户', key: '$uwin', pid: 17},
      {n: 'KG帐户', key: '$kg', pid: 18},
      {n: '微游帐户', key: '$lit', pid: 25},
      {n: '平博帐户', key: '$pb', pid: 19},
      {n: 'LG帐户', key: '$lg', pid: 21},
    ]
  }
}
