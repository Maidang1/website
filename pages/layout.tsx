interface LayoutProps {
  children: React.ReactElement;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-9/12 m-auto max-w-2xl pt-20">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
