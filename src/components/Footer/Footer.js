import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Footer.module.scss';

export const Footer = () => { 

  const { owner } = useSelector( state => state.work );

  return(
    <footer className={`${styles.Footer} py-5`}>
      <div className="container">
        {/* <p className="float-end mb-1">
          <button>Back to top</button>
        </p> */}

        <section id="socials-4" className="widget widget_socials">
          <div className="socials_widget_wrapper socials">
            <ul className={styles.Footer__ul_socials}>
              <li>
                <i className="fab fa-facebook"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
              </li>
            </ul>
          </div>
        </section>
        <p className="mb-1">&copy; Todo los derechos reservados. Developed by <b>{owner}.</b></p>
      </div>
    </footer>
  )
};
