import Link from "next/link";

export const LayoutFooter = () => {
  return (
    <>
      <footer className="gh-foot flex h-40 items-center justify-center text-gray-300 text-sm dark:text-white">
        MaiDang @2023 inspired by{" "}
        <Link href="https://notes.ljl.li/" className="hover:text-color-main">
          &nbsp;Diu
        </Link>
      </footer>
    </>
  );
};
