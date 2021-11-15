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
      collapsible: false,
      items: ['blog/example-01'],
    },
    {
      type: 'category',
      label: 'JavaScript',
      collapsible: false,
      items: ['blog/example-01'],
    },
    {
      type: 'category',
      label: '算法',
      collapsible: false,
      items: ['blog/algorithm/unicode-to-utf-8'],
    },
    {
      type: 'category',
      label: '杂七杂八',
      collapsible: false,
      items: ['blog/example-01'],
    },
  ],
  experienceSideBar: [
    {
      type: 'category',
      label: 'M1 Macbook 开发环境配置',
      collapsible: false,
      items: ['experience/m1-macbook-install-homebrew'],
    },
    {
      type: 'category',
      label: '使用 Docusaurus 构建个人主页',
      collapsible: false,
      items: [
        'experience/portfolio-buy-domain',
        'experience/portfolio-buy-server',
      ],
    },
    {
      type: 'category',
      label: 'Notion 使用技巧',
      collapsible: false,
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
      collapsible: false,
      items: ['interview/example-04'],
    },
    {
      type: 'category',
      label: '英语面试技巧',
      collapsible: false,
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
      collapsible: false,
      items: ['reading-note/example-06'],
    },
    {
      type: 'category',
      label: '图解 HTTP',
      collapsible: false,
      items: ['reading-note/example-06'],
    },
    {
      type: 'category',
      label: 'CSS 揭秘',
      collapsible: false,
      items: ['reading-note/example-06'],
    },
  ]
};

module.exports = sidebars;
