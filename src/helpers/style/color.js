export function applyOpacity(color, opacity) {
  // Check if the color is in RGB format
  if (color.startsWith("rgb(")) {
    // Extract the RGB values
    const rgbValues = color.slice(4, -1).split(",").map(Number);

    // Ensure opacity is between 0 and 1
    opacity = Math.max(0, Math.min(opacity, 1));

    // Return the modified RGB color with opacity
    return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${opacity})`;
  }

  // Check if the color is in HEX format
  if (color.startsWith("#")) {
    // Convert HEX to RGB
    const hex = color.slice(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Ensure opacity is between 0 and 1
    opacity = Math.max(0, Math.min(opacity, 1));

    // Return the modified HEX color with opacity
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  // If the color format is not recognized, return the original color
  return color;
}
