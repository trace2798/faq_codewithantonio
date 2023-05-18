"use client";
import React, { useState } from "react";
import { accordianData } from "./data";
import AccordianItem from "./AccordianItem";

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
        <div className="inline-flex items-center gap-2">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl lg:text-4xl p-5 font-bold">
            Few of Our Significant projects
          </h1>
        </div>

        <div className="lg:w-2/3">
          {accordianData.map((data, index) => {
            return (
              <AccordianItem
                title={data.title}
                key={index}
                open={index === open}
                name={data.name}
                name2={data.name2}
                name3={data.name3}
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
