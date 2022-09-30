import { FunctionComponent } from 'react';
import Head from 'next/head';
import { getSiteMetaData } from 'lib/site-config';

type Props = {
  title?: string
  description?: string
  canonicalUrl?: string;
};

const siteMetadata = getSiteMetaData();

const MetaTag:FunctionComponent<Props> = ({ title, description, canonicalUrl } : Props) => {
  const currentTitle = title || siteMetadata.title;
  const metaTitle = `${currentTitle} | ${siteMetadata.siteName}`;
  const metaDesc = description || siteMetadata.description;
  return (
  <Head>
    <title>
      {metaTitle}
    </title>
    <meta name="description" content={metaDesc} />
    {/* <meta name="keywords" content={keyword} /> */}
    <meta name="title" content={title} />
    <meta name="description" content={metaDesc} />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={metaDesc} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={metaDesc} />
    <meta name="twitter:creator" content={siteMetadata.social.twitter} />

    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}


    <meta name="robots" content="INDEX, FOLLOW, NOODP, NOYDIR" />

    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
  </Head>
)};

MetaTag.defaultProps = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  canonicalUrl: "",
};

export default MetaTag;
