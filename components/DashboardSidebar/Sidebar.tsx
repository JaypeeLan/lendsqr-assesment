"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BUSINESS, CUSTOMERS, SETTINGS } from "./links";

interface LinksCardProps {
  link?: string;
  name: string;
  rightIcon?: string;
  activeLink?: boolean;
  selectedLink?: string;
}

const LinksCard = ({
  link,
  name,
  rightIcon,
  activeLink = false,
  selectedLink,
}: LinksCardProps) => {
  return (
    <Link
      href={`/dashboard/${link}`}
      className={classNames("dashboard-link", { selectedLink })}
    >
      {/* leftIcon */}
      <Image
        src={
          link
            ? `/dashboardIcons/${link}.svg`
            : `/dashboardIcons/${name.toLowerCase()}.svg`
        }
        alt={name}
        width={16}
        height={16}
      />
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
  const pathname = usePathname();
  const [isUserIdPath, setIsUserIdPath] = useState(false);

  useEffect(() => {
    setIsUserIdPath(/^\/dashboard\/users\/[a-zA-Z0-9]+$/.test(pathname));
  }, [pathname]);

  return (
    <div className="sidebar">
      <LinksCard
        name="Switch Organization"
        link="switch-organization"
        rightIcon="dropdown-arrow"
        activeLink
        selectedLink={
          pathname === "/dashboard/switch-organization" ? "selectedLink" : ""
        }
      />
      <LinksCard
        name="Dashboard"
        link=""
        activeLink={pathname === "/dashboard"}
        selectedLink={pathname === "/dashboard" ? "selectedLink" : ""}
      />
      <p className="sidebar-title">customers</p>
      {CUSTOMERS.map((customerLink) => (
        <LinksCard
          key={customerLink.url}
          name={customerLink.name}
          link={customerLink.url}
          activeLink={pathname === `/dashboard/${customerLink.url}`}
          selectedLink={
            pathname === `/dashboard/${customerLink.url}` ? "selectedLink" : ""
          }
        />
      ))}
      <p className="sidebar-title">business</p>
      {BUSINESS.map((businessLink) => (
        <LinksCard
          key={businessLink.url}
          name={businessLink.name}
          link={businessLink.url}
          activeLink={pathname === `/dashboard/${businessLink.url}`}
          selectedLink={
            pathname === `/dashboard/${businessLink.url}` ? "selectedLink" : ""
          }
        />
      ))}
      <p className="sidebar-title">settings</p>
      {SETTINGS.map((settingsLink) => (
        <LinksCard
          key={settingsLink.url}
          name={settingsLink.name}
          link={settingsLink.url}
          activeLink={pathname === `/dashboard/${settingsLink.url}`}
          selectedLink={
            pathname === `/dashboard/${settingsLink.url}` ? "selectedLink" : ""
          }
        />
      ))}

      {/* for the users details page only */}
      {isUserIdPath && (
        <div className="sidebar-extras">
          <LinksCard
            name="Logout"
            link=""
            activeLink={pathname === "/logout"}
            selectedLink={pathname === "/logout" ? "selectedLink" : ""}
          />

          <p>v1.2.0</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
