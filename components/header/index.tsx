import Link from "next/link";

export const BlogHeader = () => {
  return (
    <div>
      <Link className="text-4xl mb-4" href="/">
        Hi I am MaiDang
      </Link>
      <nav>
        {/* <Link href="/blogs" className="mr-4 text-l"> */}
        {/* Blogs
        </Link> */}
        {/* <Link href="https://github.com/" className="text-l">
          Github
        </Link> */}
      </nav>
    </div>
  );
};
