/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: MyLabelProps) => JSX.Element;
