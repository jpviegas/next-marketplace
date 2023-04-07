import axios from 'axios';

type Users = {
  _id: string;
  username: string;
  email: string;
  __v: number;
};

async function getUsers() {
  try {
    const { data } = await axios.get<Users[]>('http://localhost:8080/users/', {
      headers: {
        Accept: 'application/json'
      }
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'An unexpected error occurred';
    }
  }
}

export default async function Users() {
  const data = await getUsers();

  return (
    <section>
      <h1>USERS</h1>
      {data.map((user) => (
        <p key={user._id}>{user.username}</p>
      ))}
    </section>
  );
}
