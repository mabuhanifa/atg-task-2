import { useEffect, useState } from "react";
export default function Names() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <div>
        hello
      {users &&
        users.map((user,index) => (
          <div key={index}>
            <h1>{user.jobTitle}</h1>
          </div>
        ))}
    </div>
  );
}
