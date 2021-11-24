// const visit = import("unist-util-visit");
const visit = require('unist-util-visit');

const plugin = (options) => {
  const transformer = async (ast) => {
    const visitor = (node) => {
      const data = node.data || (node.data = {})
      let src = node.url
      const alt = node.alt

      // escape hatch into video component
      if(node.url.includes('.mp4')) {
        const video = {
          type: 'html',
          value: `
          <div style="width: 640px; height: auto; max-width: 100%">
            <video src="${src}" poster="${src.replace('.mp4', '_0.jpg')}" preload="auto" controls="" style="width: 100%; height: 100%;"></video>
          </div>`
        }
        return Object.assign(node, video)
      } else {
        return node
      }
    }
    visit(ast, 'image', visitor)
  }
  return transformer
}

module.exports = plugin;