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

  return (
    <div id="container">
      <h1 id="name">LUKE HARTLEY</h1>

      <div id="links">
        <HeaderLink href="/" className="tag" page="Home" />
        <HeaderLink href="/about" className="tag" page="About" />
        <HeaderLink href="/projects" className="tag" page="Projects" />
        <HeaderLink href="/contact" className="tag" page="Contact" />
        <HeaderLink href="https://github.com/lukehart54" className="tag" page="Github"/>
      </div>
    </div>
  );
}

function HeaderLink(props: HeaderProps) {

    const [activePage, setActivePage] = useState('home');

    if (activePage === props.page) {
      return (
        <Link href={props.href}>
          <a className={props.className + ' active-tag'}>{props.page}</a>
        </Link>
      );
    } else {
      return (
        <Link href={props.href}>
          <a className={props.className}>{props.page}</a>
        </Link>
      );
    }


}
/*
            onClick={() => {
              setActivePage('home');
            }}
*/