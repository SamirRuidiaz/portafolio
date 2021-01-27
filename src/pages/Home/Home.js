import React from 'react';
import { Grid } from '../../components/Grid/Grid';
import styles from './Home.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

const Home = () => (
  <div>
    <Header />
    <main>
      <div className={`${styles.Home} w-100 portfolio py-5`}>
        <Grid />
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
