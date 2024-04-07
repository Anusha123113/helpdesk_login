import React from "react";

function Signup() {
  return (
    <div className="register-container">
      {/* Background image (optional) */}
      <img
        src="backgroundimg1.jpg"
        alt="Background Image"
        className="background-image"
      />

      <div className="register-box">
        <div className="header">
          <img src="logo1.jpg" alt="College Logo" className="logo" />
          <h1 className="college-name">JNTUGV</h1>
        </div>
        <form className="register-form">
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            RegisterRRRRR
          </button>
        </form>
        <div className="text-center mt-3">
          <p>Already have an account?</p>
          <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
