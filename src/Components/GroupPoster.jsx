import React from "react";
import Poster from "./Poster";

const GroupPoster = () => {
  const names = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8346914/pexels-photo-8346914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Pot Samnang",
      detail: "this is a good iphone",
      price: "$50",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/14979020/pexels-photo-14979020/free-photo-of-close-up-shot-of-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sok San",
      detail: "this is a good iphone",
      price: "$50",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1647978/pexels-photo-1647978.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Pot Samnang",
      detail: "this is a good iphone",
      price: "$50",
    },
  ];

  const filtername = names.filter((sf) => {
    return sf.name === "Pot Samnang";
  });

  return (
    <div>
      {names.map((s) => {
        return <Poster produce={s} key={s.id} />;
      })}
    </div>
  );
};

export default GroupPoster;
