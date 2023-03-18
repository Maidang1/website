import type { NextApiRequest, NextApiResponse } from "next";
import { PostsType } from "../../types";

const postsData: PostsType[] = [
  {
    title: "zustand 原理介绍",
    link: "/my-mdx-page",
    summary: "浅浅的阅读了一下 zustand 的原理，简单总结一下吧",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostsType[]>
) {
  res.status(200).json(postsData);
}
