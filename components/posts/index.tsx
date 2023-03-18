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
      <div className="post-feed max-w-prose px-6 mx-auto grid grid-cols-1 gap-16">
        {data?.map(({ link, summary, title }) => {
          return (
            <article key={link}>
              <Link href={link}>
                <header>
                  <h2 className="post-card-title text-xl font-bold hover:text-[var(--text-main)]">
                    {title}
                  </h2>
                </header>
                <section className="my-2 text-gray-500">
                  <p className="line-clamp-4">{summary}</p>
                </section>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};
