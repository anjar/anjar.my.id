import { FunctionComponent } from 'react';
import Head from 'next/head';
import { getSiteMetaData } from 'lib/site-config';

type Props = {
  title?: string
  description?: string
};

const siteMetadata = getSiteMetaData();

const MetaTag:FunctionComponent<Props> = ({ title, description } : Props) => (
  <Head>
    <title>
      {title}
      {' '}
      -
      {' '}
      {siteMetadata.siteName}
    </title>
    <meta name="description" content={description} />
    {/* <meta name="keywords" content={keyword} /> */}
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:creator" content={siteMetadata.social.twitter} />

    <meta name="robots" content="INDEX, FOLLOW, NOODP, NOYDIR" />

    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
  </Head>
);

MetaTag.defaultProps = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default MetaTag;
