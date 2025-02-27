import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignUpModal.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function SignUpModal({
  handleModalClose,
  isOpen,
  buttonText,
  openSignInModal,
  handleSignUp,
}) {
  // how to use the hook
  const { values, handleChange, errors, resetForm } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(values.email, values.password, values.username);
    resetForm();
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
          autoComplete="email"
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
          autoComplete="current-password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
          minLength={8}
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
          autoComplete="username"
          placeholder="Username"
          onChange={handleChange}
          value={values.username}
          minLength={2}
        />
        {errors.username && (
          <span className="modal__error">{errors.username}</span>
        )}
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
