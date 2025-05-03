"use client";
import React, { useState } from "react";

function PostUi() {
  const [posts, setPosts] = useState([]);
  const [inputPost, setInputPost] = useState('')
  async function getPosts() {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();
    setPosts(data);
  }
  async function addpost() {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({ title: inputPost }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setInputPost("");
getPosts()
  }
  async function delPost(id) {
        await fetch("http://localhost:3000/posts", {
          method: "DELETE",
          body: JSON.stringify({ id }),
        });
     
        getPosts();
  }
  async function updatepost(id, newTitle) {
    setInputPost(title)
      await fetch(`http://localhost:3000/posts`, {
        method: "PUT",
        body: JSON.stringify({ id, title: newTitle }),
        headers: {
        "Content-Type": "application/json",
        },
      });
      
      getPosts();
    }
  return (
    <div>
      <button
        onClick={() => {
          getPosts();
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 m-5"
      >
        Get All Posts
      </button>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="flex items-center justify-between bg-gray-100 p-3 m-2 rounded shadow"
          >
            <h1 className="text-lg font-medium">{post.title}</h1>
            <button
              className="text-gray-500 hover:text-red-600 text-xl font-bold px-2"
              onClick={() => updatepost(post.id,post.title)}
            >
              updatepost{" "}
            </button>
            <button
              className="text-gray-500 hover:text-red-600 text-xl font-bold px-2"
              onClick={() => delPost(post.id)}
            >
              ×{" "}
            </button>
          </div>
        );
      })}
      <div>
        <input
          value={inputPost}
          onChange={(e) => {
            setInputPost(e.target.value);
          }}
          type="text"
          placeholder="Enter post Title"
          className="m-4"
        />
        <button
          onClick={() => {
            addpost();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 m-5"
        >
          Create Post
        </button>
      </div>
    </div>
  );
}

export default PostUi;
