import { Posts } from "../components/posts";

const Page = () => (
  <>
    <main className="pt-12">
      <div className="h-36 flex flex-col items-center justify-center">
        <h1 className="site-title text-4xl leading-relaxed">MaiDang.notes</h1>
      </div>
    </main>
    <Posts />
  </>
);

export default Page;
