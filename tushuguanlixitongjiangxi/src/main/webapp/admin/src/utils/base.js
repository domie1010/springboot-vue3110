const base = {
    get() {
        return {
            url : "http://localhost:8080/tushuguanlixitongjiangxi/",
            name: "tushuguanlixitongjiangxi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/tushuguanlixitongjiangxi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "兰亭序图书管理系统"
        } 
    }
}
export default base
