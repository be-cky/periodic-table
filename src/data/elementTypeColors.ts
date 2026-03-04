import type { ElementType } from "../components/ElementButton";

const colorTipoAlkaliMetals = "#FFC692";
const colorTipoAlkalineEarthMetals = "#FFE092";
const colorTipoLanthanides = "#D3FF92";
const colorTipoActinides = "#B9FF92";
const colorTipoTransitionMetals = "#ECFF92";
const colorTipoOtherMetals = "#FFF992";
const colorTipoMetalloids = "#92FF9F";
const colorTipoOtherNonmetals = "#ac92ff";
const colorTipoHalogens = "#f992ff";
const colorTipoNobleGases = "#92e0ff";

export const colorTipoDefault = "#f8fafc";

export const typeToBackgroundColor: Record<ElementType, string> = {
  "Alkali metals": colorTipoAlkaliMetals,
  "Alkaline earth metals": colorTipoAlkalineEarthMetals,
  Lanthanides: colorTipoLanthanides,
  Actinides: colorTipoActinides,
  "Transition metals": colorTipoTransitionMetals,
  "Other metals": colorTipoOtherMetals,
  Metalloids: colorTipoMetalloids,
  "Other nonmetals": colorTipoOtherNonmetals,
  Halogens: colorTipoHalogens,
  "Noble gases": colorTipoNobleGases,
};
