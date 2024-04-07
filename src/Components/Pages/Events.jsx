import { useDispatch, useSelector } from "react-redux";
import { fetchEvent } from "../../features/events/eventSlice";
import { useEffect } from "react";
import EventsAll from "./EventsAll";
import { Col, Row } from "antd";

const Events = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.event.data);
  useEffect(() => {
    dispatch(fetchEvent());
  }, []);

  console.log(data);

  return (
    <>
      <h1 style={{ fontSize: "36px", textAlign: "center", margin: "20px" }}>
        Events
      </h1>
      <Row style={{ margin: "24px" }} gutter={[12, 12]}>
        {data?.map((event) => (
          <Col key={event.id} xs={24} sm={24} md={12} lg={6}>
            {" "}
            <EventsAll event={event}></EventsAll>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Events;
