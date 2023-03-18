import Link from "next/link";
import useSWR from "swr";
import { PostsType } from "../../types";

export const Posts = () => {
  const { data, error, isLoading } = useSWR("/api/posts", async (...args) => {
    const res = await fetch(...args);
    return (await res.json()) as unknown as PostsType[];
  });
  if (error) return <div>fail to load</div>;
  if (isLoading) return <div>loading</div>;
  return (
    <div>
      <h2 className="text-2xl mt-4">Posts</h2>
      <ul className="mt-4">
        {data?.map(({ link, time, index, title }) => {
          return (
            <Link className="post-item" key={index} href={link}>
              <span className="font-bold mr-2">{index}</span>
              <span className="mr-2">{title}</span>
              <span className="text-slate-400">{time}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
