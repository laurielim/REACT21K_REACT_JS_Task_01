import React from "react";

let students = [
  {
    name: "Harry",
    house: "Gryffindor",
    year: 4,
  },
  {
    name: "Ginny",
    house: "Gryffindor",
    year: 3,
  },
  {
    name: "Cedric",
    house: "Hufflepuff",
    year: 5,
  },
];

function Card() {
  return students.map((student) => {
    return (
      <div className="card">
        <h3>{student.name}</h3>
        <p>{student.house}</p>
        <p>Year {student.year}</p>
      </div>
    );
  });
}

export default Card;
