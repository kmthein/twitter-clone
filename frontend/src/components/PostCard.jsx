import React from "react";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { BsDot, BsHeart, BsChevronDown } from "react-icons/bs";
import { LuShare } from "react-icons/lu";

const PostCard = ({ id, text, img, comment, repost, love, share }) => {
  return (
    <div className="border-b-2 pb-2 ">
      <div className=" flex justify-between">
        <div className=" flex mt-2 gap-1 pl-2">
          <div className=" w-[45px]">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              alt="profile"
              className=" object-cover w-[35px] max-w-[35px] h-[35px] rounded-full object-center"
            />
          </div>
          {
            img ?
            <div className="">
            <div className=" flex items-center">
              <h3 className=" font-bold">David</h3>
              <span className=" font-normal text-gray-500 ml-1">
                @Sktch_ComdedyFan
              </span>
              <BsDot className=" text-gray-500" />
              <span className="text-gray-500">3m</span>
            </div>
            <div className="">
              <span className=" text-sm">{text}</span>
            </div>
          </div> :
                <div className="">
                    <div className=" flex items-center">
                      <h3 className=" font-bold">David</h3>
                      <span className=" font-normal text-gray-500 ml-1">
                        @Sktch_ComdedyFan
                      </span>
                      <BsDot className=" text-gray-500" />
                      <span className="text-gray-500">3m</span>
                    </div>
                    <div className="">
                      <span className=" text-sm">{text}</span>
                    </div>
                  </div>
          }

        </div>
        <div className=" mr-5 mt-2">
          <BsChevronDown />
        </div>
      </div>
      {img && (
        <div className=" mt-2 ml-14 mr-2">
          <img
            src={img}
            alt="img"
            className=" rounded-lg border-0 max-w-[100%] max-h-[520px]"
          />
        </div>
      )}
      <div className=" ml-14 my-3 flex gap-[130px]">
        <div className=" flex items-center gap-[3px]">
          <BiMessageRounded />
          <span>{comment.length || ""}</span>
        </div>
        <div className=" flex items-center gap-[4px]">
          <BiRepost className=" text-xl text-black/70" />
          <span>{repost.length || ""}</span>
        </div>
        <div className=" flex items-center gap-[4px]">
          <BsHeart />
          <span>{love.length || ""}</span>
        </div>
        <div className=" flex items-center gap-[4px]">
          <LuShare />
          <span>{share.length || ""}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
