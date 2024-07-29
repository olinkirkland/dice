export async function loadImage(path: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = path;
  });
}

export function getColorBetweenColors(
  color1: number,
  color2: number,
  percent: number
): number {
  // Clamp percent between 0 and 1
  if (percent < 0) percent = 0;
  if (percent > 1) percent = 1;

  // Extract RGB components from color1
  let r1 = (color1 >> 16) & 0xff;
  let g1 = (color1 >> 8) & 0xff;
  let b1 = color1 & 0xff;

  // Extract RGB components from color2
  let r2 = (color2 >> 16) & 0xff;
  let g2 = (color2 >> 8) & 0xff;
  let b2 = color2 & 0xff;

  // Calculate the interpolated RGB values
  let r = r1 + (r2 - r1) * percent;
  let g = g1 + (g2 - g1) * percent;
  let b = b1 + (b2 - b1) * percent;

  // Combine the RGB values back into a single color
  return (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b);
}
