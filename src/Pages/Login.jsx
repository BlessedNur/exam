import React, { useContext, useState } from "react";
import "./Login.css";
import Footer from "../Components/Navbar/Footer";
import { users } from "../database/Users";
import { formContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import NavTwo from "../Components/NavTwo";
export default function Login() {
  const [product, currentUser, setCurrentUser] = useContext(formContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    users.find((user) => {
      if (user.userName === username && user.password === password) {
        setCurrentUser(user.firstName);
        navigate("/");
      } else {
        setErrorMessage("User does not exist");
      }
    });
  };

  return (
    <>
      <NavTwo />
      <section className="form">
        <form onSubmit={handleSubmit} target="_blank" method="post">
          <section class="header-form">
            <h2>welcome back</h2>

            <h1>Login in to Your Account</h1>
          </section>
          <fieldset>
            <p class="p-one">
              <label for="Email">Email Address</label>

              <input
                type="Username"
                name="Username"
                id="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. tchalla&commat;wakanda.gov"
                autoComplete="on"
                autoFocus
                required
              />
              <svg
                aria-hidden="true"
                width="19"
                focusable="false"
                data-prefix="far"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-envelope fa-fw"
              >
                <path
                  fill="#183153"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  class=""
                ></path>
              </svg>
            </p>
            <p class="p-two">
              <label for="Password">Password</label>
              <input
                type="Password"
                name="Password"
                id="Password"
                placeholder="*******p"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <svg
                aria-hidden="true"
                focusable="false"
                width="18"
                data-prefix="far"
                data-icon="lock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-lock fa-fw"
              >
                <path
                  fill="#183153"
                  d="M144 128v64H304V128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H96zM48 256V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16z"
                  class=""
                ></path>
              </svg>
            </p>
            <div className="error">{errorMessage}</div>
            <fieldset class="remember">
              <p>
                <a href="#0">Already have account?</a>
              </p>
            </fieldset>
            <button>
              <span>Login</span>{" "}
            </button>
          </fieldset>
        </form>
      </section>
    </>
  );
}
