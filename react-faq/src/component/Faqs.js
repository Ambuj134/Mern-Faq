import React, { useState } from "react";
import { Link } from "react-router-dom";
const Faqs = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div style={{ aligin: "center" }}>
        <p style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
          {show ? "➖" : "➕"}
        </p>
        <h3>{question}</h3>
      </div>
      {show && <h4>{answer}</h4>}
      <Link
        className="btn btn-outline-primary m-2"
        to={`/faq/update/${faqs._id}`}
      >
        Edit
      </Link>
      <Link className="btn btn-danger " onClick={() => deleteFaq(faqs._id)}>
        Delete
      </Link>
    </>
  );
};

export default Faqs;
