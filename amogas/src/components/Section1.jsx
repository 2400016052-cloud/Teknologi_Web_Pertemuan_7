import React from "react";

export default function RuangEkspresi() {
  return (
    <div className="border-2 border-blue-300 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-blue-700">
          Souls Room <br />
          <span className="text-gray-800"> Creativity Container & Competitive Souls</span>
        </h1>

        {/* Tag Labels */}
        <div className="flex gap-3 mt-6 flex-wrap">
          <span className="px-4 py-1 rounded-full bg-yellow-200 text-gray-800 font-medium text-sm shadow">
            Roll
          </span>
          <span className="px-4 py-1 rounded-full bg-green-200 text-gray-800 font-medium text-sm shadow">
            Creation
          </span>
          <span className="px-4 py-1 rounded-full bg-blue-200 text-gray-800 font-medium text-sm shadow">
            Parry
          </span>
          <span className="px-4 py-1 rounded-full bg-red-200 text-gray-800 font-medium text-sm shadow">
            Bosses
          </span>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full flex justify-center">
        <img
          src="src/assets/sols.jpg"
          alt="Mahasiswa Berdiskusi"
          className="rounded-xl shadow-lg object-cover w-full max-w-md"
        />
      </div>
    </div>
  );
}
