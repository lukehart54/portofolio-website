import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './Header';

const Home: NextPage = () => {
  return (
    <div className="home">
      <title>My Website</title>
      <Header />
        <div id='content'>
          Hello
        </div>
    </div>
  );
};

export default Home;
