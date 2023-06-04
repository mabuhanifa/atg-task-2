import Link from "next/link";
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
      {users &&
        users.map((user, index) => (
          <div key={index}>
            <Link href={`/user/${user.id}`}>
              <h1>{user.profile.firstName + " " + user.profile.lastName}</h1>
            </Link>
          </div>
        ))}
    </div>
  );
}
