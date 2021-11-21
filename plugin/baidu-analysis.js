module.exports = function(context, _) {
  return {
    name: 'docusaurus-plugin-baidu-analytics',
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
                  hm.src = "https://hm.baidu.com/hm.js?869dd616320d0b1769bed343665c0940";
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