"use client";

import React, { useState } from "react";

import AccordianItem from "./AccordianItem";
import { accordianData } from "./data";

const Accordian = () => {
  const [open, setOpen] = useState<any | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between lg:mx-[8vw]">
        <div className="items-center gap-2">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl lg:text-4xl p-5 font-bold">
            Will keep on updating when time permits.
          </h1>
        </div>

        <div className="lg:w-2/3">
          {accordianData.map((data, index) => {
            return (
              <AccordianItem
                title={data.title}
                key={index}
                open={index === open}
                description={data.description}
                description2={data.description2}
                description3={data.description3}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordian;
