import "./style.css";

export const Title = ({ h = 1, children}) => {
  const Tag = h >= 1 && h <= 6 ? `h${h}` : "span";
  return <Tag className="title" children={children} />
}
