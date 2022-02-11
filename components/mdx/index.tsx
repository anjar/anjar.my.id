import Link from 'next/link';
import Image from 'next/image';

function CustomLink({ children, href, ...rest }) {
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

function RoundedImage({ alt, src, ...rest }) {
  return <Image src={src} alt={alt} className="rounded-lg" {...rest} />;
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
};

export default MDXComponents;
