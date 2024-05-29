import Image from "next/image";
import Link from "next/link";
import { BUSINESS, CUSTOMERS, SETTINGS } from "./links";

interface LinksCardProps {
  link: string;
  name: string;
  rightIcon?: string;
  activeLink?: boolean;
}

const LinksCard = ({
  link,
  name,
  rightIcon,
  activeLink = false,
}: LinksCardProps) => {
  return (
    <Link href={`/dashboard/${link}`} className="dashboard-link">
      {/* leftIcon */}
      <Image src={`/icons/${link}.svg`} alt={name} width={16} height={16} />
      <p className={activeLink ? "activeLink" : ""}>{name}</p>
      {rightIcon && (
        <Image
          src={`/icons/${rightIcon}.svg`}
          alt={rightIcon}
          width={16}
          height={16}
        />
      )}
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <LinksCard
        name="Switch Organization"
        link="switch-organization"
        rightIcon="dropdown-arrow"
      />
      <LinksCard name="Dashboard" link="dashboard" activeLink />
      <p className="sidebar-title">customers</p>
      {CUSTOMERS.map((customerLink) => (
        <LinksCard
          key={customerLink.url}
          name={customerLink.name}
          link={customerLink.url}
        />
      ))}
      <p className="sidebar-title">business</p>
      {BUSINESS.map((businessLink) => (
        <LinksCard
          key={businessLink.url}
          name={businessLink.name}
          link={businessLink.url}
        />
      ))}
      <p className="sidebar-title">settings</p>
      {SETTINGS.map((settingsLink) => (
        <LinksCard
          key={settingsLink.url}
          name={settingsLink.name}
          link={settingsLink.url}
        />
      ))}
    </div>
  );
};

export default Sidebar;
