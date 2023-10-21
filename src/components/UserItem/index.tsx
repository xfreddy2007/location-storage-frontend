import React from 'react';
import type { UserType } from '@/src/types/user';
import Image from 'next/image';
import Link from 'next/link';
import style from './UserItem.module.scss';

type UserItemProps = UserType;

const UserItem: React.FC<UserItemProps> = ({ id, name, image, placeCount }) => {
  return (
    <li className={style.root}>
      <div className={style.card}>
        <Link href={`/${id}`}>
          <div className="w-16 h-16 mr-4">
            <div className="w-full h-full flex justify-center items-center">
              <Image src={image} alt={name} className="block rounded-full w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h2 className="text-[1.5rem] mb-2 font-normal text-[#ffd900]">{name}</h2>
            <h3 className="m-0">
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
