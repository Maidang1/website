import { LayoutHeader } from "../components/Layout/ header";
import { LayoutFooter } from "../components/Layout/footer";

interface LayoutProps {
  children: React.ReactElement;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <LayoutHeader />
      <div className="w-9/12 m-auto max-w-2xl">
        <main>{children}</main>
      </div>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
