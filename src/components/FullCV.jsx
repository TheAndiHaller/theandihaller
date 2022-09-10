import React from "react";
import { Link } from "react-router-dom";

export default function FullCV() {
  return (
    <div className="">
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/fullcv"}>Full CV</Link>
      <h1>Full CV</h1>
    </div>
  );
}
