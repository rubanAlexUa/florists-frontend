'use client';
import Link from 'next/link';
import Image from 'next/image';
import css from './Header.module.css';
import {useEffect, useRef, useState} from 'react';
import {useProductsCartStore} from '@/lib/store/cartStore';
import Logo from '@/public/flower-logo.svg';
import Burger from '@/public/burger.svg';
import Profile from '@/public/profile.svg';
import Cart from '@/public/basket.svg';
import {useUserStore} from '@/lib/store/userStore';

const Header = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const amountCartItems = useProductsCartStore(state => state.products).length;

  const user = useUserStore(state => state.user);

  useEffect(() => {
    if (!isMenuOpened) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpened(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpened(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpened]);

  const handleMenu = () => {
    setMenuOpened(!isMenuOpened);
  };
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        <span className={css['logo-name']}>florist&apos;s</span>
        <Logo className={css['logo-svg']} />
      </Link>
      <div className={css['burger-wrapper']} ref={menuRef}>
        <button onClick={handleMenu}>
          <Burger className={css.burger} />
        </button>
        {isMenuOpened && (
          <div className={css['popup-menu']}>
            <h3 className={css['popup-heading']}>Categories</h3>
            <ul className={css['categories-list']}>
              <li onClick={handleMenu}>
                <Link
                  href="/catalogue/flowers"
                  className={css['categorie-link']}>
                  flowers
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link
                  href="/catalogue/bouquets"
                  className={css['categorie-link']}>
                  bouquets
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link
                  href="/catalogue/ornamentals"
                  className={css['categorie-link']}>
                  ornamentals
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link href="/catalogue/else" className={css['categorie-link']}>
                  else
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {user ? (
        <nav>
          <ul className={css['header-navigation']}>
            <li className={css['nav-item']}>
              <Link href="/profile" className={css['profile-link']}>
                <span className={css.username}>username</span>
                <Profile className={css['profile-svg']} />
              </Link>
            </li>
            <li className={css['nav-item']}>
              <Link href="/cart" className={css['cart-link']}>
                <Cart className={css['cart-image']} />
                {amountCartItems != 0 && (
                  <p className={css['cart-products-amount']}>
                    {amountCartItems > 9 ? '9+' : amountCartItems}
                  </p>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <div className={css['buttons-wrapper']}>
          <Link
            href="/log-in"
            className={`${css['auth-button']} ${css['log-in-button']}`}>
            Log in
          </Link>
          <Link
            href="/sign-up"
            className={`${css['auth-button']} ${css['sign-up-button']}`}>
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
