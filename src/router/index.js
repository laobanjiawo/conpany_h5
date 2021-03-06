import axios from 'axios'
import { user } from '@/store'
// 链接 frame
import frame from '@/views/frame'

// 首页 tab
import Index from '@/views/Index'
import home from '@/views/home'
import promo from '@/views/promo'
import game from '@/views/game'
import message from '@/views/message'

import notice from '@/views/home/notice'

// 找回密码 tab
import forget from '@/views/popup/forget/index'
import email from '@/views/popup/forget/email'
import phone from '@/views/popup/forget/phone'
import sq from '@/views/popup/forget/sq'
import bd from '@/views/popup/forget/bd'

// 优惠
import usecoupon from '@/views/promo/coupon/use'

// 游戏
// play
import play from '@/views/game/play'
import car from '@/views/game/play/car'
import chase from '@/views/game/play/chase'
// outer
import outer from '@/views/outer'

/* 开奖中心 */
import lotteryCenterList from '@/views/game/lotteryCenter/lotteryList'
import lotteryClassify from '@/views/game/lotteryCenter/lotteryClassify'
import lotteryHistory from '@/views/game/lotteryCenter/lotteryHistory'

// 我的 me
import load from '@/views/me/load'
import withdraw from '@/views/me/withdraw'
import transfer from '@/views/me/transfer'
import wallet from '@/views/me/wallet'
import xyb from '@/views/me/xyb'
import xybio from '@/views/me/xyb/io'

import safecenter from '@/views/me/safecenter'
import pwd from '@/views/me/safecenter/pwd'
import cpwd from '@/views/me/safecenter/cpwd'
import nn from '@/views/me/safecenter/nn'
import birthday from '@/views/me/safecenter/birthday.vue'
import msg from '@/views/me/safecenter/msg'
import phoneb from '@/views/me/safecenter/phoneb'
import emailb from '@/views/me/safecenter/emailb'
import qa from '@/views/me/safecenter/qa'
import bdb from '@/views/me/safecenter/bdb'
import sb from '@/views/me/safecenter/sb'

import bank from '@/views/me/bank'
import note from '@/views/me/bank/note'
import bind from '@/views/me/bank/bind'
import unbind from '@/views/me/bank/unbind.vue'

import bonus from '@/views/me/bonus'
import openAccountMgr from '@/views/me/agent/openAccountMgr'
import editlink from '@/views/me/agent/openAccountMgr/marketingLink'
import lowerLevelMgr from '@/views/me/agent/lowerLevelMgr'
import setPoint from '@/views/me/agent/lowerLevelMgr/setPoint'
import transferTo from '@/views/me/agent/lowerLevelMgr/transferTo'
import copySet from '@/views/me/agent/lowerLevelMgr/copySet'

// 帮助中心
import help from '@/views/me/help'
import howtoplay from '@/views/me/help/howtoplay'
import tabindex from '@/views/me/help/howtoplay/tabindex'
import functionintro from '@/views/me/help/functionintro'
import faq from '@/views/me/help/faq'
import detailpage from '@/views/me/help/detailpage'
// 设置
import settings from '@/views/settings'
// 关于我们
import aboutus from '@/views/aboutus'
// 软件服务
import license from '@/views/license'

// 报表
import bc from '@/views/rfs/bc'
import bd_ from '@/views/rfs/bc/bd'
import cd from '@/views/rfs/bc/cd'
// 资金记录
import cr from '@/views/rfs/cr'
import LRD from '@/views/rfs/cr/LRD'
import WRD from '@/views/rfs/cr/WRD'
// 盈亏报表
import pl from '@/views/rfs/pl'
import PLD from '@/views/rfs/pl/PLD'
import PLDL from '@/views/rfs/pl/PLDL'
// 团队统计
import ts from '@/views/rfs/ts'
import tsAD from '@/views/rfs/ts/AD'
import tsADL from '@/views/rfs/ts/ADL'
import tsBD from '@/views/rfs/ts/BD'
import tsBDL from '@/views/rfs/ts/BDL'

// 分红报表(分红、预期、契约) 佣金报表(佣金、预期、契约)
import fh from '@/views/rfs/fh'
import yj from '@/views/rfs/yj'
import newc from '@/views/rfs/fh/newc'
import newcyj from '@/views/rfs/yj/newc'
// 日工资
import ds from '@/views/rfs/ds'
import setds from '@/views/rfs/ds/setds'
// 下级账变明细
import _ac from '@/views/rfs/_ac'
// 下级彩票投注、追号
import _bc from '@/views/rfs/_bc'
// 下级账变明细
import _pl from '@/views/rfs/_pl'
// 团队统计
import tpl from '@/views/rfs/tpl'

