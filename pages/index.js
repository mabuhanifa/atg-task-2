import AllNames from "@/components/AllNames";
import Single from "@/components/Single";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [single, setSingle] = useState({});

  const setData = (f, l) => {
    const singleUser = users.find(
      (user) => user.profile.firstName === f && user.profile.lastName === l
    );
    setSingle(singleUser);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      const data = await response.json();
      setUsers(data);
      setSingle(data[0]);
    };
    fetchUsers();
  }, []);
  
  return (
    <section className="flex gap-x-[105px]">
      <div className="w-full ml-[105px] mt-[175px]">

        {users &&
          users.map((user, index) => (
            <AllNames key={index} user={user} setData={setData} single={single}/>
          ))}
      </div>
      <div className="w-full mr-[105px] mt-[175px]">
        <Single single={single} />
      </div>
    </section>
  );
}
