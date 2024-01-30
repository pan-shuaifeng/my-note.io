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
    base: '/my-note.io/', //  部署时的路径 默认 / ，使用二级地址 /base/
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],// 添加网站图标
    // 主题配置
    themeConfig: {
        siteTitle: '小潘的个人博客',
        socialLinks: [{ icon: "github", link: "https://github.com/pan-shuaifeng/my-note.io" }],
        themeConfig: {
            docFooter: { prev: '上一篇', next: '下一篇' }
        },
        // 导航栏配置
        nav: [
            { text: '首页', link: '/' },
            {
              text:'我的介绍',
                items:[
                    { text: '自我简介', link: '/guide/my-profile' },
                ]
            },
            { text: '指南', link: '/guide/' },
        ],
        //  左侧导航栏配置
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/guide/what-is-vitepress' },
                    { text: 'Getting Started', link: '/getting-started' },
                ],
                collapsible: true,
                collapsed: true
            }
            
        ],
    lastUpdatedText:"最新更新时间",
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2014-present Evan You'
        }
    },
    lastUpdated:true
}
