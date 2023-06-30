import React from "react";
import { CgProfile } from "react-icons/cg";
import { LuStars } from "react-icons/lu";
import Posts from "./Posts";
import NewPostForm from "../components/NewPostForm";

const Home = () => {
  return (
    <div className=" w-[45%] border-r-2 home text-sm">
      <div className=" flex justify-between px-2 items-center py-3 border-b-2">
        <span className="font-bold">Home</span>
        <LuStars className=" text-sky-400 text-xl" />
      </div>
        <NewPostForm />
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Home;
