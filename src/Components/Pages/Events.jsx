import { useDispatch, useSelector } from "react-redux";
import { fetchEvent, removeEvent } from "../../features/events/eventSlice";
import { useEffect } from "react";

const Events = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.event.data);
  useEffect(() => {
    dispatch(fetchEvent());
  }, []);

  console.log(data);

  return (
    <>
      <h1>Events</h1>
      <div>
        {/* {data.isLoading ? (
          <h1>Loading.....</h1>
        ) : (
          data?.data?.map((event) => {
            return <p key={event.id}>{event.name}</p>;
          })
        )} */}
        {data?.map((event) => (
          <div
            style={{ width: "300px", margin: "20px", padding: "10px" }}
            key={event.id}
          >
            <h2>{event.name}</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Location: {event.location}</p>
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "orange",
                  fontWeight: "bolder",
                  border: "none",
                }}
                onClick={() => dispatch(removeEvent(event.id))}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
