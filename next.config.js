module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/forms/:slug',
        destination: 'https://api.typeform.com/forms/:slug',
      },
    ];
  },
  // Target must be serverless
  target: 'serverless',
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },
};
