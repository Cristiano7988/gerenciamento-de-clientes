import { useState, useEffect } from "react";
import "./style.css";

export const TextInput = ({ placeholder, onChange = () => {}, defaultValue = "" }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return <input
    type="text"
    placeholder={placeholder}
    onChange={e => setValue( e.target.value )}
    className="text-input"
    value={value}
  />
}
