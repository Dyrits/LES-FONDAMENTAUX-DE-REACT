import {
  BuildingBlocksPNG,
  InterfacePNG,
  ConfigurationPNG,
  DataManagementPNG,
} from "./assets";

interface CoreConcept {
  image: string;
  title: string;
  description: string;
}

export const CORE_CONCEPTS: CoreConcept[] = [
  {
    image: BuildingBlocksPNG,
    title: "Composants",
    description:
      "Le bloc de construction de l'interface utilisateur - composez l'interface utilisateur en combinant plusieurs composants.",
  },
  {
    image: InterfacePNG,
    title: "JSX",
    description:
      "Retournez du code HTML (potentiellement dynamique) pour définir le balisage réel qui sera rendu.",
  },
  {
    image: ConfigurationPNG,
    title: "Props",
    description:
      "Rendez les composants configurables (et donc réutilisables) en leur passant des données d'entrée.",
  },
  {
    image: DataManagementPNG,
    title: "État",
    description:
      "Données gérées par React qui, lorsqu'elles sont modifiées, provoquent le re-rendu du composant et la mise à jour de l'interface utilisateur.",
  },
];
