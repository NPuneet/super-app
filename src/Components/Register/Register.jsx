import React, { useState } from "react";
import css from "../../Components/Register/Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    isAgreed: false,
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    let isValid = true;
    event.preventDefault();
    let newErrors = {};
    if (!formData.name.trim().length) {
      isValid = false;
      newErrors.name = true;
    }
    if (!formData.username.trim().length) {
      newErrors.username = true;
      isValid = false;
    }
    if (!formData.email.trim().length) {
      newErrors.email = true;
      isValid = false;
    }
    if (!formData.mobile.trim().length) {
      newErrors.mobile = true;
      isValid = false;
    }
    if (!formData.isAgreed) {
      newErrors.isAgreed = true;
      isValid = false;
    }
    if (isValid) {
      localStorage.setItem("UserData", JSON.stringify(formData));
      navigate("/genre");
    }
    setErrors(newErrors);
  };
  return (
    <>
      <div className={css.main}>
        <div className={css.imageSection}>
          <div className={css.textOver}>Discover new things on Superapp</div>
        </div>
        <div className={css.formSection}>
          <div className={css.title}>
            <span className={css.heading}>Super app</span>
            <span className={css.heading2}>Create your new account</span>
          </div>
          <div className={css.forms}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className={errors.name ? `${css.error} ${css.focuss}` : ""}
            />
            {errors.name ? (
              <p className={css.error}>Field is required</p>
            ) : (
              <p className={css.errorPlaceholder}>&nbsp;</p>
            )}
            <input
              type="text"
              name="username"
              placeholder="UserName"
              onChange={handleChange}
              className={errors.username ? `${css.error} ${css.focuss}` : ""}
            />
            {errors.username ? (
              <p className={css.error}>Field is required</p>
            ) : (
              <p className={css.errorPlaceholder}>&nbsp;</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className={errors.email ? `${css.error} ${css.focuss}` : ""}
            />
            {errors.email ? (
              <p className={css.error}>Field is required</p>
            ) : (
              <p className={css.errorPlaceholder}>&nbsp;</p>
            )}
            <input
              type="number"
              name="mobile"
              placeholder="Mobile"
              onChange={handleChange}
              className={errors.mobile ? `${css.error} ${css.focuss}` : ""}
            />
            {errors.mobile ? (
              <p className={css.error}>Field is required</p>
            ) : (
              <p className={css.errorPlaceholder}>&nbsp;</p>
            )}
          </div>
          <div className={css.checkbox}>
            <input
              type="checkbox"
              name="isAgreed"
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.checked });
              }}
            />
            <label> Share my registration data with Superapp </label>
            {errors.isAgreed ? (
              <p className={css.error}>Check this box if you want to proceed</p>
            ) : (
              <p className={css.errorPlaceholder}>&nbsp;</p>
            )}
          </div>
          <div className={css.footer}>
            <button onClick={handleSubmit}>SIGN UP</button>
            <span>
              By clicking on Sign up. you agree to{" "}
              <span style={{ color: "#72DB73" }}>
                Superapp Terms and Conditions of Use
              </span>
            </span>
            <span>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span style={{ color: "#72DB73" }}>Privacy Policy </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
