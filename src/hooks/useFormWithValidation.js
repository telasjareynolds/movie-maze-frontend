import { useState, useCallback } from "react";

export function useFormWithValidation() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // For validation add a [errors, setErrors]

  function handleChange(e) {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
    setErrors((errors) => ({
      ...errors,
      [e.target.name]: e.target.validationMessage,
    }));
    setIsValid(e.target.closest("form").checkValidity());
  }

  function resetForm(newValues = {}. newErrors = {}, newIsValid = false) {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }

  return { values, setValues, handleChange, isValid, errors, resetForm};
}
