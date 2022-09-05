import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <div className="siDescTop">
          <h1 className="siTitle">{item.name}</h1>
          <div className="siLocation">
            <span className="siAddress">{item.address}</span>
            <span className="siDistance">{item.distance}m from center</span>
          </div>
        </div>
        <span className="siDescription">{item.desc}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <div>{item.rating}</div>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
