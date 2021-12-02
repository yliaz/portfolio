import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import LeetcodeCard from '@site/src/components/LeetcodeCard';

const client = new ApolloClient({
  uri: 'https://leetcode-cn.com/graphql/',
  cache: new InMemoryCache(),
  //link:
})

const TestPage = () => {
  return <React.StrictMode>
    <ApolloProvider client={client}>
      <LeetcodeCard />
    </ApolloProvider>
  </React.StrictMode>
}

export default TestPage