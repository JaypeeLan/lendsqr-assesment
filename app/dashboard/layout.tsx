import { Input } from "@/components";
import Image from "next/image";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <a href="/" className="logo auth-logo">
          <Image src="/imgs/logo.svg" alt="logo" width={145} height={30} />
        </a>
        <Input
          type="text"
          variant="icon"
          placeholder="Search for anything"
          rightIcon={
            <div>
              <Image
                src="/icons/search.svg"
                alt="search"
                width={20}
                height={20}
              />
            </div>
          }
          iconProps="search-icon"
        />

        <div>
          <a href="#">Docs</a>

          <img src="/icons/notifications.svg" alt="notifications" />
          <img src="/icons/avatar.svg" alt="user avatar" />
          <span>Adedeji</span>
          <img src="/icons/down-arrow.svg" alt="options" />
        </div>
      </header>
      {children}
    </>
  );
};

export default Layout;
