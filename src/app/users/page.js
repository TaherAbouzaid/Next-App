"use client";

import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";

// export const metadata = {
//   title: "Users",
//   description: "this Users page",
// };
function Users() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setusers(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className=" mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-gray-500">{user.email}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => redirect(`/users/${user.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
