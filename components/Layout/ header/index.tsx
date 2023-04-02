import Link from "next/link";

export const LayoutHeader = () => {
  return (
    <header className="fixed left-0 right-0 top-0 h-12 z-10 flex items-center px-6 border-b border-black/5 bg-white/70 backdrop-blur-xl backdrop-saturate-150 justify-between">
      <Link href="/" className="font-medium text-sm">
        MaiDang.notes
      </Link>
      <nav>
        <ul className="nav flex flex-col sm:flex-row text-sm font-medium">
          <li className="nav-portfolio sm:mx-2 border-b sm:border-0 border-black/5 last:border-0 ">
            <Link
              href="https://about.felixwliu.cn"
              className="flex h-12 sm:h-auto items-center hover:text-[var(--text-main)]"
            >
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
