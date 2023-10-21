export type PlaceDataType = {
  id: string;
  image: string;
  title: string;
  description: string;
  address: string;
  creatorId: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};
