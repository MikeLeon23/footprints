/* 这个文件一般放项目中通用的函数，这个项目暂时不写 */

// 1. 防抖函数
export function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, delay);
  };
}

// 2. 日期数据类型转换成格式化日期字符串的函数
export function formatDate(date, fmt) {
  // 获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
  }
  // 获取月, 日, 时, 分, 秒
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      let str = o[k].toString();
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

// 给日期数字左边添0的函数
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}