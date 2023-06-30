import React, { useState } from "react";
import { TbPhoto } from "react-icons/tb";
import { AiFillCloseCircle, AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { postActions } from "../store/reducer/postReducer";
import { useDispatch, useSelector } from "react-redux";

const NewPostForm = () => {
    const [file, setFile] = useState("");

    const [text, setText] = useState("");

    const fileChangeHandler = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const {posts} = useSelector(state => state.post)

    const dispatch = useDispatch();

    const newPostHandler = () => {
        const id = posts.length + 1;
        const newPost = {
            id,
            text,
            img: file,
            comment: [],
            repost: [],
            love: [],
            share: []
        }
        dispatch(postActions.addPost(newPost));
        setText('');
        setFile('');
    }

  return (
    <>
      <div className=" flex items-center">
        <div className=" ml-2 w-[45px] mt-2">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt="profile"
            className=" object-cover w-[35px] h-[35px] rounded-full object-center"
          />
        </div>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="What's happening?" className=" new-post border-0 w-full" />
      </div>
      {
        file != "" && (
            <div className=" ml-[53px] pt-5 h-[450px]">
            <AiFillCloseCircle className=" text-2xl text-gray-700 cursor-pointer" onClick={() => setFile("")} />
            <img src={file} className=" object-cover object-center pl-2 mt-2 h-[380px] max-w-[97%]" />
          </div>
        )
      }

      <div className=" flex justify-between pl-12 pr-3 pb-3 border-b-[10px] items-center">
        <div className=" flex gap-1">
            <label htmlFor="img" className=" cursor-pointer">
                <TbPhoto className=" text-sky-400 text-xl" />
                <input type="file" id="img" className="file" onChange={fileChangeHandler} />
            </label>
          <AiOutlineFileGif className=" text-sky-400 text-xl" />
          <BsEmojiSmile className=" text-sky-400 text-xl" />
        </div>
        <div>
          <button onClick={newPostHandler} className=" py-2 px-4 rounded-full font-semibold text-white text-xs bg-blue-500">
            Tweet
          </button>
        </div>
      </div>
    </>
  );
};

export default NewPostForm;
