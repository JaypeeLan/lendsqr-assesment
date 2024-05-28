import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      layout
      {children}
    </div>
  );
};

export default Layout;
