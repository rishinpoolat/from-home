import CakeCard from '../../components/CakeCard/CakeCard';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './singleShop.css';

const SingleShop = () => {
  return (
    <div className='singleshop'>
      <img src="https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" className="singleshop-banner-img" />
      <div className="singleshop-title">
        <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZSUyMHNob3AlMjBsb2dvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" className="singleshop-logo" />
        <div className="singleshop-title-text">
          <h1>Cake Story</h1>
          <h3>Calicut</h3>
        </div>
        </div>

        <div className="singleshop-body">
          <p className="singleshop-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati laboriosam soluta quod quam ea porro asperiores culpa pariatur dolorum natus hic explicabo et, ab quisquam ex eius? Voluptatibus, sed corporis</p>
          <h3>Available Cakes</h3>
          <div className="singleshop-menu">
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
            <CakeCard/>
          </div>
          <h3 className='singleshop-rating'>Ratings</h3>
          <div className="singleshop-review">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
          </div>
        </div>
    </div>
  );
}

export default SingleShop;
