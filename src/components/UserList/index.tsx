import React from 'react';
import type { UserType } from '@/src/types/user';
import UserItem from '../UserItem';
import style from './UserList.module.scss';

type UserListProps = {
  users: UserType[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <div className={style.card}>
          <h2>No Users found.</h2>
        </div>
      </div>
    );
  }

  return (
    <ul className="list-none mx-auto w-[90%] max-w-[50rem] flex justify-center flex-wrap">
      {users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UserList;
