/*
 * @Author: liming
 * @Date: 2021-08-10 02:41:52
 * @LastEditTime: 2021-09-13 23:41:58
 * @FilePath: \Vue2CloudMusic\01-课程资料\01-课程源码\vue-music\src\common\js\jsonp.js
 */
import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
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
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
