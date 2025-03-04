
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocale } from '../context/LocaleContext';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = "MAMMAD MAMADOV",
  description,
  image = "/og-image.png",
  url = "https://mammadmamadov.com",
}) => {
  const { locale, t } = useLocale();
  
  // Get language-specific descriptions
  const seoDescription = description || t('about.content');
  const localizedTitle = `${t('hero.title')} | ${t('hero.subtitle')}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={locale} />
      <title>{title}</title>
      <meta name="title" content={localizedTitle} />
      <meta name="description" content={seoDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={localizedTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={localizedTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHelmet;
