let defaultUser = {
  login: '',
  displayPermission: {},
  codeimg: '',
  actvityUrl: '',
  broadcaseWSUrl: '',
  hasBankCard: '',
  hasLogPwd: '',
  hasNickName: '',
  hasSecurityPwd: '',
  identity: '',
  isOldUser: '',
  isOpenKey: '',
  isTest: '',
  isTry: '',
  platId: '',
  platUrl: '',
  roleId: '',
  sessionKey: '',
  showBackWater: '',
  showSalary: '',
  success: '',
  token: '',
  userId: '',
  userLevel: '',
  userName: '',
  verifyType: '',
  vipChatUrl: '',
  // __getBalance
  freeAvaiable: '',
  rewardPoint: '',
  availableBalance: '',
  specialBalance: '',
  $xyb: '',
  $bg: '',
  $tcg: '',
  $ky: '',
  $pt: '',
  $ag: '',
  $sb: '',
  $ly: '',
  $uwin: '',
  $kg: '',
  $lit: '',
  $pb: '',
  $lg: '',
  // vipinfo
  level: 0,
  levelName: '',
  exp: 0,
  diffExp: 0,
  nexMinExp: 0,
  subLevel: '',
  // bankcard
  lockCard: 0,
  userBankCards: [],
  // 安全中心
  location: '',
  accountPoint: '',
  birthday: '',
  email: '',
  mobile: '',
  greetMsg: '',
  isSetLoginPwd: '',
  isSetSafeQuest: '',
  isSetSecurityPwd: '',
  isSetVerifytyp: '',
  myFavour: [],
}
export default {
  state: defaultUser,
  actions: {
    __setUser (user) {
      this.user = Object.assign(this.user, user || defaultUser)
    }
  }
}
