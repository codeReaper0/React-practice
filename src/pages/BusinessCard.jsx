import React from "react";
import Avatar from "../assets/images/avatar.jpg";

function BusinessCard() {
  return (
    <div className="bg-[#1C1C1C] w-screen h-full py-10">
      <div className="bg-[#23252C] max-w-xl mx-auto py-11">
        <main className="max-w-[317px] mx-auto rounded-t-[10px] overflow-hidden">
          <img
            src={Avatar}
            alt="avatar"
            className="w-full h-[317px] object-cover mb-5"
          />
        </main>
      </div>
    </div>
  );
}

export default BusinessCard;
