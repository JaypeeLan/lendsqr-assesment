import { Header, Sidebar } from "@/components";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <div className="dashboard-children">{children}</div>
      </div>
    </>
  );
};

export default Layout;
