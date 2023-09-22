import { useState } from "react";

function useValidate() {
  const [error, setError] = useState();

  function validate(product) {
    
    if (product.name === "") {
      setError("All fields are required");
      return false;
    }

    console.log(isNumber(product.price))
    // check if price is number
    if (!isNumber(product.price)) {
      setError("Price should be number");
      return false;
    }

    return true;
  }

  return [error, setError, validate];
}

function isNumber(value) {
  const pattern = /^\d*$/;
  return pattern.test(value);
}

export { useValidate }

