import { useState, useEffect } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    setValues(initialState);
  }, []);

  const handleInputChange = ({ target }) => {
    
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, setValues];
};