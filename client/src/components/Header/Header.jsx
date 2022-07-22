// import { useEffect } from "react";
// import { useState } from "react";
import "./header.css";
import cook from "../../assets/cooking.svg";
const Header = () => {
  // const [index, setIndex] = useState(0)

  const data = [
    "Birthday Celebrations ? ",
    "Having an Anniversory",
    "Craving something sweet?",
  ];

  // useEffect(() => {
  //   const intervalId = setInterval(() => setIndex( index => index + 1 ), 3000);
  //   return () => clearTimeout(intervalId);
  // },[])

  return (
    <header className="header df">
      <div className="header-left df fd-c ai-c jcc">
        <h1 className="mb-1">{data[0]}</h1>
        <h2 className="mb-1">Taste the best bite from your neighbourhood</h2>
        <div className="df">
          <input
            className="input"
            type="text"
            placeholder="Enter your Location"
          />
          <button className="active-button">Find Shops</button>
        </div>
      </div>
      <div className="header-right"></div>
    </header>
  );
};

export default Header;
