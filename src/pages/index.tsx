import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Homepage from '@site/src/components/Homepage/Homepage';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className={clsx("hero__title", styles.heroTitle)}>{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Homepage />
  );
}
