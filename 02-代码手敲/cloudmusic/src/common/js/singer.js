/*
 * @Author: liming
 * @Date: 2021-08-10 02:41:52
 * @LastEditTime: 2021-10-23 19:09:50
 * @FilePath: \Vue2CloudMusic\02-代码手敲\cloudmusic\src\common\js\singer.js
 */
export default class Singer {
  constructor (id, name) {
    this.id = id
    this.name = name
    // this.avatar = `https://y.qq.com/music/photo_new/T001R500x500M000${item.Fsinger_mid}.jpg?max_age=2592000`
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
