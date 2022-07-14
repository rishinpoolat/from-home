import { useState } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import "./recipieCard.css";

const RecipieCard = ({ recipe }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="recipiecard br bs-0 df fd-c">
      <header className="recipiecard-header df">
        <div className="recipie-header-name">
          <span className="recipie-user">@{recipe.userName}</span>
          <h2 className="recipiecard-name">{recipe.name}</h2>
        </div>
      </header>
      <div className="recipie-body df fd-c">
        <div className="recipie-ingridients">
          <h3>Ingrideints</h3>
          <span>{recipe.ingredients}</span>
        </div>
        <div className="recipie-des">
          <h3>Description</h3>
          <p>{recipe.description}</p>
        </div>
      </div>
      <div onClick={() => setLike((prev) => !prev)} className="recipie-bottom">
        {like ? (
          <RiHeartFill className="like-icon" />
        ) : (
          <RiHeartLine className="like-icon" />
        )}
      </div>
    </div>
  );
};

export default RecipieCard;
