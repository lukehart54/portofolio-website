import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
import Image from 'next/image';
import token from '../public/token.png';
import lukedle from '../public/temp-ldle.png';

//0d1522
//fafafa
// cujarah sangam mn
export default function Projects() {

  return (
    <div className="projects">
      <title>My Website</title>
      <Header />
      <div className="group">
        <div className="proj">
          <Link href="https://github.com/lukehart54/lukeToken" passHref>
            <Image src={token} width={300} height={300} alt="LukeToken" />
          </Link>
        </div>
        <div className="proj">
          <Link href="https://github.com/lukehart54/lukedle" passHref>
            <Image src={lukedle} width={300} height={300} alt="Lukedle" />
          </Link>
        </div>
        <div className="proj">
          <Link href="https://github.com/lukehart54/pa1-cryptography" passHref>
            <p>Encrypter</p>
          </Link>
        </div>
        <div className="proj">LukeChess</div>
      </div>
    </div>
  );
}
