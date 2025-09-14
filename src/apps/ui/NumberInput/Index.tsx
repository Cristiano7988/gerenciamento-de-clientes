import { useState, useEffect } from "react";
import "./style.css";

export const NumberInput = ({ placeholder, required = false, name = "", className = "", onChange = () => {}, defaultValue = "", type = "text", step = "", min = ""}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    onChange(value, name);
  }, [value]);

  return <input
    type={type}
    name={name}
    required={required}
    step={step}
    min={min}
    placeholder={placeholder}
    onChange={e => setValue( e.target.value )}
    className={"number-input " +  className}
    value={value}
  />
}
