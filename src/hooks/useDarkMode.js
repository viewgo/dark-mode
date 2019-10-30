import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValues, cb) => {
  const [storedValue, setStoredValue] = useLocalStorage("darkMode");

  const setValue = value => {
    setStoredValue(value);
    // window.localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    storedValue ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
  }, [storedValue]);
  // return [storedValue, setValue];
  return [storedValue, setValue];
};
