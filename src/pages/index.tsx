import React from 'react';
import Layout from '@theme/Layout';
import LayoutProviders from '@theme/LayoutProviders';
import Navbar from '@theme/Navbar';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Homepage from '@site/src/components/Homepage';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <LayoutProviders>
      <Navbar />
      <Homepage />
    </LayoutProviders>

  );
}
