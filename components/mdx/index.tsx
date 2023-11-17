import NextImage, { ImageProps } from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { TweetProps } from "react-tweet";
import { Tweet } from "react-tweet";

import { Pre } from "./pre";
import { YouTubeVideo } from "./youtube-video";

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href } = props;
  const isExternalLink = href && href.startsWith("http");

  if (isExternalLink) {
    return <a target="_blank" href={href} rel="noopener noreferrer" {...props} />;
  }
  return (
    //@ts-expect-error
    <Link href={href} />
  );
}

const components: MDXComponents = {
  Image: (props: ImageProps) => <NextImage {...props} />,
  YouTubeVideo,
  a: CustomLink,
  Tweet: (props: TweetProps) => {
    return (
      <div className="not-prose [&>div]:mx-auto">
        <Tweet {...props} />
      </div>
    );
  },
  pre: Pre as any,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
