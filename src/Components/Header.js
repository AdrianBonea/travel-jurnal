import React from "react";

export default function Header() {
  return (
    <nav
      className="bg-[#F55A5A] absolute h-[55px] w-screen
    grid justify-center place-items-center font-Inter"
    >
      <div className="flex flex-row">
        <img src="/earth.png" alt="earth" className="w-6 h-6" />
        <p className="text-[14px] text-white">&nbsp;my travel jurnal.</p>
      </div>
    </nav>
  );
}
