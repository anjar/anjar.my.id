/* eslint-disable react/no-children-prop */
import { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import slugify from "slugify";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/future/image';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import gfm from 'remark-gfm';
// import { useMDXComponent } from 'next-contentlayer/hooks';

import {
  FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon,
} from 'react-share';
import type { ArticleApi } from 'types';
import { getSiteMetaData } from 'lib/site-config';
import Link from 'next/link';
// import MDXComponents from 'components/mdx';

type Props = {
  article: ArticleApi
};

const siteMetadata = getSiteMetaData();
const DetailArticleContent:FunctionComponent<Props> = ({ article }: Props) => {
  const router = useRouter();
  // const MDXContent = useMDXComponent(article.body.code);
  const detailURL = `${siteMetadata.siteUrl}${router.asPath}`;
  const dateString = new Date(article.publishDate).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let imgSrc = '';
  if (article?.image) {
    imgSrc = article?.image || '';
  }
  const css = { maxWidth: '100%', height: 'auto' }

  return (
    <article>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <div className="hidden md:block md:col-span-1">
          <div className="sticky top-20">
            <div className="flex flex-wrap gap-2">
              <FacebookShareButton
                url={detailURL}
                quote={article.title}
              >
                <FacebookIcon
                  size="2.2rem"
                  round
                />
              </FacebookShareButton>
              <TwitterShareButton
                url={detailURL}
              >
                <TwitterIcon
                  size="2.2rem"
                  round
                />
              </TwitterShareButton>
              <LinkedinShareButton
                url={detailURL}
              >
                <LinkedinIcon
                  size="2.2rem"
                  round
                />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={detailURL}
              >
                <WhatsappIcon
                  size="2.2rem"
                  round
                />
              </WhatsappShareButton>
              <EmailShareButton
                url={detailURL}
              >
                <EmailIcon
                  size="2.2rem"
                  round
                />
              </EmailShareButton>

            </div>

            <div className="mt-4">
              <Image src="/dummy/120x600.png" width="120" height="600" alt="iklan" />
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="md:flex-shrink-0">
            <div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white leading-none">{article?.title}</h1>
              
            </div>

            <div className="relative block">
              {(article?.image)
                 && (
                   <>
                     <figcaption className="absolute rounded-sm text-lg py-0 mt-4 text-white px-4 ml-4 z-10 bg-indigo-500">
                       <Link href={`/category/${slugify(article.category, {lower: true})}`}>
                         <a className="text-xxs inline-block align-middle">
                           {article.category}
                         </a>
                       </Link>
                     </figcaption>
                     <div>
                       <Image src={imgSrc} width="650" height="350" style={css}  alt={article.title} />
                     </div>
                   </>
                 )}
            </div>
            <div className="flex justify-between text-md text-gray-500">
                <div>
                  {dateString}
                  {' '}
                  •
                  {' '}
                  {/* <Link href={`/category/${article.category.slug}`}>
                      <a className="hover:underline">
                        {article.category.title}
                      </a>
                    </Link> */}
                </div>
                <div>
                  <span className="">
                    {article.readingTime.text}
                    {' '}
                    •
                    xxx views
                  </span>
                </div>
              </div>
          </div>
          <div className="break-words mt-4 ">
            {/* <MDXContent
                components={
                  {
                    ...MDXComponents,
                  } as any
                }
              /> */}
            <ReactMarkdown
              className="prose dark:prose-dark lg:prose-lg"
              remarkPlugins={[gfm]}
              children={article?.body.raw}
              components={{
                code({
                  inline, className, children, ...props
                }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
        </div>

      </div>

    </article>
  );
};
export default DetailArticleContent;
