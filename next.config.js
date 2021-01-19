module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/forms/:slug*',
        destination: 'https://api.surveymonkey.com/v3/surveys/:slug*',
      },
    ];
  },
  // Target must be serverless
  target: 'serverless',
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },
};
