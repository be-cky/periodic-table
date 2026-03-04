import React, { useEffect } from "react";
import type { ElementData } from "./ElementButton";
import AtomAnimation from "./AtomAnimation";

const COLOR_BOTON_SALIR = "#b92b2b";

type Props = {
  isOpen: boolean;
  element: ElementData | null;
  onClose: () => void;
};

const ElementModal: React.FC<Props> = ({ isOpen, element, onClose }) => {

  
  useEffect(() => {

    // Cerrar con tecla Escape
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Si no está abierto o no hay elemento, no renderiza nada
  if (!isOpen || !element) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:p-6"
      onClick={onClose} // click fuera cierra
      role="dialog"
      aria-modal="true" //bloquea interacción con el fondo
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-xl bg-white p-5 pr-16 md:p-8 md:pr-20"
        onClick={(e) => e.stopPropagation()} 
        // evita cerrar al click dentro, sino se propaga al div padre
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 md:right-6 md:top-6 flex h-9 w-9 items-center justify-center rounded-md text-xl leading-none text-white transition hover:brightness-110 active:brightness-95"
          style={{ backgroundColor: COLOR_BOTON_SALIR }}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold">
              {element.name} ({element.symbol})
            </h2>
            <p className="mt-2 text-base text-slate-700">Atomic Number: {element.number}</p>
            <p className="text-base text-slate-700">
              Atomic Weight: {element.atomicWeight ?? "No disponible"}
            </p>
            <p className="text-base text-slate-700">
              Category: {element.type ?? "No disponible"}
            </p>

            <div className="mt-5 text-sm leading-relaxed text-slate-800">
              <p>{element.information ?? "Information not available yet for this element."}</p>
            </div>
          </div>

          <div className="order-3 lg:order-2 shrink-0 w-full lg:w-[420px] h-[340px] lg:h-[420px] flex items-center justify-center overflow-visible">
            <AtomAnimation atomicNumber={element.number} size={360} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementModal;