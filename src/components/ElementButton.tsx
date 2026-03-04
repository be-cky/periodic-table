import React from "react";
import { colorTipoDefault, typeToBackgroundColor } from "../data/elementTypeColors";

export type ElementType =
  | "Alkali metals"
  | "Alkaline earth metals"
  | "Lanthanides"
  | "Actinides"
  | "Transition metals"
  | "Other metals"
  | "Metalloids"
  | "Other nonmetals"
  | "Halogens"
  | "Noble gases";

export type ElementData = {
  number: number;
  symbol: string;
  name: string;
  information?: string;
  atomicWeight?: number;
  type?: ElementType;

  // posiciones “reales”
  group: number;  // 1..18 (columna)
  period: number; // 1..7  (fila)

  // posiciones “visuales” opcionales (para lantánidos/actínidos abajo)
  vGroup?: number;
  vPeriod?: number;
};
//Es como un struct^^
//Las cosas de dentro son llamadas propiedades
//El export es para poder usarlo en otras

type Props = {
  element: ElementData;
  onClick?: () => void;
  isHighlighted?: boolean;
};


const ElementButton: React.FC<Props> = ({ element, onClick, isHighlighted = false }) => {
  const backgroundColor = element.type
    ? typeToBackgroundColor[element.type]
    : colorTipoDefault;

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative w-full h-full border rounded-lg p-[2px] pt-[10px] text-center hover:bg-gray-100 transition flex flex-col items-center justify-center gap-[1px] overflow-hidden"
      style={{
        backgroundColor,
        boxShadow: isHighlighted ? "0 0 12px rgba(250, 204, 21, 0.95), 0 0 24px rgba(250, 204, 21, 0.55)" : undefined,
        transform: isHighlighted ? "scale(1.03)" : undefined,
        zIndex: isHighlighted ? 2 : 1,
      }}
    >
      <div className="absolute top-[2px] right-[3px] text-[8px] leading-none">{element.number}</div>
      <div className="text-lg font-bold leading-none">{element.symbol}</div>
      <div className="text-[8px] leading-tight w-full break-all">{element.name}</div>
    </button>
  );
};

export default ElementButton;