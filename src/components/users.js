import User from '../components/user';
import { useUsers } from '../provider/UsersProvider';

const Users = () => {
  const { userData, loading } = useUsers();

  return (
    <div className='container-row'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData.map((data, dataIndex) => <User key={dataIndex} user={data} />)
      )}
    </div>
  );
};

export default Users;