import signmonth from '@/views/popup/signmonth'

// 查看分红契约邀请详情
import deedlistinfo from '@/views//popup/deed_listinfo'

let async = url => {
  return (routeTo, routeFrom, resolve, reject) => {
    // dynamic import component; returns promise
    let vueComponent = null
    switch (url) {
      case '@/views/me':
        vueComponent = () => import('@/views/me')
        break
      case '@/views/popup/login':
        vueComponent = () => import('@/views/popup/login')
        break
      case '@/views/popup/speed':
        vueComponent = () => import('@/views/popup/speed')
        break
      case '@/views/popup/register':
        vueComponent = () => import('@/views/popup/register')
        break
      case '@/views/popup/guide':
        vueComponent = () => import('@/views/popup/guide')
        break
    }
    // resolve promise
    vueComponent().then((vc) => {
      // resolve with component
      resolve({ component: vc.default })
    })
  }
}

let checkAuth = (to, from, resolve, reject) => {
  let rl = to.route.rl || (to.route.tab || {}).rl
  if (rl && !user.state.login) {
    setTimeout(() => {
      if (!user.state.login) {
        reject()
        axios.$root.$f7.popup.open('#login')
        axios.$root.$children[0].__setGlobal({ afterLoginRedirect: to.path })
      } else resolve()
    }, user.state.login === '' ? 500 : 0)
  } else resolve()
}

