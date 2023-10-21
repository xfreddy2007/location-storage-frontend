'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import NavLinks from '../../components/NavLinks';
import SideDrawer from '../../components/SideDrawer';
import style from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  return (
    <>
      {isSideDrawerOpen && (
        <SideDrawer onClick={() => setIsSideDrawerOpen(false)}>
          <nav className="h-full">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <Header>
        <button className={style.button} onClick={() => setIsSideDrawerOpen(true)}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="text-white hidden">
          <Link href="/" className="text-white no-underline">
            Location Searcher
          </Link>
        </h1>
        <nav className={style.headerNav}>
          <NavLinks />
        </nav>
      </Header>
    </>
  );
};

export default Navigation;
