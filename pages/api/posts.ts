import type { NextApiRequest, NextApiResponse } from "next";
import { PostsType } from "../../types";

const postsData: PostsType[] = [
  {
    title: "zustand 原理介绍",
    link: "/my-mdx-page",
    time: "2023/02/17",
    index: "第一期",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostsType[]>
) {
  res.status(200).json(postsData);
}
