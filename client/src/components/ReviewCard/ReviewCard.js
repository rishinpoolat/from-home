import './reviewCard.css';

const ReviewCard = () => {
  return (
    <div className='reviewcard'> 
      <header className="reviewcard-header">
        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="" className="reviewcard-logo" />
        <h3 className="reviewcard-username">Joanne Mccoy</h3>
      </header>
      <p className='reviewcard-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, est omnis quos dolorem quasi adipisci commodi similique quaerat magnam sit!</p>
      <div className="reviewcard-rating">
        <i class="reviewcard-star fas fa-star"></i>
        <i class="reviewcard-star fas fa-star"></i>
        <i class="reviewcard-star fas fa-star"></i>
        <i class="reviewcard-star fas fa-star"></i>
        <i class="reviewcard-star far fa-star"></i>
      </div>
    </div>
  );
}

export default ReviewCard;
