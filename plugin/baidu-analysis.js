const path = require('path');
module.exports = function(context, _) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const {baiduConfig} = themeConfig || {};
  if (!baiduConfig) {
    throw new Error(
      `You need to specify 'baiduConfig' object in 'themeConfig' with 'hashID' field in it to use docusaurus-plugin-baidu-analytics`,
    );
  }
  const {hashID, anonymizeIP} = baiduConfig;
  if (!hashID) {
    throw new Error(
      'You specified the `baiduConfig` object in `themeConfig` but the `hashID` field was missing. ' +
      'Please ensure this is not a mistake.',
    );
  }
  const isProd = process.env.NODE_ENV === 'production';
  return {
    name: 'docusaurus-plugin-baidu-analytics',
    getClientModules() {
      return isProd ? [path.resolve(__dirname, './analytics')] : [];
    },
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://hm.baidu.com',
            },
          },
          {
            tagName: 'script',
            innerHTML: `
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?${hashID}";
                  var s = document.getElementsByTagName("script")[0]; 
                  s.parentNode.insertBefore(hm, s);
                })();
            `,
          },
        ],
      };
    },
  };
};