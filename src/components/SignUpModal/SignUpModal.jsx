import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignUpModal.css";
import React from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function SignUpModal({
  handleModalClose,
  handleRegistration,
  isOpen,
  buttonText,
  openSignInModal,
}) {
  // how to use the hook
  const { values, handleChange, errors } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(
      values.username,
      values.email,
      values.password
    );
  };

  return (
    <ModalWithForm
      title="Sign Up"
      handleModalClose={handleModalClose}
      buttonText={buttonText}
      name="signup"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email *{" "}
        <input
          name="email"
          className="modal__input"
          id="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          minLength={2}
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password *{" "}
        <input
          className="modal__input"
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <label className="modal__label">
        Userame *{" "}
        <input
          name="username"
          className="modal__input"
          id="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={values.name}
          minLength={2}
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>
      <button
        type="button"
        className="modal__btn-login"
        onClick={openSignInModal}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
}

export default SignUpModal;
