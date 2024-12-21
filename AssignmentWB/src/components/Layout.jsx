import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-full bg-white">
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
