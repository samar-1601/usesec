import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = ({ profilePic,name,image,post,comment_1_girl,comment_2,comment_3 }) => {
	
  return (
		<div className="flex flex-col shadow-xl rounded-lg">
      <div className="bg-white rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img src={profilePic} className="rounded-full w-10 h-10" />
          <div>
            <p className="font-medium ">{name}</p>
            {/* <p className="text-xs text-gray-500">{post.timeStamp}</p> */}
          </div>
        </div>
        <p className="py-1">{post}</p>
      </div>
      {image != null && (
        <div className="relative h-60 md:h-96 bg-white border-2">
          <Image loading="lazy" src={image} objectFit="contain" layout="fill"></Image>
        </div>
      )}
      {/* Footer */}
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex items-center space-x-1  flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp className="h-4"></FiThumbsUp>
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 bg-gray-300 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>

	  <div className="flex items-center space-x-2">
          <img src={profilePic} className="rounded-full w-5 h-5" />
          <div>
            <p className="text-x text-gray-500 rounded-lg bg-gray-100">{comment_1_girl}</p>
          </div>
        </div>
	  <div className="flex items-center space-x-2">
          <img src={profilePic} className="rounded-full w-5 h-5" />
          <div>
            <p className="text-x text-gray-500 rounded-lg bg-gray-100">{comment_2}</p>
          </div>
        </div>
	  <div className="flex items-center space-x-2">
          <img src={profilePic} className="rounded-full w-5 h-5" />
          <div>
            <p className="text-x text-gray-500 rounded-lg bg-gray-100">{comment_3}</p>
          </div>
        </div>

    </div>
  );
};

export default Post;