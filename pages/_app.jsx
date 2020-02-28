/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import moment from 'moment';
import Layout from '../components/Layout';

moment.locale('ko');

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Devsol Blog</title>
        </Head>
        <Layout>
          <Component {...other} />
        </Layout>
      </Fragment>
    );
  }
}
