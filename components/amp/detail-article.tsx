/* eslint-disable react/no-children-prop */
import { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import gfm from 'remark-gfm';

import type { ArticleApi } from 'types';

type Props = {
  article: ArticleApi
};

const DetailArticleContent:FunctionComponent<Props> = ({ article }: Props) => {
  const dateString = new Date(article.publishDate).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let imgSrc = '';
  if (article?.image) {
    imgSrc = article?.image || '';
  }

  return (
    <article className="recipe-article">
      <header>
        <h1 className="mb1 px3">{article.title}</h1>

        <address className="ampstart-byline clearfix mb4 px3 h5">
          <time
            className="ampstart-byline-pubdate block bold my1"
            dateTime={dateString}
          >
            {dateString}
          </time>
        </address>
        {(article?.image)
            && (
              <amp-img
                src={imgSrc}
                width="800"
                height="453"
                layout="responsive"
                alt={article.title}
                className="mb4 mx3"
              />
            )}

      </header>
      <ReactMarkdown
        className="prose dark:prose-dark md:prose-lg"
        remarkPlugins={[gfm]}
        children={article?.body.raw}
        components={{
          code({
            inline, className, children, ...props
          }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <>
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={vscDarkPlus as any}
                  language={match[1]}
                  PreTag="div"
                  { ...props }
                />
              </>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />

    </article>
  );
};
export default DetailArticleContent;
