var postcss = require('./node_modules/postcss/lib/postcss');

var defaultOpts = {
  replace: [],
};
module.exports = postcss.plugin('postcss-extract-media-only', function(opts) {
  opts = { ...defaultOpts, ...opts };
  return root => {
    root.each(decl => {
      if (decl.name !== 'media') {
        root.removeChild(decl);
      }
    });
  };
});
