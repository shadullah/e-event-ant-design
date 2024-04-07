import { useDispatch, useSelector } from "react-redux";
import { removeEvent } from "../features/events/eventSlice";

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  return (
    <>
      <h1>Events</h1>
      <div>
        {events.map((event) => (
          <div
            style={{ width: "300px", margin: "20px", padding: "10px" }}
            key={event.id}
          >
            <h2>{event.title}</h2>
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
