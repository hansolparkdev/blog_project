/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
// import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import moment from 'moment';
import Layout from '../components/Layout';
import store from '../redux/store';

moment.locale('ko');

// class RootApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

//     // Anything returned here can be access by the client
//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps, store } = this.props;
//     return (
//       <Fragment>
//         <Head>
//           <title>Devsol Blog</title>
//         </Head>
//         <Provider store={store}>
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </Provider>
//       </Fragment>
//     );
//   }
// }

const RootApp = (props) => {
  const { Component, pageProps, store } = props;
  return (
    <Fragment>
      <Head>
        <title>Devsol Blog</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
};

RootApp.getInitialProps = async (context) => {
  const { Component, ctx } = context;
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps };
};

export default withRedux(() => (store))(RootApp);
