import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import EllipsisText from "lib/ellipsis-text";
import { DocumentTypes } from "contentlayer/generated";

type Props = {
  posts: DocumentTypes[];
};
const Headline: FunctionComponent<Props> = ({ posts }: Props) => (
  <>
    {posts.map(({ title, slug, image }: DocumentTypes, idx: number) => {
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      const z = Math.floor(Math.random() * 256);
      const bgColor = `rgb(${x},${y},${z})`;
      let bgStyle = {};
      if (!image) {
        bgStyle = { backgroundColor: bgColor };
      }

      return (
        <article
          key={`posts_${idx.toString()}`}
          className="relative w-full h-64 bg-cover bg-center group overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1"
          style={bgStyle}
        >
          {image && (
            <Image
              alt={title}
              src={image}
              layout="fill"
              objectFit="cover"
              quality={90}
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <Link href={`/article/${slug}`}>
                <a className="text-white text-lg font-bold">
                  <span className="absolute inset-0" />
                  <EllipsisText length={100} text={title} />
                </a>
              </Link>
            </h3>
          </div>
        </article>
      );
    })}
  </>
);

export default Headline;
