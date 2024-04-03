import React from 'react';
import { Link } from 'react-router-dom';
import './try.css';

const LoginPage = () => {
  const login = () => {
    // Implement login functionality
    console.log('Login clicked');
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <div className="image-container">
              <table>
                <tbody className="tablepicture">
                  <tr>
                    <td>
                      <img
                        src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                        alt="description of the image"
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td>
                      <img
                        src="https://res.cloudinary.com/talend/image/upload/q_auto/v1700581361/qlik/testing/glossary/Qlik_Logo_Trademark_2_Color_Positive_RGB_2_itwa1t_cibcft.svg"
                        alt=""
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button className="btn solid" onClick={login}>
              <Link to="/DataBaseSelection">Login</Link>
            </button>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3></h3>
            <h3></h3>
          </div>
          <img src="./img/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
