import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';

export const Header = () => { 
  const { owner } = useSelector( state => state.work );

  return(
    <header className={`py-1 ${styles.Header__site} ${styles.Header__stickyTop}`}>
      <nav className="container flex flex-row justify-content-between">
        <span className={`py-3 ${styles.Header__textNav}`}>
          { owner }
        </span>
        <span className={`py-3 ${styles.Header__textNav}`}>Tour 1</span>
        <span className={`py-3 ${styles.Header__textNav}`}>Tour 2</span>
        <span className={`py-3 ${styles.Header__textNav}`}>Tour 3</span>
        <span className={`py-3 ${styles.Header__textNav}`}>Tour 4</span>
      </nav>
    </header>
  )
};