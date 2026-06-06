import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, parse } from 'path';

const inputDir = './public/images';
const files = await readdir(inputDir);
const imagenes = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of imagenes) {
  const { name } = parse(file);
  const input = join(inputDir, file);

  await sharp(input).webp({ quality: 80 }).toFile(join(inputDir, `${name}.webp`));
  console.log(`✓ ${name}.webp`);

  await sharp(input).avif({ quality: 60 }).toFile(join(inputDir, `${name}.avif`));
  console.log(`✓ ${name}.avif`);
}

console.log('Conversión completada.');
