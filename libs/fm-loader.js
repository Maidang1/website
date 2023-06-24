const matter = require("gray-matter");
module.exports = async function (src) {
  const callback = this.async();
  const { content, data } = matter(src);
  console.log({ src, content, data });
  return callback(null, data);
};
