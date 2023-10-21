import React from 'react';
import type { PlaceDataType } from '@/src/types/placeData';
import style from './PlaceList.module.scss';
import PlaceItem from '../PlaceItem';

type PlaceListProps = {
  placeItems: PlaceDataType[];
};

const PlaceList: React.FC<PlaceListProps> = ({ placeItems }) => {
  if (placeItems.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <div className={style.card}>
          <h2>No places found. Create one?</h2>
          <button>Share Place</button>
        </div>
      </div>
    );
  }

  return (
    <ul className={style.placeList}>
      {placeItems.map((place) => (
        <PlaceItem key={place.id} {...place} />
      ))}
    </ul>
  );
};

export default PlaceList;
