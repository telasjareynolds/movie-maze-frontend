import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignUpSuccessfulModal.css";

function SignUpSuccessfulModal({ openSignInModal, isOpen, handleModalClose }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      handleModalClose={handleModalClose}
      name="successful-register"
      isOpen={isOpen}
      showSubmitButton={false}
    >
      <button
        type="button"
        className="register__success-btn"
        onClick={openSignInModal}
      >
        Sign in
      </button>
    </ModalWithForm>
  );
}

export default SignUpSuccessfulModal;
