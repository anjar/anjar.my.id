import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import slugify from "slugify";
import pick from "lodash/pick";
import Link from "next/link";
import { Fragment } from "react";

import { allArticles, DocumentTypes } from "contentlayer/generated";
import ArticleList from "components/article/list";
import MetaTag from "components/shared/meta-tag";

export const getStaticPaths = async () => {
  const categories = allArticles.map((p) => ({
    params: { slug: slugify(p.category, { lower: true }) },
  }));
  const uniqueCategory = categories.filter(
    (v, i, a) => a.findIndex((v2) => v2.params.slug === v.params.slug) === i
  );
  return {
    paths: uniqueCategory,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dataArticles = allArticles.filter((post) => {
    const postCategory = slugify(post.category, { lower: true });
    return postCategory.toLowerCase() === ((params?.slug || "") as string).toLowerCase();
  });

  const sortedPosts = dataArticles.sort(
    (a, b) => Number(new Date(b.publishDate)) - Number(new Date(a.publishDate))
  );
  const posts = sortedPosts.map((post) =>
    pick(post, ["slug", "title", "image", "publishDate"])
  );

  const categories = allArticles.map((p) => ({
    title: p.category,
    slug: slugify(p.category, { lower: true }),
  }));
  const uniqueCategory = categories.filter(
    (v, i, a) => a.findIndex((v2) => v2.slug === v.slug) === i
  );
  const category = uniqueCategory.find((post) => post.slug === params?.slug);

  return { props: { posts, categories: uniqueCategory, category } };
};

interface Props {
  posts: DocumentTypes[];
  category: Record<string, string>;
  categories: Record<string, string>[];
};
const Article: NextPage<Props> = ({ posts, category, categories }: Props) => {
  return (
  <>
    <MetaTag />
    <div className="flex flex-col text-center ">
      <div>
				<Image src="/images/static/article-icon.png" className="rounded-full" width="155" height="155" alt="User Image" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Read Article from {category.title} Category</h1>
        <div className="text-sm">
          {categories.map((row, i, arr) => {
            return (
              <Fragment key={`cat_${i.toString()}`}>
                <Link href={`/category/${row.slug}`}>
                  <a className="hover:text-sky-800">{row.title}</a>
                </Link>
                {i + 1 < arr.length && <>&nbsp;/&nbsp;</>}
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
)};

export default Article;
