import { useState } from "react";
import ElementButton from "../components/ElementButton";
import type { ElementData, ElementType } from "../components/ElementButton";
import ElementModal from "../components/ElementModal";
import { elements } from "../data/element";
import { colorTipoDefault, typeToBackgroundColor } from "../data/elementTypeColors";

const ELEMENT_TYPES: ElementType[] = [
  "Alkali metals",
  "Alkaline earth metals",
  "Lanthanides",
  "Actinides",
  "Transition metals",
  "Other metals",
  "Metalloids",
  "Other nonmetals",
  "Halogens",
  "Noble gases",
];

function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [highlightType, setHighlightType] = useState<ElementType | null>(null);

  const handleClose = () => {
    setSelectedElement(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-3 px-2 py-4 sm:py-6">
        {/* Grid simple (por ahora) */}
  <div className="w-full max-w-full overflow-auto touch-pan-x touch-pan-y md:flex md:justify-center">
   <div className="relative w-max min-w-full md:min-w-0 md:mx-auto">
    <div
      className="z-20 mb-2 flex w-full items-center gap-1 overflow-x-auto whitespace-nowrap rounded md:absolute md:mb-0 md:flex-wrap md:justify-center md:overflow-visible md:whitespace-normal md:left-[58px] md:top-2 md:w-[926px]"
    >
      {ELEMENT_TYPES.map((type) => {
        const isActive = highlightType === type;

        return (
          <button
            key={type}
            type="button"
            onClick={() => setHighlightType((current) => (current === type ? null : type))}
            className="shrink-0 rounded border px-2 py-[2px] text-[10px] font-medium transition"
            style={{
              backgroundColor: typeToBackgroundColor[type] ?? colorTipoDefault,
              color: "#0f172a",
              borderColor: isActive ? "#0f172a" : "#475569",
              boxShadow: isActive ? "0 0 12px rgba(250, 204, 21, 0.9)" : "none",
            }}
          >
            {type}
          </button>
        );
      })}
    </div>

    <h1 className="mb-2 text-center text-4xl font-bold leading-none text-slate-800/90 whitespace-nowrap md:absolute md:mb-0 md:left-[180px] md:top-[78px] md:z-10 md:pointer-events-none md:text-6xl">
      Periodic Table
    </h1>
  <div
    className="grid gap-[2px]"
    style={{
      gridTemplateColumns: "repeat(18, 56px)",
      gridAutoRows: "64px",
      minWidth: 18 * 56,
    }}
  >
    {elements.map((el) => {
      const visualRow = el.vPeriod ?? el.period;
      const gridRow = visualRow >= 8 ? visualRow + 1 : visualRow;

      return (
        <div
          key={el.number}
          style={{
            gridColumn: el.vGroup ?? el.group,
            gridRow,
          }}
        >
          <ElementButton
            element={el}
            onClick={() => setSelectedElement(el)}
            isHighlighted={highlightType !== null && el.type === highlightType}
          />
        </div>
      );
    })}
  </div>
  </div>
</div>
       {/* Modal */}
      <ElementModal
        isOpen={selectedElement !== null}
        element={selectedElement}
        onClose={handleClose}
      />
       

    
          
    </div>
  )
}

export default PeriodicTable
