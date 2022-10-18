import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';


interface ImageProps {
  href: string;
  children: ReactNode;
}

const CustomLink = ({ children, href, ...rest }: ImageProps) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
}

interface ImageProps {
  alt: string;
  src: string;
}
const RoundedImage = ({ alt, src, ...rest }: ImageProps) => {
  return <Image src={src} alt={alt} className="rounded-lg" {...rest} />;
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
};

export default MDXComponents;
