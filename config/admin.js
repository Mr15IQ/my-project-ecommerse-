module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '237cf40cdf35d9af1cf375d242e9ef30'),
  },
});
