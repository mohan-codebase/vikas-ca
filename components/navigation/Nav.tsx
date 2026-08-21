"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import { NavItem, NavLink, NavColumn, defaultNavItems } from "@/data/navItemsData";

export interface NavProps {
  items?: NavItem[];
  brandName?: string;
  brandSub?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function Nav({
  items = defaultNavItems,
  brandName = "Vikas CA",
  brandSub = "MANN JUDD",
  ctaLabel = "Contact Us",
  ctaHref = "#contact",
}: NavProps) {
  const [scrollStage, setScrollStage] = useState<0 | 1 | 2>(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const prevHeightRef = useRef<number>(0);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelsRef = useRef<Map<number, HTMLDivElement>>(new Map());
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navRootId = useId();

  // ── 1. Two-Stage Scroll Morphing Tracker ─────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y === 0) {
        setScrollStage(0);
      } else if (y > 0 && y <= 100) {
        setScrollStage(1);
      } else {
        setScrollStage(2);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── 2. Dynamic Height Calculation for Mega-Menu ─────────────────────────
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (activeIndex === null) {
      wrapper.style.height = "0px";
      prevHeightRef.current = 0;
      return;
    }

    const panelEl = panelsRef.current.get(activeIndex);
    if (!panelEl) return;

    const currentHeight = panelEl.scrollHeight || panelEl.offsetHeight;
    if (currentHeight > 0) {
      const delta = Math.abs(currentHeight - prevHeightRef.current);
      const duration = Math.min(0.34, 0.2 + delta / 10000);
      wrapper.style.setProperty("--dynamic-duration", `${duration}s`);
      wrapper.style.height = `${currentHeight}px`;
      prevHeightRef.current = currentHeight;
    }
  }, [activeIndex]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      if (activeIndex !== null) {
        const wrapper = wrapperRef.current;
        const panelEl = panelsRef.current.get(activeIndex);
        if (wrapper && panelEl) {
          const currentHeight = panelEl.scrollHeight || panelEl.offsetHeight;
          wrapper.style.height = `${currentHeight}px`;
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  // ── 3. Hover Tolerance Buffer (~180ms) ──────────────────────────────────
  const handleMouseEnterItem = (index: number) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    const item = items[index];
    if (item && (item.columns?.length || item.heroTitle)) {
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  const handleMouseLeaveNav = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    leaveTimerRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 180);
  };

  const handleDropdownMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  // ── 4. Keyboard Navigation & Accessibility (WCAG 2.2) ───────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobileAccordion = (label: string) => {
    setMobileAccordion((prev) => (prev === label ? null : label));
  };

  const isMenuOpen = activeIndex !== null;
  const isPill = scrollStage === 2;

  // Determine container classes
  const containerClass = [
    styles.navContainer,
    scrollStage === 0 ? styles.stage0 : scrollStage === 1 ? styles.stage1 : styles.stage2,
  ].join(" ");

  return (
    <div className={styles.navRoot}>
      {/* ── Page Curtain Overlay (Full-screen frosted backdrop) ─────────── */}
      <div
        className={`${styles.curtain} ${isMenuOpen ? styles.curtainActive : ""}`}
        aria-hidden="true"
        onClick={() => setActiveIndex(null)}
      />

      {/* ── Fixed Header Wrapper ────────────────────────────────────────── */}
      <header className={styles.headerWrapper}>
        <div className={containerClass}>
          <nav className={styles.navInner} aria-label="Primary">
            {/* Brand Logo (Left end of pill) */}
            <Link
              href="/"
              className={styles.brand}
              onClick={() => {
                setActiveIndex(null);
                setMobileOpen(false);
              }}
            >
              <div className={styles.brandMonogram} aria-hidden="true">
                <span>V</span>
              </div>
              <div className={styles.brandText}>
                <span className={styles.brandName}>{brandName}</span>
                {brandSub && <span className={styles.brandSub}>{brandSub}</span>}
              </div>
            </Link>

            {/* Desktop Navigation Links (Center of pill) */}
            <ul
              className={styles.desktopNavList}
              onMouseLeave={handleMouseLeaveNav}
              role="menubar"
            >
              {items.map((item, idx) => {
                const hasMega = Boolean(item.columns?.length || item.heroTitle);
                const isActive = activeIndex === idx;
                const controlsId = `${navRootId}-panel-${idx}`;

                return (
                  <li
                    key={item.label}
                    className={styles.navItem}
                    role="none"
                    onMouseEnter={() => handleMouseEnterItem(idx)}
                  >
                    {hasMega ? (
                      <button
                        type="button"
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={isActive}
                        aria-controls={controlsId}
                        className={`${styles.navButton} ${isActive ? styles.navButtonActive : ""}`}
                        onFocus={() => handleMouseEnterItem(idx)}
                        onClick={() => setActiveIndex(isActive ? null : idx)}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`${styles.navChevron} ${isActive ? styles.navChevronOpen : ""}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        role="menuitem"
                        className={styles.navButton}
                        onFocus={() => setActiveIndex(null)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Actions Group (Right end of pill) */}
            <div className={styles.actionsGroup}>
              <Link href={ctaHref} className={styles.ctaButton}>
                <span>{ctaLabel}</span>
              </Link>

              {/* Mobile 2-Bar Animated Burger Button */}
              <button
                type="button"
                className={styles.mobileMenuToggle}
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <span className={styles.burgerIcon} aria-hidden="true">
                  <span
                    className={`${styles.burgerBar} ${mobileOpen ? styles.burgerBarTopOpen : ""}`}
                  />
                  <span
                    className={`${styles.burgerBar} ${mobileOpen ? styles.burgerBarBottomOpen : ""}`}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>

        {/* ── Apple-Style Adaptive Dynamic-Height Mega-Menu ──────────────── */}
        <div
          ref={wrapperRef}
          className={`${styles.megaMenuWrapper} ${isMenuOpen ? styles.megaMenuWrapperOpen : ""} ${
            isPill ? styles.megaMenuPill : ""
          }`}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeaveNav}
        >
          <div className={styles.megaMenuCard}>
            {items.map((item, idx) => {
              const isActive = activeIndex === idx;
              const hasHero = Boolean(item.heroTitle);
              const panelId = `${navRootId}-panel-${idx}`;

              return (
                <div
                  key={item.label}
                  id={panelId}
                  ref={(el) => {
                    if (el) {
                      panelsRef.current.set(idx, el);
                    } else {
                      panelsRef.current.delete(idx);
                    }
                  }}
                  className={`${styles.panel} ${isActive ? styles.panelActive : ""}`}
                  role="region"
                  aria-label={`${item.label} submenu`}
                  tabIndex={-1}
                >
                  <div className={styles.megaMenuInner}>
                    <div className={styles.gridContainer}>
                      {/* Column 1: Elevated Hero Column */}
                      {hasHero && (
                        <Link
                          href={item.heroLinkHref || item.href}
                          className={`${styles.heroColumn} ${styles.staggerItem} ${styles.staggerTitle}`}
                          onClick={() => setActiveIndex(null)}
                        >
                          <div>
                            {item.heroTag && (
                              <div className={styles.heroTag}>
                                <span>✦</span>
                                <span>{item.heroTag}</span>
                              </div>
                            )}
                            <h3 className={styles.heroTitle}>{item.heroTitle}</h3>
                            {item.heroDescription && (
                              <p className={styles.heroDescription}>{item.heroDescription}</p>
                            )}
                          </div>
                          <div className={styles.heroCta}>
                            <span>{item.heroLinkText || "Learn more"}</span>
                            <svg
                              className={styles.heroCtaIcon}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </div>
                        </Link>
                      )}

                      {/* Secondary Columns Grid */}
                      {item.columns && item.columns.length > 0 && (
                        <div className={styles.columnsGrid}>
                          {item.columns.map((col: NavColumn, colIdx: number) => (
                            <div
                              key={col.title}
                              className={`${styles.columnGroup} ${styles.staggerItem}`}
                              style={{
                                transitionDelay: `${0.08 + colIdx * 0.03}s`,
                              }}
                            >
                              <h4 className={styles.columnTitle}>{col.title}</h4>
                              <ul className={styles.linksList}>
                                {col.links.map((link: NavLink, linkIdx: number) => (
                                  <li key={link.label}>
                                    <Link
                                      href={link.href}
                                      className={`${styles.subLinkItem} ${styles.staggerItem} ${styles.staggerLinks}`}
                                      style={{
                                        transitionDelay: `${0.12 + (colIdx * 4 + linkIdx) * 0.02}s`,
                                      }}
                                      onClick={() => setActiveIndex(null)}
                                    >
                                      <div className={styles.subLinkLabel}>
                                        <span>{link.label}</span>
                                        {link.badge && (
                                          <span className={styles.badge}>{link.badge}</span>
                                        )}
                                      </div>
                                      {link.description && (
                                        <p className={styles.subLinkDescription}>
                                          {link.description}
                                        </p>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* ── Responsive Mobile Fullscreen Drawer (Single-DOM Source) ─────── */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <ul className={styles.mobileNavList}>
          {items.map((item, idx) => {
            const hasSub = Boolean(item.columns?.length || item.heroTitle);
            const isAccordionOpen = mobileAccordion === item.label;

            return (
              <li
                key={item.label}
                className={styles.mobileNavItem}
                style={{
                  transitionDelay: mobileOpen ? `${0.06 * idx + 0.1}s` : "0s",
                }}
              >
                {hasSub ? (
                  <div>
                    <button
                      type="button"
                      className={styles.mobileNavButton}
                      onClick={() => toggleMobileAccordion(item.label)}
                      aria-expanded={isAccordionOpen}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`${styles.mobileAccordionChevron} ${
                          isAccordionOpen ? styles.mobileAccordionChevronOpen : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <div
                      className={`${styles.mobileAccordionContent} ${
                        isAccordionOpen ? styles.mobileAccordionContentOpen : ""
                      }`}
                    >
                      {item.heroTitle && (
                        <Link
                          href={item.heroLinkHref || item.href}
                          className={styles.mobileSubLink}
                          onClick={() => setMobileOpen(false)}
                        >
                          <div style={{ fontWeight: 700, color: "var(--accent)" }}>
                            {item.heroTitle}
                          </div>
                          {item.heroDescription && (
                            <div
                              style={{
                                fontSize: "0.75rem",
                                color: "var(--ink-muted)",
                                marginTop: "2px",
                              }}
                            >
                              {item.heroDescription}
                            </div>
                          )}
                        </Link>
                      )}

                      {item.columns?.map((col) => (
                        <div key={col.title}>
                          <div className={styles.mobileColumnTitle}>{col.title}</div>
                          <ul className={styles.mobileSubLinks}>
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className={styles.mobileSubLink}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={styles.mobileNavButton}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Footer Actions */}
        <div className={styles.mobileFooterActions}>
          <Link
            href={ctaHref}
            className={styles.ctaButton}
            style={{ width: "100%", justifyContent: "center", padding: "12px" }}
            onClick={() => setMobileOpen(false)}
          >
            <span>{ctaLabel}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
