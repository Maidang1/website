const shiki = require("shiki");
const regex = /```([\s\S]*?)```/g;

module.exports = async function (source) {
  var copySource = source;
  const highlighter = await shiki.getHighlighter({
    theme: "nord",
  });
  try {
    copySource = copySource.replace(regex, (match, code) => {
      let codes = code.split("\n");
      const lang = codes[0];
      const codeString = codes.slice(1).join("\n");
      const html = highlighter.codeToHtml(codeString, { lang: lang });
      return html;
    });
  } catch (e) {
    console.log("error", e);
    copySource = source;
  }

  console.log({ copySource });
  return copySource;
};
