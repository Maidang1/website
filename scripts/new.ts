import fs from "fs";
import cac from "cac";
import pinyin from "tiny-pinyin";
import path from "path";
const cli = cac();

cli.option("--title <title>", "input your post title");

const parsed = cli.parse();
let originTitle = "";

let inputTitle = parsed.options.title as string | undefined;
if (!inputTitle) {
  console.error("input a post title");
  process.exit(1);
}
originTitle = inputTitle;

const englishRegex = /[a-zA-Z]+/g;

const chineseRegex = /[\u4e00-\u9fa5]+/g;

inputTitle = inputTitle.replace(englishRegex, (match) => {
  return `${match}-`;
});

inputTitle = inputTitle.replace(chineseRegex, (match, index) => {
  const parsedMatch = pinyin.convertToPinyin(match, "-", true);
  if (index + match.length === inputTitle?.length) {
    return parsedMatch;
  }
  return `${parsedMatch}-`;
});

const targetFile = path.join(__dirname, `../pages/${inputTitle}.mdx`);

try {
  const status = fs.statSync(targetFile);
  if (status.isFile()) {
    console.error("文件已经存在");
    process.exit(1);
  }
} catch {
  // 没找到这个文件就没问题 继续执行
}
const newItem = {
  title: originTitle,
  summary: "暂无简介",
  link: `/${inputTitle}`,
};

const template = `import { PostHeader } from "../components/post-header";

<PostHeader title="${originTitle}" summary="暂无简介" time={${Date.now()}} />
`;

async function writeFile() {
  const { postsData } = await import("../data/post");
  const newData = [...postsData, newItem];

  const postData = "export const postsData =" + JSON.stringify(newData);

  fs.writeFileSync(path.join(__dirname, "../data/post.ts"), postData, "utf-8");
  fs.writeFileSync(targetFile, template, "utf-8");
}

writeFile();
