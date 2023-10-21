'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import style from './SideDrawer.module.scss';

type SideDrawerProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const SideDrawer: React.FC<SideDrawerProps> = ({ children, onClick }) => {
  return createPortal(
    <div className="fixed left-0 top-0 w-full h-full z-[90] backdrop-blur-sm flex">
      <aside className={style.root}>{children}</aside>
      <div className="flex-1 h-full" onClick={onClick} />
    </div>,
    document.body,
  );
};

export default SideDrawer;
