/*
 * @Author: liming
 * @Date: 2021-09-13 23:15:31
 * @LastEditTime: 2021-09-13 23:40:37
 * @FilePath: \Vue2CloudMusic\02-代码手敲\cloudmusic\src\api\singer.js
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getSingerList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    const data = Object.assign({}, commonParams, {})
}