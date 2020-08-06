import hexRgb from "hex-rgb";
import color from "alphach";

export const hexToRgb = (hex: string): string => {
  const rgb = hexRgb(hex);

  return rgb.alpha
    ? `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${rgb.alpha})`
    : `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
};

export const addAlpha = (rgb: string, alpha: number): string => {
  return color(rgb, alpha);
};
