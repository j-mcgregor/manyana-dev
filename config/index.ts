let URL = '';

// NODE_ENV === 'production' on live AND preview
if (process.env.NODE_ENV === 'production') {
  if (process.env.VERCEL_ENV === 'preview') {
    URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  // overwrite with set deployment URL at launch
  if (process.env.VERCEL_ENV === 'production') {
    URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
} else {
  URL = 'http://localhost:3000';
}

const config = {
  URL,
  title: 'Sports Icon',
  description: 'An NFT Marketplace for your favourite sports NFTs.',
  siteUrl: 'sports-icon@vercel.app',
  twitterUsername: '@SportsIcon'
};

export default config;
