// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Remark plugins
const remarkVideoSupport = require('./remark/video-support')
const remarkAbbr = require('remark-abbr')
const remarkAttr = require('remark-attr')
const remarkAlign = require('remark-align')

// Reverse the sidebar items ordering (including nested category items)
function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === 'category') {
      return {...item, items: reverseSidebarItems(item.items)};
    }
    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZHUYE',
  tagline: '只有那些疯狂到以为自己可以改变世界的人，才能改变这个世界。',
  url: 'https://zhuye.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zhuye', // Usually your GitHub org/user name.
  projectName: 'zhuye-dev-site', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          postsPerPage: 5,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '最新博客',
          remarkPlugins: [remarkVideoSupport, remarkAbbr, remarkAttr],
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkVideoSupport, remarkAbbr, remarkAttr,
            [remarkAlign, { left: 'chinese-paragraph', right: 'english-paragraph' }]
          ],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ZHUYE',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'blog',
            label: '我的博客',
            position: 'left'
          },
          {
            to: 'translation',
            label: '文章翻译',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'git/git-local',
            position: 'left',
            label: '学习笔记',
          },
          {
            type: 'doc',
            docId: 'leetcode/catalogue',
            position: 'left',
            label: '力扣刷题',
          },
          {
            type: 'doc',
            docId: 'interview/frontend/web/browser',
            position: 'left',
            label: '面试整理',
          },
          {
            href: 'https://github.com/yliaz',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://juejin.cn/user/2911162522934215/posts',
            position: 'right',
            className: 'header-juejin-link',
            'aria-label': 'Juejin Homepage',
          },
          {
            href: 'https://space.bilibili.com/2001085527',
            position: 'right',
            className: 'header-bilibili-link',
            'aria-label': 'Bilibili Homepage',
          },
          {
            type: 'dropdown',
            label: ' ',
            className: 'header-wechat-qrcode-dropdown',
            position: 'right',
            items: [
              {
                to: '#',
                className: 'header-wechat-qrcode',
                'aria-label': 'Wechat Qrcode',
              },
            ]
          },
        ],

      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '我的开源贡献',
            items: [
              {
                label: '本站源代码',
                href: 'https://github.com/yliaz/portfolio'
              },
              {
                label: 'React 新版中文文档翻译（beta）',
                href: 'https://github.com/reactjs/zh-hans.reactjs.org/pulls?q=is%3Apr+author%3Ayliaz+'
              },
              {
                label: '一些技术分享的 PPT',
                href: 'https://github.com/yliaz/MyPPTs'
              }
            ]
          },
          {
            title: '去哪里找我',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/yliaz'
              },
              {
                label: 'Bilibili（Ada字幕组）',
                href: 'https://space.bilibili.com/2001085527'
              },
              {
                label: '稀土掘金',
                href: 'https://juejin.cn/user/2911162522934215/posts'
              },
              {
                label: '力扣',
                href: 'https://leetcode-cn.com/u/zhuye256/'
              }
            ]
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/'
              },
              {
                label: 'React',
                href: 'https://reactjs.org/'
              },
              {
                label: 'React Docs(Beta)',
                href: 'https://beta.reactjs.org/'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 朱烨的主页 Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby', 'typescript', 'rust'],
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      metadata: [
        {name: 'title', content: "朱烨的博客 Zhu Ye's Blog"},
        {name: 'keywords', content: '朱烨 博客 ZHUYE 前端 招聘 面试'},
        {name: 'description', content: '这里是朱烨的博客，会不定期分享一些技术文章和前端经验，欢迎大家交流学习。'},
      ],
    }),

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'translation',
        routeBasePath: 'translation',
        path: './translation',
        postsPerPage: 5,
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '最新翻译',
        remarkPlugins: [remarkVideoSupport, remarkAbbr, remarkAttr,
          [remarkAlign, { left: 'chinese-paragraph', right: 'english-paragraph' }]
        ],
      },
    ],
    [require.resolve("@easyops-cn/docusaurus-search-local"), {
      hashed: true,
      language: ['en', 'zh'],
      docsRouteBasePath: ['/docs'],
      blogRouteBasePath: ['/blog', '/translation'],
      translations: {
        "search_placeholder": "搜索",
        "see_all_results": "查看全部搜索结果",
        "no_results": "未找到结果",
        "search_results_for": "\"{{ keyword }}\" 的搜索结果",
        "search_the_documentation": "搜索文档",
        "count_documents_found": "找到了 {{ count }} 篇相关文档",
        "count_documents_found_plural": "找到了 {{ count }} 篇相关文档",
        "no_documents_were_found": "未找到相关文档"
      }
    }],
    'docusaurus-plugin-sass',
    require.resolve('docusaurus-plugin-image-zoom'),
    './plugin/baidu-analysis'
  ]
};

module.exports = config;
