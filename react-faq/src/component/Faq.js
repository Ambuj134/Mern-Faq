import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Faqs from "./Faqs";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadFaq();
  }, []);

  const loadFaq = async () => {
    const res = await axios.get("http://localhost:5000/api/faqs");
    // console.log(res);
    setFaqs(res.data);
  };
  const deleteFaq = async (id) => {
    await axios.delete(`http://localhost:5000/api/faqs/delete/${id}`);

    loadFaq();
  };

  return (
    <>
      <section className="container-center">
        <h1 style={{ alignSelf: "center" }}>Friquently asked question</h1>
        <div>
          <Link className="btn-primary" to="/faqs/create">
            Add User
          </Link>
        </div>
        {faqs.map((faq, index) => {
          return (
            <div key={faq._id}>
              <p style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
                {show ? "➖" : "➕"}
              </p>
              <h3>{faq.question}</h3>
              {show && <h4>{faq.answer}</h4>}
              {show && <h5>{faq.remark}</h5>}
              <Link to={`/faqs/update/${faq._id}`}>
                <button
                  style={{ borderRadius: "30%", backgroundColor: "yellow" }}
                >
                  Edit
                </button>
              </Link>

              <button
                onClick={() => deleteFaq(faq._id)}
                style={{ borderRadius: "30%", backgroundColor: "purple" }}
              >
                delete
              </button>
            </div>
          );
        })}
        )
      </section>
    </>
  );
};

export default Faq;
