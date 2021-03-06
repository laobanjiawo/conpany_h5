window.Date.prototype._setY = function (y = new Date().getFullYear()) {
  return new window.Date(new window.Date(this).setFullYear(y))
}
window.Date.prototype._setMN = function (mn = new Date().getMonth()) {
  return new window.Date(this.setMonth(mn))
}
window.Date.prototype._setD = function (d = 1) {
  return new window.Date(new window.Date(this).setDate(d))
}
window.Date.prototype._setH = function (h = 0) {
  return new window.Date(this.setHours(h))
}
window.Date.prototype._setM = function (m = 0) {
  return new window.Date(this.setMinutes(m))
}
window.Date.prototype._setS = function (s = 0) {
  return new window.Date(this.setSeconds(s))
}
window.Date.prototype._setHMS = function (hsm = '0:0:0') {
  return this._setH(hsm.split(':')[0] || 0)._setM(hsm.split(':')[1] || 0)._setS(hsm.split(':')[2] || 0)
}
window.Date.prototype._bf = function (d) {
  return this._setD(this.getDate() + d)
}
window.Date.prototype._bfM = function (d) {
  return new window.Date(new window.Date(this).setMonth(this.getMonth() + d))
}
window.Date.prototype._bfY = function (y) {
  return new window.Date(new window.Date(this).setFullYear(this.getFullYear() + y))
}
window.Date.prototype._toString = function (s = '-') {
  return this.getFullYear() + s + (this.getMonth() + 1)._padStart(2, 0) + s + this.getDate()._padStart(2, 0) + ' ' + this.getHours()._padStart(2, 0) + ':' + this.getMinutes()._padStart(2, 0) + ':' + this.getSeconds()._padStart(2, 0)
}
window.Date.prototype._toMonthString = function (s = '-') {
  return this.getFullYear() + s + (this.getMonth() + 1)._padStart(2, 0)
}
window.Date.prototype._toDayString = function (s = '-') {
  return this.getFullYear() + s + (this.getMonth() + 1)._padStart(2, 0) + s + this.getDate()._padStart(2, 0)
}
window.Date.prototype._toAllString = function () {
  return this.getFullYear() + (this.getMonth() + 1)._padStart(2, 0) + this.getDate()._padStart(2, 0) + this.getHours()._padStart(2, 0) + this.getMinutes()._padStart(2, 0) + this.getSeconds()._padStart(2, 0)
}
window.Date.prototype._toMonthDayStringCN = function () {
  return (this.getMonth() + 1) + '月' + this.getDate() + '日'
}
window.Date.prototype._toMDHMString = function (s = '-') {
  return (this.getMonth() + 1) + s + this.getDate() + ' ' + this.getHours()._padStart(2, 0) + ':' + this.getMinutes()._padStart(2, 0)
}
window.Date.prototype._toWeekString = function () {
  return '星期' + ['日', '一', '二', '三', '四', '五', '六'][this.getDay()]
}
// 今天/明天/昨天/后天
window.String.prototype.__toDayString = window.Date.prototype.__toDayString = function () {
  let self = this
  if (!self.getTime) {
    return '不限'
  }
  let x = self._toDayString()
  let t = new Date(window.lstt)
  if (x === t._toDayString()) {
    return '今天'
  } else if (x === t._bf(-1)._toDayString()) {
    return '昨天'
  } else if (x === t._bf(-2)._toDayString()) {
    return '前天'
  } else {
    return x
  }
}

export function getFirstDayOfMonth (date) {
  return getDayOfWeek(date, 1)
}

export function getDayOfWeek(date, d) {
  const temp = new Date(date.getTime())
  temp.setDate(d)
  return temp.getDay()
}

export function getDaysOfMonth (year, month) {
  if ([3, 5, 8, 10].includes(month)) {
    return 30
  }
  if (month === 1) {
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28
  }
  return 31
}