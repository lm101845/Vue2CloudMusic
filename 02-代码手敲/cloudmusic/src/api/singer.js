/*
 * @Author: liming
 * @Date: 2021-09-13 23:15:31
 * @LastEditTime: 2021-10-17 14:21:29
 * @FilePath: \Vue2CloudMusic\02-代码手敲\cloudmusic\src\api\singer.js
 */
import jsonp from 'common/js/jsonp'
// jsonp这个库主要就是用于将url和参数进行融合
import { commonParams, options } from './config'

// 这个是获取歌手列表的api方法
export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  // 这个是url，下面的data是参数

  const data = Object.assign({}, commonParams, {
    // 使用Object.assign将data与commonParams做合并，当成url的参数
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    // 三个all代表查看所有歌手
    pagesize: 100,
    // 代表这次请求能查看多少数据
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 1664029744
    // 这个最后会被commonParams里面的g_tk给覆盖掉
  })

  return jsonp(url, data, options)
}
