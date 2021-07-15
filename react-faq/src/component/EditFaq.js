import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditFaq = () => {
  let history = useHistory();
  const { id } = useParams();
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
    remark: "",
  });

  const { question, answer, remark } = faq;
  const handleChange = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadFaq();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(faq);
    const res = await axios.put(
      `http://localhost:5000/api/faqs/update/${id}`,
      faq
    );
    console.log(res.data);
    history.push("/");
  };

  const loadFaq = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/faqs/getOne/${id}`,
      faq
    );
    console.log(res.data);
    setFaq(res.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
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
              name="text"
              value={remark}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-warning btn-block">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditFaq;
