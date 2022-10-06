import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./SignUpModal.module.css";

// 김동현 2022.10.02 setup
const SignUpModal = ({ openModal, setOpenModal }) => {
  const onClick = (e) => {
    if (e.target.id === "modalClose") {
      setOpenModal(!openModal);
    }
  };
  return (
    <>
      <div id="modalClose" className={classes.container} onClick={onClick}>
        <div className={classes.wrap}>
          {/* logo */}
          <div className={classes.logoArea}>
            <img className={classes.logo} src="/image/logo.png" alt="logo" />
          </div>
          {/* auth */}
          <div className={classes.authArea}>
            <form className={classes.authForm}>
              <input name="name" type="text" required placeholder="NAME" />
              <input
                name="nickname"
                type="text"
                required
                placeholder="NICKNAME"
              />
              <input name="email" type="email" required placeholder="EMAIL" />
              <input
                name="password"
                type="password"
                required
                placeholder="PASSWORD"
              />
              <Button className={classes.signInBtn}>회원가입</Button>
            </form>
          </div>
          <button
            id="modalClose"
            type="button"
            onClick={onClick}
            className={classes.closeBtn}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
