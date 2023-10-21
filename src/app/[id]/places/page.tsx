import React from 'react';
import PlaceList from '@/src/components/PlaceList';
import type { PlaceDataType } from '@/src/types/placeData';

type UserPlacesPageProps = {
  params: { id: string };
};

const PLACE_ITEMS: PlaceDataType[] = [
  {
    id: '1',
    creatorId: '1',
    title: 'Empire State Building',
    description: 'One of the famous building in the world.',
    image: '',
    address: 'aaaaaa',
    coordinates: {
      latitude: 12313,
      longitude: 12312312,
    },
  },
];

const UserPlacesPage: React.FC<UserPlacesPageProps> = ({ params }) => {
  return <PlaceList placeItems={PLACE_ITEMS.filter((place) => place.id === params.id)} />;
};

export default UserPlacesPage;
