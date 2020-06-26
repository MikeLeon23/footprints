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