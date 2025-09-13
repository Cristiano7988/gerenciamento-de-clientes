import "./style.css";

export const Button = ({ href, children, className = "btn"}) => {
  return <a
    href={href}
    className={className}
    children={children}
  />
}
