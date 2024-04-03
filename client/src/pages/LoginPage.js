import React from 'react';
import { Link } from 'react-router-dom';
import './try.css';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            {/* Your form content */}
          </form>
          {/* Modify the button to use Link */}
          <Link to="/database-selection" className="btn solid">Login</Link>
        </div>
      </div>
      <div className="panels-container">
        {/* Your panel content */}
      </div>
    </div>
  );
};

export default LoginPage;
