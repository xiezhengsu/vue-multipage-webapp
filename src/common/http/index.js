// 导入所有接口
import apiList from './interface'
const install = Vue => {
    if (install.installed) 
        return;
    install.installed = true;

    Object.defineProperties(Vue.prototype, {
        // 注意哦，此处挂载在 Vue 原型的 $api 对象上
        $api: {
            get() {
                return apiList
            }
        }
    })
}

export default install

//使用
//内容出处：https://www.cnblogs.com/zhouyangla/p/9121779.html
/*
js引入
import api from './http/index'
Vue.use(api)
vue中使用
this.$api.query().then(res => {
    if (res.rc === 0) {
        this.pageList = res.data.item
    } else {
        this.$Message.info(res.desc);
    }
}).catch(error => {
    this.$Message.info(error);
})
*/