import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-black border-b-4 border-yellow-600">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
        <input
          type="text"
          placeholder="search..."
          className="w-[200px] p-2 bg-transparent outline-none text-white"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        {/* <div className="rounded-full w-7 h-7 flex items-center  justify-center bg-white"></div> */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center  justify-center relative ">
          👷🏾
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-sm ">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium text-white">Doe</span>
          <span className="text-[10px] text-white text-right">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
