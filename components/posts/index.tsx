import Link from "next/link";
import { postsData } from "../../data/post";

export const Posts = () => {
  return (
    <div>
      <div className="post-feed max-w-prose px-6 mx-auto grid grid-cols-1 gap-16">
        {postsData.map(({ link, summary, title }) => {
          return (
            <article key={link}>
              <Link href={link}>
                <header>
                  <h2 className="post-card-title text-xl font-bold hover:text-[var(--text-main)] dark:text-white">
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
