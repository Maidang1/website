import Link from "next/link";

export const LayoutFooter = () => {
  return (
    <>
      <footer className="gh-foot flex h-40 items-center justify-center text-gray-300 text-sm">
        MaiDang @2023 inspired by{" "}
        <Link
          href="https://notes.ljl.li/"
          className="hover:text-[var(--text-main)]"
        >
          &nbsp;Diu
        </Link>
      </footer>
    </>
  );
};
