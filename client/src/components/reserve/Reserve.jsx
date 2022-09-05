import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchConext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).setUTCHours(0,0,0,0));
      date.setDate(date.getDate() + 1);
    }
    return list;
  };
  
  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);
  const isAvaiable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };
  const [selectedRooms, setSelectedRooms] = useState([]);
  const handleSelectRoom = (e) => {
    const selected = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      selected
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });

          return res.data;
        })
      );
      setOpen(false);
      alert("Book success");
      // navigate("/home")
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="reserve">
      <div className="reserveContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="close"
          onClick={() => setOpen(false)}
        />
        <span>Select your room: </span>
        {data?.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="room">
              <div className="rSelectRooms">
                {item.roomNumbers?.map((roomNumber, index) => (
                  <div key={index}>
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelectRoom}
                      disabled={!isAvaiable(roomNumber)}
                      className="checkBox"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div>
          <button className="rButton" onClick={handleClick}>
            Reserve now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
