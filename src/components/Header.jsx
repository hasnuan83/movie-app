import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.headerContent}`}>
        <a href="/" className={styles.logo}>
          <span>🎬</span> Cine<span className="text-gradient-primary">Magic</span>
        </a>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#discover" className={styles.navLink}>Discover</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
