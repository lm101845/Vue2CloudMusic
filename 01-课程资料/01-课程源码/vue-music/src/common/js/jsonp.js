/*
 * @Author: liming
 * @Date: 2021-08-10 02:41:52
 * @LastEditTime: 2021-10-17 14:03:18
 * @FilePath: \Vue2CloudMusic\01-课程资料\01-课程源码\vue-music\src\common\js\jsonp.js
 */
import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  // url这个变量里面如果没有?则给它加一个?，否则给它加一个&

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      // data就是url的参数
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    const value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
    // encodeURI() 和 encodeURIComponent() 方法用于编码统一资源标识符（URI），以便传给浏览器。
  }
  return url ? url.substring(1) : ''
  // url是一个字符串
  // substring 方法用于提取字符串中介于两个指定下标之间的字符。
}
