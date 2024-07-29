import { loadImage } from './utils/image-util';

const MAX_HEIGHT_MAP_INDEX = 2;
export const SNAP_SEGMENTS = 5;
const heights = Array.from(
  { length: SNAP_SEGMENTS + 1 },
  (_, i) => i / SNAP_SEGMENTS
);

export async function getRandomHeightMap(options: {
  width: number;
  height: number;
}): Promise<number[][]> {
  const heightMapIndex = Math.floor(Math.random() * MAX_HEIGHT_MAP_INDEX) + 1;
  // Get it from the path, should be a 2D array of shades between 0 and 1
  const path = `./height-maps/${heightMapIndex}.png`;
  console.log(`Loading height map from ${path}`);
  const heightMapImage: HTMLImageElement = await loadImage(path);

  // Create a canvas to draw the image
  const canvas = document.createElement('canvas');
  canvas.width = options.width;
  canvas.height = options.height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Could not get 2D context from canvas');
  }

  // Draw the image onto the canvas
  ctx.drawImage(heightMapImage, 0, 0, options.width, options.height);

  // Extract the pixel data
  const imageData = ctx.getImageData(0, 0, options.width, options.height);
  const data = imageData.data;

  // Convert pixel data to 2D array of grayscale values between 0 and 1
  const heightMap: number[][] = [];
  for (let y = 0; y < options.height; y++) {
    const row: number[] = [];
    for (let x = 0; x < options.width; x++) {
      const index = (y * options.width + x) * 4;
      const red = data[index];
      const green = data[index + 1];
      const blue = data[index + 2];
      // Calculate the grayscale value (0-255) using the luminosity method
      const gray = 0.299 * red + 0.587 * green + 0.114 * blue;
      // Normalize to a value between 0 and 1
      row.push(gray / 255);
    }
    heightMap.push(row);
  }

  return heightMap.map((row) => row.map((value) => snapHeight(value)));
}

function snapHeight(value: number): number {
  let closest = heights[0];
  let minDiff = Math.abs(value - closest);
  for (const height of heights) {
    const diff = Math.abs(value - height);
    if (diff < minDiff) {
      minDiff = diff;
      closest = height;
    }
  }

  return closest;
}
