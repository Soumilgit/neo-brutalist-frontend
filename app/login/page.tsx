'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './login.module.css';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.loginContainer}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginCard}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.subtitle}>Welcome back to ScholarBridge</p>
            
            <form className={styles.loginForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your password"
                  className={styles.input}
                  required
                />
              </div>
              
              <button type="submit" className={styles.loginBtn}>
                <span>Login</span>
                <span>→</span>
              </button>
            </form>
            
            <div className={styles.signupLink}>
              <span>Don't have an account?</span>
              <Link href="/signup" className={styles.signupLinkBtn}>
                Sign Up Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;