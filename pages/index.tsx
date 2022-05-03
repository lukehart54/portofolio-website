import type { NextPage } from 'next';
import Image from 'next/image';
import Header from './Header';
import name from '../public/name.png';
import Typewriter from 'typewriter-effect';
const Home: NextPage = () => {

  return (
    <div className="home">
      <title>My Website</title>
      <Header />
      <div id="content">
        <div className='welcome'>
          <Typewriter options={{loop:true} }
            onInit={(typewriter) => {
              typewriter
                .typeString('Hello, my name is Luke')

                .pauseFor(1000)
                .deleteAll()
                .typeString('thanks for visiting my website')
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <div className="bottom">
          <Image src={name} width={400} height={100} alt="test" />
        </div>
      </div>
    </div>
  );
};



export default Home;
