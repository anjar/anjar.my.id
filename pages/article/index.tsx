import { Fragment } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";
import slugify from "slugify";
import pick from "lodash/pick";

import { allArticles, DocumentTypes } from "contentlayer/generated";
import ArticleList from "components/article/list";
import MetaTag from "components/shared/meta-tag";

export const getStaticProps = async () => {
  const sortedPosts = allArticles.sort(
    (a, b) => Number(new Date(b.publishDate)) - Number(new Date(a.publishDate))
  );
  const posts = sortedPosts.map((post) =>
    pick(post, ["slug", "title", "image", "publishDate"])
  );

  const categories = allArticles.map((p) => ({ title: p.category, slug: slugify(p.category, { lower: true }) }));
  const uniqueCategory = categories.filter(
    (v, i, a) => a.findIndex((v2) => v2.slug === v.slug) === i
  );

  return { props: { posts, categories: uniqueCategory } };
};
interface Props {
  posts: DocumentTypes[];
  categories: Record<string, string>[];
};
const Article: NextPage<Props> = ({ posts, categories }: Props) => (
  <>
    <MetaTag />
    <div className="flex flex-col text-center ">
      <div >
        <Image src="/images/static/article-icon.png" className="rounded-full" width="155" height="155" alt="User Image" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">All Articles</h1>
        <div className="text-md">
          {categories.map((row, i, arr) => {
            return (
              <Fragment key={`cat_${i.toString()}`}>
                <Link href={`/category/${row.slug}`} className="hover:text-sky-800">

                  {row.title}

                </Link>
                {(i + 1 < arr.length) && (<>&nbsp;/&nbsp;</>)}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>

    <section className="mt-6 mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      <ArticleList posts={posts} />
    </section>
  </>
);

export default Article;
