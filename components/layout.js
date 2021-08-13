/* eslint-disable react/prop-types */
import Head from 'next/head';
import Header from './Header';

function Layout({ user, loading = false, hideHeader, children }) {
  return (
    <>
      <Head>
        <title>IO Fitness</title>
      </Head>

      <Header user={user} loading={loading} hideHeader={hideHeader} />

      <main>
        <div className="container">{children}</div>
      </main>

      <style jsx>
        {`
          .container {
            max-width: 80rem;
            margin: 1.5rem auto;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
              Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
        `}
      </style>
    </>
  );
}

export default Layout;

