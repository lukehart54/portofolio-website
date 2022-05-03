import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
import Image from 'next/image';
import me from '../public/tempme.png';
//0d1522
//fafafa
// cujarah sangam mn
export default function About() {
  return (
    <div className="home">
      <title>About</title>
      <Header />
      <div id="a-section">
        <div id="left">
          <div id="title">About</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div id="right">
          <Image
            src={me}
              
            width={225} height={300} alt="photo"
          />
        </div>
      </div>
    </div>
  );
}
