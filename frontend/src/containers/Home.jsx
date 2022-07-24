import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainImg from "../assets/img/main-banner.png";
import MapsImg from "../assets/img/map.png";
import SubsBackground from "../assets/img/subscription-background.png";
import WaveIcon from "../assets/img/wave-icon.svg";
import Categories from "../components/common/Categories";
import Search from "../components/common/Search";
import Thumbnail from "../components/common/Thumbnail";
import Videos from "../components/common/Videos";
import { fetchCategories } from "../reducks/categories/operations";
import { getCategories } from "../reducks/categories/selectors";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import { fetchPlaces } from "../reducks/places/operations";
import { getPlaces } from "../reducks/places/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);
  const categories = getCategories(selector);
  console.log(places);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFromLocalStorage());
  }, []);

  // console.log(categories);

  return (
    <>
      <main>
        <section class="main-image">
          <img src={MainImg} alt="main-banner" />
          <div className="filter"></div>
          <Search />
        </section>
        <section class="heading" id="wonders">
          <p>Natural Wonders in USA</p>
          <img src={WaveIcon} alt="wave" />
        </section>
        <section class="popular-places">
          {categories.map((category) => (
            <Categories key={category.id} category={category} />
          ))}
        </section>
        <section className="attractions" id="attractions">
          <div class="heading">
            <p>Tourist Attractions in USA</p>
            <img src={WaveIcon} alt="wave" />
          </div>
          <div class="grid-container">
            <div class="grid-items">
              {places.map((place) => (
                <Thumbnail key={place.id} place={place} />
              ))}
            </div>
          </div>
        </section>
        <Videos />
        <section className="subscription">
          <img src={SubsBackground} alt="subscription" />
          <div className="filter"></div>
          <div className="text">
            <div className="discount">
              <p>Get 10% Off on Your Next Travel</p>
              <span>Maximum doscout 1000$ per person</span>
            </div>
            <div className="input">
              <div className="email">
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="subscribe-btn">
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </section>
        <section className="maps">
          <img src={MapsImg} alt="" />
        </section>
      </main>
    </>
  );
};

export default Home;
