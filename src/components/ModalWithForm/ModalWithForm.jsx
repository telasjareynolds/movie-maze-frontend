import "./ModalWithForm.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function ModalWithForm({
  children,
  name,
  buttonText,
  title,
  isOpen,
  handleModalClose,
  onSubmit,
  showSubmitButton = true,
}) {
  function handleOverlayClick(e) {
    if (e.target.classList.contains("modal_opened")) {
      handleModalClose();
    }
  }

  const { isValid } = useFormWithValidation({});

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleModalClose}
          type="button"
          className="modal__close-btn"
        />
        <form
          className="modal__form"
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          {showSubmitButton && (
            <button
              type="submit"
              className="modal__submit-btn"
              disabled={isValid}
            >
              {buttonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
