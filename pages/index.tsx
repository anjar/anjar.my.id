import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import pick from 'lodash/pick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faInstagram, faGithub, faLinkedinIn, faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

import ArticleHomepage from 'components/article/homepage';
import LatestProject from 'components/project/homepage';
import MetaTag from 'components/shared/meta-tag';
import { getSiteMetaData } from 'lib/site-config';

import { allArticles, DocumentTypes } from 'contentlayer/generated';

export const getStaticProps = async () => {
  const sortedPosts = allArticles.sort(
    (a, b) => Number(new Date(b.publishDate)) - Number(new Date(a.publishDate)),
  );
  const latest = sortedPosts.slice(0, 3);
  const posts = latest.map((post) => pick(post, ['slug', 'title', 'image', 'publishDate']));
  return { props: { posts } };
};

type Props = {
  posts: DocumentTypes[]
}
const Home: NextPage<Props> = ({ posts }: Props) => {

  const siteConfig = getSiteMetaData();

  return (
    <>
      <MetaTag title="Anjar Febrianto - Husband, Father, Programmer and ProGamer wannabe" />
      <div className="flex flex-col text-center ">
        <div>
          <Image src="/images/static/me-cartoon.jpg" width="155" height="155" alt="User Image" className="rounded-full" />
        </div>
        <div className="justify-items-center grid">
          <h1 className="text-4xl font-bold">Anjar Febrianto</h1>
          <p className="text-sm">Husband / Father / Programmer / ProGamer</p>
          <div className="mt-2 grid grid-cols-5 gap-2">
            {siteConfig?.social?.facebook
              && (
                <a href={`https://www.facebook.com/${siteConfig?.social?.facebook}`} target="_blank" rel="nofollow noreferrer">
                  <FontAwesomeIcon icon={faFacebookSquare} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                </a>
              )}

            {siteConfig?.social?.twitter
              && (
                <a href={`https://www.twitter.com/${siteConfig?.social?.twitter}`} target="_blank" rel="nofollow noreferrer">
                  <FontAwesomeIcon icon={faTwitter} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                </a>
              )}

            {siteConfig?.social?.instagram
              && (
                <a href={`https://www.instagram.com/${siteConfig?.social?.instagram}`} target="_blank" rel="nofollow noreferrer">
                  <FontAwesomeIcon icon={faInstagram} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                </a>
              )}

            {siteConfig?.social?.linkedin
              && (
                <a href={`https://www.linkedin.com/in/${siteConfig?.social?.linkedin}`} target="_blank" rel="nofollow noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                </a>
              )}

            {siteConfig?.social?.github
              && (
                <a href={`https://github.com/${siteConfig?.social?.github}`} target="_blank" rel="nofollow noreferrer">
                  <FontAwesomeIcon icon={faGithub} fontSize="1.5rem" className="hover:text-gray-500 dark:hover:text-gray-800" />
                </a>
              )}
          </div>
        </div>
      </div>

      <section className="mt-6 mb-8">

        <h3 className="mb-4">

          <a className="text-2xl font-bold">
            My Latest Posts
          </a>

        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ArticleHomepage posts={posts} />
          <Link href="/article">
            <a className="flex leading-7 rounded-lg  hover:text-sky-800 transition-all h-6">Read all posts<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 ml-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path></svg></a>
          </Link>
        </div>

      </section>

      <section className="mt-6 mb-6">
        <h3 className="mb-4">
          <Link href="/work">
            <a className="text-2xl font-bold hover:text-sky-800">
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
    </>

  )
};

export default Home;
