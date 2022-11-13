import React from "react";
import star from "../../assets/images/star.png";

export default function Card(props) {
  return (
    <div className="w-[175px] text-xs py-10 font-poppins space-y-2">
      <div className="relative w-[175px]">
        <img src={props.img} className="w-full rounded-[9px] max-h-[235px]" />
        <p className="rounded-sm bg-white absolute top-2 left-2 px-2 py-1">
          {props.status}
        </p>
      </div>
      <div className="flex items-center">
        <img src={star} className="h-[14px]" />
        <span>{props.rating}</span>
        <span className="text-[#918e9b]">({props.num}) • </span>
        <span className="text-[#918e9b]">USA</span>
      </div>
      <p className="font-light">{props.details}</p>
      <p className="font-light">
        <span className="font-semibold">From ${props.amount}</span> / person
      </p>
    </div>
  );
}
