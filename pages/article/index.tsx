/* eslint-disable import/no-unresolved */
import type { NextPage } from 'next';
import Image from 'next/image';
import { pick } from 'contentlayer/utils';
import BaseLayout from 'layout/base';
import ArticleList from 'components/article/list';
import MetaTag from 'components/shared/meta-tag';
import { allArticles } from '.contentlayer/data';
import type { Article } from '.contentlayer/types';

export const getStaticProps = async () => {
  const sortedPosts = allArticles.sort(
    (a, b) => Number(new Date(b.publishDate)) - Number(new Date(a.publishDate)),
  );
  const posts = sortedPosts.map((post) => pick(post, ['slug', 'title', 'publishDate']));
  return { props: { posts } };
};
type Props = {
  posts: Article[];
}
const Article: NextPage<Props> = ({ posts }: Props) => (
  <BaseLayout>
    <MetaTag />
    <div className="flex flex-col text-center ">
      <div>
        <Image src="/user.png" width="155" height="155" alt="User Image" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Anjar Febrianto</h1>
        <p className="text-sm">Husband / Father / Programmer / ProGamer</p>
      </div>
    </div>

    <section className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">

      <ArticleList posts={posts} />

    </section>

  </BaseLayout>

);

export default Article;
