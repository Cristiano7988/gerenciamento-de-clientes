import './Button.css';

export const Button = ({ href, children}) => {
  return <a
    href={href}
    className="btn"
    children={children}
  />
}
