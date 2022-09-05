import "./propertyList.css";

import React from "react";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch("hotels/countByType");

  const images = [
    "https://i.travelapi.com/hotels/43000000/42680000/42675500/42675438/5338ee5e_z.jpg",
    "https://photo.rever.vn/v3/get/gTLOkvS5FH0LPMlEJ62BXAGkK+mhMz4r8hASZebWXME=/750x500/image.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBRYKw_NZzhBIDFdd5ofSiJuEQxHbQGQGTA&usqp=CAU",
    "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/314234927.jpg?k=e8d0ff333645000b3345bf3c924ebdba3547cd73c362881b16049f5fe5d19701&o=",
    "https://www-vacasa.imgix.net/30217_Morgantown_GA_cabin.jpg?auto=format%2Ccompress&fit=crop&h=1200&ixlib=python-3.2.0&q=45&w=1600&s=0da07cb45cfd3997e683b2e49c1f2ffa",
  ];

  return (
    <div className="pList">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data &&
            images.map((img, index) => (
              <div className="pListItem" key={index}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[index]?.type}</h1>
                  <h2>{data[index]?.count} {data[index]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
