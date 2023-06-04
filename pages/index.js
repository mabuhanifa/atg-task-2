import AllNames from "@/components/AllNames";
import Pagination from "@/components/Pagination";
import User from "@/components/User";
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
  
  const [page, setPage] = useState(1);
  const perPage = 10;
  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  const allUsers = users.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(users.length / perPage);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages) {
      setPage(selectedPage);
    }
  };
  const getNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const getPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <>
      <section className="flex gap-x-[105px] justify-center">
        <div className="w-[623px] ml-[105px] mt-20">
          <h1 className="py-[21px] bg-[#C5DFFF] text-center font-[500] rd">
            USERS LIST
          </h1>

          {users &&
            allUsers.map((user, index) => (
              <AllNames
                key={index}
                user={user}
                setData={setData}
                single={single}
              />
            ))}
        </div>
        <div className="w-[502px] mr-[105px] mt-20">
          <h1 className="py-[21px] bg-[#C5DFFF] text-center font-[500] rd">
            USERS LIST
          </h1>
          <User single={single} />
        </div>
      </section>
      <div className="flex justify-center">
        <Pagination
          selectPageHandler={selectPageHandler}
          totalPages={totalPages}
          page={page}
          getPrevPage={getPrevPage}
          getNextPage={getNextPage}
        />
      </div>
    </>
  );
}
