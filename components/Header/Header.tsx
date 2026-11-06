"use client";
import Link from "next/link";
import Image from "next/image";
import css from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import { useProductsCartStore } from "@/lib/store/cartStore";

const Header = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const amountCartItems = useProductsCartStore(
    (state) => state.products,
  ).length;

  useEffect(() => {
    if (!isMenuOpened) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpened(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpened(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpened]);

  const handleMenu = () => {
    setMenuOpened(!isMenuOpened);
  };
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        <span className={css["logo-name"]}>florist&apos;s</span>
        <svg
          className={css["logo-svg"]}
          width={36}
          height={36}
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 21.5C10.5 21.5 8.25 14.8333 8.25 11.5V3.5L13.875 7.5L19.5 1.5L25.125 7.5L30.75 3.5V11.5C30.75 14.8333 28.5 21.5 19.5 21.5ZM19.5 21.5V37.5M19.5 37.5H21.75M19.5 37.5H17.25M21.75 37.5C34.35 37.5 37.5 28.1666 37.5 23.5C24.9 23.5 21.75 32.8334 21.75 37.5ZM17.25 37.5C4.65 37.5 1.5 28.1666 1.5 23.5C14.1 23.5 17.25 32.8334 17.25 37.5Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className={css["burger-wrapper"]} ref={menuRef}>
        <button onClick={handleMenu}>
          <svg
            className={css.burger}
            width="35"
            height="26"
            viewBox="0 0 35 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.5 12.6471L32.5 12.6471" strokeLinecap="round" />
            <path d="M2.5 22.7941L32.5 22.7941" strokeLinecap="round" />
            <path d="M2.5 2.5L32.5 2.5" strokeLinecap="round" />
          </svg>
        </button>
        {isMenuOpened && (
          <div className={css["popup-menu"]}>
            <h3 className={css["popup-heading"]}>Categories</h3>
            <ul className={css["categories-list"]}>
              <li onClick={handleMenu}>
                <Link
                  href="/catalogue/flowers"
                  className={css["categorie-link"]}
                >
                  flowers
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link
                  href="/catalogue/bouquets"
                  className={css["categorie-link"]}
                >
                  bouquets
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link
                  href="/catalogue/ornamentals"
                  className={css["categorie-link"]}
                >
                  ornamentals
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link href="/catalogue/else" className={css["categorie-link"]}>
                  else
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <nav>
        <ul className={css["header-navigation"]}>
          <li className={css["nav-item"]}>
            <Link href="/profile" className={css["profile-link"]}>
              <span className={css.username}>username</span>
              <Image
                src="/profile.png"
                width={40}
                height={40}
                alt="profile img"
              />
            </Link>
          </li>
          <li className={css["nav-item"]}>
            <Link href="/cart" className={css["cart-link"]}>
              <Image
                src="/basket.svg"
                alt="cart-image"
                width={50}
                height={50}
                className={css["cart-image"]}
              />
              {amountCartItems != 0 && (
                <p className={css["cart-products-amount"]}>
                  {amountCartItems > 9 ? "9+" : amountCartItems}
                </p>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
