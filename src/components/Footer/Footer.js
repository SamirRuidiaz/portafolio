import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Footer.module.scss';

export const Footer = () => { 

  const { owner } = useSelector( state => state.work );

  return(
    <footer className={`${styles.Footer} py-5`}>
      <div className="container">
        <section id="socials-4" className="widget widget_socials">

            <div className={styles.Footer__socials}>
              <span>
                <i className="fab fa-facebook"></i>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
            </div>

        </section>
        <p className="mb-1">&copy; Todo los derechos reservados. Developed by <b>{owner}.</b></p>
      </div>
    </footer>
  )
};
