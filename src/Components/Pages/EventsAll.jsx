import { Button } from "antd";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EventsAll = ({ event }) => {
  const { name, location, description, date, img } = event;
  return (
    <div style={{ backgroundColor: "#89CFF0", padding: "12px" }}>
      <img style={{ width: "100%", height: "300px" }} src={img} alt="#" />
      <h1>{name}</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontWeight: "bold", marginBottom: "12px" }}>
          Location: {location}
        </p>
        <p>{date}</p>
      </div>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Link to="/events/:id">
          <Button type="primary">See Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default EventsAll;
