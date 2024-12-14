import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignOutModal.css";

function SignOutModal({ isOpen, handleModalClose, signOut }) {
  return (
    <ModalWithForm
      title="Would you like to log out"
      handleModalClose={handleModalClose}
      name="logout"
      isOpen={isOpen}
      showSubmitButton={false}
    >
      <button type="button" className="signout-btn" onClick={signOut}>
        Log Out
      </button>
    </ModalWithForm>
  );
}

export default SignOutModal;
