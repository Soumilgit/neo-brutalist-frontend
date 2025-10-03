'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './signup.module.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    collegeEmail: '',
    password: '',
    confirmPassword: '',
    isTrustNGO: false
  });

  const [errors, setErrors] = useState({
    collegeEmail: '',
    password: '',
    confirmPassword: '',
    general: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear specific error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      collegeEmail: '',
      password: '',
      confirmPassword: '',
      general: ''
    };

    // Email validation
    if (!formData.collegeEmail) {
      newErrors.collegeEmail = 'College email is required';
    } else if (!formData.collegeEmail.includes('@') || !formData.collegeEmail.includes('.edu')) {
      newErrors.collegeEmail = 'Please enter a valid college email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle successful form submission
      console.log('Form submitted:', formData);
      alert('Account created successfully! Welcome to ScholarBridge! 🎉');
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.signupContainer}>
        <div className={styles.signupWrapper}>
          {/* Header Section */}
          <div className={styles.header}>
            <h1 className={styles.title}>Sign Up</h1>
            <div className={styles.subtitle}>
              <span className={styles.subtitleText}>Start Your</span>
              <span className={styles.subtitleHighlight}>Scholarship Journey</span>
            </div>
          </div>

          {/* Signup Form */}
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.signupForm}>
              {/* College Email Field */}
              <div className={styles.inputGroup}>
                <label htmlFor="collegeEmail" className={styles.label}>
                  College Email *
                </label>
                <input
                  type="email"
                  id="collegeEmail"
                  name="collegeEmail"
                  value={formData.collegeEmail}
                  onChange={handleInputChange}
                  placeholder="student@college.edu"
                  className={`${styles.input} ${errors.collegeEmail ? styles.inputError : ''}`}
                />
                <div className={styles.inputNote}>
                  Use your official college email address
                </div>
                {errors.collegeEmail && (
                  <div className={styles.errorMessage}>
                    ⚠️ {errors.collegeEmail}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>
                  Create Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter a strong password (min 6 characters)"
                  className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                />
                <div className={styles.inputNote}>
                  Password must be at least 6 characters long
                </div>
                {errors.password && (
                  <div className={styles.errorMessage}>
                    ⚠️ {errors.password}
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`}
                />
                {errors.confirmPassword && (
                  <div className={styles.errorMessage}>
                    ⚠️ {errors.confirmPassword}
                  </div>
                )}
              </div>

              {/* Trust/NGO Option */}
              <div className={styles.checkboxGroup}>
                <div className={styles.checkboxWrapper}>
                  <input
                    type="checkbox"
                    id="isTrustNGO"
                    name="isTrustNGO"
                    checked={formData.isTrustNGO}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="isTrustNGO" className={styles.checkboxLabel}>
                    Are you a Trust/NGO?
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn}>
                <span className={styles.btnText}>Create Account</span>
                <span className={styles.btnIcon}>→</span>
              </button>

              {/* Login Link */}
              <div className={styles.loginLink}>
                <span>Already have an account?</span>
                <Link href="/login" className={styles.loginLinkBtn}>
                  Login Here
                </Link>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default SignupPage;