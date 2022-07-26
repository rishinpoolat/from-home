import {RiDeleteBin6Fill} from "react-icons/ri";
import {MdEdit} from "react-icons/md";
import "./cakeCard.css";

const CakeCard = ({cake}) => {
  return (
    <div className="admin-cakecard df ai-c br bd-0 mb-1 jc-sb">
      <img src={cake?.image} alt="" className="admin-cakecard-img"/>
      <span className="admin-cakecard-span ai-c">{cake?.name}</span>
      <div className="df">
        <button className="admin-cakecard-button"><MdEdit/></button>
        <button className="admin-cakecard-button"><RiDeleteBin6Fill/></button>
      </div>
    </div>
  );
}

export default CakeCard;