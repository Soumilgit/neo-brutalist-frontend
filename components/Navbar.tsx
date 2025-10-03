'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo/Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>📚</span>
              <span className={styles.logoText}>ScholarBridge</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink}>
              About Us
            </Link>
            <Link href="/contributors" className={styles.navLink}>
              Contributors
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact Us
            </Link>
            <Link href="/faqs" className={styles.navLink}>
              FAQs
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className={styles.authButtons}>
            <Link href="/login" className={`${styles.authBtn} ${styles.loginBtn}`}>
              Login
            </Link>
            <Link href="/signup" className={`${styles.authBtn} ${styles.signupBtn}`}>
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/contributors" className={styles.mobileNavLink} onClick={toggleMenu}>
            Contributors
          </Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link href="/faqs" className={styles.mobileNavLink} onClick={toggleMenu}>
            FAQs
          </Link>
          
          <div className={styles.mobileAuthButtons}>
            <Link href="/login" className={`${styles.authBtn} ${styles.loginBtn}`} onClick={toggleMenu}>
              Login
            </Link>
            <Link href="/signup" className={`${styles.authBtn} ${styles.signupBtn}`} onClick={toggleMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;