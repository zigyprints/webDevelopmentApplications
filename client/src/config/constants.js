import { colourwheel, logoShirt, stylishShirt, filepicker } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: colourwheel,
  },
  {
    name: "filepicker",
    icon: filepicker,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
