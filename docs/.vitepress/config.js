/**
 * Time:2024/1/29 17:10 34
 * Name:config.js
 * Path:docs/.vitepress
 * ProjectName:vitepress-starter
 * Author:pan
 *
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */
module.exports = {
    title: '小潘的学习历程', // 网站标题
    description: '总结归纳学习中的知识', // 网站的描述
    base: '/my-vitepress-note/', //  部署时的路径 默认 / ，使用二级地址 /base/
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],// 添加网站图标
    // 主题配置
    themeConfig: {
        // 导航栏配置
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
          /*   {text: 'HTML/CSS', items: [
                    {text: 'HTML5', link: '/htmldocs/'},
                    {text: 'CSS3', link: '/cssdocs/'}]},
            {text: 'JavaScript', link: '/jsdocs/'},
            {text: '面试题', link: ''},
            {text: '关于作者', link: ''}, */
        ],
        //  左侧导航栏配置
        sidebar: {
            'htmldocs': [{text: 'HTML5', children: [
                    {text: '概况', link: '/htmldocs/'},
                    /* {text: '入门', link: '/htmldocs/htmlone'},
                    {text: '进阶', link: '/htmldocs/htmltwo'},*/]} ],
        /*     'cssdocs': [{text: 'css3', children: [
                    {text: 'css文档', link: '/cssdocs/'},
                    {text: 'css文档1', link: '/cssdocs/cssone'}]}], */
        }
    }
}
