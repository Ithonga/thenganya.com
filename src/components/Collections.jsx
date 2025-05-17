import React from "react";
import matatus from "../data";

function Collections() {
  const data = matatus();
  console.log(data);

  return (
    <div className="flex flex-col h-fit">
      <h1 className="text-[40px] p-3 md:px-[42px] font-bold font-playfair">Listed Nganya's</h1>
      <div className="grid sm:grid-cols-3 md:grid-cols-5 p-3 md:p-[42px] gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full h-fit shadow-lg overflow-hidden"
          >
            <div className="flex bg-red-500 h-fit overflow-hidden ">
              <img
                src={item.image || "/android-chrome-512x512.png"}
                alt={item.name}
                className="w-full h-[300px] hover:scale-110 object-cover transition duration-500 ease-in-out"
              />
            </div>
            <div className="flex flex-col px-4 items-start mt-3">
              <h2 className="text-[20px] font-bold text-center">{item.name}</h2>
              <h2 className="text-[15px] text-gray-500 text-center">
                {item.sacco}
              </h2>
              <h2 className="text-[14px] text-center">{item.seats} seater</h2>
              <h2 className="text-[15px] font-semibold text-center mb-4">
                {item.route}
              </h2>
            </div>

            {/* <button className="mt-auto bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              View More
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
