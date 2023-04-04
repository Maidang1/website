import Image from "next/image";
import AuthorImg from "../assets/author.jpeg";

interface PostHeader {
  title: string;
  summary: string;
  time: string;
}

export const PostHeader: React.FC<PostHeader> = ({ title, summary, time }) => {
  return (
    <header className="overflow-hidden pt-6 pb-6 md:pt-12">
      <div className="pt-4 md:pt-6">
        <h1 className="text-[2rem] text-zinc-800 font-bold leading-snug mb-4 md:mb-6 md:text-[2.6rem] dark:text-white">
          {title}
        </h1>
        <p className="text-black/40 mb-6 dark:text-white">{summary}</p>
        <div className="text-black/80">
          <section className="flex items-center gap-3 text-sm">
            <div className="inline-flex items-center">
              <ul className="flex -space-x-1 overflow-hidden">
                <li className="overflow-hidden rounded-[50%]">
                  <Image
                    src={AuthorImg}
                    alt="maidang"
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  ></Image>
                </li>
              </ul>
            </div>
            <div>
              <time dateTime={time} className="dark:text-white">
                {new Date(time).toDateString()}
              </time>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};
