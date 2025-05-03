import { notFound, redirect } from "next/navigation";
import React from "react";
async function back() {
  "use server";
  redirect("/users");
}
export async function generateMetadata({ params }) {
  const id = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id.userId}`
  );
  let user = await res.json();
  return {
    title: user.name
  };

}
async function Details({ params }) {
  const p = await params;
  // try {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${p.userId}`
  );
  const user = await res.json();
  console.log(user);
  // } catch (err) {
  //   notFound()
  // }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-4 border">
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">@{user.username}</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-1">Address</h3>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
          <p className="text-sm text-gray-500">
            Geo: Lat {user.address.geo.lat}, Lng {user.address.geo.lng}
          </p>
        </div>
      </div>
      <form action={back}>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Back
        </button>
      </form>
    </div>
  );
}

export default Details;
