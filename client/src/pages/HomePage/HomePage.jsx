import ShopCard from "../../components/Shops/ShopCard/ShopCard";
import Loading from "../../components/Loading/Loading";
import CakeCard from "../../components/CakeCard/CakeCard";
import "./homepage.css";
import Slider from "../../components/Slider/Slider";

export default function HomePage({ shops, cakes }) {
  return !shops.shops.length ? (
    <Loading />
  ) : (
    <div className="df fd-c">
      <Slider />
      <div className="home-main df fd-c">
        <header className="home-header">
          <h1>Top Trending Cakes</h1>
          <div className="homepage-trending df">
            {cakes?.cakes?.map((cake) => (
              <div className="home-header-card bs-0" key={cake._id}>
                <CakeCard cake={cake} />
              </div>
            ))}
          </div>
        </header>
        <h1>Cake Shops at Calicut</h1>
        <div className="home-shops df">
          {shops.shops.map((shop) => (
            <div key={shop._id}>
              <ShopCard shop={shop} />
            </div>
          ))}
        </div>
      </div>
      <button className="home-right-drag-button">
        <i className="fas fa-less-than"></i>
      </button>
    </div>
  );
}