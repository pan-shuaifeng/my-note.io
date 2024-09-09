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
            { text: '自我介绍', link: '/views/my-profile' },
            { text: '指南', link: '/views/' },
        ],
        //  左侧导航栏配置
        sidebar: [
            { text: '介绍', link: '/views/' },
            {
                text: '机器视觉',
                items: [
                    {
                        text: 'c#',
                        items: [
                            { text: 'c#基础', link: '/views/machineVision/basics.md' },
                            { text: '事件与委托', link: '/views/machineVision/EventsAndCommissions' },
                            { text: '文件管理', link: '/views/machineVision/fileManagement' },
                            { text: '网络编程', link: '/views/machineVision/networkProgramming' }
                        ],
                    },
                    { text: 'winform', link: '/views/machineVision/winform' },
                    { text: 'visionPro', link: '/views/machineVision/visionPro' },
                    { text: 'HOICON', link: '/views/machineVision/HOICON' },
                    { text: 'XML文件操作', link: '/views/machineVision/XML' },
                    { text: '面试题', link: '/views/machineVision/InterviewQuestion' },
                ],
                collapsed: false,
            },
            {
                text: '数据库',
                items: [
                    {
                        text: 'MongoDB',
                        items: [
                            { text: 'MongoDB安装', link: '/views/SQL/MongoDB/index' },
                        ],
                    }, {
                        text: 'MySql',
                        items: [
                            { text: '数据库环境', link: '/views/SQL/MySql/index' },
                            { text: '数据库基础语法', link: '/views/SQL/MySql/mysql-bg' },
                        ],
                    },
                ],
                collapsed: false,
            },
            {
                text: '前端知识区',
                items: [
                    {
                        text: 'vue',
                        items: [
                            {
                                text: 'vue源码（暂无）',
                                link: '/views/frontEnd/vue/index',
                            }],
                    },
                    {
                        text: 'react',
                        items: [
                            {
                                text: 'react入门'
                                ,
                                link: '/views/frontEnd/react/index',
                            }, {
                                text: 'react路由'
                                ,
                                link: '/views/frontEnd/react/reactRouterDom',
                            }, {
                                text: 'react状态管理（暂无）'
                                ,
                                link: '/views/frontEnd/react/redux',
                            },
                        ],
                    },
                    { text: 'echart（暂无）', link: '/views/frontEnd/echart/index' },
                    { text: 'nodejs（暂无）', link: '/views/frontEnd/node/index' },
                    {
                        text: '前端工程化'
                        , items: [
                            {
                                text: '工程化',
                                link: '/views/frontEnd/EngineeringOriented/index',
                            }, {
                                text: 'webpack',
                                link: '/views/frontEnd/EngineeringOriented/webpack',
                            }, {
                                text: 'vite（暂无）',
                                link: '/views/frontEnd/EngineeringOriented/vite',
                            },
                        ],
                    },
                ],
                collapsed: false,
            },
            {
                text: '后端知识区',
                items: [
                    {
                        text: 'java',
                        items: [{ text: 'java基础', link: '/views/backEnd/java/index' },
                            { text: 'maven（暂无）', link: '/views/backEnd/java/maven' },
                            { text: 'tomcat', link: '/views/backEnd/java/tomcat' },
                        ]
                    },
                ],
                collapsed: false,
            },
            {
                text: '部署',
                items: [
                    { text: 'Apache', link: '/views/deploy/apache' },
                    { text: 'Nginx', link: '/views/deploy/nginx' },
                    { text: 'Docker', link: '/views/deploy/docker' },
                    { text: '内网穿透', items:[
                        {text: 'cpolar', link: '/views/deploy/InternalNetworkPenetration/cpolar'}
                        ]
                    },
                ],
                collapsed: false,
            },
            
            {
                text: '代码管理',
                items: [
                    { text: 'git',link:'/views/CodeManagement/git/index'  },
                ],
                collapsed: false,
            },   {
                text: '拓展',
                items: [
                    { text: 'markdown', link: '/views/expand/md/index' },
                    {
                        text: 'mac系统',
                        items: [
                            { text: 'mac', link: '/views/mac/index' },
                        ],
                        collapsed: false,
                    },
                ],
                collapsed: false,
            },
            { text: '自我介绍', link: '/views/my-profile' },
            
        
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
        toc:{
          level:[1,3],
            label:"当前页大纲"
        }
      
    },
}
