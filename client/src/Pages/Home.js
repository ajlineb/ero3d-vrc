import React from "react";
import data from "../utils/images";
import Authors from "../components/Carousel";
import gumData from "../utils/gumRoadItems";

export default function Home() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">List of Future/To come projects</h2>
        <p>Current list of Commisions:</p>
        <p>
          <span className="italic font-bold text-indigo-400">Paus</span> - in
          progress
        </p>
        <p>
          <span className="italic font-bold text-blue-400">DawnStar</span>
        </p>
        <p>
          <span className="italic font-bold text-pink-600">Foxy</span>
        </p>
        <p>
          <span className="italic font-bold text-green-400">SilentWhisp</span>
        </p>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Collage of Images</h2>
        {data.map((d) => {
          return (
            <div id={d.id} className="collage">
              <h4>{d.name}</h4>
              <picture>
                <source srcSet={d.src} type="image/webp"></source>
                <source srcSet={d.src2} type="image/webp"></source>
                <img src={d.src2} alt={d.alt}></img>
              </picture>
              <p>{d.description}</p>
            </div>
          );
        })}
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Items By Me!</h2>
        <p>
          Contact me directly for a{" "}
          <span className="text-purple-500 font-bold underline">discount</span>{" "}
          on price!
        </p>
        <Authors data={gumData} />
      </div>
    </div>
  );
}
