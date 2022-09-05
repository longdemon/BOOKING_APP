import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "hotels/countByCity?cities=Ha Noi,Da Nang,Ho Chi Minh"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://a.cdn-hotels.com/gdcs/production64/d444/5252610b-aea3-4ea6-a76e-1ede20547e94.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ha Noi</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2019_04_10/da_nang_city.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Da Nang</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://photo-cms-sggp.zadn.vn/Uploaded/2022/dufkxmeyxq/2022_08_29/shutterstockrf718619590_vzsd.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ho Chi Minh</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
