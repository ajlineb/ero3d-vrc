import React from "react";
import data from "../utils/images";

export default function Friends() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">Blender Tips</h2>
        <p>helpful Blender tips</p>
        <p>helpful Blender tips</p>
        <p>helpful Blender tips</p>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Unity Tips</h2>
        <p>Helpful unity tips</p>
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">General Tips</h2>
        <p>helpful Blender general tips</p>
      </div>
    </div>
  );
}