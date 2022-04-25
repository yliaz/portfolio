import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Logo from '@site/static/img/logo.svg'
import Zhuye from '@site/static/img/zhuye.svg'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Logo style={{ maxHeight: 120, maxWidth: 120, marginBottom: 20 }} />
        <h1 className={clsx("hero__title", styles.heroTitle)}>
          <Zhuye style={{ color: 'white', maxWidth: 200, maxHeight: 50 }} />
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className='row'>
          <div className="col col--2 col--offset-3 margin-top--md">
            <a className="button button--danger button--lg" href="/blog">我的博客</a>
          </div>
          <div className="col col--2 margin-top--md">
            <a className="button button--warning button--lg" href="https://space.bilibili.com/2001085527">我的字幕组</a>
          </div>
          <div className="col col--2 margin-top--md">
            <a className="button button--info button--lg" href="/docs/git/git-local">学习笔记</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
