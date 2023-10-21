'use client';

import style from './Head.module.scss';

const Header = () => {
  return (
    <div>
      <div className={style.root}>Header</div>
      <p>
        asdakjshd
        <span>HITHITHITHIT</span>
      </p>
      <style jsx>{`
        p {
          color: red;
          span {
            color: blue;
          }
        }
        @media (min-width: 640px) {
          p {
            color: green;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
