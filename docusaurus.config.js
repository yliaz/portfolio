// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '朱烨的主页',
  tagline: '只有那些疯狂到以为自己可以改变世界的人，才能改变这个世界。',
  url: 'https://zhuye.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zhuye', // Usually your GitHub org/user name.
  projectName: 'zhuye-site', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '朱烨的主页',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'blog/example-01',
            position: 'left',
            label: '技术博客',
          },
          {
            type: 'doc',
            docId: 'experience/portfolio-buy-domain',
            position: 'left',
            label: '经验总结',
          },
          {
            type: 'doc',
            docId: 'translation/example-03',
            position: 'left',
            label: '翻译',
          },
          {
            type: 'doc',
            docId: 'interview/example-04',
            position: 'left',
            label: '面试',
          },
          {
            type: 'doc',
            docId: 'leetcode/example-05',
            position: 'left',
            label: '力扣',
          },
          {
            type: 'doc',
            docId: 'reading-note/example-06',
            position: 'left',
            label: '读书笔记',
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
            href: 'https://www.yuque.com/gangafengliu',
            position: 'right',
            className: 'header-yuque-link',
            'aria-label': 'Yuque Homepage',
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
          }
        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '去哪里找我？',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/yliaz',
              },
              {
                label: '我的 Notion 主页',
                href: 'https://zhuye.site',
              },
              {
                label: '掘金',
                href: 'https://juejin.cn/user/2911162522934215/posts',
              },
              {
                label: '语雀',
                href: 'https://www.yuque.com/gangafengliu',
              },
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/325194728',
              },
            ],
          },
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
            title: '一些小项目',
            items: [
              {
                label: 'Three Cubes Demo（with three.js）',
                href: 'https://github.com/yliaz/three-cubes-demo'
              },
              {
                label: '纯 CSS 绘制海绵宝宝',
                href: 'https://github.com/yliaz/pure-css-sponge-bob-friends',
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 朱烨的主页 Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn', 'en'],
  },

  plugins: [[
    require.resolve('docusaurus-lunr-search'),
    {
      languages: ['en', 'zh']
    }
  ]]
};

module.exports = config;
