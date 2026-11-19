import module1 from "./fiches/module-1-comprendre-reglement.fr.json";
import module2 from "./fiches/module-2-obligations-entites.fr.json";
import module3 from "./fiches/module-3-iicb.fr.json";
import module4 from "./fiches/module-4-cert-ue.fr.json";
import module5 from "./fiches/module-5-incidents-crises.fr.json";
import module6 from "./fiches/module-6-echeances-redaction.fr.json";
import english1 from "./fiches/module-1-understanding-regulation.en.json";
import english2 from "./fiches/module-2-entity-obligations.en.json";
import english3 from "./fiches/module-3-iicb.en.json";
import english4 from "./fiches/module-4-cert-eu.en.json";
import english5 from "./fiches/module-5-incidents-crises.en.json";
import english6 from "./fiches/module-6-deadlines-drafting.en.json";

const frenchModules = [module1, module2, module3, module4, module5, module6];
export default frenchModules;


export const readingModulesByLanguage = {
  fr: frenchModules,
  en: [english1, english2, english3, english4, english5, english6],
};
