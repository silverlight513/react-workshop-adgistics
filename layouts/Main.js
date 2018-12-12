import React from 'react';
import Head from 'next/head';

/**
 * Ignore this file,
 * It is nextjs specific
 */

class Main extends React.Component {
  render() {
    const { children, title = '#C0L0R' } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        {children}
      </>
    );
  }
}

export default Main;
