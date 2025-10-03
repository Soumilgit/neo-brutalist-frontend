'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.homepage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroTitle}>
                <h1 className={styles.mainTitle}>
                  <span className={styles.titleWord1}>Scholar</span>
                  <span className={styles.titleWord2}>Bridge</span>
                </h1>
                <div className={styles.titleSubtext}>
                  <span className={styles.subtextHighlight}>Scholarship</span>
                  <span className={styles.subtextNormal}>Management</span>
                  <span className={styles.subtextHighlight}>Platform</span>
                </div>
              </div>
              
              <div className={styles.heroDescription}>
                <p className={styles.descriptionText}>
                  One application, multiple scholarship opportunities. 
                  Connect with verified trusts and streamline your 
                  <span className={styles.highlightText}> scholarship journey.</span>
                </p>
              </div>
              
              <div className={styles.heroActions}>
                <Link href="/signup" className={`${styles.ctaBtn} ${styles.ctaPrimary}`}>
                  <span className={styles.btnText}>Apply Now</span>
                  <span className={styles.btnArrow}>→</span>
                </Link>
                <Link href="/about" className={`${styles.ctaBtn} ${styles.ctaSecondary}`}>
                  <span className={styles.btnText}>Learn More</span>
                  <span className={styles.btnArrow}>💡</span>
                </Link>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className={styles.heroDecorative}>
              <div className={styles.decorativeBlock1}>
                <span>Apply</span>
              </div>
              <div className={styles.decorativeBlock2}>
                <span>2024</span>
              </div>
              <div className={styles.decorativeBlock4}>
                <span>Fund</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.titleBg}>Platform</span>
                <span className={styles.titleAccent}>Features</span>
              </h2>
            </div>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>One Application, Many Trusts</h3>
                <p className={styles.featureDescription}>
                  Fill out a single comprehensive application that reaches multiple verified 
                  scholarship trusts, maximizing your opportunities with minimal effort.
                </p>
                <div className={styles.featureAccent}></div>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔒</div>
                <h3 className={styles.featureTitle}>Secure & Verified Ecosystem</h3>
                <p className={styles.featureDescription}>
                  Both students and trusts undergo verification processes to ensure 
                  authenticity and reduce fraud. Your data is encrypted and secure.
                </p>
                <div className={styles.featureAccent}></div>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Transparent Fund Management</h3>
                <p className={styles.featureDescription}>
                  Database-level checks prevent over-approvals. Trust analytics dashboard 
                  provides yearly donation breakdowns and spending transparency.
                </p>
                <div className={styles.featureAccent}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>10K+</div>
                <div className={styles.statLabel}>Students</div>
                <div className={styles.statAccent}></div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statNumber}>150+</div>
                <div className={styles.statLabel}>Verified Trusts</div>
                <div className={styles.statAccent}></div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statNumber}>₹2.5Cr</div>
                <div className={styles.statLabel}>Scholarships Awarded</div>
                <div className={styles.statAccent}></div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statNumber}>85%</div>
                <div className={styles.statLabel}>Success Rate</div>
                <div className={styles.statAccent}></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to <span className={styles.ctaTitleHighlight}>Apply</span> for Scholarships?
              </h2>
              <p className={styles.ctaDescription}>
                Join thousands of students who have successfully secured scholarships through our platform.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/signup" className={`${styles.ctaBtn} ${styles.ctaMainBtn}`}>
                  <span className={styles.btnText}>Start Your Application</span>
                  <span className={styles.btnArrow}>🎓</span>
                </Link>
              </div>
            </div>
            
            {/* CTA Decorative Elements */}
            <div className={styles.ctaDecorative}>
              <div className={styles.ctaDecorativeBlock1}>Free</div>
              <div className={styles.ctaDecorativeBlock2}>Apply</div>
              <div className={styles.ctaDecorativeBlock3}>Now</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.sectionContainer}>
            <div className={styles.footerContent}>
              <div className={styles.footerBrand}>
                <span className={styles.footerLogo}>🎓 ScholarBridge</span>
                <p className={styles.footerTagline}>
                  Connecting students with scholarship opportunities through a unified platform
                </p>
              </div>
              
              <div className={styles.footerLinks}>
                <div className={styles.footerColumn}>
                  <h4 className={styles.footerColumnTitle}>Platform</h4>
                  <Link href="/about" className={styles.footerLink}>About Us</Link>
                  <Link href="/contributors" className={styles.footerLink}>Contributors</Link>
                  <Link href="/contact" className={styles.footerLink}>Contact</Link>
                </div>
                
                <div className={styles.footerColumn}>
                  <h4 className={styles.footerColumnTitle}>Support</h4>
                  <Link href="/faqs" className={styles.footerLink}>FAQs</Link>
                  <Link href="/help" className={styles.footerLink}>Help Center</Link>
                  <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
                </div>
              </div>
            </div>
            
            <div className={styles.footerBottom}>
              <p className={styles.footerCopyright}>
                © 2024 ScholarBridge. All rights reserved. Empowering education through technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;