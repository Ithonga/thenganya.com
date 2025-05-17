import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[200px] font-bold font-playfair">404</h1>
      <h6 className="text-3xl font-playfair font-semibold">Page Not Found</h6>
      <Link to={"/home"}>
        <h2 className="text-blue-600 hover:underline">Back to Home</h2>
      </Link>
    </div>
  );
}

export default NotFound;
