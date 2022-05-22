import { readFile, access } from 'fs/promises';
import { constants } from 'fs';

const renderFromFile = async(filePath) => {
  try {
    await access(filePath, constants.R_OK);
  } catch {
    throw new Error(`${filePath} does not exist or is not readable`);
  }
  const div = document.createElement('div');
  div.innerHTML = await readFile(filePath);
  document.querySelector('body').appendChild(div);
  return document;
}

export const renderFromString = (string) => {
  const div = document.createElement('div');
  div.innerHTML = string;
  document.querySelector('body').appendChild(div);
  return document;
}

beforeEach(() => {
  document.body.innerHTML = '';
})

export default renderFromFile;