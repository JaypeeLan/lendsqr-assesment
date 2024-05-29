import { Header, Sidebar } from "@/components";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
