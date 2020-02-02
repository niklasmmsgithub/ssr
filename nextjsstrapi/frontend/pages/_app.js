import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-client';
import App from "next/app";
import React from "react";
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }
  
  render() {
    const link = createHttpLink({ uri: 'http://localhost:1337/graphql', fetch: fetch });

    const client = new ApolloClient({
      link: link,
      cache: new InMemoryCache()
    });

    const { Component, pageProps, isAuthenticated, ctx } = this.props;
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default MyApp;