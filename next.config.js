
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['t434ckmyHEfT8rGfQ183K9'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  