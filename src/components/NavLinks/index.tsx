import React from 'react';
import Link from 'next/link';
import style from './NavLinks.module.scss';

const NavLinks: React.FC = () => {
  return (
    <ul className={style.root}>
      <li>
        <Link href="/">All Users</Link>
      </li>
      <li>
        <Link href="/1/places">My Places</Link>
      </li>
      <li>
        <Link href="/places/new">Add Places</Link>
      </li>
      <li>
        <Link href="/auth">Authenticate</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
