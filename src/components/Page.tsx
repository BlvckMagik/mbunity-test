import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { Layout } from './Page.styles';

const Page = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default Page;
