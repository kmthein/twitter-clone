import React from "react";
import { BsTwitter } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { LuHash } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiEnvelope } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { CgProfile, CgMoreO } from "react-icons/cg";

const SideNav = () => {
  return (
    <div className=" sidenav w-[25%] border-r-2">
      <div className=" ">
        <ul className=" ml-[22%]">
          <li className=" pt-2 mb-6">
            <BsTwitter className=" text-sky-400 text-2xl" />
          </li>
          <div className=" flex items-center mb-6 hover:text-sky-400 cursor-pointer">
            <RiHome7Fill className=" text-lg mr-3" />
            <li>Home</li>
          </div>
          <div className=" flex items-center mb-6 hover:text-sky-400 cursor-pointer">
            <LuHash className=" text-lg mr-3 " />
            <li>Explore</li>
          </div>
          <div className=" flex items-center mb-6 hover:text-sky-400 cursor-pointer">
            <IoMdNotificationsOutline className=" text-lg mr-3" />
            <li>Notifications</li>
          </div>
          <div className=" flex items-center mb-6 hover:text-sky-400 cursor-pointer">
            <BiEnvelope className=" text-lg mr-3" />
            <li>Messages</li>
          </div>
          <div className=" flex items-center mb-6 hover:text-sky-400 cursor-pointer">
            <BsBookmark className=" text-lg mr-3" />
            <li>Bookmarks</li>
          </div>
          <div className=" flex items-center mb-6 hover:text-sky-400 cursor-pointer">
            <RiFileList2Line className=" text-lg mr-3" />
            <li>Lists</li>
          </div>
          <div className=" flex items-center mb-6 hover:text-sky-400 cursor-pointer">
          <div className=" w-[30px]">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt="profile"
            className=" object-cover w-[20px] h-[20px] rounded-full object-center"
          />
        </div>
            <li>Profile</li>
          </div>
          <div className=" flex items-center mb-6 hover:text-sky-400 cursor-pointer">
            <CgMoreO className=" text-lg mr-3" />
            <li>More</li>
          </div>
        </ul>
        <div className="flex justify-center">
            <div>
              <button className=" bg-blue-500 rounded-full font-semibold py-3 text-white text-sm px-20">Tweet</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SideNav;
