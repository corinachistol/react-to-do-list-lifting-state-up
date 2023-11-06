import React, { useState } from "react";

export function ToDoItem({ text, onChecked, id }) {
  return (
    <div
      onClick={() => {
        onChecked(id);
      }}
    >
      <li>{text}</li>
    </div>
  );
}

//nu putem transmite starea catre parinte,
// export function ToDoItem({ text }) {
//   const [isLineThrough, setLineThrough] = useState(false);

//   function handleClick() {
//     setLineThrough((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isLineThrough ? "line-through" : "none" }}>
//         {text}
//       </li>
//     </div>
//   );
// }
