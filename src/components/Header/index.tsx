import React from 'react';
import style from './Header.module.scss';

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className={style.root}>{children}</header>;
};

export default Header;
