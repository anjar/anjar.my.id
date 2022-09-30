import { FunctionComponent } from "react";
import Head from "next/head";
import { getSiteMetaData } from "lib/site-config";

type Props = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
};

const siteMetadata = getSiteMetaData();

const MetaTag: FunctionComponent<Props> = ({
  title,
  description,
  canonicalUrl,
}: Props) => {
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
      <meta name="og:title" property="og:title" content={metaTitle} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDesc}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />

      <meta name="robots" content="INDEX, FOLLOW, NOODP, NOYDIR" />

      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta name="amp-google-client-id-api" content="googleanalytics" />

      <script async src="https://cdn.ampproject.org/v0.js" />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <script
        custom-element="amp-carousel"
        src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"
        async
      />
      <script
        custom-element="amp-sidebar"
        src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
        async
      />

      <script
        custom-element="amp-form"
        src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
        async
      />

      <style jsx global>
        {`
          body {
            -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            animation: -amp-start 8s steps(1, end) 0s 1 normal both;
          }
          @-webkit-keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
          @-moz-keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
          @-ms-keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
          @-o-keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
          @keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
        `}
      </style>
    </Head>
  );
};

MetaTag.defaultProps = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  canonicalUrl: "",
};

export default MetaTag;
