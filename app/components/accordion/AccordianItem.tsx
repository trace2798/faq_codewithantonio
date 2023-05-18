"use client";
import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface AccordianItemProps {
  open?: any;
  toggle?: any;
  title: any;
  name?: any;
  name2?: any;
  name3: any;
}

const AccordianItem: React.FC<AccordianItemProps> = ({
  open,
  toggle,
  title,
  name,
  name2,
  name3
}) => {
  return (
    <div className="pt-[10px] shadow-md border-b-2 border-indigo-500">
      <div
        className="cursor-pointer items-center justify-between flex px-[50px] py-[25px]"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold hover:text-blue-700 font-satoshiBold">{title}</p>
        <div className="text-[30px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white px-[50px] pb-[20px] mb-6 text-gray-500 sm:text-lg md:mb-8">
          <p className=" font-ranadeRegular">{name}</p>
          <p className="mt-2 font-ranadeRegular">{name2}</p>
          <p className="mt-2 font-ranadeRegular">{name3}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default AccordianItem;
