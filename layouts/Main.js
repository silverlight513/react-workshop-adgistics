import React from 'react';
import Head from 'next/head';
import Container from '../components/Container';

class Main extends React.Component {
  render() {
    const { children, title = 'color picker' } = this.props;

    return (
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        {children}
      </Container>
    );
  }
}

export default Main;
