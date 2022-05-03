import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
//0d1522
//fafafa
// cujarah sangam mn

interface HeaderProps {
  href: string;
  className: string;
  page: string;
}

export default function Header() {
  const [activePage, setActivePage] = useState('home');
  const tempArr = [
    '/',
    'about',
    'projects',
    'contact',
    'https://github.com/lukehart54',
  ];

  return (
    <div id="container">
      <h1 id="name">LUKE HARTLEY</h1>

      <div id="links">
        {tempArr.map((link) => (
          <Link href={link} key={link}>
            <a
              onClick={() => {
                setActivePage(link);
              }}
              className={link === activePage ? 'tag active-tag' : 'tag'}
            >
              {link === '/' ? 'home' : link.length > 10 ? 'Github' : link}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

/*
            onClick={() => {
              setActivePage('home');
            }}
*/
