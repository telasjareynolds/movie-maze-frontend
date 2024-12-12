import { useState, useCallback } from "react";

export function useFormWithValidation() {
  const [values, setValues] = useState({
    name: "",
    imageUrl: "",
    weather: "",
    email: "",
    password: "",
    avatarUrl: "",
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

  return { values, setValues, handleChange, isValid, errors};
}