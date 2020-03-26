import React, {useState} from "react";
import "./Input.css";

function Input(props) {

const [name, setName] = useState("")

const handleChange = e => {
  setName({
    ...name,
    [e.target.name]: e.target.value
  });
};


  return (
    <>
      <div className="heroDiv d-flex justify-content-center m-4 align-items-center">
        <div>
          <img
            className="d-block mx-auto mb-4"
            src="./assets/schoolable_fav.png"
            alt=""
            width="72"
            height="72"
          ></img>
        </div>
        <div>
          <h1 className="h1 pl-5">Seasonless-Repay</h1>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <h3>{name}</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100">
              <a className="nav-item nav-link" href="#">
                Dashboard
              </a>
              <div className="rightNav ml-auto d-flex">
                <div>
                {/* <label for="basic-url"><h6>Names</h6></label> */}
<div class="input-group mb-3">
    <select class="custom-select" placeholder ="choose seasons" id="inputGroupSelect03" aria-label="Example select with button addon">
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
                </div>
          
              <a className="nav-item nav-link" href="#">
                See all Repayments
              </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
     
    </>
  );
}

export default Input;
