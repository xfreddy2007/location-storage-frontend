import React from 'react';
import UserList from '@/src/components/UserList';
import type { UserType } from '@/src/types/user';

const USERS: UserType[] = [
  {
    id: '1',
    name: 'Freddy',
    image: '',
    placeCount: 3,
  },
];

const user: React.FC = () => {
  return (
    <div>
      <UserList users={USERS} />
    </div>
  );
};

export default user;
