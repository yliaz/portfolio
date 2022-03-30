/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  blogSideBar: [
    {
      type: 'category',
      label: 'Git 和 Github',
      items: [
        'git/git-local',
        'git/github',
        {
          type: 'link',
          label: 'Git 工作流指南',
          href: 'https://github.com/oldratlee/translations/blob/master/git-workflows-and-tutorials/README.md',
        },
        'git/githug-game',
        {
          type: 'category',
          label: '扩展资料',
          items: [
            {
              type: 'link',
              label: 'Git 官网',
              href: 'https://git-scm.com/',
            },
            {
              type: 'link',
              label: '常用 Git 命令清单',
              href: 'https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html',
            },
            {
              type: 'link',
              label: 'Git 教程',
              href: 'https://www.liaoxuefeng.com/wiki/896043488029600',
            },
            {
              type: 'link',
              label: 'Git 学习资料汇总',
              href: 'https://github.com/xirong/my-git',
            },
            {
              type: 'link',
              label: 'Github 秘籍',
              href: 'https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.zh-cn.md',
            },
            {
              type: 'link',
              label: 'Githug',
              href: 'https://github.com/Gazler/githug',
            },
            {
              type: 'link',
              label: 'Learn Git Branching',
              href: 'https://learngitbranching.js.org/?locale=zh_CN',
            },
            {
              type: 'link',
              label: 'Git 作弊表',
              href: 'http://ndpsoftware.com/git-cheatsheet.html',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '前端学习笔记',
      items: [
        {
          type: 'category',
          label: '网络基础',
          items: [
            {
              type: 'autogenerated',
              dirName: 'blog/02-network', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
            },
          ],
        },
        {
          type: 'category',
          label: 'HTML',
          items: [
            {
              type: 'autogenerated',
              dirName: 'blog/03-html', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
            },
          ],
        },
        {
          type: 'category',
          label: 'CSS',
          items: [
            {
              type: 'autogenerated',
              dirName: 'blog/04-css', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
            },
          ],
        },
        {
          type: 'category',
          label: 'JavaScript',
          items: [
            {
              type: 'autogenerated',
              dirName: 'blog/05-js', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
            },
          ],
        },
        {
          type: 'category',
          label: 'Vue',
          items: [
            {
              type: 'autogenerated',
              dirName: 'blog/07-vue', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
            },
          ],
        },
        {
          type: 'category',
          label: 'React',
          items: ['blog/react/create-react-app'],
        },
        {
          type: 'category',
          label: 'DOM',
          items: [
            {
              type: 'autogenerated',
              dirName: 'blog/11-dom', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Rust 学习笔记',
      items: [
        {
          type: 'autogenerated',
          dirName: 'rust', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
    {
      type: 'category',
      label: 'Macbook 开发环境配置',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial/01-macbook', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
    {
      type: 'category',
      label: 'VS Code 使用手册',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial/02-vscode', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
    {
      type: 'category',
      label: 'Notion 使用技巧',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial/03-notion', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
    {
      type: 'category',
      label: '使用 Docusaurus 构建个人网站',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial/04-docusaurus', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
    {
      type: 'category',
      label: '美化你的 Github 个人主页',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial/05-github-profile', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
    {
      type: 'category',
      label: '使用 Three.js 制作一个自动复原的魔方',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial/06-magic-cube', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
    {
      type: 'category',
      label: 'Linux 备忘录',
      items: ['blog/linux/command-line-basic'],
    },
    {
      type: 'category',
      label: '提高开发效率的小技巧',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tricks', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
  ],
  interviewSideBar: [
    {
      type: 'category',
      label: '力扣刷题',
      items: [
        {
          type: 'autogenerated',
          dirName: 'interview/leetcode', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
    {
      type: 'category',
      label: '英语面试核心句型',
      items: [
        {
          type: 'autogenerated',
          dirName: 'interview/english', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
        },
      ],
    },
    {
      type: 'category',
      label: '前端面试刷题',
      items: [
        {
          type: 'category',
          label: '浏览器',
          items: [
            {
              type: 'autogenerated',
              dirName: 'interview/frontend/01-web', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
            },
          ]
        },
        {
          type: 'category',
          label: 'HTML',
          items: [
            {
              type: 'autogenerated',
              dirName: 'interview/frontend/02-html', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
            },
          ]
        }
      ],
    },
  ],
};

module.exports = sidebars;
