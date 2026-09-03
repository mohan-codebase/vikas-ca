"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import { Logo } from "@/components/ui/Logo";
import { NavItem, defaultNavItems } from "@/data/navItemsData";

export interface NavProps {
  items?: NavItem[];
  brandName?: string;
  brandSub?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function Nav({
  items = defaultNavItems,
  brandName = "NICS",
  brandSub,
  ctaLabel = "Contact Us",
  ctaHref = "#contact",
}: NavProps) {
  const [scrollStage, setScrollStage] = useState<0 | 1 | 2>(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollStage(y === 0 ? 0 : y <= 100 ? 1 : 2);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const containerClass = [
    styles.navContainer,
    scrollStage === 0 ? styles.stage0 : scrollStage === 1 ? styles.stage1 : styles.stage2,
  ].join(" ");

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <div className={styles.navRoot}>
      <header className={styles.headerWrapper}>
        <div className={containerClass}>
          <nav className={styles.navInner} aria-label="Primary">
            <Link href="#home" className={styles.brand} onClick={closeMobileMenu}>
              <Logo className={styles.brandLogo} alt={brandName} priority />
              {brandSub && <span className={styles.brandSub}>{brandSub}</span>}
            </Link>

            <ul className={styles.desktopNavList}>
              {items.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <Link href={item.href} className={styles.navButton}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.actionsGroup}>
              <Link href={ctaHref} className={styles.ctaButton}>
                <span>{ctaLabel}</span>
              </Link>
              <button
                type="button"
                className={styles.mobileMenuToggle}
                onClick={() => setMobileOpen((open) => !open)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <span className={styles.burgerIcon} aria-hidden="true">
                  <span className={`${styles.burgerBar} ${mobileOpen ? styles.burgerBarTopOpen : ""}`} />
                  <span className={`${styles.burgerBar} ${mobileOpen ? styles.burgerBarBottomOpen : ""}`} />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <ul className={styles.mobileNavList}>
          {items.map((item, index) => (
            <li
              key={item.label}
              className={styles.mobileNavItem}
              style={{ transitionDelay: mobileOpen ? `${0.06 * index + 0.1}s` : "0s" }}
            >
              <Link href={item.href} className={styles.mobileNavButton} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.mobileFooterActions}>
          <Link
            href={ctaHref}
            className={styles.ctaButton}
            style={{ width: "100%", justifyContent: "center", padding: "12px" }}
            onClick={closeMobileMenu}
          >
            <span>{ctaLabel}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
