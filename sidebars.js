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
      label: 'Git',
      collapsed: false,
      items: [
        'blog/git/git-local',
        'blog/git/github',
        {
          type: 'link',
          label: 'Git 工作流指南',
          href: 'https://github.com/oldratlee/translations/blob/master/git-workflows-and-tutorials/README.md',
        },
        'blog/git/githug-game',
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
      label: 'HTML',
      items: ['blog/html/doctype'],
    },
    {
      type: 'category',
      label: 'CSS',
      items: [
        'blog/css/css-cascading',
        'blog/css/css-selector',
        'blog/css/css-conflict',
      ],
    },
    {
      type: 'category',
      label: 'JavaScript',
      items: ['blog/js/intro'],
    },
    {
      type: 'category',
      label: '算法',
      items: ['blog/algorithm/unicode-to-utf-8'],
    },
    {
      type: 'category',
      label: 'Linux',
      items: ['blog/linux/command-line-basic'],
    },
  ],
  tutorialSideBar: [
    {
      type: 'category',
      label: '使用 Docusaurus 构建个人主页',
      customProps: {
        icon: '',
      },
      items: [
        'tutorial/docusaurus/introduction',
        'tutorial/docusaurus/buy-domain',
        'tutorial/docusaurus/buy-server',
        'tutorial/docusaurus/configure-server',
      ],
    },
    {
      type: 'category',
      label: 'M1 Macbook 开发环境配置',
      items: ['tutorial/macbook/homebrew'],
    },
    {
      type: 'category',
      label: 'Notion 使用技巧',
      items: ['tutorial/notion-custom-domain'],
    },
  ],
  translationSideBar: [
    'translation/example-03'
  ],
  interviewSideBar: [
    {
      type: 'category',
      label: '前端面试刷题',
      items: ['interview/example-04'],
    },
    {
      type: 'category',
      label: '英语面试技巧',
      items: ['interview/example-04'],
    },
  ],
  leetcodeSideBar: [
    'leetcode/example-05'
  ],
  readingNoteSideBar: [
    {
      type: 'category',
      label: 'ES6 标准入门',
      items: ['reading-note/example-06'],
    },
    {
      type: 'category',
      label: '图解 HTTP',
      items: ['reading-note/example-06'],
    },
    {
      type: 'category',
      label: 'CSS 揭秘',
      items: ['reading-note/example-06'],
    },
  ]
};

module.exports = sidebars;
