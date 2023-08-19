"use client";

import React, { useState, useEffect } from "react";
// import {addNumber} from '../../hooks/useStorage'
function page() {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  console.log({ user });

  return (
    <div className="container">
      <h2>{user?.name}</h2>
      {/* <button onClick={()=> addNumber("+")} className='px-5 py-2 border rounded-md'>+</button>
        <span>1</span>
        <button onClick={()=>addNumber("-")} className='px-5 py-2 border rounded-md'>-</button> */}
      <button
        onClick={() => {
          localStorage.setItem(
            "user",
            JSON.stringify({ name: "Priyanka", email: "priyanka@gmail.com" })
          );
        }}
        className="px-5 py-2 border rounded-md"
      >
        Set
      </button>
      {/* <span>1</span> */}
      <button
        onClick={() => {
          const name = JSON.parse(localStorage.getItem("user"));
          console.log({ name });
        }}
        className="px-5 py-2 border rounded-md"
      >
        Get
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("name");
        }}
        className="px-5 py-2 border rounded-md"
      >
        Remove
      </button>
    </div>
  );
}

export default page;
