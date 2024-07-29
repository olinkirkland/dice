/**
 * This script creates a JSON in the tiles folder
 * to describe the available tiles
 */

import { readdirSync, writeFileSync } from 'fs';

const fileNames = [];
const directoryPath = 'public/tiles';

const files = readdirSync(directoryPath);
files.forEach((file) => {
  fileNames.push(file);
});

const nestedObject = fileNames.reduce((acc, fileName) => {
  // Remove the file extension and split by underscore
  const [prefix, color, direction] = fileName.replace('.png', '').split('_');

  // Construct the nested structure
  if (!acc[prefix]) acc[prefix] = {};
  if (!acc[prefix][color]) acc[prefix][color] = {};
  acc[prefix][color][direction] = fileName;

  return acc;
}, {});

const nestedObjectString = JSON.stringify(nestedObject, null, 2);
writeFileSync('src/assets/tiles-index.json', nestedObjectString);
