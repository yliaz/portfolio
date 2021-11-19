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
      label: 'CSS',
      collapsed: false,
      items: ['blog/example-01'],
    },
    {
      type: 'category',
      label: 'JavaScript',
      collapsed: false,
      items: ['blog/example-01'],
    },
    {
      type: 'category',
      label: '算法',
      collapsed: false,
      items: ['blog/algorithm/unicode-to-utf-8'],
    },
    {
      type: 'category',
      label: '杂七杂八',
      collapsed: false,
      items: ['blog/example-01'],
    },
  ],
  experienceSideBar: [
    {
      type: 'category',
      label: '使用 Docusaurus 构建个人主页',
      collapsed: false,
      items: [
        'experience/docusaurus/introduction',
        'experience/docusaurus/buy-domain',
        'experience/docusaurus/buy-server',
        'experience/docusaurus/configure-server',
      ],
    },
    {
      type: 'category',
      label: 'M1 Macbook 开发环境配置',
      collapsed: false,
      items: ['experience/macbook/homebrew'],
    },
    {
      type: 'category',
      label: 'Notion 使用技巧',
      collapsed: false,
      items: ['experience/notion-custom-domain'],
    },
  ],
  translationSideBar: [
    'translation/example-03'
  ],
  interviewSideBar: [
    {
      type: 'category',
      label: '前端面试刷题',
      collapsed: false,
      items: ['interview/example-04'],
    },
    {
      type: 'category',
      label: '英语面试技巧',
      collapsed: false,
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
      collapsed: false,
      items: ['reading-note/example-06'],
    },
    {
      type: 'category',
      label: '图解 HTTP',
      collapsed: false,
      items: ['reading-note/example-06'],
    },
    {
      type: 'category',
      label: 'CSS 揭秘',
      collapsed: false,
      items: ['reading-note/example-06'],
    },
  ]
};

module.exports = sidebars;
