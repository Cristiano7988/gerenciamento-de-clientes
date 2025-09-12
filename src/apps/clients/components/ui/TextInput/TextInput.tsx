import { useState } from 'react'
import './TextInput.css';

export const TextInput = ({ placeholder }) => {
  const [value, setValue] = useState('');

  return <input
    type="text"
    placeholder={placeholder}
    onChange={e => setValue( e.target.value )}
    className="text-input"
    value={value}
  />
}
