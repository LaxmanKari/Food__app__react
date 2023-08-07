import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [buttonText, setButtonText] = useState("Increment");
  return (
    <div>
      <h2>Profile Component</h2>
      <h3>Name : {props.name}</h3>
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          count === 0 ? setCount(2) : setCount(0);
          buttonText === "Increment" ? setButtonText("Decrement"): setButtonText("Increment")
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Profile;