export default [
  {
    path: '/',
    component: Index,
    tabs: [
      {
        path: '/',
        id: 'home',
        component: home
      },
      {
        path: '/promo/',
        id: 'promo',
        component: promo,
      },
      {
        path: '/game/',
        id: 'game',
        component: game
      },
      {
        path: '/message/',
        id: 'message',
        component: message
      },
      {
        path: '/me/',
        id: 'me',
        async: async('@/views/me'),
        rl: true,
      },
    ],
    beforeEnter: checkAuth
  },
  {
    path: '/notice/',
    component: notice,
    keepAlive: true,
  },
  // modul frame
  {
    path: '/outer/',
    component: outer,
  },
  {
    path: '/frame/',
    component: frame,
    // keepAlive: true,
  },
  // modul frame
  // modul me
  {
    path: '/me/load/',
    component: load,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/withdraw/',
    component: withdraw,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/transfer/',
    component: transfer,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/xyb/',
    component: xyb,
    beforeEnter: checkAuth,
    rl: true,
  },
  {
    path: '/me/xyb/io/',
    component: xybio,
  },
  {
    path: '/me/wallet/',
    component: wallet,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/',
    component: safecenter,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/pwd/',
    component: pwd,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/cpwd/',
    component: cpwd,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/nn/',
    component: nn,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/birthday/',
    component: birthday,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/msg/',
    component: msg,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/phoneb/',
    component: phoneb,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/emailb/',
    component: emailb,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/qa/',
    component: qa,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/bdb/',
    component: bdb,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/safecenter/sb/',
    component: sb,
    beforeEnter: checkAuth,
    rl: true
  },

  {
    path: '/me/bank/',
    component: bank,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/bank/note/',
    component: note,
  },
  {
    path: '/me/bank/bind/',
    component: bind,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/bank/unbind/',
    component: unbind,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/bonus/',
    component: bonus,
    beforeEnter: checkAuth,
    rl: true
  },
  {
    path: '/me/help/',
    component: help,
    rl: true
  },
  {
    path: '/me/help/howtoplay/',
    component: howtoplay,
    rl: true
  },
  {
    path: '/me/help/howtoplay/tabindex/',
    component: tabindex,
    rl: true
  },
  {
    path: '/me/help/functionintro/',
    component: functionintro,
    rl: true
  },
  {
    path: '/me/help/faq/',
    component: faq,
    rl: true
  },
  {
    path: '/me/help/detailpage/',
    component: detailpage,
    rl: true
  },
  {
    path: '/agent/openAccountMgr',
    component: openAccountMgr,
    rl: true
  },
  {
    path: '/agent/editlink',
    component: editlink,
    rl: true
  },
  {
    path: '/agent/lowerLevelMgr',
    component: lowerLevelMgr,
    rl: true
  },
  {
    path: '/agent/lowerLevelMgr/setPoint',
    component: setPoint,
    rl: true
  },
  {
    path: '/agent/lowerLevelMgr/transferTo',
    component: transferTo,
    rl: true
  },
  {
    path: '/agent/lowerLevelMgr/copySet',
    component: copySet,
    rl: true,
    // beforeLeave: function (routeTo, routeFrom, resolve, reject) {
    //   console.log(routeTo, routeFrom, this)
    //   resolve()
    // }
  },
  {
    path: '/settings/',
    component: settings,
    rl: true
  },
  {
    path: '/aboutus/',
    component: aboutus,
    rl: true,
  },
  {
    path: '/license/',
    component: license,
    rl: true,
  },
  // modul me
  // module login
  {
    path: '/login',
    async: async('@/views/popup/login')
  },
  {
    path: '/speed',
    async: async('@/views/popup/speed')
  },
  {
    path: '/register',
    async: async('@/views/popup/register')
  },
  {
    path: '/guide',
    async: async('@/views/popup/guide')
  },
  {
    path: '/forget',
    component: forget
  },
  {
    path: '/forget/email',
    component: email
  },
  {
    path: '/forget/phone',
    component: phone
  },
  {
    path: '/forget/sq',
    component: sq
  },
  {
    path: '/forget/bd',
    component: bd
  },
  // module login
  // promo
  {
    path: '/coupon/use/',
    component: usecoupon
  },
  // promo
  // game
  {
    path: '/game/play/',
    component: play,
    master: true,
    detailRoutes: [
      {
        path: '/game/car/',
        component: car,
      },
      {
        path: '/game/chase/',
        component: chase,
      },
    ]
  },
  {
    path: '/game/lotteryCenter/list',
    component: lotteryCenterList,
    master: true,
  },
  {
    path: '/game/lotteryCenter/classify',
    component: lotteryClassify,
    master: true,
  },
  {
    path: '/game/lotteryCenter/history',
    component: lotteryHistory,
    master: true,
  },
  // game

  // rfs
  {
    path: '/rfs/bc/',
    component: bc,
    master: true,
    detailRoutes: [
      {
        path: '/rfs/bc/bd/:id/',
        component: bd_,
      },
      {
        path: '/rfs/bc/cd/:id/',
        component: cd,
      },
    ]
  },
  {
    path: '/rfs/_bc/',
    component: _bc,
    master: true,
    detailRoutes: [
      {
        path: '/rfs/bc/bd/:id/',
        component: bd_,
      },
      {
        path: '/rfs/bc/cd/:id/',
        component: cd,
      },
    ]
  },
  {
    path: '/rfs/cr/',
    component: cr,
    master: true,
    detailRoutes: [
      {
        path: '/rfs/cr/lrd/',
        component: LRD,
      },
      {
        path: '/rfs/cr/wrd/',
        component: WRD,
      },
    ]
  },
  {
    path: '/rfs/pl/',
    component: pl,
    master: true,
    detailRoutes: [
      {
        path: '/rfs/pl/pld/',
        component: PLD,
      },
      {
        path: '/rfs/pl/pld/pldl/',
        component: PLDL,
      },
    ]
  },
  {
    path: '/rfs/_pl/',
    component: _pl,
  },
  {
    path: '/rfs/tpl/',
    component: tpl,
  },
  {
    path: '/rfs/ts/',
    component: ts,
    master: true,
    detailRoutes: [
      {
        path: '/rfs/ts/ad/',
        component: tsAD,
      },
      {
        path: '/rfs/ts/adl/',
        component: tsADL,
      },
      {
        path: '/rfs/ts/bd/',
        component: tsBD,
      },
      {
        path: '/rfs/ts/bdl/',
        component: tsBDL,
      },
    ]
  },
  {
    path: '/rfs/fh/',
    component: fh,
    master: true,
    detailRoutes: [
      {
        path: '/rfs/fh/newc',
        component: newc,
      }
    ]
  },
  {
    path: '/rfs/yj/',
    component: yj,
    master: true,
    detailRoutes: [
      {
        path: '/rfs/yj/newc',
        component: newcyj,
      }
    ]
  },
  {
    path: '/rfs/ds/',
    component: ds,
    master: true,
    detailRoutes: [
      {
        path: '/rfs/ds/setds',
        component: setds,
      }
    ]
  },
  {
    path: '/rfs/ac/',
    component: _ac
  },
  {
    path: '/signmonth',
    component: signmonth
  },
  // 查看分红契约邀请详情
  {
    path: '/popup/deed_listinfo',
    component: deedlistinfo,
    beforeEnter: checkAuth,
    rl: true
  },
]
