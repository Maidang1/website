interface PostHeader {
  title: string;
  summary: string;
}

export const PostHeader: React.FC<PostHeader> = ({ title, summary }) => {
  return (
    <header className="overflow-hidden pt-6 pb-6 md:pt-12">
      <div className="pt-4 md:pt-6">
        <h1 className="text-[2rem] text-zinc-800 font-bold leading-snug mb-4 md:mb-6 md:text-[2.6rem]">
          {title}
        </h1>
        <p className="text-black/40 mb-6">{summary}</p>
      </div>
    </header>
  );
};
