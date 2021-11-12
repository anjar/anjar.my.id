/* eslint-disable import/no-unresolved */
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { pick } from 'contentlayer/utils';

// import BaseLayout from 'layout/base';
// import ArticleHomepage from 'components/article/homepage';
// import LatestProject from 'components/project/homepage';
// import MetaTag from 'components/shared/meta-tag';

import type { ArticleApi } from 'types';
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
  posts: ArticleApi[]
}
const Home: NextPage<Props> = ({ posts }: Props) => (
  <>
    {posts.map(({
      title, slug, image,
    } :ArticleApi, idx: number) => {
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      const z = Math.floor(Math.random() * 256);
      const bgColor = `rgb(${x},${y},${z})`;
      let bgStyle = { };
      if (!image) {
        bgStyle = { backgroundColor: bgColor };
      }

      return (
        <article
          key={`posts_${idx.toString()}`}
          className="relative w-full h-64 bg-cover bg-center group overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out rounded-lg"
          style={bgStyle}
        >
          {image && (
          <Image
            alt="Mountains"
            src={image}
            layout="fill"
            objectFit="cover"
            quality={90}
          />
          ) }
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <Link href={`/article/${slug}`}>
                <a className="text-white text-lg font-bold">
                  <span className="absolute inset-0" />
                  {title}
                </a>
              </Link>
            </h3>
          </div>
        </article>
      );
    })}
  </>

);

export default Home;
