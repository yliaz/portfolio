const findAndReplace = require('mdast-util-find-and-replace');

const plugin = (options) => {

  const regex = /\[\[(.*)---(.*)\]\]/

  const transformer = async (ast) => {
    const replace = (match) => {
      return {
        type: 'html',
        value: `
          unfinished
        `,
      };
    }


    findAndReplace(ast, regex, replace);
  }
  return transformer
}

module.exports = plugin;