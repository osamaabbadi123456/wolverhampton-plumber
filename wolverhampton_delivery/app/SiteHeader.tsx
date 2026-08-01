"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { adviceLinks, areaLinks, serviceLinks } from "./siteLinks";

type DropdownId = "services" | "areas" | "advice" | null;

type LinkItem = {
  label: string;
  href: string;
};

const logoSrc = "/brand/logo.svg";

function DesktopDropdown({
  id,
  label,
  items,
  openDropdown,
  setOpenDropdown,
}: {
  id: Exclude<DropdownId, null>;
  label: string;
  items: LinkItem[];
  openDropdown: DropdownId;
  setOpenDropdown: (value: DropdownId) => void;
}) {
  const isOpen = openDropdown === id;

  return (
    <div
      className={`navDropdown ${isOpen ? "navDropdownOpen" : ""}`}
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        type="button"
        className="dropdownToggle"
        aria-expanded={isOpen}
        onClick={() => setOpenDropdown(isOpen ? null : id)}
      >
        {label}
        <span aria-hidden="true">⌄</span>
      </button>

      <div className="dropdownMenu">
        {items.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            onClick={() => setOpenDropdown(null)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileGroup({
  title,
  items,
  closeMenu,
}: {
  title: string;
  items: LinkItem[];
  closeMenu: () => void;
}) {
  return (
    <div className="mobileNavSection">
      <strong>{title}</strong>

      <div className="mobileNavGrid">
        {items.map((item) => (
          <Link href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeAll();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeAll]);

  return (
    <header className="siteHeader" ref={headerRef}>
      <div className="headerInner">
        <Link href="/" className="logoImage" aria-label="Wolverhampton Plumber">
          <img src={logoSrc} alt="Wolverhampton Plumber" />
        </Link>

        <nav className="mainNav" aria-label="Main navigation">
          <Link href="/" onClick={closeAll}>
            Home
          </Link>

          <DesktopDropdown
            id="services"
            label="Services"
            items={serviceLinks}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <DesktopDropdown
            id="areas"
            label="Areas"
            items={areaLinks}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <DesktopDropdown
            id="advice"
            label="Advice"
            items={adviceLinks}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <Link href="/about" onClick={closeAll}>
            About
          </Link>

          <Link href="/contact" className="navCta" onClick={closeAll}>
            Send Enquiry
          </Link>
        </nav>

        <button
          type="button"
          className="mobileMenuButton"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            setOpenDropdown(null);
            setMobileOpen((value) => !value);
          }}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobileMenuPanel" id="mobile-menu">
          <div className="mobileMenuInner">
            <div className="mobileNavSection">
              <strong>Main</strong>

              <div className="mobileNavGrid">
                <Link href="/" onClick={closeAll}>
                  Home
                </Link>
                <Link href="/about" onClick={closeAll}>
                  About
                </Link>
                <Link href="/contact" onClick={closeAll}>
                  Send Enquiry
                </Link>
              </div>
            </div>

            <MobileGroup
              title="Services"
              items={serviceLinks}
              closeMenu={closeAll}
            />

            <MobileGroup title="Areas" items={areaLinks} closeMenu={closeAll} />

            <MobileGroup
              title="Advice"
              items={adviceLinks}
              closeMenu={closeAll}
            />
          </div>
        </div>
      )}
    </header>
  );
}
