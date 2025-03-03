import React, { useState, useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "./style.css"; // External CSS file for styling

const CaptchaDemo = () => {
  const [userCaptcha, setUserCaptcha] = useState("");
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    loadCaptchaEnginge(6); // Load captcha with 6 random characters
  }, []);   

  const handleValidate = () => {
    setIsValid(validateCaptcha(userCaptcha));
  };

  const handleReload = () => {
    loadCaptchaEnginge(6); // Reload captcha
    setUserCaptcha("");
    setIsValid(null);
  };

  return (
    <div className="container">
      <div className="captcha-box">
        <h2 className="title">CAPTCHA Demo</h2>
        <div className="captcha-row">
          <LoadCanvasTemplate />
          <button onClick={handleReload} className="reload-button">
            Reload Captcha
          </button>
        </div>
        <input
          type="text"
          placeholder="Enter CAPTCHA"
          value={userCaptcha}
          onChange={(e) => setUserCaptcha(e.target.value)}
          className="captcha-input"
        />
        <button onClick={handleValidate} className="validate-button">
          Validate
        </button>
        {isValid === true && <p className="success">✅ CAPTCHA matched!</p>}
        {isValid === false && (
          <p className="error">❌ CAPTCHA did not match. Try again.</p>
        )}
      </div>
    </div>
  );
};

export default CaptchaDemo;
