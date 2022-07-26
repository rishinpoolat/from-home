import "./header.css";
const Header = () => {

  return (
    <header className="header df">
      <div className="header-left df fd-c ai-c jcc">
      <div className="header-title mb-1">
        <h1>Having Birthday ?</h1>
      </div>
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
