import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data.find((item) => item.id === +id)));
  }, [id]);

  return (
    <div style={{ margin: "24px" }}>
      <div className="textcenter" style={{ margin: "auto" }}>
        <img
          className="image"
          style={{ width: "600px", borderRadius: "12px" }}
          src={datas?.img}
          alt=""
        />
      </div>
      <div style={{ padding: "24px" }}>
        <h1 className="margin_bottom">{datas?.name}</h1>
        <b className="margin_bottom">Time: {datas?.time}</b>
        <p className="margin_bottom">Date: {datas?.date}</p>
        <p className="margin_bottom">Location: {datas?.location}</p>
        <article className="margin_bottom">{datas?.description}</article>
        <iframe
          className="margin_bottom"
          src={datas?.src}
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default EventDetails;
