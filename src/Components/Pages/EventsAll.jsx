import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const EventsAll = ({ event }) => {
  const { id, name, location, date, img } = event;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${id}`);
  };

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
        <Button onClick={handleClick} type="primary">
          See Details
        </Button>
      </div>
    </div>
  );
};

export default EventsAll;
