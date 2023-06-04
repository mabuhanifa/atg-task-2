import Image from "next/image";
import avatar from "../public/avatar.png";

export default function AllNames({ user, setData, single }) {
  const isActive = single.jobTitle === user.jobTitle;
  return (
    <div
      onClick={() => setData(user.profile.firstName, user.profile.lastName)}
      className={`my-[10px] rounded ${
        isActive ? "bg-[#D4D4D4]" : "bg-[#ECECEC]"
      }`}
    >
      <div className="flex items-center px-2">
        <Image
          src={avatar}
          alt="avatar"
          width={52}
          height={50}
          className="rounded-full"
        />
        <h1 className="cursor-pointer p-5 w-[623px] font-[500] py-[18.5px]">
          {user.profile.firstName + " " + user.profile.lastName}
        </h1>
      </div>
    </div>
  );
}
