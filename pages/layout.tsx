"use client";
import { BlogHeader } from "./components/header";
interface LayoutProps {
  children: React.ReactElement;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-9/12 m-auto max-w-2xl pt-20">
      <BlogHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
