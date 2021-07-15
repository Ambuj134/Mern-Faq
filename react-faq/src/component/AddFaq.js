import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const AddFaq = () => {
  let history = useHistory();
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
    remark: "",
  });

  const { question, answer, remark } = faq;

  const handleChange = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/faqs/create", faq);

    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Create Faq</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your question"
              name="question"
              value={question}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your answer"
              name="answer"
              value={answer}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your remark"
              name="remark"
              value={remark}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-warning btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFaq;
