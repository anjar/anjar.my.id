import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import type { ArticleApi } from 'types';
import { allArticles } from 'contentlayer/generated';

import MetaTag from 'components/shared/meta-tag';
import ArticleContent from 'components/detail/article-content';
import { stripHtml, truncateString } from 'lib/text-helper';

type Props = {
  article: ArticleApi;
  metaDesc: string;
};





const DetailArticle: NextPage<Props> = ({ article, metaDesc }: Props) => (
  <>
    <MetaTag title={article.title} description={metaDesc} />
    <section className="container mx-auto mb-8">
      <ArticleContent article={article} />
    </section>
  </>

);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allArticles.map((p) => ({ params: { slug: p.slug } })),
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = allArticles.find((post) => post.slug === params?.slug);
  const cleanContent = stripHtml(article?.body.html || "");
  const metaDesc = truncateString(cleanContent, 160, false);
 
  return {
    props: { article, metaDesc },
    revalidate: 60,
  };
};
export default DetailArticle;
