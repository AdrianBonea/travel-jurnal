import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import data from "./data";

export default function App() {
  const info = data.map((item) => <Hero key={item.id} {...item} />);
  return (
    <div>
      <Header />
      <div className="grid place-content-center gap-10 pt-32">
        {info}
        <div />
      </div>
    </div>
  );
}
