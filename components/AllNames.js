export default function AllNames({ user, setData, single }) {
  const isActive = single.jobTitle === user.jobTitle;
  return (
    <div onClick={() => setData(user.profile.firstName, user.profile.lastName)}>
      <h1
        className={`cursor-pointer p-5 w-[623px] ${
          isActive ? "font-bold" : "text-gray-500"
        }`}
      >
        {user.profile.firstName + " " + user.profile.lastName}
      </h1>
    </div>
  );
}
