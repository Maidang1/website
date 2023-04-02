import type { NextApiRequest, NextApiResponse } from "next";
import { postsData } from "../../data/post";
import { PostsType } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostsType[]>
) {
  res.status(200).json(postsData);
}
