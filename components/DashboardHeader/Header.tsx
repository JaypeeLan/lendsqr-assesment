import { Input } from "@/components";
import Image from "next/image";

const Header = () => {
  return (
    <header className="dashboard-header">
      <a href="/" className=" auth-logo">
        <Image src="/imgs/logo.svg" alt="logo" width={145} height={30} />
      </a>
      <Input
        type="text"
        variant="icon"
        placeholder="Search for anything"
        className="search-input"
        rightIcon={
          <Image src="/icons/search.svg" alt="search" width={20} height={20} />
        }
        iconProps="search-icon"
      />

      <div>
        <a href="#">Docs</a>
        <Image
          src="/icons/notifications.svg"
          alt="notifications"
          width={20}
          height={20}
        />
        <Image
          src="/icons/avatar.svg"
          alt="user avatar"
          width={20}
          height={20}
        />
        <span>Adedeji</span>
        <Image
          src="/icons/down-arrow.svg"
          alt="options"
          width={20}
          height={20}
        />
      </div>
    </header>
  );
};

export default Header;
