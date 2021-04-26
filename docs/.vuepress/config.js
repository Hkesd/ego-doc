const moment = require("moment");
module.exports = {
    title: "EGO",
    description: "最简单的GO微服务框架",
    head: [
        ["link", { rel: "icon", href: "/logo.png" }],
        [
            "meta",
            {
                name: "keywords",
                content: "微服务,框架,ego,微服务框架,Go微服务框架,golang,micro service,gRPC",
            },
        ],
    ],

    markdown: {
        lineNumbers: true, // 代码块显示行号
    },
    themeConfig: {
        nav: [
            {
                text: "首页",
                link: "/",
            },
            {
                text: "框架",
                link: "/frame/",
            },
            {
                text: "微服务",
                link: "/micro/",
            },
            {
                text: "Web优化",
                link: "/web/",
            },
            {
                text: "Awesome",
                link: "/awesome/",
            },
            {
                text: "EGO",
                link: "https://github.com/gotomicro/ego",
            },
        ],
        docsDir: "docs",
        docsBranch: "main",
        editLinks: true,
        editLinkText: "在github.com上编辑此页",
        sidebar: {
            "/summary/": [""], //这样自动生成对应文章
            "/frame/": [
                "quickstart/quickstart",
                "releasenote",
                {
                    title: "核心模块",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "core/build",
                        "core/config",
                        "core/logger",
                        "core/trace",
                    ],
                },
                {
                    title: "服务模块",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "server/http",
                        "server/grpc",
                        "server/governor",
                    ],
                },
                {
                    title: "任务模块",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "task/job",
                        "task/cron",
                    ],
                },
                {
                    title: "客户端模块",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "client/grpc",
                        "client/http",
                        "client/gorm",
                        "client/redis",
                        "client/mongo",
                        "client/kafka",

                    ],
                },
                {
                    title: "网关模块",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "gateway/gateway",
                    ],
                },
                {
                    title: "治理模块",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "governor/metric",
                    ],
                },
                {
                    title: "最佳实践",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "bestpractice/metric",
                        "bestpractice/logger",
                    ],
                },
            ], //这样自动生成对应文章
            "/micro/": [
                "大纲",
                {
                    title: "第一章 编译和部署",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "chapter1/build",
                        "chapter1/deploy",
                    ],
                },
                {
                    title: "第二章 基础组件",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "chapter2/flag",
                        "chapter2/config",
                    ],
                },
                {
                    title: "第三章 gRPC",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "chapter3/注册中心",
                        "chapter3/服务注册",
                        "chapter3/服务发现",
                    ],
                },

                {
                    title: "第八章 治理",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        "chapter10/sla",
                    ],
                },
            ],
            "/web/": [
                "前端优化",
            ],
            "/awesome/": [
                "errors",
                "gracefulstop",
                "map锁double check",
            ]
        },
        sidebarDepth: 2,
        lastUpdated: "上次更新",
        serviceWorker: {
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新",
            },
        },
    },
    plugins: [
        [
            "@vuepress/last-updated",
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require("moment");
                    moment.locale("zh-cn");
                    return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
                },

                dateOptions: {
                    hours12: true,
                },
            },
        ],
        [
            '@vssue/vuepress-plugin-vssue',
            {
                platform: 'github', //v3的platform是github，v4的是github-v4
                locale: 'zh', //语言
                // 其他的 Vssue 配置
                owner: 'gotomicro', //github 账户名或组织名
                repo: 'ego-doc', //github 一个项目的名称
                clientId: '601dc4dbe9ae8e87d76f',//注册的 Client ID
                clientSecret: 'de308ea181268f753305b1f7c91b6d7712be694a',//注册的 Client Secret
                autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
            },
        ],
        "@vuepress/back-to-top",
        "@vuepress/active-header-links",
        "@vuepress/medium-zoom",
        "@vuepress/nprogress",
    ],
};
