"use client";
import { AiOutlineCar } from "react-icons/ai";
import Search from "./Search";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md">
      <div className="flex items-center gap-2 text-3xl font-semibold text-red-500">
        <AiOutlineCar size={34} />
        <h1>Carbids</h1>
      </div>
      <Search />
      <div>Login</div>
    </header>
  );
}
