import { useDispatch, useSelector } from "react-redux";
import { fetchEvent, updateSearch } from "../../features/events/eventSlice";
import { useEffect, useState } from "react";
import EventsAll from "./EventsAll";
import { Col, Input, Row, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Events = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.event.data);
  const searchQuery = useSelector((state) => state.event.searchQuery);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    dispatch(fetchEvent());
  }, []);
  console.log(data);

  useEffect(() => {
    const filteredEvent = data.filter((eve) =>
      eve.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiltered(filteredEvent);
  }, [data, searchQuery]);

  const handleSearch = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  return (
    <>
      <h1 className="textcenter marginY" style={{ fontSize: "36px" }}>
        Events
      </h1>
      <div className="textcenter">
        <Input
          placeholder="Search events..."
          onChange={handleSearch}
          style={{ marginBottom: "20px", width: "200px" }}
        />
        <SearchOutlined
          style={{ backgroundColor: "#87CEEB", padding: "8px" }}
        />
      </div>
      <Row style={{ margin: "24px" }} gutter={[12, 12]}>
        {filtered.length == 0 ? (
          <Text type="secondary">No events found</Text>
        ) : (
          filtered?.map((event) => (
            <Col key={event.id} xs={24} sm={24} md={12} lg={6}>
              {" "}
              <EventsAll event={event}></EventsAll>
            </Col>
          ))
        )}
      </Row>
      {/* <Row style={{ margin: "24px" }} gutter={[12, 12]}>
        {data?.map((event) => (
          <Col key={event.id} xs={24} sm={24} md={12} lg={6}>
            {" "}
            <EventsAll event={event}></EventsAll>
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default Events;
