import React, { useState } from "react";
import "./Form.css";
import Table from "../Table/Table";
import dotenv from "dotenv";

dotenv.config();

function Form() {
  const [values, setValues] = useState({ season: "", amount: "", id: "" });
  const [repayments, setRepayments] = useState([]);
  const [myId, setMyId] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    console.log(e.target.value);
    let { name, value } = e.target;
    setValues({ ...values, [name]: Number(value) });
    // fetchServices(values.id);
  };

  const handleID = e => {
    e.preventDefault();
    setMyId(e.target.value);
    // fetchServices(e.target.value);
    let id = e.target.value;
    console.log("handle id oo", e.target.value);
    let uri = `http://192.168.8.116:9091/api/v1/customers/${id}`;
    // fetchServices(uri);
    fetch(uri)
      .then(data => data.json())
      .then(data => setRepayments(data));
  };

  const handleCheck = e => {
    e.preventDefault();
    console.log(values);
    console.log(process.env);
    let uri = `localhost:9091/api/v1/customers/${values.id}/check`;
    const data = { seasonId: values.season, amount: values.amount };
    fetch(uri, { mode: "no-cors", method: "POST", body: data })
      .then(data => data.json())
      .then(resp => {
        console.log(resp);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="parent">
        <br />
        <br />
        <div className="inputField">
          <form onSubmit={handleSubmit}>
            <div>
              <label>select name</label>
              <select
                className="custom-select"
                placeholder="choose seasons"
                id="inputGroupSelect03"
                name="id"
                aria-label="Example select with button addon"
                onChange={handleID}
                value={myId}
              >
                <option selected>select name</option>
                <option value="1">Fred Barasa</option>
                <option value="2">Imelda Kundu</option>
                <option value="3">Leah Kundu</option>
                <option value="4">Beatrice Wafula Machuma</option>
                <option value="5">John Juma Shitoshe</option>
                <option value="7">Donald Masika</option>
                <option value="8">Bilasio Masinde</option>
                <option value="9">Peter Masinde</option>
                <option value="10">Francis S. Misiko</option>
                <option value="11">Peter Wechuli Nakitare</option>
                <option value="12">Mwanaisha Nekesa</option>
                <option value="13">John Nyongesa</option>
              </select>
            </div>

            <label for="basic-url">
              <h6>Amount</h6>
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend"></div>
              <input
                type="number"
                className="form-control"
                id="basic-url"
                placeholder="amount"
                name="amount"
                aria-describedby="basic-addon3"
                value={values.amount}
                onChange={handleChange}
              />
            </div>

            <label for="basic-url">
              <h6>Season</h6>
            </label>
            <div className="input-group mb-3">
              <select
                className="custom-select"
                placeholder="choose seasons"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                onChange={handleChange}
                name="season"
                value={values.season}
              >
                <option selected>choose season</option>
                <option value="0">0</option>
                <option value="110">110</option>
                <option value="120">120</option>
                <option value="130">130</option>
                <option value="140">140</option>
                <option value="150">150</option>
                <option value="160">160</option>
                <option value="170">170</option>
                <option value="180">180</option>
              </select>
            </div>

            <div className="btns">
              <button type="button" className="btn btn-primary">
                PAY
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCheck}
              >
                CHECK
              </button>
            </div>
          </form>
        </div>
      </div>
      <Table data={repayments} />
    </>
  );
}

export default Form;
