import React from 'react';
import { useName } from '../provider';
import { useUsers } from '../provider/UsersProvider';

const SecondChild = (props) => {
  //const { name } = useName();
  const { userData } = useUsers();

  return (
    <div>
      {userData.map((item) => (
        <p>Name: {item.name.first}</p>
      ))}
    </div>
  );
};

export default SecondChild;
