import axios from './api'

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const query = () => {
    return axios({
        url: '/query',
        method: 'get'
    })
}
  
export const list = (id) => {
    return axios({
        url: `/list${id}`,
        method: 'get'
    })
}

export const upload = data => {
    return axios({
        url: '/upload',
        method: 'post',
        data
    })
}

// 默认全部导出
export default {
    query,
    list,
    upload
}