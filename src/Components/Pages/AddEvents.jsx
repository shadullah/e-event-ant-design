import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../features/events/eventSlice";

const AddEvents = () => {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(addEvent({ text, location }));
  //     console.log(e);
  //     setText("");
  //     setLocation("");
  //   };
  const handleSubmit = () => {
    // e.preventDefault();
    dispatch(addEvent({ text, location }));
    setText("");
    setLocation("");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Event</h1>

      <Form onFinish={handleSubmit} style={{ width: "600px", margin: "auto" }}>
        <Form.Item label="Event Title">
          <Input
            name={text}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write Event Title"
            required
          ></Input>
        </Form.Item>
        <Form.Item label="Location">
          <Input
            name={location}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location of the event"
            required
          ></Input>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Add Event
          </Button>
        </Form.Item>
      </Form>

      {/* <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          required
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input type="submit" />
      </form> */}
    </div>
  );
};

export default AddEvents;
