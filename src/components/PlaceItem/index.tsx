import React from 'react';
import type { PlaceDataType } from '@/src/types/placeData';
import Image from 'next/image';
import style from './PlaceItem.module.scss';

type PlaceItemProps = PlaceDataType;

const PlaceItem: React.FC<PlaceItemProps> = ({ id, image, title, description, address, creatorId, coordinates }) => {
  return (
    <li className="my-4 mx-0">
      <div className={style.card}>
        <div className="w-full h-[12.5rem] mr-6 md:h-[20rem]">
          <Image src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 text-center">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <h3 className="mb-2 text-xl font-bold">{address}</h3>
          <p className="mb-2">{description}</p>
        </div>
        <div className={style.actions}>
          <button>View on map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default PlaceItem;
