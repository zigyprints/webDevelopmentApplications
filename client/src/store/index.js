import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "grey",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./nikelogo.png",
  fullDecal: "./nikelogo.png",
});
export default state;
