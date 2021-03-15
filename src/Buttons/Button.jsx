import React from "react";
import "./Button.css";

// This will create a reuseable button, that can take the place off all of your inputs. The best way of implimenting it is to create a sequentially ordered array and map through the array. This will create however many buttons are in the sequential array, and give them sequential ID's. The only problem with this, is since you have so many buttons, we might need to make them a bit more unique they don't get mixed up for the different instruments, etc. The below code would be put in wherever you want to call in the buttons:

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   return (
//     <>
//       {array.map((button, index) => (
//         <Button button={button} key={index}/>
//       ))}
//     </>
//   );

const Button = (props) => {
  return (
    <div id="checkboxes">
      <input type="checkbox" value={props.button} id={`r${props.button}`} />
      <label className="select-button" htmlFor={`r${props.button}`}></label>
    </div>
  );
};

export default Button;
