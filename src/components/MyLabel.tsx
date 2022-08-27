import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Label comentario
   */
  label: string;
  /**
   * AllCaps en false
   */
  allCaps?: boolean;
  /**
   * Primary, Secondary o Tertiary
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Size comentario
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Color de fuente personalizado
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "no label",
  size = "normal",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: `${fontColor}` }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};


export default MyLabel;