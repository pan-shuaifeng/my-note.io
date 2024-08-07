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
    title: '小潘的个人博客', // 网站标题
    description: '总结归纳学习中的知识 effort', // 网站的描述
    base: '/my-note.io/', //  部署时的路径 默认 / ，使用二级地址 /my-note.io/
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],// 添加网站图标
    // 主题配置
    themeConfig: {
        siteTitle: '小潘的个人博客',
        socialLinks: [{ icon: 'github', link: 'https://github.com/pan-shuaifeng/my-note.io' }],
        
        docFooter: { prev: '上一篇', next: '下一篇' },
        search: {
            provider: 'local',
        },
        
        // 导航栏配置
        nav: [
            /*      {
                   text:'我的介绍',
                     items:[
                         { text: '自我简介', link: '/guide/my-profile' },
                     ]
                 }, */
            { text: '自我介绍', link: '/guide/my-profile' },
            { text: '指南', link: '/guide/' },
        ],
        //  左侧导航栏配置
        sidebar: [
            {
                text: '前端知识区',
                items: [
                    { text: 'vue源码(暂无)', link: '/getting-started' },
                    {
                        text: 'react', link: '/guide/front-end/react/'
                        , items: [
                            {
                                text: 'react入门'
                                ,
                                link: '/guide/front-end/react/',
                            }, {
                                text: 'react路由'
                                ,
                                link: '/guide/front-end/react/react-router-dom',
                            }, {
                                text: 'react状态管理'
                                ,
                                link: '/guide/front-end/react/redux',
                            },
                        ],
                        collapsible: false,
                        collapsed: false,
                    },
                    { text: 'echart', link: '/guide/extend/echart' },
                    { text: 'typeScript', link: '/getting-started' },
                    { text: 'nodejs', link: '/guide/front-end/node-js' },
                    { text: 'MongoDB', link: '/guide/front-end/MongoDB' },
                    {
                        text: '前端工程化', link: '/guide/front-end/Engineering/'
                        , items: [
                            {
                                text: '工程化',
                                link: '/guide/front-end/Engineering/',
                            }, {
                                text: 'webpack',
                                link: '/guide/front-end/Engineering/webpack',
                            }, {
                                text: 'vite',
                                link: '/guide/front-end/Engineering/vite',
                            },
                        ],
                        collapsible: false,
                        collapsed: false,
                    },
                ],
                collapsible: false,
                collapsed: false,
            }, {
                text: '后端知识区',
                items: [
                    { text: 'c#',link: '/guide/back-end/c#/basics',
                    items: [
                        { text: 'c#基础', link: '/guide/back-end/csharp/basics' },
                        { text: '文件管理', link: '/guide/back-end/csharp/fileManagement' },
                        { text: '网络编程', link: '/guide/back-end/csharp/networkProgramming' },
                    ],
                        collapsible: false,
                        collapsed: false,
                    },
                    { text: 'java基础', link: '/guide/back-end/java' },
                    { text: 'maven（暂无）', link: '/guide/back-end/maven' },
                    { text: 'Apache', link: '/guide/back-end/apache' },
                    { text: 'Docker', link: '/guide/back-end/docker' },
                    { text: 'Nginx', link: '/guide/back-end/nginx' },
                    { text: 'tomcat', link: '/guide/back-end/tomcat' },
                ],
                collapsible: false,
                collapsed: false,
            }, {
                text: '数据库',
                items: [
                    { text: '数据库环境', link: '/guide/mysql/mysql' },
                    { text: '数据库基础语法', link: '/guide/mysql/mysql-bg' },
                ],
                collapsible: false,
                collapsed: false,
            },{
                text: 'mac',
                items: [
                    { text: 'mac系统使用', link: '/guide/mac/mac-apply' }
                ],
                collapsible: false,
                collapsed: false,
            }, {
                text: '扩展区',
                items: [

                    { text: 'git', link: '/guide/extend/git.md' },
                    { text: 'Getting Started', link: '/getting-started' },
                ],
                collapsible: true,
                collapsed: false,
            }, {
                text: '遇到的问题',
                items: [
                    { text: 'git', link: '/guide/problem/git.md ' },
                ],
                collapsible: true,
                collapsed: false,
            },
            
            {
                text: '文档',
                items: [
                    { text: 'vue官网', link: 'https://cn.vuejs.org/' },
                    { text: '菜鸟教程', link: 'https://www.runoob.com/' },
                    { text: 'element ui', link: 'https://element.eleme.cn/#/zh-CN' },
                    { text: 'element plus', link: 'https://element-plus.org/zh-CN/#/zh-CN' },
                ],
                collapsible: true,
            },
            { text: '自我介绍', link: '/guide/my-profile' },
            { text: '指南', link: '/guide/' },
        
        ],
        lastUpdatedText: '最新更新时间',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2014-present Evan You',
        },
    },
    lastUpdated: true,
    markdown: {
        lineNumbers: true,
        image: {
            lazyLoading: true,
        },
    },
}
