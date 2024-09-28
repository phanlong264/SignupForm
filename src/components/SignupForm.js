import React from 'react';
import './SignupForm.css'; // CSS file for the form

const SignupForm = () => {
  return (
    <div className="signup-form">
      <h2>Đăng Ký</h2>
      <input type="text" placeholder="Số điện thoại" className="input-field" />
      <input type="password" placeholder="Mật khẩu" className="input-field" />
      <input type="password" placeholder="Nhập lại mật khẩu" className="input-field" />
      <button className="signup-button">Đăng Ký</button>  
      <p>Đã có tài khoản? <a href="#">Đăng nhập</a></p>
    </div>
  );
};

export default SignupForm;
