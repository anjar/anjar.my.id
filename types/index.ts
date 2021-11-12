/* eslint-disable camelcase */
export type CategoryApi = {
  id: string;
  slug: string;
  title: string;
};

export type ArticleApi = {
  id: string;
  slug: string;
  title: string;
  image: string;
  publishDate: Date;
  content: string;
  category: string;
  body: {
    raw: string;
    code: string;
  }
  readingTime: {
    text: string;
  }

};
export type ProjectType = {
  name: string;
  description: string;
  url: string;
  pushedAt: Date;
  homepageUrl: string;
};

export type MetaDataObject = {
  title: string;
  siteName: string;
  email: string;
  author: {
    name: string,
  };
  description: string;
  siteUrl: string;
  language: string;
  social: {
    twitter: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    github: string;
    youtube: string;
  }
};
