import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line import/no-unresolved
import { pick } from 'contentlayer/utils';

import BaseLayout from 'layout/base';
import ArticleHomepage from 'components/article/homepage';
import LatestProject from 'components/project/homepage';
import MetaTag from 'components/shared/meta-tag';

import type { Article } from '.contentlayer/types';
import { allArticles } from '.contentlayer/data';

export const getStaticProps = async () => {
  const sortedPosts = allArticles.sort(
    (a, b) => Number(new Date(b.publishDate)) - Number(new Date(a.publishDate)),
  );
  const latest = sortedPosts.slice(0, 3);
  const posts = latest.map((post) => pick(post, ['slug', 'title', 'publishDate']));
  return { props: { posts } };
};

type Props = {
  posts: Article[]
}
const Home: NextPage<Props> = ({ posts }: Props) => (
  <BaseLayout>
    <MetaTag title="Anjar Febrianto - Husband, Father, Programmer and ProGamer wannabe" />
    <div className="flex flex-col text-center ">
      <div>
        <Image src="/user.png" width="155" height="155" alt="User Image" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Anjar Febrianto</h1>
        <p className="text-sm">Husband / Father / Programmer / ProGamer</p>
      </div>
    </div>

    <section className="mt-6 mb-6">

      <h3 className="mb-4">
        <Link href="/article">
          <a className="text-2xl font-bold">

            My Latest Posts
          </a>
        </Link>
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ArticleHomepage posts={posts} />
      </div>

    </section>

    <section className="mt-6 mb-6">
      <h3 className="mb-4">
        <Link href="/article">
          <a className="text-2xl font-bold">
            My Latest Work
          </a>
        </Link>
      </h3>

      <div className="grid grid-cols-1 gap-6 ">
        <LatestProject />
      </div>
    </section>

    <section className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <h3 className="mb-4">
        <Link href="/article">
          <a className="text-2xl font-bold">

            My Latest Video
          </a>
        </Link>
      </h3>

    </section>
  </BaseLayout>

);

export default Home;
