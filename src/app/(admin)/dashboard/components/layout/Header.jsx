import React from "react";
import { BsSearch } from "react-icons/bs";
import { RiFolderSharedLine } from "react-icons/ri";

const Header = (props) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h5>{props.title}</h5>
        <p className="text-[16px]">{props.subTitle}</p>
      </div>
      <div className="flex gap-4 items-center border-b-2 pb-3 pl-2 pr-20 hover:text-secondary w-fit">
        <BsSearch className="text-primary w-5 h-5 hover:text-secondary" />
        <input
          type="text"
          placeholder="Search something"
          className="text-[18px] border-none"
        />
      </div>
      <div className="flex items-center gap-4 hover:text-secondary">
        <h6 className="text-base">VIEW YOUR STORE</h6>
        <RiFolderSharedLine className="text-primary w-6 h-6" />
      </div>
    </div>
  );
};

export default Header;
