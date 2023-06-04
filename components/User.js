import Image from "next/image";
import avatar from "../public/avatar.png";

export default function User({ single }) {
  return (
    <div className="">
      <div className="flex justify-center">
        <div>
          <Image
            src={avatar}
            alt="avatar"
            width={156}
            height={138}
            className="rounded-full mt-[27px]"
          />
        </div>
      </div>

      <p className="my-4 font-[500] text-center">@{single.profile?.username}</p>

      <div className="flex justify-center">
        <div>
          <p className="bg-[#DBDBDB] w-[304px] h-[87px] p-2 border border-[#6C6C6C] text-sm rounded my-[30px]">
            {single?.Bio}
          </p>

          <span className="font-[500] text-xs ">Full Name</span>
          <p className="bg-[#DBDBDB] p-2 border border-[#6C6C6C] text-sm rounded mt-[5px] mb-[15px]">
            {single?.profile?.firstName + " " + single.profile?.lastName}
          </p>

          <span className="font-[500] text-xs ">Job Title</span>
          <p className="bg-[#DBDBDB] p-2 border border-[#6C6C6C] text-sm rounded mt-[5px] mb-[15px]">
            {single?.profile?.email}
          </p>

          <span className="font-[500] text-xs ">Email</span>
          <p className="bg-[#DBDBDB] p-2 border border-[#6C6C6C] text-sm rounded mt-[5px] mb-[15px]">
            {single?.jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
