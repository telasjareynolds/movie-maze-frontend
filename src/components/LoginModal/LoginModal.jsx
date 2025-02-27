import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function LoginModal({
  handleModalClose,
  handleLogin,
  isOpen,
  buttonText,
  openSignUpModal,
}) {
  // how to use the hook
  const { values, handleChange, errors } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values.email, values.password);
  };

  return (
    <ModalWithForm
      title="Log In"
      handleModalClose={handleModalClose}
      buttonText={buttonText}
      name="login"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email *{" "}
        <input
          name="email"
          autoComplete="email"
          className="modal__input"
          id="login-email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          minLength={2}
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password *{" "}
        <input
          className="modal__input"
          name="password"
          id="login-password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
          required
          minLength={8}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <button
        type="button"
        className="modal__btn-signup"
        onClick={openSignUpModal}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
