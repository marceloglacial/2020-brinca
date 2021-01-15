module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/forms',
        destination:
          'https://api.surveymonkey.com/v3/surveys/299692952/details',
      },
    ];
  },
  // Target must be serverless
  target: 'serverless',
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },
};
