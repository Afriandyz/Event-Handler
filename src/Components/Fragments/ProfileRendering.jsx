import React from "react";

const person = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export default function ProfileRendering() {
  const chemist = person.filter((person) => {
    return person.profession === "chemist";
  });

  const everyone = person.filter((person) => {
    return person.profession !== "chemist";
  });

  return (
    <div className="container px-3 py-2">
      <h1 className="text-xl font-bold">Scientist</h1>
      <div>
        {chemist.map((people) => {
          return (
            <div
              key={people.id}
              className="w-full max-w-sm bg-slate-400 mb-3 p-3 rounded-md"
            >
              <p>Name : {people.name}</p>
              <p>profesion : {people.profession}</p>
              <p>Accommplishment : {people.accomplishment}</p>
            </div>
          );
        })}
      </div>
      <h1>Everyone</h1>
      <div>
        {everyone.map((people) => {
          return (
            <div
              key={people.id}
              className="w-full max-w-sm bg-slate-400 mb-3 p-3 rounded-md"
            >
              <p>Name : {people.name}</p>
              <p>profesion : {people.profession}</p>
              <p>Accommplishment : {people.accomplishment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
