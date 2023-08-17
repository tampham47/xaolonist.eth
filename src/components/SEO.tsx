import React from "react";

export const SEO = ({
  children,
  cover,
  url,
  title,
  desc,
}: {
  children?: React.ReactNode;
  cover?: string;
  url?: string;
  title?: string;
  desc?: string;
}) => {
  const displayedTitle = title || "Xaolonist";
  const displayedUrl = url || "https://xaolonist.com";
  const displayedDesc =
    desc || "he is a scientist, an anthropologist, a psychologist...";
  const displayedCover =
    cover || `https://xaolonist.com/images/xaolonist-social.jpg`;

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>{displayedTitle}</title>

      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="description" content={displayedDesc} />

      <meta property="og:site_name" content="Xaolonist" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1500" />
      <meta property="og:image:height" content="500" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="Xaolonist" />

      <meta property="og:title" content={displayedTitle} />
      <meta property="og:description" content={displayedDesc} />
      <meta property="og:url" content={displayedUrl} />
      <meta property="og:image" content={displayedCover} />

      <meta name="twitter:title" content={displayedTitle} />
      <meta name="twitter:description" content={displayedDesc} />
      <meta name="twitter:url" content={displayedUrl} />
      <meta name="twitter:image" content={displayedCover} />

      {children ? children : null}
    </>
  );
};
