import type { NextPage } from 'next';
import BaseLayout from 'layout/base';
import ArticleContent from 'components/detail/article-content';
import type { ArticleApi } from 'types';
import MetaTag from 'components/shared/meta-tag';
import { GetStaticProps, GetStaticPaths } from 'next';
import { allArticles } from 'contentlayer/generated';


// const gqlEnpoint = process.env.NEXT_PUBLIC_GQL_ENDPOINT || 'https://gql.anjar.fun/v1/graphql';

type Props = {
  article: ArticleApi
};

const DetailArticle: NextPage<Props> = ({ article }: Props) => (
  <BaseLayout>
    <MetaTag title={article.title} />

    <section className="container mx-auto mb-8">
      <ArticleContent article={article} />
    </section>
  </BaseLayout>

);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allArticles.map((p) => ({ params: { slug: p.slug } })),
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = allArticles.find((post) => post.slug === params.slug);

  return {
    props: { article },
    revalidate: 60,
  };
};
export default DetailArticle;
