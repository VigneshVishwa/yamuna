import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './try.css';

const DatabaseSelection = () => {
  const history = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted');
    // Redirect to profilingORcustom.html or any other route if needed
    history.push('/profilingORcustom');
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signupsec1">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <table>
              <tbody>
                <tr>
                  <td className="tab">
                    <h3>Databases :&emsp;</h3>
                  </td>

                  <td>
                    <div className="dropdowns">
                      <select>
                        <option value="">--select--</option>
                        <option value="option1">Postgres</option>
                        <option value="option2">Oracle</option>
                        <option value="option3">Mysql</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Port :</h3>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="numeric-input"
                      placeholder="Enter port number"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Hostname : </h3>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="numeric-input"
                      placeholder="Enter Host name"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>User :</h3>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="numeric-input"
                      placeholder="Enter port name"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Password :</h3>
                  </td>
                  <td>
                    <input
                      type="password"
                      className="numeric-input"
                      placeholder="Enter port number"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="btn solid">
              Submit
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

export default DatabaseSelection;
