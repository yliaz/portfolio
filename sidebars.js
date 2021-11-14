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
      items: ['example-01'],
    },
    {
      type: 'category',
      label: 'JavaScript',
      items: ['example-01'],
    },
    {
      type: 'category',
      label: '算法',
      items: ['example-01'],
    },
    {
      type: 'category',
      label: '杂七杂八',
      items: ['example-01'],
    },
  ],
  experienceSideBar: [
    {
      type: 'category',
      label: 'M1 Macbook 开发环境配置',
      items: ['example-02'],
    },
    {
      type: 'category',
      label: '个人建站相关',
      items: ['example-02'],
    },
    {
      type: 'category',
      label: 'Notion 相关',
      items: ['example-02'],
    },
  ],
  translationSideBar: [
    'example-03'
  ],
  interviewSideBar: [
    {
      type: 'category',
      label: '前端面试刷题',
      items: ['example-04'],
    },
    {
      type: 'category',
      label: '英语面试技巧',
      items: ['example-04'],
    },
  ],
  leetcodeSideBar: [
    'example-05'
  ],
  readingNoteSideBar: [
    {
      type: 'category',
      label: 'ES6 标准入门',
      items: ['example-06'],
    },
    {
      type: 'category',
      label: '图解 HTTP',
      items: ['example-06'],
    },
    {
      type: 'category',
      label: 'CSS 揭秘',
      items: ['example-06'],
    },
  ]
};

module.exports = sidebars;
