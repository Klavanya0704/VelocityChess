import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  image = '/assets/velocity_logo.png'
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = title.includes('Velocity Chess')
      ? title
      : `${title} | Velocity Chess Academy`;
    document.title = formattedTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 3. Update Standard Meta Description
    setMetaTag('name', 'description', description);

    // 4. Update Open Graph Meta Tags
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', image);
    if (canonicalPath) {
      setMetaTag('property', 'og:url', `https://velocity-chess-academy.vercel.app${canonicalPath}`);
    }

    // 5. Update Twitter Meta Tags
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);
  }, [title, description, canonicalPath, image]);

  return null;
};

export default SEO;
