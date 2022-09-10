import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="">
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/fullcv"}>Full CV</Link>
      <h1>Blog</h1>
    </div>
  );
}
