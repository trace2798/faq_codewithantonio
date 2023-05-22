"use client";

import React from "react";
import { MouseEventHandler } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface AccordianItemProps {
  open?: boolean;
  toggle?: MouseEventHandler<HTMLDivElement>;
  title: string;
  description?: string;
  description2?: string;
  description3?: string;
}

const AccordianItem: React.FC<AccordianItemProps> = ({
  open,
  toggle,
  title,
  description,
  description2,
  description3,
}) => {
  return (
    <div className="pt-[10px] shadow-md border-b-2 border-indigo-500">
      <div
        className="cursor-pointer items-center justify-between flex px-[50px] py-[25px]"
        onClick={toggle}
      >
        <p className="text-[22px]  hover:text-blue-700 font-satoshiBold">
          {title}
        </p>
        <div className="text-[30px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open || false}>
        <div className="bg-white dark:bg-slate-700 rounded-xl dark:text-neutral-300 px-[50px] pb-[20px] mb-6 text-gray-500 sm:text-lg md:mb-8">
          <p className=" font-ranadeRegular pt-2">{description}</p>
          <p className="mt-2 font-ranadeRegular">{description2}</p>
          <p className="mt-2 font-ranadeRegular">{description3}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default AccordianItem;
